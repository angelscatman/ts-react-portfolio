import { useEffect } from 'react';

import { useContentService } from '@/hooks/app/useAppServices';
import type { Locale } from '@/types/ui/locale.types';

const SITE_URL = 'https://angelscatman.me';

type SeoConfig = {
  title: string;
  description: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
  locale: Locale;
  robots?: 'index, follow' | 'noindex, nofollow';
  type?: 'website' | 'article';
};

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.content = content;
}

function removeMeta(selector: string) {
  document.head.querySelector(selector)?.remove();
}

function toAbsoluteUrl(value: string) {
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value;
  }

  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
}

function getCanonicalUrl() {
  return `${SITE_URL}${window.location.pathname}`;
}

export function useDocumentSeo({ title, description, image, jsonLd, locale, robots = 'index, follow', type = 'website' }: SeoConfig) {
  const siteName = useContentService().getSiteContent().brand;

  useEffect(() => {
    const pageTitle = `${title} | ${siteName}`;
    const canonicalUrl = getCanonicalUrl();
    const imageUrl = image ? toAbsoluteUrl(image) : undefined;

    document.documentElement.lang = locale;
    document.title = pageTitle;

    // --- Standard meta ---
    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[name="robots"]', 'name', 'robots', robots);

    // --- Canonical ---
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // --- Open Graph ---
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', type);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteName);
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', locale === 'es' ? 'es_MX' : 'en_US');

    if (imageUrl) {
      upsertMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    } else {
      removeMeta('meta[property="og:image"]');
    }

    // --- Twitter / X card ---
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', imageUrl ? 'summary_large_image' : 'summary');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    if (imageUrl) {
      upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);
    } else {
      removeMeta('meta[name="twitter:image"]');
    }

    const existingStructuredData = document.head.querySelector<HTMLScriptElement>('script[data-page-seo="true"]');

    if (jsonLd) {
      const script = existingStructuredData ?? document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.pageSeo = 'true';
      script.text = JSON.stringify(jsonLd);

      if (!existingStructuredData) {
        document.head.appendChild(script);
      }
    } else {
      existingStructuredData?.remove();
    }
  }, [description, image, jsonLd, locale, robots, siteName, title, type]);
}

import { useEffect } from 'react';

import { useContentService } from '@/hooks/app/useAppServices';

type SeoConfig = {
  title: string;
  description: string;
  image?: string;
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

export function useDocumentSeo({ title, description, image }: SeoConfig) {
  const siteName = useContentService().getSiteContent().brand;

  useEffect(() => {
    const pageTitle = `${title} | ${siteName}`;
    const canonicalUrl = window.location.href.split('?')[0].split('#')[0];

    document.title = pageTitle;

    // --- Standard meta ---
    upsertMeta('meta[name="description"]', 'name', 'description', description);

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
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteName);

    if (image) {
      upsertMeta('meta[property="og:image"]', 'property', 'og:image', image);
    }

    // --- Twitter / X card ---
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', image ? 'summary_large_image' : 'summary');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    if (image) {
      upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);
    }
  }, [description, image, siteName, title]);
}

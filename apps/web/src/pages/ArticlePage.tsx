import { useParams } from 'react-router-dom';

import { ContentLayout } from '@/components/layout/ContentLayout';
import { StatusState } from '@/components/ui/StatusState';
import { useAppContext } from '@/hooks/app/useAppContext';
import { useCopyService, useUiCopyService } from '@/hooks/app/useAppServices';
import { useArticleContent } from '@/hooks/content/useArticleContent';
import { usePayloadArticles } from '@/hooks/content/usePayloadArticles';
import { useDocumentSeo } from '@/hooks/ui/useDocumentSeo';
import { withLocalePath } from '@/lib/localeRouting';
import { localize } from '@/lib/localize';
import { NotFoundPage } from '@/pages/NotFoundPage';

const SITE_URL = 'https://angelscatman.me';

export function ArticlePage() {
  const { slug } = useParams();
  const context = useAppContext();
  const copyService = useCopyService();
  const uiCopyService = useUiCopyService();
  const seoCopy = copyService.getSeoCopy();
  const uiCopy = uiCopyService.getUiCopy();
  const payloadArticles = usePayloadArticles(context.locale);

  const articleManifest = payloadArticles.articles ?? [];
  const manifest = articleManifest.find((m) => m.slug === slug);
  const { content, isLoading } = useArticleContent(slug, context.locale);

  useDocumentSeo({
    title: manifest ? localize(manifest.title, context.locale) : localize(seoCopy.articleNotFound.title, context.locale),
    description: manifest ? localize(manifest.excerpt, context.locale) : localize(seoCopy.articleNotFound.description, context.locale),
    image: manifest?.coverImage,
    jsonLd: manifest
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: localize(manifest.title, context.locale),
          description: localize(manifest.excerpt, context.locale),
          image: `${SITE_URL}${manifest.coverImage}`,
          datePublished: manifest.publishedAt,
          dateModified: manifest.publishedAt,
          mainEntityOfPage: `${SITE_URL}${withLocalePath(`/articles/${manifest.slug}`, context.locale)}`,
          author: {
            '@type': 'Person',
            name: 'Angel Scatman',
            url: SITE_URL,
          },
        }
      : undefined,
    locale: context.locale,
    robots: manifest ? 'index, follow' : 'noindex, nofollow',
    type: 'article',
  });

  if (payloadArticles.isLoading) {
    return <StatusState title={localize(seoCopy.blog.title, context.locale)} description={localize(uiCopy.contentStatus.articleLoading, context.locale)} />;
  }

  if (payloadArticles.error) {
    return <StatusState title={localize(seoCopy.articleNotFound.title, context.locale)} description={localize(uiCopy.contentStatus.articleLoadError, context.locale)} />;
  }

  if (!manifest) {
    return <NotFoundPage />;
  }

  const entry = {
    ...manifest,
    content,
    isLoading,
  };

  return <ContentLayout entry={entry} locale={context.locale} backTo={withLocalePath('/blog', context.locale)} backLabel={localize(seoCopy.blog.title, context.locale)} {...context} />;
}

import { useParams } from 'react-router-dom';

import { ContentLayout } from '@/components/layout/ContentLayout';
import { useAppContext } from '@/hooks/app/useAppContext';
import { useContentService, useCopyService } from '@/hooks/app/useAppServices';
import { useEntryContent } from '@/hooks/content/useEntryContent';
import { useDocumentSeo } from '@/hooks/ui/useDocumentSeo';
import { localize } from '@/lib/localize';
import { NotFoundPage } from '@/pages/NotFoundPage';

const SITE_URL = 'https://angelscatman.me';

export function ArticlePage() {
  const { slug } = useParams();
  const context = useAppContext();
  const contentService = useContentService();
  const copyService = useCopyService();
  const seoCopy = copyService.getSeoCopy();

  const manifest = contentService.getArticleManifest().find((m) => m.slug === slug);
  const { content, isLoading } = useEntryContent('article', slug, context.locale);

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
          mainEntityOfPage: `${SITE_URL}/articles/${manifest.slug}`,
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

  if (!manifest) {
    return <NotFoundPage />;
  }

  const entry = {
    ...manifest,
    content,
    isLoading,
  };

  return <ContentLayout entry={entry} locale={context.locale} backTo="/blog" backLabel={localize(seoCopy.blog.title, context.locale)} {...context} />;
}

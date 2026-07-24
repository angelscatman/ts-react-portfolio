import { useParams } from 'react-router-dom';

import { ContentLayout, type MarkdownContentEntry } from '@/components/layout/ContentLayout';
import { useAppContext } from '@/hooks/app/useAppContext';
import { useContentService, useCopyService } from '@/hooks/app/useAppServices';
import { useEntryContent } from '@/hooks/content/useEntryContent';
import { useDocumentSeo } from '@/hooks/ui/useDocumentSeo';
import { localize } from '@/lib/localize';
import { NotFoundPage } from '@/pages/NotFoundPage';

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
  });

  if (!manifest) {
    return <NotFoundPage />;
  }

  const entry = {
    ...manifest,
    content,
    isLoading,
  };

  return <ContentLayout entry={entry as MarkdownContentEntry} locale={context.locale} backTo="/blog" backLabel={localize(seoCopy.blog.title, context.locale)} {...context} />;
}

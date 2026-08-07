import { useParams } from 'react-router-dom';

import { ContentLayout } from '@/components/layout/ContentLayout';
import { StatusState } from '@/components/ui/StatusState';
import { useAppContext } from '@/hooks/app/useAppContext';
import { useCopyService, useUiCopyService } from '@/hooks/app/useAppServices';
import { usePayloadProjects } from '@/hooks/content/usePayloadProjects';
import { useProjectContent } from '@/hooks/content/useProjectContent';
import { useDocumentSeo } from '@/hooks/ui/useDocumentSeo';
import { withLocalePath } from '@/lib/localeRouting';
import { localize } from '@/lib/localize';
import { NotFoundPage } from '@/pages/NotFoundPage';

const SITE_URL = 'https://angelscatman.me';

export function ProjectPage() {
  const { slug } = useParams();
  const context = useAppContext();
  const copyService = useCopyService();
  const uiCopyService = useUiCopyService();
  const seoCopy = copyService.getSeoCopy();
  const uiCopy = uiCopyService.getUiCopy();
  const payloadProjects = usePayloadProjects(context.locale);

  const projectManifest = payloadProjects.projects ?? [];
  const manifest = projectManifest.find((m) => m.slug === slug);
  const { content, isLoading } = useProjectContent(slug, context.locale);

  useDocumentSeo({
    title: manifest ? localize(manifest.title, context.locale) : localize(seoCopy.projectNotFound.title, context.locale),
    description: manifest ? localize(manifest.excerpt, context.locale) : localize(seoCopy.projectNotFound.description, context.locale),
    image: manifest?.coverImage,
    jsonLd: manifest
      ? {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: localize(manifest.title, context.locale),
          description: localize(manifest.excerpt, context.locale),
          image: `${SITE_URL}${manifest.coverImage}`,
          datePublished: manifest.publishedAt,
          url: `${SITE_URL}${withLocalePath(`/projects/${manifest.slug}`, context.locale)}`,
          author: {
            '@type': 'Person',
            name: 'Angel Scatman',
            url: SITE_URL,
          },
        }
      : undefined,
    locale: context.locale,
    robots: manifest ? 'index, follow' : 'noindex, nofollow',
  });

  if (payloadProjects.isLoading) {
    return <StatusState title={localize(seoCopy.work.title, context.locale)} description={localize(uiCopy.contentStatus.projectLoading, context.locale)} />;
  }

  if (payloadProjects.error) {
    return <StatusState title={localize(seoCopy.projectNotFound.title, context.locale)} description={localize(uiCopy.contentStatus.projectLoadError, context.locale)} />;
  }

  if (!manifest) {
    return <NotFoundPage />;
  }

  const entry = {
    ...manifest,
    content,
    isLoading,
  };

  return <ContentLayout entry={entry} locale={context.locale} backTo={withLocalePath('/', context.locale)} backLabel={localize(seoCopy.work.title, context.locale)} {...context} />;
}

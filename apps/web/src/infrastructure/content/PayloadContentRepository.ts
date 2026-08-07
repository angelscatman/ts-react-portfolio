import type { ArticleContentDocument, CollectionManifestItem, ProjectContentDocument } from '@/types/core/content.types';
import type { Locale } from '@/types/ui/locale.types';

import { PayloadClient } from '../payload/PayloadClient';
import { mapPayloadArticleToContent, mapPayloadArticleToManifestItem, mapPayloadProjectToContent, mapPayloadProjectToManifestItem, type PayloadArticle, type PayloadProject } from './payloadMappers';

export class PayloadContentRepository {
  constructor(private readonly client = new PayloadClient()) {}

  async listProjects(locale: Locale): Promise<CollectionManifestItem[]> {
    const response = await this.client.find<PayloadProject>('projects', {
      depth: 2,
      locale,
      where: {
        status: {
          equals: 'published',
        },
      },
    });

    return response.docs.map((project) => mapPayloadProjectToManifestItem(project, locale));
  }

  async getProjectBySlug(slug: string, locale: Locale): Promise<ProjectContentDocument | undefined> {
    const response = await this.client.find<PayloadProject>('projects', {
      depth: 3,
      limit: 1,
      locale,
      where: {
        slug: {
          equals: slug,
        },
        status: {
          equals: 'published',
        },
      },
    });

    const project = response.docs[0];

    return project ? mapPayloadProjectToContent(project) : undefined;
  }

  async listArticles(locale: Locale): Promise<CollectionManifestItem[]> {
    const response = await this.client.find<PayloadArticle>('articles', {
      depth: 2,
      locale,
      where: {
        status: {
          equals: 'published',
        },
      },
    });

    return response.docs.map((article) => mapPayloadArticleToManifestItem(article, locale));
  }

  async getArticleBySlug(slug: string, locale: Locale): Promise<ArticleContentDocument | undefined> {
    const response = await this.client.find<PayloadArticle>('articles', {
      depth: 3,
      limit: 1,
      locale,
      where: {
        slug: {
          equals: slug,
        },
        status: {
          equals: 'published',
        },
      },
    });

    const article = response.docs[0];

    return article ? mapPayloadArticleToContent(article) : undefined;
  }
}

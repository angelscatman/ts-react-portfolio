import type { ArticleEntry, CollectionManifestItem, ExperienceItem, ProjectEntry, SiteContent } from '@/types/core/content.types';

export type ContentCollectionName = 'projects' | 'articles';

export interface ContentRepository {
  getSiteContent(): SiteContent;
  getExperienceItems(): ExperienceItem[];
  getProjectManifest(): CollectionManifestItem[];
  listProjects(): CollectionManifestItem[];
  getProjectBySlug(slug: string | undefined): ProjectEntry | undefined;
  getArticleManifest(): CollectionManifestItem[];
  listArticles(): CollectionManifestItem[];
  getArticleBySlug(slug: string | undefined): ArticleEntry | undefined;
}

import type { ContentRepository } from '@/domain/content/ContentRepository';
import { staticContentSource } from '@/infrastructure/content/staticContentSource';

export class StaticContentRepository implements ContentRepository {
  getSiteContent() {
    return staticContentSource.site;
  }

  getExperienceItems() {
    return staticContentSource.experienceItems;
  }

  getProjectManifest() {
    return staticContentSource.projectManifest;
  }

  listProjects() {
    return staticContentSource.projectManifest;
  }

  getProjectBySlug(slug: string | undefined) {
    void slug;
    return undefined; // Handled by useEntryContent now
  }

  getArticleManifest() {
    return staticContentSource.articleManifest;
  }

  listArticles() {
    return staticContentSource.articleManifest;
  }

  getArticleBySlug(slug: string | undefined) {
    void slug;
    return undefined; // Handled by useEntryContent now
  }
}

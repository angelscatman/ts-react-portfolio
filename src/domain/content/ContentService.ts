import type { ContentRepository } from '@/domain/content/ContentRepository';

export class ContentService {
  constructor(private readonly repository: ContentRepository) {}

  getSiteContent() {
    return this.repository.getSiteContent();
  }

  getExperienceItems() {
    return this.repository.getExperienceItems();
  }

  getFeaturedProject() {
    const projects = this.repository.listProjects();
    return projects.find((project) => project.featured) ?? projects[0];
  }

  getProjectManifest() {
    return this.repository.getProjectManifest();
  }

  listProjects() {
    return this.repository.listProjects();
  }

  getProjectBySlug(slug: string | undefined) {
    return this.repository.getProjectBySlug(slug);
  }

  getArticleManifest() {
    return this.repository.getArticleManifest();
  }

  listArticles() {
    return this.repository.listArticles();
  }

  getArticleBySlug(slug: string | undefined) {
    return this.repository.getArticleBySlug(slug);
  }
}

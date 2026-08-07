import type { ContentRepository } from '@/domain/content/ContentRepository';

export class ContentService {
  constructor(private readonly repository: ContentRepository) {}

  getSiteContent() {
    return this.repository.getSiteContent();
  }

  getExperienceItems() {
    return this.repository.getExperienceItems();
  }
}

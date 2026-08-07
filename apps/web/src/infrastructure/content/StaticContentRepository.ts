import type { ContentRepository } from '@/domain/content/ContentRepository';
import type { ExperienceItem, SiteContent } from '@/types/core/content.types';

export type ContentSource = {
  experienceItems: ExperienceItem[];
  site: SiteContent;
};

export class StaticContentRepository implements ContentRepository {
  constructor(private readonly source: ContentSource) {}

  getSiteContent() {
    return this.source.site;
  }

  getExperienceItems() {
    return this.source.experienceItems;
  }
}

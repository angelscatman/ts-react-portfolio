import type { ExperienceItem, SiteContent } from '@/types/core/content.types';

export interface ContentRepository {
  getSiteContent(): SiteContent;
  getExperienceItems(): ExperienceItem[];
}

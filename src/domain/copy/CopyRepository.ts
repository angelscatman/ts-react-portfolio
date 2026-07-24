import type { SocialLink } from '@/types/core/content.types';
import type { AboutCopy, BlogCopy, CursorCopy, ErrorsCopy, FooterCopy, NavigationCopy, NotificationsCopy, ResumeCopy, SeoCopy, WorkCopy } from '@/types/core/copy.types';

export interface CopyRepository {
  getNavigation(): NavigationCopy;
  getFooter(): FooterCopy;
  getCursorCopy(): CursorCopy;
  getSeoCopy(): SeoCopy;
  getNotifications(): NotificationsCopy;
  getErrorsCopy(): ErrorsCopy;
  getSocialLinks(): SocialLink[];
  getWorkCopy(): WorkCopy;
  getAboutCopy(): AboutCopy;
  getBlogCopy(): BlogCopy;
  getResumeCopy(): ResumeCopy;
}

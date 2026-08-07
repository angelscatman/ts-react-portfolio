import type { CopyRepository } from '@/domain/copy/CopyRepository';
import type { SocialLink } from '@/types/core/content.types';
import type { AboutCopy, BlogCopy, CursorCopy, ErrorsCopy, FooterCopy, NavigationCopy, NotificationsCopy, ResumeCopy, SeoCopy, WorkCopy } from '@/types/core/copy.types';

export type CopySource = {
  aboutCopy: AboutCopy;
  blogCopy: BlogCopy;
  cursorCopy: CursorCopy;
  errorsCopy: ErrorsCopy;
  footer: FooterCopy;
  navigation: NavigationCopy;
  notifications: NotificationsCopy;
  resumeCopy: ResumeCopy;
  seoCopy: SeoCopy;
  socialLinks: SocialLink[];
  workCopy: WorkCopy;
};

export class StaticCopyRepository implements CopyRepository {
  constructor(private readonly source: CopySource) {}

  getNavigation() {
    return this.source.navigation;
  }

  getFooter() {
    return this.source.footer;
  }

  getCursorCopy() {
    return this.source.cursorCopy;
  }

  getSeoCopy() {
    return this.source.seoCopy;
  }

  getNotifications() {
    return this.source.notifications;
  }

  getErrorsCopy() {
    return this.source.errorsCopy;
  }

  getSocialLinks() {
    return this.source.socialLinks;
  }

  getWorkCopy() {
    return this.source.workCopy;
  }

  getAboutCopy() {
    return this.source.aboutCopy;
  }


  getBlogCopy() {
    return this.source.blogCopy;
  }

  getResumeCopy() {
    return this.source.resumeCopy;
  }
}

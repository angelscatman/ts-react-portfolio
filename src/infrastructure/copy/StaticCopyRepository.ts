import type { CopyRepository } from '@/domain/copy/CopyRepository';
import { staticCopySource } from '@/infrastructure/copy/staticCopySource';

export class StaticCopyRepository implements CopyRepository {
  getNavigation() {
    return staticCopySource.navigation;
  }

  getFooter() {
    return staticCopySource.footer;
  }

  getCursorCopy() {
    return staticCopySource.cursorCopy;
  }

  getSeoCopy() {
    return staticCopySource.seoCopy;
  }

  getNotifications() {
    return staticCopySource.notifications;
  }

  getErrorsCopy() {
    return staticCopySource.errorsCopy;
  }

  getSocialLinks() {
    return staticCopySource.socialLinks;
  }

  getWorkCopy() {
    return staticCopySource.workCopy;
  }

  getAboutCopy() {
    return staticCopySource.aboutCopy;
  }


  getBlogCopy() {
    return staticCopySource.blogCopy;
  }

  getResumeCopy() {
    return staticCopySource.resumeCopy;
  }
}

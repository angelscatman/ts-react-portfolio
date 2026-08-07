import type { CopyRepository } from '@/domain/copy/CopyRepository';

export class CopyService {
  constructor(private readonly repository: CopyRepository) {}

  getNavigation() {
    return this.repository.getNavigation();
  }

  getFooter() {
    return this.repository.getFooter();
  }

  getCursorCopy() {
    return this.repository.getCursorCopy();
  }

  getSeoCopy() {
    return this.repository.getSeoCopy();
  }

  getNotifications() {
    return this.repository.getNotifications();
  }

  getErrorsCopy() {
    return this.repository.getErrorsCopy();
  }

  getSocialLinks() {
    return this.repository.getSocialLinks();
  }

  getWorkCopy() {
    return this.repository.getWorkCopy();
  }

  getAboutCopy() {
    return this.repository.getAboutCopy();
  }


  getBlogCopy() {
    return this.repository.getBlogCopy();
  }

  getResumeCopy() {
    return this.repository.getResumeCopy();
  }
}

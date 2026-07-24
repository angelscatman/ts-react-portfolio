import footerData from '@/content/data/layout/footer.json';
import navigationData from '@/content/data/layout/navigation.json';
import aboutData from '@/content/data/pages/about/manifest.json';
import blogData from '@/content/data/pages/blog/manifest.json';
import errorsData from '@/content/data/pages/errors/manifest.json';
import resumeData from '@/content/data/pages/resume/manifest.json';
import workData from '@/content/data/pages/work/manifest.json';
import cursorData from '@/content/data/shared/cursor.json';
import notificationsData from '@/content/data/shared/notifications.json';
import seoData from '@/content/data/shared/seo.json';
import socialData from '@/content/data/shared/social.json';
import { aboutSchema, blogSchema, errorsSchema, footerSchema, localizedRecordSchema, navigationSchema, notificationsSchema, resumeSchema, seoSchema, socialLinksSchema, workSchema } from '@/domain/copy/copySchemas';
import { StaticJsonTransport } from '@/infrastructure/transport/StaticJsonTransport';

const staticJsonTransport = new StaticJsonTransport();

export const staticCopySource = {
  navigation: staticJsonTransport.read(navigationData, navigationSchema),
  footer: staticJsonTransport.read(footerData, footerSchema),
  cursorCopy: staticJsonTransport.read(cursorData, localizedRecordSchema),
  seoCopy: staticJsonTransport.read(seoData, seoSchema),
  notifications: staticJsonTransport.read(notificationsData, notificationsSchema),
  errorsCopy: staticJsonTransport.read(errorsData, errorsSchema),
  socialLinks: staticJsonTransport.read(socialData, socialLinksSchema),
  workCopy: staticJsonTransport.read(workData, workSchema),
  aboutCopy: staticJsonTransport.read(aboutData, aboutSchema),
  blogCopy: staticJsonTransport.read(blogData, blogSchema),
  resumeCopy: staticJsonTransport.read(resumeData, resumeSchema),
};

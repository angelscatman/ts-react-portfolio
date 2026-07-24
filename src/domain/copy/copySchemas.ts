import { z } from 'zod';

import { socialLinksSchema } from '@/domain/content/contentSchemas';

export const localizedTextSchema = z.object({ es: z.string().min(1), en: z.string().min(1).optional() });

export const navigationSchema = z.object({
  items: z.array(
    z.object({
      to: z.string().min(1),
      label: localizedTextSchema,
      activePaths: z.array(z.string().min(1)),
    }),
  ),
  languageToggle: z.object({ toEnglish: localizedTextSchema, toSpanish: localizedTextSchema }),
  themeToggle: z.object({ toLight: localizedTextSchema, toDark: localizedTextSchema }),
});

export const localizedRecordSchema = z.record(z.string(), localizedTextSchema);
export const footerSchema = z.object({ copyright: localizedTextSchema });

const seoPageSchema = z.object({ title: localizedTextSchema, description: localizedTextSchema });
export const seoSchema = z.object({
  work: seoPageSchema,
  blog: seoPageSchema,
  about: seoPageSchema,
  resume: seoPageSchema,
  notFound: seoPageSchema,
  projectNotFound: seoPageSchema,
  articleNotFound: seoPageSchema,
});

const notificationSchema = z.object({ title: localizedTextSchema, description: localizedTextSchema });
export const notificationsSchema = z.record(z.string(), notificationSchema);

const errorPageSchema = z.object({
  code: z.string().min(1),
  title: localizedTextSchema,
  description: localizedTextSchema,
  actionLabel: localizedTextSchema,
  actionHref: z.string().min(1),
});
export const errorsSchema = z.record(z.enum(['generic', 'forbidden', 'notFound', 'content']), errorPageSchema);

export const workSchema = z.object({
  heroTitle: localizedTextSchema,
  greeting: localizedTextSchema,
  emptyProjectsDescription: localizedTextSchema,
  emptyProjectsTitle: localizedTextSchema,
  name: z.string().min(1),
  tagline: localizedTextSchema,
});

export const aboutSchema = z.object({
  heading: localizedTextSchema,
  hero: z.object({
    title: localizedTextSchema,
    subtitle: localizedTextSchema,
  }),
  intro: z.object({
    paragraphs: z.array(localizedTextSchema).min(1),
    bullets: z.array(localizedTextSchema).min(1),
    contactLine: z.object({
      prefix: localizedTextSchema,
      suffix: localizedTextSchema,
      links: z.array(z.enum(['github', 'linkedin', 'email'])).min(1),
    }),
  }),
  gallerySections: z.array(
    z.object({
      number: z.string().min(1),
      label: localizedTextSchema,
      images: z.array(
        z.object({
          src: z.string().min(1),
          alt: localizedTextSchema,
          cursorText: localizedTextSchema,
          cursorIcon: z.enum(['eye', 'arrow', 'mail', 'message', 'github', 'linkedin', 'none']).optional(),
        }),
      ).min(1),
    }),
  ).min(1),
});

export const blogSchema = z.object({
  heading: localizedTextSchema,
  emptyDescription: localizedTextSchema,
  emptyTitle: localizedTextSchema,
});

export const resumeSchema = z.object({
  name: localizedTextSchema,
  heading: localizedTextSchema,
  download: localizedTextSchema,
  open: localizedTextSchema,
  checking: localizedTextSchema,
  viewerFallback: localizedTextSchema,
  pendingLabel: localizedTextSchema,
  pendingHint: localizedTextSchema,
});

export { socialLinksSchema };

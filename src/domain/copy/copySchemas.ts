import { z } from 'zod';

import {
  localizedTextSchema,
  socialLinkIdSchema,
  socialLinksSchema,
} from '@/domain/content/contentSchemas';
import { cursorIconValues } from '@/lib/cursorIconRegistry';

// Re-export so existing consumers keep working
export { localizedTextSchema };

// ─── Primitive schemas ────────────────────────────────────────────────────────

export const errorPageKindSchema = z.enum(['generic', 'forbidden', 'notFound', 'content']);

// ─── Page schemas ─────────────────────────────────────────────────────────────

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

export const seoPageSchema = z.object({ title: localizedTextSchema, description: localizedTextSchema });
export const seoSchema = z.object({
  work: seoPageSchema,
  blog: seoPageSchema,
  about: seoPageSchema,
  resume: seoPageSchema,
  notFound: seoPageSchema,
  projectNotFound: seoPageSchema,
  articleNotFound: seoPageSchema,
});

export const notificationSchema = z.object({ title: localizedTextSchema, description: localizedTextSchema });
export const notificationsSchema = z.record(z.string(), notificationSchema);

export const errorPageSchema = z.object({
  code: z.string().min(1),
  title: localizedTextSchema,
  description: localizedTextSchema,
  actionLabel: localizedTextSchema,
  actionHref: z.string().min(1),
});
export const errorsSchema = z.record(errorPageKindSchema, errorPageSchema);

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
      links: z.array(socialLinkIdSchema).min(1),
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
          cursorIcon: z.enum(cursorIconValues).optional(),
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

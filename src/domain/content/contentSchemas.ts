import { z } from 'zod';

import { cursorIconValues } from '@/lib/cursorIconRegistry';

// ─── Primitive schemas (exported so types/ can derive with z.infer) ───────────

export const localizedTextSchema = z.object({
  es: z.string().min(1),
  en: z.string().min(1).optional(),
});

export const contentKindSchema = z.enum(['project', 'article']);
export const contentStatusSchema = z.enum(['draft', 'published']);
export const contentLinkTypeSchema = z.enum(['internal', 'external']);
export const socialLinkIdSchema = z.enum(['github', 'linkedin', 'email']);

// ─── Composite schemas ────────────────────────────────────────────────────────

export const contentLinkSchema = z.object({
  label: localizedTextSchema,
  href: z.string().min(1),
  type: contentLinkTypeSchema,
});

export const contentMetaSchema = z.object({
  label: localizedTextSchema,
  value: localizedTextSchema,
});

export const contentSectionSchema = z.object({
  id: z.string().min(1),
  eyebrow: localizedTextSchema,
  title: localizedTextSchema.optional(),
  body: z.array(localizedTextSchema).min(1),
});

export const contentBaseSchema = z.object({
  slug: z.string().min(1),
  status: contentStatusSchema,
  title: localizedTextSchema,
  excerpt: localizedTextSchema,
  coverImage: z.string().min(1),
  coverAlt: localizedTextSchema,
  publishedAt: z.string().date(),
  tags: z.array(localizedTextSchema),
  meta: z.array(contentMetaSchema),
  sections: z.array(contentSectionSchema).min(1),
  links: z.array(contentLinkSchema).optional(),
});

export const projectEntrySchema = contentBaseSchema.extend({
  kind: z.literal('project'),
  year: z.string().min(1),
  role: localizedTextSchema,
  destination: contentLinkSchema,
  featured: z.boolean().optional(),
});

export const articleEntrySchema = contentBaseSchema.extend({
  kind: z.literal('article'),
  readingTime: localizedTextSchema,
  perspective: localizedTextSchema,
  destination: contentLinkSchema,
});

export const collectionManifestItemSchema = contentBaseSchema
  .pick({
    slug: true,
    status: true,
    title: true,
    excerpt: true,
    coverImage: true,
    coverAlt: true,
    publishedAt: true,
  })
  .extend({
    kind: contentKindSchema,
    destination: contentLinkSchema,
    featured: z.boolean().optional(),
  });

export const collectionManifestSchema = z.array(collectionManifestItemSchema);

export const siteContentSchema = z.object({
  brand: z.string().min(1),
  defaultLocale: z.enum(['es', 'en']),
  titles: z.array(localizedTextSchema).min(1),
});

export const socialLinkSchema = z.object({
  id: socialLinkIdSchema,
  label: z.string().min(1),
  href: z.string().min(1),
  ariaLabel: localizedTextSchema,
  cursorIcon: z.enum(cursorIconValues),
});

export const socialLinksSchema = z.array(socialLinkSchema);

// ─── Experience ───────────────────────────────────────────────────────────────

export const experienceItemSchema = z.object({
  year: z.string().min(1),
  title: z.string().min(1),
  role: localizedTextSchema,
});

export const experienceItemsSchema = z.array(experienceItemSchema);

// ─── Entry content (per-locale document schemas) ──────────────────────────────

export const localizedEntryMetaSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

export const entryContentSectionSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1).optional(),
  body: z.array(z.string().min(1)).min(1),
  list: z.array(z.string().min(1)).optional(),
});

const entryContentDocumentBaseSchema = z.object({
  intro: z.array(z.string().min(1)).optional(),
  meta: z.array(localizedEntryMetaSchema).optional(),
  sections: z.array(entryContentSectionSchema).min(1),
  tags: z.array(z.string().min(1)).optional(),
});

export const articleContentSchema = entryContentDocumentBaseSchema.extend({
  perspective: z.string().min(1),
  readingTime: z.string().min(1),
});

export const projectContentSchema = entryContentDocumentBaseSchema.extend({
  role: z.string().min(1),
  year: z.string().min(1),
});

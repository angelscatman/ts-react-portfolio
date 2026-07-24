import { z } from 'zod';

const localizedTextSchema = z.object({
  es: z.string().min(1),
  en: z.string().min(1).optional(),
});

const contentLinkSchema = z.object({
  label: localizedTextSchema,
  href: z.string().min(1),
  type: z.enum(['internal', 'external']),
});

const contentMetaSchema = z.object({
  label: localizedTextSchema,
  value: localizedTextSchema,
});

const contentSectionSchema = z.object({
  id: z.string().min(1),
  eyebrow: localizedTextSchema,
  title: localizedTextSchema.optional(),
  body: z.array(localizedTextSchema).min(1),
});

const contentBaseSchema = z.object({
  slug: z.string().min(1),
  status: z.enum(['draft', 'published']),
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
    kind: z.enum(['project', 'article']),
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
  id: z.enum(['github', 'linkedin', 'email']),
  label: z.string().min(1),
  href: z.string().min(1),
  ariaLabel: localizedTextSchema,
  cursorIcon: z.enum(['eye', 'arrow', 'mail', 'message', 'github', 'linkedin', 'none']),
});

export const socialLinksSchema = z.array(socialLinkSchema);

export const experienceItemsSchema = z.array(
  z.object({
    year: z.string().min(1),
    title: z.string().min(1),
    role: localizedTextSchema,
  }),
);

const localizedEntryMetaSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

const entryContentSectionSchema = z.object({
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

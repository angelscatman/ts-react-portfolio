import { z } from 'zod';

import { portableTextBlockSchema } from './contentBlocks';
import { nullishToUndefined, optionalArraySchema, optionalTextSchema } from './schemaUtils';

export const localizedTextSchema = z.object({
  es: z.string().min(1),
  en: z.string().min(1).optional(),
});

export const contentKindSchema = z.enum(['project', 'article']);
export const contentStatusSchema = z.enum(['draft', 'published']);
export const contentLinkTypeSchema = z.enum(['internal', 'external']);

export const mediaAssetSchema = z.object({
  src: z.string().min(1),
  alt: optionalTextSchema,
  width: z.preprocess(nullishToUndefined, z.number().int().positive().optional()),
  height: z.preprocess(nullishToUndefined, z.number().int().positive().optional()),
});

export const entrySeoSchema = z.object({
  title: optionalTextSchema,
  description: optionalTextSchema,
  image: z.preprocess(nullishToUndefined, mediaAssetSchema.optional()),
  noIndex: z.preprocess(nullishToUndefined, z.boolean().optional()),
});

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
  title: z.preprocess(nullishToUndefined, localizedTextSchema.optional()),
  body: optionalArraySchema(localizedTextSchema).refine((items) => items === undefined || items.length > 0),
  list: optionalArraySchema(z.string().min(1)),
  blocks: optionalArraySchema(portableTextBlockSchema),
}).refine((section) => (section.body && section.body.length > 0) || (section.blocks && section.blocks.length > 0), {
  message: 'Each section must provide body or blocks',
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
  links: optionalArraySchema(contentLinkSchema),
  seo: z.preprocess(nullishToUndefined, entrySeoSchema.optional()),
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
    seo: true,
  })
  .extend({
    kind: contentKindSchema,
    destination: contentLinkSchema,
    featured: z.preprocess(nullishToUndefined, z.boolean().optional()),
  });

export const collectionManifestSchema = z.array(collectionManifestItemSchema);

export const localizedEntryMetaSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

export const entryContentSectionSchema = z.object({
  eyebrow: z.string().min(1),
  title: optionalTextSchema,
  body: optionalArraySchema(z.string().min(1)),
  blocks: optionalArraySchema(portableTextBlockSchema),
  list: optionalArraySchema(z.string().min(1)),
}).refine((section) => (section.body && section.body.length > 0) || (section.blocks && section.blocks.length > 0), {
  message: 'Each section must provide body or blocks',
});

export const entryContentDocumentBaseSchema = z.object({
  intro: optionalArraySchema(z.string().min(1)),
  meta: optionalArraySchema(localizedEntryMetaSchema),
  sections: z.array(entryContentSectionSchema).min(1),
  tags: optionalArraySchema(z.string().min(1)),
  seo: z.preprocess(nullishToUndefined, entrySeoSchema.optional()),
});

export const articleContentSchema = entryContentDocumentBaseSchema.extend({
  perspective: z.string().min(1),
  readingTime: z.string().min(1),
});

export const projectContentSchema = entryContentDocumentBaseSchema.extend({
  role: z.string().min(1),
  year: z.string().min(1),
});

export type LocalizedText = z.infer<typeof localizedTextSchema>;
export type ContentKind = z.infer<typeof contentKindSchema>;
export type ContentStatus = z.infer<typeof contentStatusSchema>;
export type ContentLinkType = z.infer<typeof contentLinkTypeSchema>;
export type MediaAsset = z.infer<typeof mediaAssetSchema>;
export type EntrySeo = z.infer<typeof entrySeoSchema>;
export type ContentLink = z.infer<typeof contentLinkSchema>;
export type ContentMeta = z.infer<typeof contentMetaSchema>;
export type ContentSection = z.infer<typeof contentSectionSchema>;
export type ContentEntry = z.infer<typeof contentBaseSchema> & { kind: ContentKind };
export type ProjectEntry = z.infer<typeof projectEntrySchema>;
export type ArticleEntry = z.infer<typeof articleEntrySchema>;
export type CollectionManifestItem = z.infer<typeof collectionManifestItemSchema>;
export type LocalizedEntryMeta = z.infer<typeof localizedEntryMetaSchema>;
export type EntryContentSection = z.infer<typeof entryContentSectionSchema>;
export type EntryContentDocumentBase = z.infer<typeof entryContentDocumentBaseSchema>;
export type ArticleContentDocument = z.infer<typeof articleContentSchema>;
export type ProjectContentDocument = z.infer<typeof projectContentSchema>;
export type EntryContentDocument = ArticleContentDocument | ProjectContentDocument;

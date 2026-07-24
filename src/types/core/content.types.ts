import type { z } from 'zod';

import type {
  articleContentSchema,
  articleEntrySchema,
  collectionManifestItemSchema,
  contentBaseSchema,
  contentKindSchema,
  contentLinkSchema,
  contentMetaSchema,
  contentSectionSchema,
  contentStatusSchema,
  entryContentSectionSchema,
  experienceItemSchema,
  localizedEntryMetaSchema,
  localizedTextSchema,
  projectContentSchema,
  projectEntrySchema,
  siteContentSchema,
  socialLinkIdSchema,
  socialLinkSchema,
} from '@/domain/content/contentSchemas';

// ─── Primitives ───────────────────────────────────────────────────────────────

export type LocalizedText = z.infer<typeof localizedTextSchema>;

export type ContentKind = z.infer<typeof contentKindSchema>;
export type ContentStatus = z.infer<typeof contentStatusSchema>;

// ─── Content building blocks ──────────────────────────────────────────────────

export type ContentLink = z.infer<typeof contentLinkSchema>;
export type ContentMeta = z.infer<typeof contentMetaSchema>;
export type ContentSection = z.infer<typeof contentSectionSchema>;

// ─── Content entries ──────────────────────────────────────────────────────────

/** Base entry shape (without `kind` discriminant — use ProjectEntry or ArticleEntry when possible). */
export type ContentEntry = z.infer<typeof contentBaseSchema> & { kind: ContentKind };

export type ProjectEntry = z.infer<typeof projectEntrySchema>;
export type ArticleEntry = z.infer<typeof articleEntrySchema>;
export type CollectionManifestItem = z.infer<typeof collectionManifestItemSchema>;

// ─── Entry content documents (per-locale, per-kind) ──────────────────────────

export type LocalizedEntryMeta = z.infer<typeof localizedEntryMetaSchema>;
export type EntryContentSection = z.infer<typeof entryContentSectionSchema>;

/** Discriminated union of article vs. project content documents. */
export type EntryContentDocument =
  | z.infer<typeof articleContentSchema>
  | z.infer<typeof projectContentSchema>;

// ─── Social & experience ──────────────────────────────────────────────────────

export type SocialLinkId = z.infer<typeof socialLinkIdSchema>;
export type SocialLink = z.infer<typeof socialLinkSchema>;
export type ExperienceItem = z.infer<typeof experienceItemSchema>;

// ─── Site ─────────────────────────────────────────────────────────────────────

export type SiteContent = z.infer<typeof siteContentSchema>;

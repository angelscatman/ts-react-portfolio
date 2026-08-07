import { localizedTextSchema } from '@portfolio/content-contract';
import { z } from 'zod';

import { cursorIconValues } from '@/lib/cursorIconRegistry';

export {
  articleContentSchema,
  articleEntrySchema,
  collectionManifestItemSchema,
  collectionManifestSchema,
  contentBaseSchema,
  contentKindSchema,
  contentLinkSchema,
  contentLinkTypeSchema,
  contentMetaSchema,
  contentSectionSchema,
  contentStatusSchema,
  entryContentDocumentBaseSchema,
  entryContentSectionSchema,
  entrySeoSchema,
  localizedEntryMetaSchema,
  localizedTextSchema,
  mediaAssetSchema,
  portableTextBlockSchema,
  portableTextCalloutSchema,
  portableTextColumnBlockSchema,
  portableTextColumnsSchema,
  portableTextCtaSchema,
  portableTextFeatureListSchema,
  portableTextGridSchema,
  portableTextHeadingSchema,
  portableTextImageSchema,
  portableTextListSchema,
  portableTextMetricsSchema,
  portableTextParagraphSchema,
  portableTextQuoteSchema,
  portableTextStyleSchema,
  projectContentSchema,
  projectEntrySchema,
} from '@portfolio/content-contract';

// ─── App-specific primitive schemas ───────────────────────────────────────────

export const socialLinkIdSchema = z.enum(['github', 'linkedin', 'email']);

// ─── App-specific composite schemas ───────────────────────────────────────────

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

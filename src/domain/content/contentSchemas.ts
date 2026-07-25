import { z } from 'zod';

import { cursorIconValues } from '@/lib/cursorIconRegistry';

// ─── Flexible entry blocks ─────────────────────────────────────────────────────

type PortableTextParagraph = {
  type: 'paragraph';
  text: string;
  style?: PortableTextStyle;
};

type PortableTextHeading = {
  type: 'heading';
  variant: 'section' | 'subsection' | 'eyebrow';
  level?: 'h2' | 'h3' | 'h4';
  text: string;
};

type PortableTextImage = {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  style?: PortableTextStyle;
};

type PortableTextQuote = {
  type: 'quote';
  text: string;
  attribution?: string;
  style?: PortableTextStyle;
};

type PortableTextGrid = {
  type: 'grid';
  rows: Array<{
    label: string;
    value: string;
  }>;
  style?: PortableTextStyle;
};

type PortableTextStyle = {
  weight?: 'soft' | 'default' | 'strong';
  tone?: 'default' | 'muted' | 'strong';
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center';
  spacing?: 'tight' | 'default' | 'relaxed';
  layout?: 'inline' | 'contained' | 'wide' | 'full';
};

type PortableTextBlock = PortableTextParagraph | PortableTextHeading | PortableTextImage | PortableTextQuote | PortableTextColumns | PortableTextGrid;

type PortableTextColumns = {
  type: 'columns';
  columns: Array<{
    title?: string;
    blocks?: PortableTextBlock[];
  }>;
  style?: PortableTextStyle;
};

export const portableTextStyleSchema = z.object({
  weight: z.enum(['soft', 'default', 'strong']).optional(),
  tone: z.enum(['default', 'muted', 'strong']).optional(),
  size: z.enum(['sm', 'md', 'lg']).optional(),
  align: z.enum(['left', 'center']).optional(),
  spacing: z.enum(['tight', 'default', 'relaxed']).optional(),
  layout: z.enum(['inline', 'contained', 'wide', 'full']).optional(),
});

export const portableTextParagraphSchema = z.object({
  type: z.literal('paragraph'),
  text: z.string().min(1),
  style: portableTextStyleSchema.optional(),
});

export const portableTextHeadingSchema = z.object({
  type: z.literal('heading'),
  variant: z.enum(['section', 'subsection', 'eyebrow']).default('subsection'),
  level: z.enum(['h2', 'h3', 'h4']).optional(),
  text: z.string().min(1),
});

export const portableTextImageSchema = z.object({
  type: z.literal('image'),
  src: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().min(1).optional(),
  style: portableTextStyleSchema.optional(),
});

export const portableTextQuoteSchema = z.object({
  type: z.literal('quote'),
  text: z.string().min(1),
  attribution: z.string().min(1).optional(),
  style: portableTextStyleSchema.optional(),
});

export const portableTextGridSchema = z.object({
  type: z.literal('grid'),
  rows: z.array(
    z.object({
      label: z.string().min(1),
      value: z.string().min(1),
    })
  ).min(1),
  style: portableTextStyleSchema.optional(),
});

export const portableTextBlockSchema: z.ZodType<PortableTextBlock> = z.lazy(() =>
  z.union([
    portableTextParagraphSchema,
    portableTextHeadingSchema,
    portableTextImageSchema,
    portableTextQuoteSchema,
    portableTextColumnsSchema,
    portableTextGridSchema,
  ])
);

export const portableTextColumnsSchema: z.ZodType<PortableTextColumns> = z.lazy(() =>
  z.object({
    type: z.literal('columns'),
    columns: z.array(
      z
        .object({
          title: z.string().min(1).optional(),
          blocks: z.array(z.lazy(() => portableTextBlockSchema)).optional(),
        })
        .refine((column) => Boolean(column.blocks && column.blocks.length > 0), {
          message: 'Each column must provide blocks',
        })
    ).min(2).max(4),
    style: portableTextStyleSchema.optional(),
  })
);

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
  list: z.array(z.string().min(1)).optional(),
  blocks: z.array(portableTextBlockSchema).optional(),
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
  body: z.array(z.string().min(1)).optional(),
  blocks: z.array(portableTextBlockSchema).optional(),
  list: z.array(z.string().min(1)).optional(),
}).refine((section) => (section.body && section.body.length > 0) || (section.blocks && section.blocks.length > 0), {
  message: 'Each section must provide body or blocks',
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

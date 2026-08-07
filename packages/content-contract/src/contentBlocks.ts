import { z } from 'zod';

import { nullishToUndefined, optionalTextSchema } from './schemaUtils';

export type PortableTextStyle = {
  weight?: 'soft' | 'default' | 'strong';
  tone?: 'default' | 'muted' | 'strong';
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center';
  spacing?: 'tight' | 'default' | 'relaxed';
  layout?: 'inline' | 'contained' | 'wide' | 'full';
};

export type PortableTextParagraph = {
  type: 'paragraph';
  text: string;
  style?: PortableTextStyle;
};

export type PortableTextHeading = {
  type: 'heading';
  variant: 'section' | 'subsection' | 'eyebrow';
  level?: 'h2' | 'h3' | 'h4';
  text: string;
};

export type PortableTextImage = {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  style?: PortableTextStyle;
};

export type PortableTextQuote = {
  type: 'quote';
  text: string;
  attribution?: string;
  style?: PortableTextStyle;
};

export type PortableTextList = {
  type: 'list';
  items: string[];
  ordered?: boolean;
  style?: PortableTextStyle;
};

export type PortableTextGrid = {
  type: 'grid';
  rows: Array<{
    label: string;
    value: string;
  }>;
  style?: PortableTextStyle;
};

export type PortableTextFeatureList = {
  type: 'featureList';
  title?: string;
  items: Array<{
    label: string;
    description: string;
  }>;
  style?: PortableTextStyle;
};

export type PortableTextMetrics = {
  type: 'metrics';
  title?: string;
  items: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
  style?: PortableTextStyle;
};

export type PortableTextCallout = {
  type: 'callout';
  title?: string;
  text: string;
  tone?: 'default' | 'muted' | 'strong' | 'warning';
};

export type PortableTextCta = {
  type: 'cta';
  title: string;
  description?: string;
  label: string;
  href: string;
  linkType: 'internal' | 'external';
  style?: PortableTextStyle;
};

export type PortableTextColumnBlock = PortableTextParagraph | PortableTextHeading | PortableTextImage | PortableTextQuote | PortableTextList;

export type PortableTextColumns = {
  type: 'columns';
  columns: Array<{
    title?: string;
    blocks: PortableTextColumnBlock[];
  }>;
  style?: PortableTextStyle;
};

export type PortableTextBlock = PortableTextColumnBlock | PortableTextColumns | PortableTextGrid | PortableTextFeatureList | PortableTextMetrics | PortableTextCallout | PortableTextCta;

export const portableTextStyleSchema = z.object({
  weight: z.preprocess(nullishToUndefined, z.enum(['soft', 'default', 'strong']).optional()),
  tone: z.preprocess(nullishToUndefined, z.enum(['default', 'muted', 'strong']).optional()),
  size: z.preprocess(nullishToUndefined, z.enum(['sm', 'md', 'lg']).optional()),
  align: z.preprocess(nullishToUndefined, z.enum(['left', 'center']).optional()),
  spacing: z.preprocess(nullishToUndefined, z.enum(['tight', 'default', 'relaxed']).optional()),
  layout: z.preprocess(nullishToUndefined, z.enum(['inline', 'contained', 'wide', 'full']).optional()),
});

export const portableTextParagraphSchema = z.object({
  type: z.literal('paragraph'),
  text: z.string().min(1),
  style: z.preprocess(nullishToUndefined, portableTextStyleSchema.optional()),
});

export const portableTextHeadingSchema = z.object({
  type: z.literal('heading'),
  variant: z.enum(['section', 'subsection', 'eyebrow']).default('subsection'),
  level: z.preprocess(nullishToUndefined, z.enum(['h2', 'h3', 'h4']).optional()),
  text: z.string().min(1),
});

export const portableTextImageSchema = z.object({
  type: z.literal('image'),
  src: z.string().min(1),
  alt: z.string().min(1),
  caption: optionalTextSchema,
  style: z.preprocess(nullishToUndefined, portableTextStyleSchema.optional()),
});

export const portableTextQuoteSchema = z.object({
  type: z.literal('quote'),
  text: z.string().min(1),
  attribution: optionalTextSchema,
  style: z.preprocess(nullishToUndefined, portableTextStyleSchema.optional()),
});

export const portableTextListSchema = z.object({
  type: z.literal('list'),
  items: z.array(z.string().min(1)).min(1),
  ordered: z.preprocess(nullishToUndefined, z.boolean().optional()),
  style: z.preprocess(nullishToUndefined, portableTextStyleSchema.optional()),
});

export const portableTextGridSchema = z.object({
  type: z.literal('grid'),
  rows: z.array(
    z.object({
      label: z.string().min(1),
      value: z.string().min(1),
    })
  ).min(1),
  style: z.preprocess(nullishToUndefined, portableTextStyleSchema.optional()),
});

export const portableTextFeatureListSchema = z.object({
  type: z.literal('featureList'),
  title: optionalTextSchema,
  items: z.array(
    z.object({
      label: z.string().min(1),
      description: z.string().min(1),
    })
  ).min(1),
  style: z.preprocess(nullishToUndefined, portableTextStyleSchema.optional()),
});

export const portableTextMetricsSchema = z.object({
  type: z.literal('metrics'),
  title: optionalTextSchema,
  items: z.array(
    z.object({
      value: z.string().min(1),
      label: z.string().min(1),
      description: optionalTextSchema,
    })
  ).min(1),
  style: z.preprocess(nullishToUndefined, portableTextStyleSchema.optional()),
});

export const portableTextCalloutSchema = z.object({
  type: z.literal('callout'),
  title: optionalTextSchema,
  text: z.string().min(1),
  tone: z.preprocess(nullishToUndefined, z.enum(['default', 'muted', 'strong', 'warning']).optional()),
});

export const portableTextCtaSchema = z.object({
  type: z.literal('cta'),
  title: z.string().min(1),
  description: optionalTextSchema,
  label: z.string().min(1),
  href: z.string().min(1),
  linkType: z.enum(['internal', 'external']),
  style: z.preprocess(nullishToUndefined, portableTextStyleSchema.optional()),
});

export const portableTextColumnBlockSchema: z.ZodType<PortableTextColumnBlock> = z.union([
  portableTextParagraphSchema,
  portableTextHeadingSchema,
  portableTextImageSchema,
  portableTextQuoteSchema,
  portableTextListSchema,
]);

export const portableTextColumnsSchema: z.ZodType<PortableTextColumns> = z.object({
  type: z.literal('columns'),
  columns: z.array(
    z.object({
      title: optionalTextSchema,
      blocks: z.array(portableTextColumnBlockSchema).min(1),
    })
  ).min(2).max(4),
  style: z.preprocess(nullishToUndefined, portableTextStyleSchema.optional()),
});

export const portableTextBlockSchema: z.ZodType<PortableTextBlock> = z.union([
  portableTextColumnBlockSchema,
  portableTextColumnsSchema,
  portableTextGridSchema,
  portableTextFeatureListSchema,
  portableTextMetricsSchema,
  portableTextCalloutSchema,
  portableTextCtaSchema,
]);

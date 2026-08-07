import { articleContentSchema, collectionManifestItemSchema, projectContentSchema } from '@/domain/content/contentSchemas';
import { optionalPayloadText, type PayloadArrayItem, type PayloadNullable, type PayloadRelation } from '@/infrastructure/payload/payloadTypes';
import type { ArticleContentDocument, CollectionManifestItem, ContentLink, EntryContentSection, EntrySeo, LocalizedText, MediaAsset, PortableTextBlock, PortableTextColumnBlock, PortableTextStyle, ProjectContentDocument } from '@/types/core/content.types';
import type { Locale } from '@/types/ui/locale.types';

type PayloadMedia = {
  alt?: PayloadNullable<string>;
  height?: number;
  url?: PayloadNullable<string>;
  width?: number;
};

type PayloadProject = {
  coverAlt?: PayloadNullable<string>;
  coverImage?: PayloadRelation<PayloadMedia>;
  destination?: {
    href?: PayloadNullable<string>;
    label?: PayloadNullable<string>;
    type?: 'internal' | 'external';
  };
  excerpt?: PayloadNullable<string>;
  featured?: boolean;
  meta?: Array<PayloadArrayItem<{ label: string; value: string }>>;
  publishedAt?: PayloadNullable<string>;
  role?: PayloadNullable<string>;
  sections?: PayloadSection[];
  seo?: {
    description?: PayloadNullable<string>;
    image?: PayloadRelation<PayloadMedia>;
    noIndex?: boolean | null;
    title?: PayloadNullable<string>;
  };
  slug?: PayloadNullable<string>;
  status?: 'draft' | 'published';
  tags?: Array<PayloadArrayItem<{ label: string }>>;
  title?: PayloadNullable<string>;
  year?: PayloadNullable<string>;
};

type PayloadArticle = Omit<PayloadProject, 'featured' | 'role' | 'year'> & {
  perspective?: string;
  readingTime?: string;
};

type PayloadSection = {
  blocks?: PayloadBlock[];
  content?: PayloadRichText;
  eyebrow?: PayloadNullable<string>;
  title?: PayloadNullable<string>;
};

type PayloadRichTextNode = {
  children?: PayloadRichTextNode[];
  listType?: 'bullet' | 'number';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text?: string;
  type?: string;
};

type PayloadRichText = {
  root?: PayloadRichTextNode;
};

type PayloadBlock = {
  advancedStyle?: Record<string, string | null | undefined>;
  alt?: PayloadNullable<string>;
  attribution?: PayloadNullable<string>;
  blockType?: string;
  caption?: PayloadNullable<string>;
  columns?: Array<{ blocks?: PayloadBlock[]; title?: PayloadNullable<string> }>;
  content?: PayloadRichText;
  description?: PayloadNullable<string>;
  href?: PayloadNullable<string>;
  image?: PayloadRelation<PayloadMedia>;
  items?: Array<PayloadArrayItem<{ alt: string; caption: string; description: string; image: PayloadRelation<PayloadMedia>; label: string; text: string; value: string }>>;
  label?: PayloadNullable<string>;
  level?: 'h2' | 'h3' | 'h4' | null;
  ordered?: boolean | null;
  rows?: Array<PayloadArrayItem<{ label: string; value: string }>>;
  style?: Record<string, string | null | undefined>;
  stylePreset?: 'default' | 'lead' | 'compact' | 'highlight' | 'muted' | 'wide' | 'custom' | null;
  text?: PayloadNullable<string>;
  title?: PayloadNullable<string>;
  tone?: 'default' | 'muted' | 'strong' | 'warning' | null;
  type?: 'internal' | 'external' | null;
  variant?: 'section' | 'subsection' | 'eyebrow' | null;
};

function localized(value: PayloadNullable<string>, locale: Locale): LocalizedText {
  return locale === 'en' ? { es: value ?? '', en: value ?? '' } : { es: value ?? '' };
}

function mapMedia(media: PayloadRelation<PayloadMedia>, fallbackAlt?: PayloadNullable<string>): MediaAsset | undefined {
  if (!media || typeof media === 'number' || !media.url) {
    return undefined;
  }

  return {
    alt: media.alt ?? fallbackAlt,
    height: media.height,
    src: media.url,
    width: media.width,
  };
}

function mapSeo(project: PayloadProject): EntrySeo | undefined {
  if (!project.seo) {
    return undefined;
  }

  return {
    description: optionalPayloadText(project.seo.description),
    image: mapMedia(project.seo.image, project.coverAlt),
    noIndex: project.seo.noIndex ?? undefined,
    title: optionalPayloadText(project.seo.title),
  };
}

function mapDestination(project: PayloadProject, locale: Locale): ContentLink {
  return {
    href: project.destination?.href ?? `/projects/${project.slug ?? ''}`,
    label: localized(project.destination?.label ?? 'Case study', locale),
    type: project.destination?.type ?? 'internal',
  };
}

function stripNullStyle(style: PayloadBlock['style']) {
  if (!style) {
    return undefined;
  }

  return Object.fromEntries(Object.entries(style).filter(([, value]) => value !== null && value !== undefined));
}

function styleFromPreset(block: PayloadBlock): PortableTextStyle | undefined {
  if (block.stylePreset === 'custom') {
    return stripNullStyle(block.advancedStyle) as PortableTextStyle | undefined;
  }

  if (block.stylePreset === 'lead') {
    return { size: 'lg' as const, spacing: 'relaxed' as const };
  }

  if (block.stylePreset === 'compact') {
    return { size: 'sm' as const, spacing: 'tight' as const };
  }

  if (block.stylePreset === 'muted') {
    return { tone: 'muted' as const };
  }

  if (block.stylePreset === 'wide') {
    return { layout: 'wide' as const, spacing: 'relaxed' as const };
  }

  if (block.stylePreset === 'highlight') {
    return { tone: 'strong' as const, weight: 'strong' as const };
  }

  return stripNullStyle(block.style) as PortableTextStyle | undefined;
}

function collectText(node: PayloadRichTextNode | undefined): string {
  if (!node) {
    return '';
  }

  if (typeof node.text === 'string') {
    return node.text;
  }

  return node.children?.map(collectText).join('') ?? '';
}

function richTextNodeToPortableBlock(node: PayloadRichTextNode): PortableTextBlock | undefined {
  const text = collectText(node).trim();

  if (!text) {
    return undefined;
  }

  if (node.type === 'heading') {
    const level = node.tag && ['h2', 'h3', 'h4'].includes(node.tag) ? node.tag as 'h2' | 'h3' | 'h4' : undefined;

    return { level, text, type: 'heading', variant: level === 'h2' ? 'section' : 'subsection' };
  }

  if (node.type === 'quote') {
    return { text, type: 'quote' };
  }

  if (node.type === 'list') {
    const items = node.children?.map(collectText).map((item) => item.trim()).filter(Boolean) ?? [];

    return items.length > 0 ? { items, ordered: node.listType === 'number', type: 'list' } : undefined;
  }

  return { text, type: 'paragraph' };
}

function richTextToPortableBlocks(content: PayloadRichText | undefined): PortableTextBlock[] {
  return content?.root?.children
    ?.map(richTextNodeToPortableBlock)
    .filter((block): block is PortableTextBlock => Boolean(block)) ?? [];
}

function richTextToText(content: PayloadRichText | undefined) {
  return richTextToPortableBlocks(content)
    .map((block) => {
      if ('text' in block) {
        return block.text;
      }

      if (block.type === 'list') {
        return block.items.join('\n');
      }

      return '';
    })
    .filter(Boolean)
    .join('\n');
}

function mapBlock(block: PayloadBlock): PortableTextBlock[] {
  if (block.blockType === 'body') {
    return richTextToPortableBlocks(block.content).map((portableBlock) => {
      if ('style' in portableBlock && portableBlock.style === undefined) {
        return { ...portableBlock, style: styleFromPreset(block) };
      }

      return portableBlock;
    });
  }

  if (block.blockType === 'paragraph' && block.text) {
    return [{ style: stripNullStyle(block.style), text: block.text, type: 'paragraph' }];
  }

  if (block.blockType === 'heading' && block.text) {
    return [{ level: block.level ?? undefined, text: block.text, type: 'heading', variant: block.variant ?? 'subsection' }];
  }

  if (block.blockType === 'image' || block.blockType === 'media') {
    const media = mapMedia(block.image, block.alt);

    if (!media) {
      return [];
    }

    return [{ alt: block.alt ?? media.alt ?? '', caption: optionalPayloadText(block.caption), src: media.src, style: styleFromPreset(block), type: 'image' }];
  }

  if (block.blockType === 'gallery') {
    return block.items?.flatMap((item) => {
      const media = mapMedia(item.image as PayloadRelation<PayloadMedia>, item.alt);

      return media ? [{ alt: item.alt ?? media.alt ?? '', caption: optionalPayloadText(item.description), src: media.src, style: styleFromPreset(block), type: 'image' as const }] : [];
    }) ?? [];
  }

  if (block.blockType === 'quote') {
    const text = block.text ?? richTextToText(block.content);

    return text ? [{ attribution: optionalPayloadText(block.attribution), style: styleFromPreset(block), text, type: 'quote' }] : [];
  }

  if (block.blockType === 'list') {
    const items = block.items?.map((item) => item.text).filter((item): item is string => Boolean(item)) ?? [];

    return items.length > 0 ? [{ items, ordered: block.ordered ?? undefined, style: stripNullStyle(block.style), type: 'list' }] : [];
  }

  if (block.blockType === 'grid' || block.blockType === 'metrics') {
    const rows = block.rows?.flatMap((row) => row.label && row.value ? [{ label: row.label, value: row.value }] : []) ?? [];
    const metricItems = block.items?.flatMap((item) => item.label && item.value ? [{ description: optionalPayloadText(item.description), label: item.label, value: item.value }] : []) ?? [];

    if (metricItems.length > 0) {
      return [{ items: metricItems, style: styleFromPreset(block), title: optionalPayloadText(block.title), type: 'metrics' }];
    }

    return rows.length > 0 ? [{ rows, style: styleFromPreset(block), type: 'grid' }] : [];
  }

  if (block.blockType === 'featureList') {
    const items = block.items?.flatMap((item) => item.label && item.description ? [{ label: item.label, description: item.description }] : []) ?? [];

    return items.length > 0 ? [{ items, style: styleFromPreset(block), title: optionalPayloadText(block.title), type: 'featureList' }] : [];
  }

  if (block.blockType === 'callout') {
    const text = block.text ?? richTextToText(block.content);

    return text ? [{ text, title: optionalPayloadText(block.title), tone: block.tone ?? undefined, type: 'callout' }] : [];
  }

  if (block.blockType === 'cta') {
    return block.title && block.label && block.href ? [{ description: optionalPayloadText(block.description), href: block.href, label: block.label, linkType: block.type ?? 'internal', style: styleFromPreset(block), title: block.title, type: 'cta' }] : [];
  }

  if (block.blockType === 'columns') {
    const columns = block.columns?.flatMap((column) => {
      const blocks = column.blocks?.flatMap(mapBlock).filter((item): item is PortableTextColumnBlock => Boolean(item) && ['paragraph', 'heading', 'image', 'quote', 'list'].includes(item.type)) ?? [];

      return blocks.length > 0 ? [{ blocks, title: optionalPayloadText(column.title) }] : [];
    }) ?? [];

    return columns.length >= 2 ? [{ columns, style: stripNullStyle(block.style), type: 'columns' }] : [];
  }

  return [];
}

function mapContentSections(sections: PayloadSection[] | undefined): EntryContentSection[] {
  return sections?.flatMap((section) => {
    const richTextBlocks = richTextToPortableBlocks(section.content);
    const structuredBlocks = section.blocks?.flatMap(mapBlock) ?? [];
    const blocks = [...richTextBlocks, ...structuredBlocks];

    return blocks.length > 0 ? [{ blocks, eyebrow: section.eyebrow ?? 'Content', title: optionalPayloadText(section.title) }] : [];
  }) ?? [];
}

export function mapPayloadProjectToManifestItem(project: PayloadProject, locale: Locale): CollectionManifestItem {
  const coverImage = mapMedia(project.coverImage, project.coverAlt);

  return collectionManifestItemSchema.parse({
    coverAlt: localized(project.coverAlt, locale),
    coverImage: coverImage?.src ?? '',
    destination: mapDestination(project, locale),
    excerpt: localized(project.excerpt, locale),
    featured: project.featured,
    kind: 'project',
    publishedAt: project.publishedAt?.slice(0, 10) ?? '',
    seo: mapSeo(project),
    slug: project.slug ?? '',
    status: project.status ?? 'draft',
    title: localized(project.title, locale),
  });
}

export function mapPayloadProjectToContent(project: PayloadProject): ProjectContentDocument {
  return projectContentSchema.parse({
    meta: project.meta?.flatMap((item) => item.label && item.value ? [{ label: item.label, value: item.value }] : []) ?? [],
    role: project.role ?? '',
    sections: mapContentSections(project.sections),
    seo: mapSeo(project),
    tags: project.tags?.map((tag) => tag.label).filter((tag): tag is string => Boolean(tag)) ?? [],
    year: project.year ?? '',
  });
}

export function mapPayloadArticleToManifestItem(article: PayloadArticle, locale: Locale): CollectionManifestItem {
  const coverImage = mapMedia(article.coverImage, article.coverAlt);

  return collectionManifestItemSchema.parse({
    coverAlt: localized(article.coverAlt, locale),
    coverImage: coverImage?.src ?? '',
    destination: mapDestination(article, locale),
    excerpt: localized(article.excerpt, locale),
    kind: 'article',
    publishedAt: article.publishedAt?.slice(0, 10) ?? '',
    seo: mapSeo(article),
    slug: article.slug ?? '',
    status: article.status ?? 'draft',
    title: localized(article.title, locale),
  });
}

export function mapPayloadArticleToContent(article: PayloadArticle): ArticleContentDocument {
  return articleContentSchema.parse({
    perspective: article.perspective ?? '',
    readingTime: article.readingTime ?? '',
    sections: mapContentSections(article.sections),
    seo: mapSeo(article),
    tags: article.tags?.map((tag) => tag.label).filter((tag): tag is string => Boolean(tag)) ?? [],
  });
}

export type { PayloadArticle, PayloadProject };

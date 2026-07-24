import type { CursorIcon } from '@/types/ui/cursor.types';
import type { Locale } from '@/types/ui/locale.types';

export type LocalizedText = Partial<Record<Locale, string>> & { es: string };

export type ContentKind = 'project' | 'article';
export type ContentStatus = 'draft' | 'published';

export type ContentMeta = {
  label: LocalizedText;
  value: LocalizedText;
};

export type LocalizedEntryMeta = {
  label: string;
  value: string;
};

export type EntryContentSection = {
  eyebrow: string;
  title?: string;
  body: string[];
  list?: string[];
};

export type EntryContentDocument = {
  intro?: string[];
  meta?: LocalizedEntryMeta[];
  perspective?: string;
  readingTime?: string;
  role?: string;
  sections: EntryContentSection[];
  tags?: string[];
  year?: string;
};

export type ContentSection = {
  id: string;
  eyebrow: LocalizedText;
  title?: LocalizedText;
  body: LocalizedText[];
};

export type ContentLink = {
  label: LocalizedText;
  href: string;
  type: 'internal' | 'external';
};

export type ContentEntry = {
  slug: string;
  kind: ContentKind;
  status: ContentStatus;
  title: LocalizedText;
  excerpt: LocalizedText;
  coverImage: string;
  coverAlt: LocalizedText;
  publishedAt: string;
  tags: LocalizedText[];
  meta: ContentMeta[];
  sections: ContentSection[];
  links?: ContentLink[];
};

export type ProjectEntry = ContentEntry & {
  kind: 'project';
  year: string;
  role: LocalizedText;
  destination: ContentLink;
  featured?: boolean;
};

export type ArticleEntry = ContentEntry & {
  kind: 'article';
  readingTime: LocalizedText;
  perspective: LocalizedText;
  destination: ContentLink;
};

export type CollectionManifestItem = Pick<ContentEntry, 'slug' | 'kind' | 'status' | 'title' | 'excerpt' | 'coverImage' | 'coverAlt' | 'publishedAt'> & {
  destination: ContentLink;
  featured?: boolean;
};

export type ExperienceItem = {
  year: string;
  title: string;
  role: LocalizedText;
};

export type SiteContent = {
  brand: string;
  defaultLocale: Locale;
  titles: LocalizedText[];
};

export type SocialLink = {
  id: 'github' | 'linkedin' | 'email';
  label: string;
  href: string;
  ariaLabel: LocalizedText;
  cursorIcon: CursorIcon;
};

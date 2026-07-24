import type { LocalizedText } from '@/types/core/content.types';

export type NavigationCopy = {
  items: Array<{
    to: string;
    label: LocalizedText;
    activePaths: string[];
  }>;
  languageToggle: {
    toEnglish: LocalizedText;
    toSpanish: LocalizedText;
  };
  themeToggle: {
    toLight: LocalizedText;
    toDark: LocalizedText;
  };
};

export type FooterCopy = {
  copyright: LocalizedText;
};

export type CursorCopy = Record<string, LocalizedText>;

export type SeoPageCopy = {
  title: LocalizedText;
  description: LocalizedText;
};

export type SeoCopy = Record<'work' | 'blog' | 'about' | 'resume' | 'notFound' | 'projectNotFound' | 'articleNotFound', SeoPageCopy>;

export type NotificationCopy = {
  title: LocalizedText;
  description: LocalizedText;
};

export type NotificationsCopy = Record<string, NotificationCopy>;

export type ErrorPageKind = 'generic' | 'forbidden' | 'notFound' | 'content';

export type ErrorPageCopy = {
  code: string;
  title: LocalizedText;
  description: LocalizedText;
  actionLabel: LocalizedText;
  actionHref: string;
};

export type ErrorsCopy = Record<ErrorPageKind, ErrorPageCopy>;

export type WorkCopy = {
  heroTitle: LocalizedText;
  greeting: LocalizedText;
  emptyProjectsDescription: LocalizedText;
  emptyProjectsTitle: LocalizedText;
  name: string;
  tagline: LocalizedText;
};

export type AboutCopy = {
  heading: LocalizedText;
  hero: {
    title: LocalizedText;
    subtitle: LocalizedText;
  };
  intro: {
    paragraphs: LocalizedText[];
    bullets: LocalizedText[];
    contactLine: {
      prefix: LocalizedText;
      suffix: LocalizedText;
      links: Array<'github' | 'linkedin' | 'email'>;
    };
  };
  gallerySections: Array<{
    number: string;
    label: LocalizedText;
    images: Array<{
      src: string;
      alt: LocalizedText;
      cursorText: LocalizedText;
      cursorIcon?: 'eye' | 'arrow' | 'mail' | 'message' | 'github' | 'linkedin' | 'none';
    }>;
  }>;
};


export type BlogCopy = {
  heading: LocalizedText;
  emptyDescription: LocalizedText;
  emptyTitle: LocalizedText;
};

export type ResumeCopy = {
  name: LocalizedText;
  heading: LocalizedText;
  download: LocalizedText;
  open: LocalizedText;
  checking: LocalizedText;
  viewerFallback: LocalizedText;
  pendingLabel: LocalizedText;
  pendingHint: LocalizedText;
};

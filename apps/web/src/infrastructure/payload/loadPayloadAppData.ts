import { experienceItemsSchema, siteContentSchema } from '@/domain/content/contentSchemas';
import { aboutSchema, blogSchema, errorsSchema, footerSchema, localizedRecordSchema, navigationSchema, notificationsSchema, resumeSchema, seoSchema, socialLinksSchema, workSchema } from '@/domain/copy/copySchemas';
import type { ContentSource } from '@/infrastructure/content/StaticContentRepository';
import type { CopySource } from '@/infrastructure/copy/StaticCopyRepository';
import type { LocalizedText, SocialLink } from '@/types/core/content.types';
import type { ErrorPageKind } from '@/types/core/copy.types';
import type { CursorIcon } from '@/types/ui/cursor.types';

import { PayloadClient } from './PayloadClient';

type PayloadRecord = Record<string, unknown>;
type PayloadMedia = { url?: string } | number | null | undefined;

export type PayloadAppData = {
  contentSource: ContentSource;
  copySource: CopySource;
};

const metadataKeys = new Set(['id', 'updatedAt', 'createdAt', 'globalType']);

function text(value: unknown) {
  return typeof value === 'string' ? value : '';
}

function localized(es: unknown, en: unknown): LocalizedText {
  const esText = text(es);

  return {
    es: esText,
    en: text(en) || esText,
  };
}

function mediaSrc(media: PayloadMedia) {
  return typeof media === 'object' && media && typeof media.url === 'string' ? media.url : '';
}

function recordEntries(record: PayloadRecord) {
  return Object.entries(record).filter(([key]) => !metadataKeys.has(key));
}

async function fetchLocalizedGlobal(client: PayloadClient, slug: string) {
  const [es, en] = await Promise.all([
    client.findGlobal<PayloadRecord>(slug, { depth: 3, locale: 'es' }),
    client.findGlobal<PayloadRecord>(slug, { depth: 3, locale: 'en' }),
  ]);

  return { en, es };
}

export async function loadPayloadAppData(client?: PayloadClient): Promise<PayloadAppData> {
  const payloadClient = client ?? new PayloadClient();
  const [site, navigation, footer, social, seo, notifications, cursor, experience, work, blog, about, resume, errors] = await Promise.all([
    fetchLocalizedGlobal(payloadClient, 'site'),
    fetchLocalizedGlobal(payloadClient, 'navigation'),
    fetchLocalizedGlobal(payloadClient, 'footer'),
    fetchLocalizedGlobal(payloadClient, 'social'),
    fetchLocalizedGlobal(payloadClient, 'page-seo-copy'),
    fetchLocalizedGlobal(payloadClient, 'notifications'),
    fetchLocalizedGlobal(payloadClient, 'cursor-copy'),
    fetchLocalizedGlobal(payloadClient, 'experience'),
    fetchLocalizedGlobal(payloadClient, 'work-page-copy'),
    fetchLocalizedGlobal(payloadClient, 'blog-page-copy'),
    fetchLocalizedGlobal(payloadClient, 'about-page-copy'),
    fetchLocalizedGlobal(payloadClient, 'resume-page-copy'),
    fetchLocalizedGlobal(payloadClient, 'error-page-copy'),
  ]);

  const siteContent = siteContentSchema.parse({
    brand: site.es.brand,
    defaultLocale: site.es.defaultLocale,
    titles: ((site.es.titles as PayloadRecord[] | undefined) ?? []).map((title, index) => localized(title.text, ((site.en.titles as PayloadRecord[] | undefined) ?? [])[index]?.text)),
  });

  const navigationCopy = navigationSchema.parse({
    items: ((navigation.es.items as PayloadRecord[] | undefined) ?? []).map((item, index) => {
      const enItem = ((navigation.en.items as PayloadRecord[] | undefined) ?? [])[index] ?? {};

      return {
        activePaths: ((item.activePaths as PayloadRecord[] | undefined) ?? []).map((activePath) => text(activePath.path)).filter(Boolean),
        label: localized(item.label, enItem.label),
        to: item.to,
      };
    }),
    languageToggle: {
      toEnglish: localized((navigation.es.languageToggle as PayloadRecord | undefined)?.toEnglish, (navigation.en.languageToggle as PayloadRecord | undefined)?.toEnglish),
      toSpanish: localized((navigation.es.languageToggle as PayloadRecord | undefined)?.toSpanish, (navigation.en.languageToggle as PayloadRecord | undefined)?.toSpanish),
    },
    themeToggle: {
      toDark: localized((navigation.es.themeToggle as PayloadRecord | undefined)?.toDark, (navigation.en.themeToggle as PayloadRecord | undefined)?.toDark),
      toLight: localized((navigation.es.themeToggle as PayloadRecord | undefined)?.toLight, (navigation.en.themeToggle as PayloadRecord | undefined)?.toLight),
    },
  });

  const footerCopy = footerSchema.parse({ copyright: localized(footer.es.copyright, footer.en.copyright) });
  const socialLinks = socialLinksSchema.parse(((social.es.links as PayloadRecord[] | undefined) ?? []).map((link, index): SocialLink => {
    const enLink = ((social.en.links as PayloadRecord[] | undefined) ?? [])[index] ?? {};

    return {
      ariaLabel: localized(link.ariaLabel, enLink.ariaLabel),
      cursorIcon: text(link.cursorIcon) as CursorIcon,
      href: text(link.href),
      id: text(link.key) as SocialLink['id'],
      label: text(link.label),
    };
  }));

  const seoCopy = seoSchema.parse(Object.fromEntries(recordEntries(seo.es).map(([key, value]) => {
    const esValue = value as PayloadRecord;
    const enValue = seo.en[key] as PayloadRecord | undefined;

    return [key, {
      description: localized(esValue.description, enValue?.description),
      title: localized(esValue.title, enValue?.title),
    }];
  })));

  const notificationsCopy = notificationsSchema.parse(Object.fromEntries(((notifications.es.items as PayloadRecord[] | undefined) ?? []).map((item, index) => {
    const enItem = ((notifications.en.items as PayloadRecord[] | undefined) ?? [])[index] ?? {};

    return [text(item.key), {
      description: localized(item.description, enItem.description),
      title: localized(item.title, enItem.title),
    }];
  })));

  const cursorCopy = localizedRecordSchema.parse(Object.fromEntries(recordEntries(cursor.es).map(([key, value]) => [key, localized(value, cursor.en[key])])));
  const experienceItems = experienceItemsSchema.parse(((experience.es.items as PayloadRecord[] | undefined) ?? []).map((item, index) => {
    const enItem = ((experience.en.items as PayloadRecord[] | undefined) ?? [])[index] ?? {};

    return {
      role: localized(item.role, enItem.role),
      title: text(item.title),
      year: text(item.year),
    };
  }));
  const workCopy = workSchema.parse({
    emptyProjectsDescription: localized(work.es.emptyProjectsDescription, work.en.emptyProjectsDescription),
    emptyProjectsTitle: localized(work.es.emptyProjectsTitle, work.en.emptyProjectsTitle),
    greeting: localized(work.es.greeting, work.en.greeting),
    heroTitle: localized(work.es.heroTitle, work.en.heroTitle),
    name: work.es.name,
    tagline: localized(work.es.tagline, work.en.tagline),
  });
  const blogCopy = blogSchema.parse({
    emptyDescription: localized(blog.es.emptyDescription, blog.en.emptyDescription),
    emptyTitle: localized(blog.es.emptyTitle, blog.en.emptyTitle),
    heading: localized(blog.es.heading, blog.en.heading),
  });
  const resumeCopy = resumeSchema.parse(Object.fromEntries(recordEntries(resume.es).map(([key, value]) => [key, localized(value, resume.en[key])])));
  const errorsCopy = errorsSchema.parse(Object.fromEntries(recordEntries(errors.es).map(([key, value]) => {
    const esValue = value as PayloadRecord;
    const enValue = errors.en[key] as PayloadRecord | undefined;

    return [key as ErrorPageKind, {
      actionHref: esValue.actionHref,
      actionLabel: localized(esValue.actionLabel, enValue?.actionLabel),
      code: esValue.code,
      description: localized(esValue.description, enValue?.description),
      title: localized(esValue.title, enValue?.title),
    }];
  })));

  const esAboutIntro = about.es.intro as PayloadRecord;
  const enAboutIntro = about.en.intro as PayloadRecord;
  const aboutCopy = aboutSchema.parse({
    gallerySections: ((about.es.gallerySections as PayloadRecord[] | undefined) ?? []).map((section, sectionIndex) => {
      const enSection = ((about.en.gallerySections as PayloadRecord[] | undefined) ?? [])[sectionIndex] ?? {};

      return {
        images: ((section.images as PayloadRecord[] | undefined) ?? []).map((image, imageIndex) => {
          const enImage = ((enSection.images as PayloadRecord[] | undefined) ?? [])[imageIndex] ?? {};

          return {
            alt: localized(image.alt, enImage.alt),
            cursorIcon: text(image.cursorIcon) as CursorIcon,
            cursorText: localized(image.cursorText, enImage.cursorText),
            src: mediaSrc(image.image as PayloadMedia),
          };
        }),
        label: localized(section.label, enSection.label),
        number: text(section.number),
      };
    }),
    heading: localized(about.es.heading, about.en.heading),
    hero: {
      subtitle: localized((about.es.hero as PayloadRecord | undefined)?.subtitle, (about.en.hero as PayloadRecord | undefined)?.subtitle),
      title: localized((about.es.hero as PayloadRecord | undefined)?.title, (about.en.hero as PayloadRecord | undefined)?.title),
    },
    intro: {
      bullets: ((esAboutIntro.bullets as PayloadRecord[] | undefined) ?? []).map((item, index) => localized(item.text, ((enAboutIntro.bullets as PayloadRecord[] | undefined) ?? [])[index]?.text)),
      contactLine: {
        links: (esAboutIntro.contactLine as PayloadRecord).links,
        prefix: localized((esAboutIntro.contactLine as PayloadRecord).prefix, (enAboutIntro.contactLine as PayloadRecord).prefix),
        suffix: localized((esAboutIntro.contactLine as PayloadRecord).suffix, (enAboutIntro.contactLine as PayloadRecord).suffix),
      },
      paragraphs: ((esAboutIntro.paragraphs as PayloadRecord[] | undefined) ?? []).map((item, index) => localized(item.text, ((enAboutIntro.paragraphs as PayloadRecord[] | undefined) ?? [])[index]?.text)),
    },
  });

  return {
    contentSource: {
      experienceItems,
      site: siteContent,
    },
    copySource: {
      aboutCopy,
      blogCopy,
      cursorCopy,
      errorsCopy,
      footer: footerCopy,
      navigation: navigationCopy,
      notifications: notificationsCopy,
      resumeCopy,
      seoCopy,
      socialLinks,
      workCopy,
    },
  };
}

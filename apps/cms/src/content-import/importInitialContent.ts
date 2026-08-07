import fs from 'fs/promises';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

type Locale = 'es' | 'en';
type LocalizedText = Record<Locale, string | undefined>;
type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue };
type SeedDocument = { id: number | string };
export type InitialContentPayload = {
  create: (args: Record<string, unknown>) => Promise<SeedDocument>;
  find: (args: Record<string, unknown>) => Promise<{ docs: SeedDocument[] }>;
  logger: { info: (message: string) => void };
  update: (args: Record<string, unknown>) => Promise<SeedDocument>;
  updateGlobal: (args: Record<string, unknown>) => Promise<unknown>;
};

type MediaInput = {
  alt: LocalizedText;
  assetKey: string;
  desiredFilename: string;
  folderSlug: string;
  originalPath: string;
  src: string;
  tags: string[];
  usage: string;
};

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const seedDataDir = path.resolve(dirname, '../../seed-data');
const seedContentDir = path.join(seedDataDir, 'content');
const seedMediaDir = path.join(seedDataDir, 'media');

async function readJson<T>(relativePath: string) {
  const raw = await fs.readFile(path.join(seedContentDir, relativePath), 'utf8');

  return JSON.parse(raw) as T;
}

function localize(value: LocalizedText, locale: Locale) {
  return value[locale] ?? value.es ?? '';
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function stableId(...parts: Array<number | string | undefined>) {
  return parts
    .filter((part): part is number | string => part !== undefined)
    .map((part) => slugify(String(part)))
    .filter(Boolean)
    .join('-');
}

function semanticFilename(assetKey: string, sourcePath: string) {
  const extension = path.extname(sourcePath);

  return `${slugify(assetKey)}${extension}`;
}

function jsonText(value: JsonValue | undefined, locale: Locale) {
  if (typeof value === 'string') {
    return value;
  }

  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return localize(value as LocalizedText, locale);
  }

  return '';
}

function lexicalText(text: string, type = 'paragraph', extra: Record<string, unknown> = {}) {
  return {
    children: text ? [{ detail: 0, format: 0, mode: 'normal', style: '', text, type: 'text', version: 1 }] : [],
    direction: 'ltr',
    format: '',
    indent: 0,
    type,
    version: 1,
    ...extra,
  };
}

function lexicalDocument(children: Array<Record<string, unknown>>) {
  return {
    root: {
      children: children.length > 0 ? children : [lexicalText('')],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  };
}

function richTextFromParagraphs(paragraphs: Array<LocalizedText | string>, locale: Locale) {
  return lexicalDocument(paragraphs.map((paragraph) => lexicalText(typeof paragraph === 'string' ? paragraph : localize(paragraph, locale))));
}

function stylePresetFromLegacyStyle(style: JsonValue | undefined) {
  if (!style || typeof style !== 'object' || Array.isArray(style)) {
    return 'default';
  }

  const legacyStyle = style as Record<string, JsonValue>;

  if (legacyStyle.spacing === 'relaxed' || legacyStyle.layout === 'wide' || legacyStyle.layout === 'full') {
    return 'wide';
  }

  if (legacyStyle.tone === 'muted' || legacyStyle.weight === 'soft') {
    return 'muted';
  }

  if (legacyStyle.size === 'lg') {
    return 'lead';
  }

  return 'default';
}

function lexicalHeadingTag(block: Record<string, JsonValue>) {
  if (block.level === 'h4' || block.variant === 'eyebrow') {
    return 'h4';
  }

  if (block.level === 'h3' || block.variant === 'subsection') {
    return 'h3';
  }

  return 'h2';
}

function mapLegacyBlocksToSection(blocks: Array<Record<string, JsonValue>>, mediaBySrc: Map<string, { id: number | string }>, locale: Locale, sectionId: string) {
  const richTextChildren: Array<Record<string, unknown>> = [];
  const structuralBlocks: Array<Record<string, unknown>> = [];
  let pendingFeatureListTitle: string | undefined;
  let bodyBlockIndex = 0;

  function flushBodyBlock() {
    if (richTextChildren.length === 0) {
      return;
    }

    structuralBlocks.push({
      id: stableId(sectionId, 'body', bodyBlockIndex),
      blockType: 'body',
      content: lexicalDocument([...richTextChildren]),
      stylePreset: 'default',
    });
    richTextChildren.length = 0;
    bodyBlockIndex += 1;
  }

  for (const [blockIndex, block] of blocks.entries()) {
    if (block.type === 'heading') {
      const nextBlock = blocks[blockIndex + 1];
      const headingText = jsonText(block.text, locale);

      if (nextBlock?.type === 'columns') {
        pendingFeatureListTitle = headingText;
        continue;
      }

      richTextChildren.push(lexicalText(headingText, 'heading', { tag: lexicalHeadingTag(block) }));
      continue;
    }

    if (block.type === 'paragraph') {
      richTextChildren.push(lexicalText(jsonText(block.text, locale)));
      continue;
    }

    if (block.type === 'list') {
      const items = Array.isArray(block.items) ? block.items : [];
      richTextChildren.push(...items.map((item) => lexicalText(String(item))));
      continue;
    }

    if (block.type === 'quote') {
      flushBodyBlock();
      structuralBlocks.push({
        id: stableId(sectionId, 'quote', blockIndex),
        blockType: 'quote',
        attribution: jsonText(block.attribution, locale) || undefined,
        content: lexicalDocument([lexicalText(jsonText(block.text, locale))]),
        stylePreset: stylePresetFromLegacyStyle(block.style),
      });
      continue;
    }

    if (block.type === 'image') {
      flushBodyBlock();
      const src = String(block.src ?? '');
      const media = mediaBySrc.get(src) ?? mediaBySrc.get(src.startsWith('/') ? src : `/${src}`);

      structuralBlocks.push({
        id: stableId(sectionId, 'media', blockIndex),
        blockType: 'media',
        image: media?.id,
        alt: jsonText(block.alt, locale),
        caption: jsonText(block.caption, locale) || undefined,
        layoutPreset: 'wide',
        stylePreset: stylePresetFromLegacyStyle(block.style),
      });
      continue;
    }

    if (block.type === 'columns') {
      flushBodyBlock();
      const columns = Array.isArray(block.columns) ? block.columns : [];

      structuralBlocks.push({
        id: stableId(sectionId, 'feature-list', blockIndex),
        blockType: 'featureList',
        title: pendingFeatureListTitle,
        items: columns.map((column, itemIndex) => {
          const columnRecord = column as Record<string, JsonValue>;
          const columnBlocks = Array.isArray(columnRecord.blocks) ? columnRecord.blocks as Array<Record<string, JsonValue>> : [];
          const description = columnBlocks.map((item) => jsonText(item.text, locale)).filter(Boolean).join('\n');

          return {
            id: stableId(sectionId, 'feature-list', blockIndex, 'item', itemIndex),
            label: jsonText(columnRecord.title, locale),
            description,
          };
        }),
        stylePreset: stylePresetFromLegacyStyle(block.style),
      });
      pendingFeatureListTitle = undefined;
      continue;
    }

    if (block.type === 'grid') {
      flushBodyBlock();
      const rows = Array.isArray(block.rows) ? block.rows : [];

      structuralBlocks.push({
        id: stableId(sectionId, 'metrics', blockIndex),
        blockType: 'metrics',
        items: rows.map((row, itemIndex) => {
          const rowRecord = row as Record<string, JsonValue>;

          return {
            id: stableId(sectionId, 'metrics', blockIndex, 'item', itemIndex),
            value: jsonText(rowRecord.value, locale),
            label: jsonText(rowRecord.label, locale),
          };
        }),
        stylePreset: stylePresetFromLegacyStyle(block.style),
      });
      continue;
    }

    if (block.type === 'callout') {
      flushBodyBlock();
      structuralBlocks.push({
        id: stableId(sectionId, 'callout', blockIndex),
        blockType: 'callout',
        title: jsonText(block.title, locale) || undefined,
        content: lexicalDocument([lexicalText(jsonText(block.text, locale))]),
        tone: block.tone,
        stylePreset: stylePresetFromLegacyStyle(block.style),
      });
    }
  }

  flushBodyBlock();

  return {
    blocks: structuralBlocks,
  };
}

async function prepareUploadFile(sourceFilePath: string, desiredFilename: string) {
  const uploadDir = await fs.mkdtemp(path.join(os.tmpdir(), 'payload-seed-'));
  const uploadFilePath = path.join(uploadDir, desiredFilename);

  await fs.copyFile(sourceFilePath, uploadFilePath);

  return uploadFilePath;
}

function seedMediaPath(src: string) {
  return path.join(seedMediaDir, src.replace(/^\/images\//, '').replace(/^\//, ''));
}

async function updateGlobalForLocales(payload: InitialContentPayload, slug: string, buildData: (locale: Locale) => Record<string, unknown>) {
  for (const locale of ['es', 'en'] as const) {
    await payload.updateGlobal({
      slug,
      data: buildData(locale),
      locale,
    });
  }
}

async function upsertByUniqueField(payload: InitialContentPayload, collection: string, field: string, value: string, data: Record<string, unknown>, locale?: Locale, filePath?: string) {
  const existing = await payload.find({
    collection,
    limit: 1,
    locale,
    where: {
      [field]: {
        equals: value,
      },
    },
  });

  if (existing.docs[0]) {
    return payload.update({
      id: existing.docs[0].id,
      collection,
      data,
      filePath,
      locale,
    });
  }

  return payload.create({
    collection,
    data,
    filePath,
    locale,
  });
}

async function seedMediaFolders(payload: InitialContentPayload) {
  const folders = [
    { slug: 'projects', title: 'Projects', description: 'Project and case study assets.' },
    { slug: 'articles', title: 'Articles', description: 'Blog and writing assets.' },
    { slug: 'about', title: 'About', description: 'Profile and about page assets.' },
    { slug: 'brand', title: 'Brand', description: 'Brand, identity, and reusable visual assets.' },
    { slug: 'social', title: 'Social', description: 'Social and promotional assets.' },
  ];
  const foldersBySlug = new Map<string, { id: number | string }>();

  for (const folder of folders) {
    const created = await upsertByUniqueField(payload, 'media-folders', 'slug', folder.slug, folder);
    foldersBySlug.set(folder.slug, { id: created.id });
  }

  return foldersBySlug;
}

async function seedMedia(payload: InitialContentPayload, foldersBySlug: Map<string, { id: number | string }>) {
  const projectManifest = await readJson<Array<{ coverAlt: LocalizedText; coverImage: string; slug: string }>>('collections/projects/manifest.json');
  const articleManifest = await readJson<Array<{ coverAlt: LocalizedText; coverImage: string; slug: string }>>('collections/articles/manifest.json');
  const about = await readJson<{
    gallerySections: Array<{
      images: Array<{ alt: LocalizedText; src: string }>;
    }>;
  }>('pages/about/manifest.json');

  const mediaInputs: MediaInput[] = [
    ...projectManifest.map((project) => ({
      assetKey: `projects/${project.slug}/cover`,
      desiredFilename: semanticFilename(`projects/${project.slug}/cover`, project.coverImage),
      folderSlug: 'projects',
      originalPath: project.coverImage,
      src: project.coverImage,
      alt: project.coverAlt,
      tags: ['project', project.slug, 'cover'],
      usage: 'project',
    })),
    ...articleManifest.map((article) => ({
      assetKey: `articles/${article.slug}/cover`,
      desiredFilename: semanticFilename(`articles/${article.slug}/cover`, article.coverImage),
      folderSlug: 'articles',
      originalPath: article.coverImage,
      src: article.coverImage,
      alt: article.coverAlt,
      tags: ['article', article.slug, 'cover'],
      usage: 'article',
    })),
    ...about.gallerySections.flatMap((section, sectionIndex) =>
      section.images.map((image) => {
        const sourcePath = image.src.startsWith('/') ? image.src : `/${image.src}`;
        const assetName = slugify(path.basename(sourcePath, path.extname(sourcePath)));
        const assetKey = `about/section-${sectionIndex + 1}/${assetName}`;

        return {
          assetKey,
          desiredFilename: semanticFilename(assetKey, sourcePath),
          folderSlug: 'about',
          originalPath: sourcePath,
          src: sourcePath,
          alt: image.alt,
          tags: ['about', 'gallery', `section-${sectionIndex + 1}`],
          usage: 'profile',
        };
      })
    ),
  ];

  const mediaBySrc = new Map<string, { id: number | string }>();

  for (const media of mediaInputs) {
    const filePath = seedMediaPath(media.src);
    const uploadFilePath = await prepareUploadFile(filePath, media.desiredFilename);
    const created = await upsertByUniqueField(
      payload,
      'media',
      'assetKey',
      media.assetKey,
      {
        assetKey: media.assetKey,
        alt: localize(media.alt, 'es'),
        caption: media.assetKey,
        folder: foldersBySlug.get(media.folderSlug)?.id,
        filename: media.desiredFilename,
        originalPath: media.originalPath,
        tags: media.tags.map((label) => ({ label })),
        usage: media.usage,
      },
      'es',
      uploadFilePath
    );

    await payload.update({
      id: created.id,
      collection: 'media',
      data: {
        assetKey: media.assetKey,
        alt: localize(media.alt, 'en'),
        caption: media.assetKey,
        folder: foldersBySlug.get(media.folderSlug)?.id,
        originalPath: media.originalPath,
        tags: media.tags.map((label) => ({ label })),
        usage: media.usage,
      },
      locale: 'en',
    });

    mediaBySrc.set(media.src, { id: created.id });
    mediaBySrc.set(media.originalPath, { id: created.id });
  }

  return mediaBySrc;
}

async function seedGlobals(payload: InitialContentPayload, mediaBySrc: Map<string, { id: number | string }>) {
  const site = await readJson<{ brand: string; defaultLocale: Locale; titles: LocalizedText[] }>('shared/site.json');
  const navigation = await readJson<{
    items: Array<{ activePaths: string[]; label: LocalizedText; to: string }>;
    languageToggle: { toEnglish: LocalizedText; toSpanish: LocalizedText };
    themeToggle: { toDark: LocalizedText; toLight: LocalizedText };
  }>('layout/navigation.json');
  const footer = await readJson<{ copyright: LocalizedText }>('layout/footer.json');
  const social = await readJson<Array<{ ariaLabel: LocalizedText; cursorIcon: string; href: string; id: string; label: string }>>('shared/social.json');
  const notifications = await readJson<Record<string, { description: LocalizedText; title: LocalizedText }>>('shared/notifications.json');
  const cursor = await readJson<Record<string, LocalizedText>>('shared/cursor.json');
  const seo = await readJson<Record<string, { description: LocalizedText; title: LocalizedText }>>('shared/seo.json');
  const experience = await readJson<Array<{ role: LocalizedText; title: string; year: string }>>('shared/experience.json');
  const work = await readJson<Record<string, LocalizedText | string>>('pages/work/manifest.json');
  const blog = await readJson<Record<string, LocalizedText>>('pages/blog/manifest.json');
  const about = await readJson<Record<string, JsonValue>>('pages/about/manifest.json');
  const resume = await readJson<Record<string, LocalizedText>>('pages/resume/manifest.json');
  const errors = await readJson<Record<string, { actionHref: string; actionLabel: LocalizedText; code: string; description: LocalizedText; title: LocalizedText }>>('pages/errors/manifest.json');

  await updateGlobalForLocales(payload, 'site', (locale) => ({
    brand: site.brand,
    defaultLocale: site.defaultLocale,
    titles: site.titles.map((title) => ({ text: localize(title, locale) })),
  }));

  await updateGlobalForLocales(payload, 'navigation', (locale) => ({
    items: navigation.items.map((item) => ({
      to: item.to,
      activePaths: item.activePaths.map((activePath) => ({ path: activePath })),
      label: localize(item.label, locale),
    })),
    languageToggle: {
      toEnglish: localize(navigation.languageToggle.toEnglish, locale),
      toSpanish: localize(navigation.languageToggle.toSpanish, locale),
    },
    themeToggle: {
      toDark: localize(navigation.themeToggle.toDark, locale),
      toLight: localize(navigation.themeToggle.toLight, locale),
    },
  }));

  await updateGlobalForLocales(payload, 'footer', (locale) => ({ copyright: localize(footer.copyright, locale) }));
  await updateGlobalForLocales(payload, 'social', (locale) => ({
    links: social.map((link) => ({
      key: link.id,
      label: link.label,
      href: link.href,
      ariaLabel: localize(link.ariaLabel, locale),
      cursorIcon: link.cursorIcon,
    })),
  }));
  await updateGlobalForLocales(payload, 'notifications', (locale) => ({
    items: Object.entries(notifications).map(([key, value]) => ({
      key,
      title: localize(value.title, locale),
      description: localize(value.description, locale),
    })),
  }));
  await updateGlobalForLocales(payload, 'cursor-copy', (locale) => Object.fromEntries(Object.entries(cursor).map(([key, value]) => [key, localize(value, locale)])));
  await updateGlobalForLocales(payload, 'experience', (locale) => ({
    items: experience.map((item) => ({
      role: localize(item.role, locale),
      title: item.title,
      year: item.year,
    })),
  }));
  await updateGlobalForLocales(payload, 'page-seo-copy', (locale) => Object.fromEntries(Object.entries(seo).map(([key, value]) => [key, {
    title: localize(value.title, locale),
    description: localize(value.description, locale),
  }])));
  await updateGlobalForLocales(payload, 'work-page-copy', (locale) => ({
    heroTitle: localize(work.heroTitle as LocalizedText, locale),
    greeting: localize(work.greeting as LocalizedText, locale),
    emptyProjectsTitle: localize(work.emptyProjectsTitle as LocalizedText, locale),
    emptyProjectsDescription: localize(work.emptyProjectsDescription as LocalizedText, locale),
    name: work.name,
    tagline: localize(work.tagline as LocalizedText, locale),
  }));
  await updateGlobalForLocales(payload, 'blog-page-copy', (locale) => ({
    heading: localize(blog.heading, locale),
    emptyTitle: localize(blog.emptyTitle, locale),
    emptyDescription: localize(blog.emptyDescription, locale),
  }));
  await updateGlobalForLocales(payload, 'resume-page-copy', (locale) => Object.fromEntries(Object.entries(resume).map(([key, value]) => [key, localize(value, locale)])));
  await updateGlobalForLocales(payload, 'error-page-copy', (locale) => Object.fromEntries(Object.entries(errors).map(([key, value]) => [key, {
    code: value.code,
    title: localize(value.title, locale),
    description: localize(value.description, locale),
    actionLabel: localize(value.actionLabel, locale),
    actionHref: value.actionHref,
  }])));
  await updateGlobalForLocales(payload, 'about-page-copy', (locale) => {
    const hero = about.hero as Record<string, LocalizedText>;
    const intro = about.intro as Record<string, JsonValue>;
    const gallerySections = about.gallerySections as Array<Record<string, JsonValue>>;

    return {
      heading: localize(about.heading as LocalizedText, locale),
      hero: {
        title: localize(hero.title, locale),
        subtitle: localize(hero.subtitle, locale),
      },
      intro: {
        paragraphs: (intro.paragraphs as LocalizedText[]).map((text) => ({ text: localize(text, locale) })),
        bullets: (intro.bullets as LocalizedText[]).map((text) => ({ text: localize(text, locale) })),
        contactLine: {
          prefix: localize((intro.contactLine as Record<string, JsonValue>).prefix as LocalizedText, locale),
          suffix: localize((intro.contactLine as Record<string, JsonValue>).suffix as LocalizedText, locale),
          links: (intro.contactLine as Record<string, JsonValue>).links,
        },
      },
      gallerySections: gallerySections.map((section) => ({
        number: section.number,
        label: localize(section.label as LocalizedText, locale),
        images: (section.images as Array<Record<string, JsonValue>>).map((image) => {
          const src = String(image.src ?? '');
          const media = mediaBySrc.get(src) ?? mediaBySrc.get(src.startsWith('/') ? src : `/${src}`);

          return {
            image: media?.id,
            alt: localize(image.alt as LocalizedText, locale),
            cursorText: localize(image.cursorText as LocalizedText, locale),
            cursorIcon: image.cursorIcon,
          };
        }),
      })),
    };
  });
}

async function seedPages(payload: InitialContentPayload, mediaBySrc: Map<string, { id: number | string }>) {
  const seo = await readJson<Record<string, { description: LocalizedText; title: LocalizedText }>>('shared/seo.json');
  const about = await readJson<{ heading: LocalizedText; intro: { paragraphs: LocalizedText[] } }>('pages/about/manifest.json');
  const work = await readJson<{ heroTitle: LocalizedText; emptyProjectsDescription: LocalizedText }>('pages/work/manifest.json');
  const blog = await readJson<{ emptyDescription: LocalizedText; heading: LocalizedText }>('pages/blog/manifest.json');
  const resume = await readJson<{ heading: LocalizedText; pendingHint: LocalizedText }>('pages/resume/manifest.json');

  const pageInputs = [
    { slug: 'work', seoKey: 'work', title: work.heroTitle, summary: work.emptyProjectsDescription, paragraphs: [work.emptyProjectsDescription] },
    { slug: 'blog', seoKey: 'blog', title: blog.heading, summary: blog.emptyDescription, paragraphs: [blog.emptyDescription] },
    { slug: 'about', seoKey: 'about', title: about.heading, summary: about.intro.paragraphs[0], paragraphs: about.intro.paragraphs },
    { slug: 'resume', seoKey: 'resume', title: resume.heading, summary: resume.pendingHint, paragraphs: [resume.pendingHint] },
  ];

  for (const page of pageInputs) {
    let createdId: number | string | undefined;

    for (const locale of ['es', 'en'] as const) {
      const data = {
        slug: page.slug,
        status: 'published' as const,
        title: localize(page.title, locale),
        summary: localize(page.summary, locale),
        seo: {
          title: localize(seo[page.seoKey].title, locale),
          description: localize(seo[page.seoKey].description, locale),
        },
        sections: [{
          id: stableId('page', page.slug, 'section', 0),
          eyebrow: localize(page.title, locale),
          content: richTextFromParagraphs(page.paragraphs, locale),
        }],
      };

      if (createdId) {
        await payload.update({ id: createdId, collection: 'pages', data, locale });
      } else {
        const created = await upsertByUniqueField(payload, 'pages', 'slug', page.slug, data, locale);
        createdId = created.id;
      }
    }
  }

  void mediaBySrc;
}

async function seedProjects(payload: InitialContentPayload, mediaBySrc: Map<string, { id: number | string }>) {
  const manifest = await readJson<Array<Record<string, JsonValue>>>('collections/projects/manifest.json');

  for (const project of manifest) {
    const slug = String(project.slug);
    const coverImage = String(project.coverImage);
    const media = mediaBySrc.get(coverImage);
    let createdId: number | string | undefined;

    for (const locale of ['es', 'en'] as const) {
      const content = await readJson<Record<string, JsonValue>>(`collections/projects/entries/${slug}/content.${locale}.json`);
      const destination = project.destination as Record<string, JsonValue>;
      const sections = content.sections as Array<Record<string, JsonValue>>;
      const data = {
        slug,
        status: project.status === 'published' ? 'published' : 'draft',
        _status: project.status === 'published' ? 'published' : 'draft',
        featured: project.featured,
        title: localize(project.title as LocalizedText, locale),
        excerpt: localize(project.excerpt as LocalizedText, locale),
        coverImage: media?.id,
        coverAlt: localize(project.coverAlt as LocalizedText, locale),
        publishedAt: project.publishedAt,
        year: content.year,
        role: content.role,
        destination: {
          label: localize(destination.label as LocalizedText, locale),
          href: destination.href,
          type: destination.type,
        },
        tags: Array.isArray(content.tags) ? (content.tags as string[]).map((label) => ({ label })) : [],
        meta: Array.isArray(content.meta)
          ? (content.meta as Array<Record<string, JsonValue>>).map((item) => ({
              label: item.label,
              value: item.value,
            }))
          : [],
        seo: {
          title: localize(project.title as LocalizedText, locale),
          description: localize(project.excerpt as LocalizedText, locale),
          image: media?.id,
        },
        sections: sections.map((section, sectionIndex) => {
          const sectionId = stableId('project', slug, 'section', sectionIndex);
          const mappedSection = Array.isArray(section.blocks)
            ? mapLegacyBlocksToSection(section.blocks as Array<Record<string, JsonValue>>, mediaBySrc, locale, sectionId)
            : { content: richTextFromParagraphs(section.body as string[], locale), blocks: [] };

          return {
            id: sectionId,
            eyebrow: section.eyebrow,
            title: section.title,
            ...mappedSection,
          };
        }),
      };

      if (createdId) {
        await payload.update({ id: createdId, collection: 'projects', data, locale });
      } else {
        const created = await upsertByUniqueField(payload, 'projects', 'slug', slug, data, locale);
        createdId = created.id;
      }
    }
  }
}

async function seedArticles(payload: InitialContentPayload, mediaBySrc: Map<string, { id: number | string }>) {
  const manifest = await readJson<Array<Record<string, JsonValue>>>('collections/articles/manifest.json');

  for (const article of manifest) {
    const slug = String(article.slug);
    const coverImage = String(article.coverImage);
    const media = mediaBySrc.get(coverImage);
    let createdId: number | string | undefined;

    for (const locale of ['es', 'en'] as const) {
      const content = await readJson<Record<string, JsonValue>>(`collections/articles/entries/${slug}/content.${locale}.json`);
      const destination = article.destination as Record<string, JsonValue>;
      const sections = content.sections as Array<Record<string, JsonValue>>;
      const data = {
        slug,
        status: article.status === 'published' ? 'published' : 'draft',
        _status: article.status === 'published' ? 'published' : 'draft',
        title: localize(article.title as LocalizedText, locale),
        excerpt: localize(article.excerpt as LocalizedText, locale),
        coverImage: media?.id,
        coverAlt: localize(article.coverAlt as LocalizedText, locale),
        publishedAt: article.publishedAt,
        readingTime: content.readingTime,
        perspective: content.perspective,
        destination: {
          label: localize(destination.label as LocalizedText, locale),
          href: destination.href,
          type: destination.type,
        },
        tags: Array.isArray(content.tags) ? (content.tags as string[]).map((label) => ({ label })) : [],
        seo: {
          title: localize(article.title as LocalizedText, locale),
          description: localize(article.excerpt as LocalizedText, locale),
          image: media?.id,
        },
        sections: sections.map((section, sectionIndex) => {
          const sectionId = stableId('article', slug, 'section', sectionIndex);
          const mappedSection = Array.isArray(section.blocks)
            ? mapLegacyBlocksToSection(section.blocks as Array<Record<string, JsonValue>>, mediaBySrc, locale, sectionId)
            : { content: richTextFromParagraphs(section.body as string[], locale), blocks: [] };

          return {
            id: sectionId,
            eyebrow: section.eyebrow,
            title: section.title,
            ...mappedSection,
          };
        }),
      };

      if (createdId) {
        await payload.update({ id: createdId, collection: 'articles', data, locale });
      } else {
        const created = await upsertByUniqueField(payload, 'articles', 'slug', slug, data, locale);
        createdId = created.id;
      }
    }
  }
}

export async function importInitialContent(payload: InitialContentPayload) {
  payload.logger.info('Importing initial portfolio content into Payload...');
  const foldersBySlug = await seedMediaFolders(payload);
  const mediaBySrc = await seedMedia(payload, foldersBySlug);
  await seedGlobals(payload, mediaBySrc);
  await seedPages(payload, mediaBySrc);
  await seedProjects(payload, mediaBySrc);
  await seedArticles(payload, mediaBySrc);
  payload.logger.info('Initial content import complete.');
}

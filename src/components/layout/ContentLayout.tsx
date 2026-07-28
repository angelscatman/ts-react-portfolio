import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Section } from '@/components/layout/Section';
import { localize } from '@/lib/localize';
import type { EntryContentDocument, EntryContentSection, LocalizedText, PortableTextBlock, PortableTextStyle } from '@/types/core/content.types';
import type { CursorHandlers } from '@/types/ui/cursor.types';
import type { Locale } from '@/types/ui/locale.types';
import { cn } from '@/utils/cn';

export type MarkdownContentEntry = {
  content?: EntryContentDocument | null;
  coverAlt: LocalizedText;
  coverImage: string;
  isLoading?: boolean;
  title: LocalizedText;
};

type ContentLayoutProps = CursorHandlers & {
  entry: MarkdownContentEntry;
  locale: Locale;
  backTo: string;
  backLabel: string;
  children?: ReactNode;
};

function renderTextWithBreaks(text: string) {
  return text.split('\n').map((line, index, lines) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

function getSpacingClasses(spacing?: PortableTextStyle['spacing']) {
  if (spacing === 'tight') {
    return 'mb-2';
  }

  if (spacing === 'relaxed') {
    return 'mb-section-sm';
  }

  return 'mb-stack-sm';
}

function getToneClasses(tone?: PortableTextStyle['tone']) {
  if (tone === 'muted') {
    return 'text-ink/60';
  }

  if (tone === 'strong') {
    return 'text-ink/90';
  }

  return 'text-ink/70';
}

function getWeightClasses(weight?: PortableTextStyle['weight']) {
  if (weight === 'soft') {
    return 'font-light';
  }

  if (weight === 'strong') {
    return 'font-medium';
  }

  return 'font-normal';
}

function getSizeClasses(size?: PortableTextStyle['size']) {
  if (size === 'sm') {
    return 'text-sm';
  }

  if (size === 'lg') {
    return 'text-xl';
  }

  return 'text-body-lg';
}

function getAlignClasses(align?: PortableTextStyle['align']) {
  return align === 'center' ? 'text-center' : 'text-left';
}

function getLayoutClasses(layout?: PortableTextStyle['layout']) {
  if (layout === 'full') {
    return 'w-screen relative left-1/2 right-1/2 -translate-x-1/2 max-w-none';
  }

  if (layout === 'wide') {
    return 'w-full md:w-[calc(100%+2rem)] md:max-w-none md:-ml-4';
  }

  if (layout === 'inline') {
    return 'w-full max-w-2xl';
  }

  return 'w-full';
}

function getParagraphClasses(style?: PortableTextStyle) {
  return cn('font-sans leading-relaxed', getSizeClasses(style?.size), getToneClasses(style?.tone), getWeightClasses(style?.weight), getAlignClasses(style?.align), getSpacingClasses(style?.spacing));
}

function getHeadingTag(variant: 'section' | 'subsection' | 'eyebrow', level?: 'h2' | 'h3' | 'h4') {
  if (level) {
    return level;
  }

  if (variant === 'section') {
    return 'h2';
  }

  if (variant === 'eyebrow') {
    return 'h4';
  }

  return 'h3';
}

function renderBlocks(blocks: PortableTextBlock[], sectionKey: string) {
  return blocks.map((block, index) => renderBlock(block, `${sectionKey}-${index}`));
}

function renderBlock(block: PortableTextBlock, sectionKey: string) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={`${sectionKey}-paragraph-${block.text.slice(0, 20)}`} className={getParagraphClasses(block.style)}>
          {renderTextWithBreaks(block.text)}
        </p>
      );

    case 'heading': {
      const tag = getHeadingTag(block.variant, block.level);

      if (tag === 'h2') {
        return (
          <h2 key={`${sectionKey}-heading-${block.text}`} className="text-title-section font-display font-medium tracking-tight leading-snug mb-stack-sm mt-stack-md text-ink">
            {block.text}
          </h2>
        );
      }

      if (tag === 'h4') {
        return (
          <h4 key={`${sectionKey}-heading-${block.text}`} className="font-mono text-meta uppercase tracking-meta text-ink/50 mb-3 mt-2">
            {block.text}
          </h4>
        );
      }

      return (
        <h3 key={`${sectionKey}-heading-${block.text}`} className="font-serif text-2xl font-normal tracking-tight leading-snug mb-3 mt-2 text-ink/95">
          {block.text}
        </h3>
      );
    }

    case 'image':
      return (
        <figure key={`${sectionKey}-image-${block.src}`} className={cn('flex flex-col gap-3 mt-stack-sm', getSpacingClasses(block.style?.spacing), getLayoutClasses(block.style?.layout))}>
          <img src={block.src} alt={block.alt} loading="lazy" decoding="async" className="w-full aspect-[16/10] object-cover bg-ink/5 shadow-soft" />
          {block.caption ? <figcaption className="font-mono text-meta uppercase tracking-meta text-ink/40">{block.caption}</figcaption> : null}
        </figure>
      );

    case 'quote':
      return (
        <figure key={`${sectionKey}-quote-${block.text.slice(0, 20)}`} className={cn('border-l-2 border-ink/20 pl-5 py-1', getSpacingClasses(block.style?.spacing))}>
          <blockquote className={cn('font-serif leading-relaxed', getSizeClasses(block.style?.size ?? 'lg'), getAlignClasses(block.style?.align), block.style?.tone === 'muted' ? 'text-ink/70' : 'text-ink/85')}>
            {block.text}
          </blockquote>
          {block.attribution ? <figcaption className="font-mono text-meta uppercase tracking-meta text-ink/40 mt-3">{block.attribution}</figcaption> : null}
        </figure>
      );

    case 'columns': {
      const columnsClass = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-4',
      }[block.columns.length] ?? 'grid-cols-1 md:grid-cols-2';

      return (
        <div key={`${sectionKey}-columns`} className={cn(`grid ${columnsClass} gap-layout-sm`, getSpacingClasses(block.style?.spacing))}>
          {block.columns.map((column, index) => (
            <div key={`${sectionKey}-column-${index}`} className="flex flex-col gap-3 rounded-sm border border-ink/10 px-layout-sm py-5 bg-ink/2">
              {column.title ? <h4 className="font-mono text-meta uppercase tracking-meta text-ink/50 mb-1">{column.title}</h4> : null}

              {column.blocks && column.blocks.length > 0 ? renderBlocks(column.blocks, `${sectionKey}-column-${index}`) : null}
            </div>
          ))}
        </div>
      );
    }

    case 'grid':
      return (
        <div key={`${sectionKey}-grid`} className={cn('grid grid-cols-1 md:grid-cols-2 gap-layout-sm', getSpacingClasses(block.style?.spacing))}>
          {block.rows.map((row, index) => (
            <div key={`${sectionKey}-grid-${index}`} className="border border-ink/10 p-layout-sm bg-ink/2">
              <span className="font-mono text-meta uppercase tracking-meta text-ink/40 block mb-2">{row.label}</span>
              <span className="font-sans text-sm text-ink/80">{renderTextWithBreaks(row.value)}</span>
            </div>
          ))}
        </div>
      );
  }
}

function renderSectionContent(section: EntryContentSection) {
  if (section.blocks && section.blocks.length > 0) {
    return section.blocks.map((block, index) => renderBlock(block, `${section.eyebrow}-${index}`));
  }

  return (
    <>
      {section.body?.map((paragraph, index) => (
        <p key={`${section.eyebrow}-${index}`} className="font-sans text-ink/70 text-body-lg leading-relaxed mb-stack-sm">
          {renderTextWithBreaks(paragraph)}
        </p>
      ))}

      {section.list && section.list.length > 0 ? (
        <ul className="list-disc list-outside ml-6 font-sans text-ink/70 text-body-lg leading-relaxed mb-stack-sm">
          {section.list.map((item, index) => (
            <li key={`${section.eyebrow}-item-${index}`} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export function ContentLayout({ entry, locale, backTo, backLabel, children, onEnterHover, onEnterReading, onLeaveCursor, onLeaveReading }: ContentLayoutProps) {
  const content = entry.content;
  const headings = content?.sections.map((section) => section.eyebrow) ?? [];

  const sidebarLinks = headings.map((heading, index) => ({
    href: `#${heading.toLowerCase().replace(/[^\w-]/g, '')}`,
    label: heading,
    active: index === 0,
  }));

  return (
    <Section className="grid grid-cols-1 md:grid-cols-[9rem_minmax(0,50rem)] lg:grid-cols-[10rem_minmax(0,50rem)] justify-center gap-layout-md animate-in fade-in duration-base w-full max-w-container-wide mx-auto">
      <aside className="w-full flex flex-col gap-section-sm shrink-0 md:sticky md:top-8 h-fit">
        <Link
          to={backTo}
          className="flex items-center gap-2 text-ink/60 hover:text-ink transition-colors font-mono text-meta uppercase tracking-meta w-fit cursor-none"
          onMouseEnter={onEnterHover}
          onMouseLeave={onLeaveCursor}
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>

        {sidebarLinks.length > 0 && (
          <nav aria-label="Table of contents" className="hidden md:flex flex-col gap-4 font-sans text-sm">
            {sidebarLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn('text-ink/60 hover:text-orange transition-colors cursor-none', link.active && 'text-ink')}
                onMouseEnter={onEnterHover}
                onMouseLeave={onLeaveCursor}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </aside>

      <article className="flex flex-col w-full min-w-0" aria-labelledby="content-title">
        {entry.isLoading && (
          <div role="status" aria-live="polite" className="animate-pulse flex space-x-4">
            <div className="h-4 bg-ink/20 rounded w-3/4"></div>
          </div>
        )}

        {!entry.isLoading && (
          <>
            {content?.tags && content.tags.length > 0 ? <p className="font-mono text-meta uppercase tracking-meta text-ink/50 mb-stack-md">{content.tags.join(' • ')}</p> : null}

            <h1 id="content-title" className="text-title-page font-serif font-normal tracking-normal leading-tight mb-stack-lg">{localize(entry.title, locale)}</h1>
            <img src={entry.coverImage} alt={localize(entry.coverAlt, locale)} fetchPriority="high" decoding="async" className="w-full aspect-[16/10] object-cover mb-section-md bg-ink/5 shadow-soft" />

            {content?.meta && content.meta.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-layout-sm border-b border-ink/10 pb-section-md mb-section-md">
                {content.meta.map((item) => (
                  <div key={item.label} className="flex flex-col gap-3">
                    <span className="font-mono text-meta uppercase tracking-meta text-ink/40">{item.label}</span>
                    <span className="font-sans text-sm text-ink/80">{renderTextWithBreaks(item.value)}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-stack-sm" onMouseEnter={onEnterReading} onMouseLeave={onLeaveReading}>
              {content?.intro?.map((paragraph, index) => (
                <p key={`intro-${index}`} className="font-sans text-ink/70 text-body-lg leading-relaxed mb-stack-sm">
                  {renderTextWithBreaks(paragraph)}
                </p>
              ))}

              {content?.sections.map((section) => {
                const id = section.eyebrow.toLowerCase().replace(/[^\w-]/g, '');

                return (
                  <section key={section.eyebrow} className="flex flex-col">
                    <h2 id={id} className="font-mono text-meta uppercase tracking-meta text-ink/40 mb-stack-md mt-stack-lg scroll-mt-10">
                      {section.eyebrow}
                    </h2>

                    {section.title ? <h3 className="text-title-section font-display font-medium tracking-tight leading-snug mb-stack-sm">{section.title}</h3> : null}

                    {renderSectionContent(section)}
                  </section>
                );
              })}
            </div>
            {children}
          </>
        )}
      </article>
    </Section>
  );
}

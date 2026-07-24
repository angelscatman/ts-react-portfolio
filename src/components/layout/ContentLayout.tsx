import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Section } from '@/components/layout/Section';
import { localize } from '@/lib/localize';
import type { EntryContentDocument, LocalizedText } from '@/types/core/content.types';
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
          <nav className="hidden md:flex flex-col gap-4 font-sans text-sm">
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

      <article className="flex flex-col w-full min-w-0">
        {entry.isLoading && (
          <div className="animate-pulse flex space-x-4">
            <div className="h-4 bg-ink/20 rounded w-3/4"></div>
          </div>
        )}

        {!entry.isLoading && (
          <>
            {content?.tags && content.tags.length > 0 ? <p className="font-mono text-meta uppercase tracking-meta text-ink/50 mb-stack-md">{content.tags.join(' • ')}</p> : null}

            <h1 className="text-title-page font-serif font-normal tracking-normal leading-tight mb-stack-lg">{localize(entry.title, locale)}</h1>
            <img src={entry.coverImage} alt={localize(entry.coverAlt, locale)} className="w-full aspect-[16/10] object-cover mb-section-md bg-ink/5 shadow-soft" />

            {content?.meta && content.meta.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-layout-sm border-b border-ink/10 pb-section-md mb-section-md">
                {content.meta.map((item) => (
                  <div key={item.label} className="flex flex-col gap-3">
                    <span className="font-mono text-meta uppercase tracking-meta text-ink/40">{item.label}</span>
                    <span className="font-sans text-sm text-ink/80">{item.value}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-stack-sm" onMouseEnter={onEnterReading} onMouseLeave={onLeaveReading}>
              {content?.intro?.map((paragraph, index) => (
                <p key={`intro-${index}`} className="font-sans text-ink/70 text-body-lg leading-relaxed mb-stack-sm">
                  {paragraph}
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

                    {section.body.map((paragraph, index) => (
                      <p key={`${section.eyebrow}-${index}`} className="font-sans text-ink/70 text-body-lg leading-relaxed mb-stack-sm">
                        {paragraph}
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

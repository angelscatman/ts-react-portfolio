import { Section } from '@/components/layout/Section';
import { ContentCard } from '@/components/ui/ContentCard';
import { Pill } from '@/components/ui/Pill';
import { StatusState } from '@/components/ui/StatusState';
import { useAppContext } from '@/hooks/app/useAppContext';
import { useCopyService, useUiCopyService } from '@/hooks/app/useAppServices';
import { usePayloadArticles } from '@/hooks/content/usePayloadArticles';
import { useDocumentSeo } from '@/hooks/ui/useDocumentSeo';
import { formatContentDate } from '@/lib/formatContentDate';
import { withLocalePath } from '@/lib/localeRouting';
import { localize } from '@/lib/localize';

export function BlogPage() {
  const { locale } = useAppContext();
  const copyService = useCopyService();
  const uiCopyService = useUiCopyService();
  const payloadArticles = usePayloadArticles(locale);
  const articles = payloadArticles.articles ?? [];
  const blogCopy = copyService.getBlogCopy();
  const cursorCopy = copyService.getCursorCopy();
  const seoCopy = copyService.getSeoCopy();
  const uiCopy = uiCopyService.getUiCopy();
  const pageTitle = localize(blogCopy.heading, locale);

  useDocumentSeo({
    title: localize(seoCopy.blog.title, locale),
    description: localize(seoCopy.blog.description, locale),
    locale,
  });

  return (
    <Section className="flex flex-col mt-section-sm animate-in fade-in duration-base w-full max-w-container-wide mx-auto">
      <h1 className="text-display-page font-serif font-normal leading-none tracking-normal mb-section-md">{pageTitle}</h1>
      {payloadArticles.isLoading ? (
        <StatusState title={localize(blogCopy.emptyTitle, locale)} description={localize(uiCopy.contentStatus.articlesLoading, locale)} />
      ) : payloadArticles.error ? (
        <StatusState title={localize(blogCopy.emptyTitle, locale)} description={localize(uiCopy.contentStatus.articlesLoadError, locale)} />
      ) : articles.length === 0 ? (
        <StatusState title={localize(blogCopy.emptyTitle, locale)} description={localize(blogCopy.emptyDescription, locale)} />
      ) : (
        <Section className="w-full" aria-label="Articles">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-layout-md">
          {articles.map((article, index) => {
            const isExternal = article.destination.type === 'external';
            const href = isExternal ? article.destination.href : withLocalePath(`/articles/${article.slug}`, locale);
            const cursorText = isExternal ? localize(cursorCopy.openNote, locale) : localize(cursorCopy.readArticle, locale);

            return (
              <li key={article.slug} className={index === 1 ? 'md:mt-section-sm' : undefined}>
                <ContentCard
                  alt={article.coverAlt}
                  cursorIcon="arrow"
                  cursorText={cursorText}
                  excerpt={article.excerpt}
                  href={href}
                  image={article.coverImage}
                  isExternal={isExternal}
                  locale={locale}
                  meta={(
                    <Pill tone="muted" className="shrink-0">
                      {formatContentDate(article.publishedAt, locale)}
                    </Pill>
                  )}
                  title={article.title}
                  titleAs="h2"
                  titleClassName="text-xl md:text-2xl"
                />
              </li>
            );
          })}
          </ul>
        </Section>
      )}
    </Section>
  );
}

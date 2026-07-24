import { Section } from '@/components/layout/Section';
import { ContentCard } from '@/components/ui/ContentCard';
import { Pill } from '@/components/ui/Pill';
import { StatusState } from '@/components/ui/StatusState';
import { useAppContext } from '@/hooks/app/useAppContext';
import { useContentService, useCopyService } from '@/hooks/app/useAppServices';
import { useDocumentSeo } from '@/hooks/ui/useDocumentSeo';
import { formatContentDate } from '@/lib/formatContentDate';
import { localize } from '@/lib/localize';

export function BlogPage() {
  const { locale } = useAppContext();
  const contentService = useContentService();
  const copyService = useCopyService();
  const articles = contentService.listArticles();
  const blogCopy = copyService.getBlogCopy();
  const cursorCopy = copyService.getCursorCopy();
  const seoCopy = copyService.getSeoCopy();
  const pageTitle = localize(blogCopy.heading, locale);

  useDocumentSeo({
    title: localize(seoCopy.blog.title, locale),
    description: localize(seoCopy.blog.description, locale),
  });

  return (
    <Section className="flex flex-col mt-section-sm animate-in fade-in duration-base w-full max-w-container-wide mx-auto">
      <h1 className="text-display-page font-serif font-normal leading-none tracking-normal mb-section-md">{pageTitle}</h1>
      {articles.length === 0 ? (
        <StatusState title={localize(blogCopy.emptyTitle, locale)} description={localize(blogCopy.emptyDescription, locale)} />
      ) : (
        <Section className="w-full grid grid-cols-1 md:grid-cols-2 gap-layout-md">
          {articles.map((article, index) => {
            const isExternal = article.destination.type === 'external';
            const href = isExternal ? article.destination.href : `/articles/${article.slug}`;
            const cursorText = isExternal ? localize(cursorCopy.openNote, locale) : localize(cursorCopy.readArticle, locale);

            return (
              <ContentCard
                key={article.slug}
                alt={article.coverAlt}
                className={index === 1 ? 'md:mt-section-sm' : undefined}
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
            );
          })}
        </Section>
      )}
    </Section>
  );
}

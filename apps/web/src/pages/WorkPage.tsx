import { Section } from '@/components/layout/Section';
import { ContentCard } from '@/components/ui/ContentCard';
import { Pill } from '@/components/ui/Pill';
import { SmartLink } from '@/components/ui/SmartLink';
import { StatusState } from '@/components/ui/StatusState';
import { useAppContext } from '@/hooks/app/useAppContext';
import { useContentService, useCopyService, useUiCopyService } from '@/hooks/app/useAppServices';
import { usePayloadProjects } from '@/hooks/content/usePayloadProjects';
import { useDocumentSeo } from '@/hooks/ui/useDocumentSeo';
import { withLocalePath } from '@/lib/localeRouting';
import { localize } from '@/lib/localize';

export function WorkPage() {
  const { locale, onEnterHover, onLeaveCursor } = useAppContext();
  const contentService = useContentService();
  const copyService = useCopyService();
  const uiCopyService = useUiCopyService();
  const cursorCopy = copyService.getCursorCopy();
  const seoCopy = copyService.getSeoCopy();
  const workCopy = copyService.getWorkCopy();
  const uiCopy = uiCopyService.getUiCopy();
  const experienceItems = contentService.getExperienceItems();
  const payloadProjects = usePayloadProjects(locale);
  const allProjects = payloadProjects.projects ?? [];
  const featuredProject = allProjects.find((project) => project.featured) ?? allProjects[0];
  const projects = allProjects.filter((project) => project.slug !== featuredProject?.slug);
  const hasProjects = allProjects.length > 0;

  useDocumentSeo({
    title: localize(seoCopy.work.title, locale),
    description: localize(seoCopy.work.description, locale),
    locale,
  });

  const [heroTitleFirstLine, heroTitleSecondLine] = localize(workCopy.heroTitle, locale).split('\n');
  const [firstName, lastName] = workCopy.name.split('\n');
  const renderNameBlock = (className: string) => (
    <div className={className}>
      <Section className="w-full text-left lg:text-right mb-stack-xs flex flex-col gap-1 items-start lg:items-end">
        <p className="font-mono text-meta uppercase tracking-meta text-ink/60">{localize(workCopy.greeting, locale)}</p>
      </Section>
      <h2 className="text-display-hero font-serif font-normal leading-none tracking-normal w-full text-left lg:text-right">
        {firstName}
        <br />
        {lastName}
      </h2>
      <Section className="w-full text-left lg:text-right mt-stack-sm flex flex-col gap-1 items-start lg:items-end">
        <p className="font-mono text-meta uppercase tracking-meta text-ink/60 max-w-[220px]">{localize(workCopy.tagline, locale)}</p>
      </Section>
    </div>
  );

  const isFeaturedExternal = featuredProject?.destination.type === 'external';
  const featuredHref = featuredProject
    ? isFeaturedExternal
      ? featuredProject.destination.href
      : withLocalePath(`/projects/${featuredProject.slug}`, locale)
    : withLocalePath('/', locale);
  const featuredSrc = featuredProject?.coverImage ?? '';
  const featuredAlt = featuredProject ? localize(featuredProject.coverAlt, locale) : '';
  const featuredCursorText = isFeaturedExternal ? localize(cursorCopy.visitWebsite, locale) : localize(cursorCopy.viewCaseStudy, locale);

  const heroImageElement = (
    <>
      <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-base z-10 mix-blend-multiply pointer-events-none" />
      <img
        src={featuredSrc}
        alt={featuredAlt}
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-slow scale-105 group-hover:scale-100"
      />
    </>
  );

  const heroImageClass = "w-full aspect-[5/4] md:aspect-[16/10] lg:aspect-[4/3] max-h-[58vh] overflow-hidden relative z-10 group bg-ink/5 shadow-soft hover:shadow-card transition-shadow duration-base cursor-none";

  return (
    <Section className="flex flex-col animate-in fade-in duration-base max-w-container-wide mx-auto w-full">
      {renderNameBlock('block lg:hidden w-full mb-stack-md')}

      <div className="flex flex-col md:flex-row justify-between items-start w-full">
        <h1 className="text-display-page lg:text-display-name font-display font-bold leading-none tracking-tight max-w-[10ch]">
          {heroTitleFirstLine}
          <br />
          {heroTitleSecondLine}
        </h1>
      </div>

      {payloadProjects.isLoading ? (
        <StatusState className="mt-section-sm border border-ink/10 bg-ink/5" title={localize(workCopy.emptyProjectsTitle, locale)} description={localize(uiCopy.contentStatus.projectsLoading, locale)} />
      ) : payloadProjects.error ? (
        <StatusState className="mt-section-sm border border-ink/10 bg-ink/5" title={localize(workCopy.emptyProjectsTitle, locale)} description={localize(uiCopy.contentStatus.projectsLoadError, locale)} />
      ) : featuredProject ? (
        <div className="mt-section-sm relative grid grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.9fr)] w-full items-end gap-layout-md">
          <SmartLink href={featuredHref} isExternal={Boolean(isFeaturedExternal)} className={heroImageClass} cursorText={featuredCursorText} cursorIcon={isFeaturedExternal ? 'arrow' : 'eye'} variant="image">
            {heroImageElement}
          </SmartLink>

          <div className="w-full flex flex-col items-start lg:items-end text-left lg:text-right z-20">
            <Section className="relative font-sans w-full lg:max-w-[92%] mb-stack-lg pt-2 ml-auto pr-7 lg:pr-9" aria-label="Experience timeline">
              <div className="absolute right-[9px] top-5 bottom-5 w-px bg-ink/10 pointer-events-none" />
              <ol className="flex flex-col gap-2">
                {experienceItems.map((item) => (
                  <li
                    key={item.year + item.title}
                    className="relative isolate overflow-hidden flex flex-wrap items-center justify-end gap-x-3 gap-y-1 group cursor-none py-3 pl-3 pr-7 rounded-sm -mx-3 text-right transition-[color,box-shadow] duration-500 ease-out hover:text-canvas hover:shadow-soft"
                    onMouseEnter={onEnterHover}
                    onMouseLeave={onLeaveCursor}
                  >
                    <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/2 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-0 w-1/2 origin-right scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />

                    <span className="relative z-10 font-medium group-hover:text-orange transition-colors duration-base uppercase tracking-meta">
                      {localize(item.role, locale)}
                    </span>
                    <span className="relative z-10 font-mono text-meta opacity-40 group-hover:opacity-100 transition-opacity duration-base">·</span>
                    <span className="relative z-10 font-mono text-meta opacity-60 group-hover:opacity-100 group-hover:text-canvas uppercase tracking-meta transition-colors duration-base">{item.title}</span>
                    <Pill tone="muted" className="relative z-10 shrink-0 group-hover:border-canvas/20 group-hover:bg-canvas/10 group-hover:text-canvas">
                      {item.year}
                    </Pill>
                  </li>
                ))}
              </ol>
            </Section>

            {renderNameBlock('hidden lg:block w-full')}
          </div>
        </div>
      ) : (
        <StatusState className="mt-section-sm border border-ink/10 bg-ink/5" title={localize(workCopy.emptyProjectsTitle, locale)} description={localize(workCopy.emptyProjectsDescription, locale)} />
      )}

      {hasProjects && projects.length > 0 && (
        <Section className="mt-section-lg w-full" aria-label="More projects">
          <h2 className="sr-only">More projects</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-layout-md">
          {projects.map((project, index) => {
            const isExternal = project.destination.type === 'external';
            const href = isExternal ? project.destination.href : withLocalePath(`/projects/${project.slug}`, locale);
            const cursorText = isExternal ? localize(cursorCopy.visitWebsite, locale) : localize(cursorCopy.readCase, locale);

            return (
              <li key={project.slug} className={index === 1 ? 'md:mt-section-sm' : undefined}>
                <ContentCard
                  alt={project.coverAlt}
                  cursorIcon={isExternal ? 'arrow' : 'eye'}
                  cursorText={cursorText}
                  excerpt={project.excerpt}
                  href={href}
                  image={project.coverImage}
                  isExternal={isExternal}
                  locale={locale}
                  meta={<Pill tone="muted">{project.publishedAt.substring(0, 4)}</Pill>}
                  title={project.title}
                  titleClassName="text-lg"
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

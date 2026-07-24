import { Section } from '@/components/layout/Section';
import { useAppContext } from '@/hooks/app/useAppContext';
import { useCopyService } from '@/hooks/app/useAppServices';
import { useDocumentSeo } from '@/hooks/ui/useDocumentSeo';
import { localize } from '@/lib/localize';

export function AboutPage() {
  const { locale, onEnterPill, onEnterReading, onLeaveCursor, onLeaveReading } = useAppContext();
  const copyService = useCopyService();
  const aboutCopy = copyService.getAboutCopy();
  const seoCopy = copyService.getSeoCopy();
  const socialLinks = copyService.getSocialLinks();
  const gallerySection = aboutCopy.gallerySections[0];
  const contactLinks = aboutCopy.intro.contactLine.links
    .map((id) => socialLinks.find((link) => link.id === id))
    .filter((link): link is NonNullable<typeof link> => Boolean(link));

  const getLinkCursorText = (href: string) => {
    const normalizedHref = href.toLowerCase();

    if (normalizedHref.includes('linkedin')) {
      return locale === 'es' ? 'Ver LinkedIn' : 'View LinkedIn';
    }

    if (normalizedHref.includes('github')) {
      return locale === 'es' ? 'Ver GitHub' : 'View GitHub';
    }

    if (normalizedHref.startsWith('mailto:')) {
      return locale === 'es' ? 'Enviar email' : 'Send email';
    }

    return locale === 'es' ? 'Abrir enlace' : 'Open link';
  };

  useDocumentSeo({
    title: localize(seoCopy.about.title, locale),
    description: localize(seoCopy.about.description, locale),
  });

  return (
    <Section className="w-full max-w-container-wide mx-auto mt-section-sm animate-in fade-in duration-base">
      <div className="w-full min-w-0">
        <div className="relative mb-section-md">
          <div className="flex flex-col gap-stack-sm">
            <p className="font-mono text-meta uppercase tracking-meta text-ink/30">{localize(aboutCopy.heading, locale)}</p>
            <h1 className="text-title-page font-serif font-medium leading-tight tracking-normal text-ink">{localize(aboutCopy.hero.title, locale)}</h1>
            <p className="font-mono text-meta uppercase tracking-meta text-ink/45">{localize(aboutCopy.hero.subtitle, locale)}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.92fr)] gap-layout-sm items-start">
          <div className="flex flex-col gap-section-sm" onMouseEnter={onEnterReading} onMouseLeave={onLeaveReading}>
            {aboutCopy.intro.paragraphs.map((paragraph, index) => (
              <p key={index} className="font-sans text-ink/70 text-body-lg leading-relaxed">
                {localize(paragraph, locale)}
              </p>
            ))}

            <ul className="mt-stack-sm flex list-disc flex-col gap-3 pl-5 font-sans text-ink/70 text-body-lg leading-relaxed">
              {aboutCopy.intro.bullets.map((bullet, index) => (
                <li key={index} className="pl-1 marker:text-orange">
                  {localize(bullet, locale)}
                </li>
              ))}
            </ul>

            <p className="font-sans text-ink/70 text-body-lg leading-relaxed">
              {localize(aboutCopy.intro.contactLine.prefix, locale)}{' '}
              {contactLinks.map((link, index) => (
                <span key={link.id}>
                  {index > 0 ? ', ' : null}
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="cursor-none text-orange transition-colors hover:text-ink"
                    aria-label={localize(link.ariaLabel, locale)}
                    onMouseEnter={() => onEnterPill(getLinkCursorText(link.href), link.cursorIcon)}
                    onMouseLeave={onLeaveCursor}
                  >
                    {link.id === 'email' ? 'email' : link.label}
                  </a>
                </span>
              ))}
              {localize(aboutCopy.intro.contactLine.suffix, locale)}
            </p>
          </div>

          {gallerySection ? (
            <div className="flex flex-col gap-stack-sm lg:pt-1">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-meta uppercase tracking-meta text-ink/40">
                  {gallerySection.number}. {localize(gallerySection.label, locale)}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {gallerySection.images[0] ? (
                  <div
                    className="group cursor-none w-full md:w-[58%]"
                    onMouseEnter={() => onEnterPill(localize(gallerySection.images[0].cursorText, locale), gallerySection.images[0].cursorIcon ?? 'none', false)}
                    onMouseLeave={onLeaveCursor}
                  >
                    <div className="relative aspect-[5/4] overflow-hidden bg-ink/5 shadow-soft group-hover:shadow-card transition-shadow duration-base">
                      <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-base z-10 mix-blend-multiply pointer-events-none" />
                      <img
                        src={gallerySection.images[0].src}
                        alt={localize(gallerySection.images[0].alt, locale)}
                        className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-slow group-hover:scale-105"
                      />
                    </div>
                  </div>
                ) : null}

                {gallerySection.images[1] ? (
                  <div
                    className="group cursor-none w-[calc(50%_-_0.375rem)] md:w-[38%]"
                    onMouseEnter={() => onEnterPill(localize(gallerySection.images[1].cursorText, locale), gallerySection.images[1].cursorIcon ?? 'none', false)}
                    onMouseLeave={onLeaveCursor}
                  >
                    <div className="relative aspect-square overflow-hidden bg-ink/5 shadow-soft group-hover:shadow-card transition-shadow duration-base">
                      <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-base z-10 mix-blend-multiply pointer-events-none" />
                      <img
                        src={gallerySection.images[1].src}
                        alt={localize(gallerySection.images[1].alt, locale)}
                        className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-slow group-hover:scale-105"
                      />
                    </div>
                  </div>
                ) : null}

                {gallerySection.images[2] ? (
                  <div
                    className="group cursor-none w-[calc(50%_-_0.375rem)] md:w-[38%] md:ml-auto"
                    onMouseEnter={() => onEnterPill(localize(gallerySection.images[2].cursorText, locale), gallerySection.images[2].cursorIcon ?? 'none', false)}
                    onMouseLeave={onLeaveCursor}
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-ink/5 shadow-soft group-hover:shadow-card transition-shadow duration-base">
                      <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-base z-10 mix-blend-multiply pointer-events-none" />
                      <img
                        src={gallerySection.images[2].src}
                        alt={localize(gallerySection.images[2].alt, locale)}
                        className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-slow group-hover:scale-105"
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

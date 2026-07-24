import type { ReactNode } from 'react';

import { localize } from '@/lib/localize';
import type { LocalizedText } from '@/types/core/content.types';
import type { Locale } from '@/types/ui/locale.types';
import { cn } from '@/utils/cn';
import { SmartLink } from '@/components/ui/SmartLink';

type ContentCardProps = {
  alt: LocalizedText;
  className?: string;
  cursorIcon: 'arrow' | 'eye';
  cursorText: string;
  excerpt: LocalizedText;
  href: string;
  image: string;
  isExternal: boolean;
  locale: Locale;
  meta: ReactNode;
  title: LocalizedText;
  titleAs?: 'h2' | 'h3';
  titleClassName?: string;
};

export function ContentCard({ alt, className, cursorIcon, cursorText, excerpt, href, image, isExternal, locale, meta, title, titleAs: Title = 'h3', titleClassName }: ContentCardProps) {
  return (
    <SmartLink href={href} isExternal={isExternal} className={cn('flex flex-col gap-4 group cursor-none', className)} cursorText={cursorText} cursorIcon={cursorIcon} variant="image">
      <div className="pointer-events-none relative aspect-[5/4] md:aspect-[4/3] overflow-hidden bg-ink/5 shadow-soft group-hover:shadow-card transition-shadow duration-base">
        <img src={image} alt={localize(alt, locale)} className="pointer-events-none h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-slow group-hover:scale-105" />
      </div>
      <div className="flex justify-between items-start font-sans gap-6">
        <div>
          <Title className={cn('font-medium group-hover:text-orange transition-colors', titleClassName)}>{localize(title, locale)}</Title>
          <p className="text-ink/60 text-sm md:text-base mt-3 leading-relaxed max-w-2xl">{localize(excerpt, locale)}</p>
        </div>
        {meta}
      </div>
    </SmartLink>
  );
}

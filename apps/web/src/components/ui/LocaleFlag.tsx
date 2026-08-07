import type { Locale } from '@/types/ui/locale.types';
import { cn } from '@/utils/cn';

type LocaleFlagProps = {
  locale: Locale;
  className?: string;
};

export function LocaleFlag({ locale, className = '' }: LocaleFlagProps) {
  if (locale === 'en') {
    return (
      <svg viewBox="0 0 24 16" aria-hidden="true" className={cn('h-3.5 w-5 overflow-hidden rounded-[2px]', className)}>
        <rect width="24" height="16" fill="#f8f8f8" />
        <path d="M0 0h24v2H0zm0 4h24v2H0zm0 4h24v2H0zm0 4h24v2H0z" fill="#b22234" />
        <rect width="10.5" height="8.5" fill="#3c3b6e" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" className={cn('h-3.5 w-5 overflow-hidden rounded-[2px]', className)}>
      <rect width="8" height="16" fill="#006847" />
      <rect x="8" width="8" height="16" fill="#f8f8f8" />
      <rect x="16" width="8" height="16" fill="#ce1126" />
      <circle cx="12" cy="8" r="1.3" fill="#a67c00" />
    </svg>
  );
}

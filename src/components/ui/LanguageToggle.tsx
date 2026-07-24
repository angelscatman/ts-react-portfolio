import type { Locale } from '@/types/ui/locale.types';
import { Button } from '@/components/ui/Button';
import { LocaleFlag } from '@/components/ui/LocaleFlag';

type LanguageToggleProps = {
  ariaLabel: string;
  locale: Locale;
  onClick: () => void;
};

export function LanguageToggle({ ariaLabel, locale, onClick }: LanguageToggleProps) {
  return (
    <Button variant="ghost" size="sm" aria-label={ariaLabel} className="min-w-16 h-8 text-meta" onClick={onClick}>
      <LocaleFlag locale={locale} className="grayscale transition-all duration-base group-hover:grayscale-0" />
      <span>{locale.toUpperCase()}</span>
    </Button>
  );
}

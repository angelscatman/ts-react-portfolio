import type { LocalizedText } from '@/types/core/content.types';
import type { Locale } from '@/types/ui/locale.types';

export function localize(text: LocalizedText, locale: Locale) {
  return text[locale] ?? text.es;
}

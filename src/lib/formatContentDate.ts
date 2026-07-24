import { format } from 'date-fns';
import { enUS, es } from 'date-fns/locale';

import type { Locale } from '@/types/ui/locale.types';

const dateLocales = {
  es,
  en: enUS,
};

export function formatContentDate(date: string, locale: Locale) {
  return format(new Date(`${date}T00:00:00`), 'MMMM yyyy', { locale: dateLocales[locale] });
}

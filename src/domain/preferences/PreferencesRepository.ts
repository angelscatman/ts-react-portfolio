import type { Locale } from '@/types/ui/locale.types';
import type { ThemeMode } from '@/types/ui/preferences.types';

export interface PreferencesRepository {
  getLocale(): Locale | null;
  setLocale(locale: Locale): void;
  getTheme(): ThemeMode | null;
  setTheme(theme: ThemeMode): void;
}

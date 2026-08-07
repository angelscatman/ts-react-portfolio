import type { PreferencesRepository } from '@/domain/preferences/PreferencesRepository';
import type { Locale } from '@/types/ui/locale.types';
import type { ThemeMode } from '@/types/ui/preferences.types';

export class PreferencesService {
  constructor(private readonly repository: PreferencesRepository) {}

  getLocale(defaultLocale: Locale) {
    return this.repository.getLocale() ?? defaultLocale;
  }

  saveLocale(locale: Locale) {
    this.repository.setLocale(locale);
  }

  getTheme(defaultTheme: ThemeMode) {
    return this.repository.getTheme() ?? defaultTheme;
  }

  saveTheme(theme: ThemeMode) {
    this.repository.setTheme(theme);
  }
}

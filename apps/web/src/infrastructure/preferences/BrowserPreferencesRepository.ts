import type { PreferencesRepository } from '@/domain/preferences/PreferencesRepository';
import type { StorageAdapter } from '@/infrastructure/storage/StorageAdapter';
import type { Locale } from '@/types/ui/locale.types';
import type { ThemeMode } from '@/types/ui/preferences.types';

const localeStorageKey = 'portfolio-locale';
const themeStorageKey = 'portfolio-theme';

export class BrowserPreferencesRepository implements PreferencesRepository {
  constructor(private readonly storage: StorageAdapter) {}

  getLocale() {
    const locale = this.storage.getItem(localeStorageKey);

    return locale === 'es' || locale === 'en' ? locale : null;
  }

  setLocale(locale: Locale) {
    this.storage.setItem(localeStorageKey, locale);
  }

  getTheme() {
    const theme = this.storage.getItem(themeStorageKey);

    return theme === 'light' || theme === 'dark' ? (theme as ThemeMode) : null;
  }

  setTheme(theme: ThemeMode) {
    this.storage.setItem(themeStorageKey, theme);
  }
}

import { useEffect, useState } from 'react';

import type { PreferencesService } from '@/domain/preferences/PreferencesService';
import type { ThemeMode } from '@/types/ui/preferences.types';

function applyTheme(theme: ThemeMode) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

function getSystemTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme(preferencesService: PreferencesService) {
  const [theme, setTheme] = useState<ThemeMode>(() => preferencesService.getTheme(getSystemTheme()));

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const updateTheme = (nextTheme: ThemeMode) => {
    applyTheme(nextTheme);
    preferencesService.saveTheme(nextTheme);
    setTheme(nextTheme);
  };

  return {
    theme,
    isDark: theme === 'dark',
    setTheme: updateTheme,
  };
}

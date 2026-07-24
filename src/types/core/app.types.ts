import type { CursorHandlers, CursorState } from '@/types/ui/cursor.types';
import type { Locale } from '@/types/ui/locale.types';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export type AppContextValue = CursorHandlers & {
  locale: Locale;
  isDark: boolean;
  cursorState: CursorState;
  mousePosition: { x: number; y: number };
  toggleLocale: () => void;
  toggleTheme: () => void;
  showNotification: (key: string, type?: NotificationType) => void;
};

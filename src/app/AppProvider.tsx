import { type ReactNode, useState } from 'react';
import { sileo, Toaster } from 'sileo';

import { useAppServices } from '@/hooks/app/useAppServices';
import { useMousePosition } from '@/hooks/ui/useMousePosition';
import { usePortfolioCursor } from '@/hooks/ui/usePortfolioCursor';
import { useTheme } from '@/hooks/ui/useTheme';
import { localize } from '@/lib/localize';
import type { NotificationType } from '@/types/core/app.types';
import type { Locale } from '@/types/ui/locale.types';
import { AppContext } from '@/app/AppContext';

type AppProviderProps = {
  children: ReactNode;
};

function getToastTheme(isDark: boolean) {
  return {
    fill: isDark ? '#1C1C1C' : '#E5E3DC',
    title: 'text-ink! text-center!',
    description: 'text-ink/70! text-center!',
    badge: 'bg-ink! text-canvas!',
  };
}

export function AppProvider({ children }: AppProviderProps) {
  const { contentService, copyService, preferencesService } = useAppServices();
  const defaultLocale = contentService.getSiteContent().defaultLocale;
  const notifications = copyService.getNotifications();
  const [locale, setLocale] = useState<Locale>(() => preferencesService.getLocale(defaultLocale));
  const { isDark, setTheme } = useTheme(preferencesService);
  const mousePosition = useMousePosition();
  const { cursorState, enterPill, enterHover, enterHoverLarge, enterReading, leaveReading, leaveCursor } = usePortfolioCursor();

  const showNotification = (key: string, type: NotificationType = 'info', nextIsDark = isDark) => {
    const notification = notifications[key];
    const toastTheme = getToastTheme(nextIsDark);

    if (!notification) {
      return;
    }

    sileo[type]({
      title: localize(notification.title, locale),
      description: localize(notification.description, locale),
      duration: 2800,
      fill: toastTheme.fill,
      roundness: 18,
      styles: {
        badge: toastTheme.badge,
        title: toastTheme.title,
        description: toastTheme.description,
      },
    });
  };

  const toggleLocale = () => {
    const nextLocale: Locale = locale === 'es' ? 'en' : 'es';

    setLocale(nextLocale);
    preferencesService.saveLocale(nextLocale);

    const notification = notifications.localeChanged;
    const toastTheme = getToastTheme(isDark);

    sileo.info({
      title: localize(notification.title, nextLocale),
      description: localize(notification.description, nextLocale),
      duration: 2800,
      fill: toastTheme.fill,
      roundness: 18,
      styles: {
        badge: toastTheme.badge,
        title: toastTheme.title,
        description: toastTheme.description,
      },
    });
  };

  const toggleTheme = () => {
    const nextIsDark = !isDark;

    setTheme(nextIsDark ? 'dark' : 'light');
    showNotification('themeChanged', 'info', nextIsDark);
  };
  const toasterTheme = getToastTheme(isDark);

  return (
    <AppContext.Provider
      value={{
        locale,
        isDark,
        cursorState,
        mousePosition,
        toggleLocale,
        toggleTheme,
        showNotification,
        onEnterPill: enterPill,
        onEnterHover: enterHover,
        onEnterHoverLarge: enterHoverLarge,
        onEnterReading: enterReading,
        onLeaveReading: leaveReading,
        onLeaveCursor: leaveCursor,
      }}
    >
      {children}
      <Toaster
        key={isDark ? 'dark' : 'light'}
        position="bottom-right"
        offset={24}
        options={{
          fill: toasterTheme.fill,
          roundness: 18,
          styles: {
            badge: toasterTheme.badge,
            title: toasterTheme.title,
            description: toasterTheme.description,
          },
        }}
      />
    </AppContext.Provider>
  );
}

import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect } from 'react';
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { useAppContext } from '@/hooks/app/useAppContext';
import { getLocaleRedirectPath, isLocale } from '@/lib/localeRouting';

export function AppLayout() {
  const location = useLocation();
  const { locale: currentLocale, cursorState, mousePosition, onLeaveCursor, onLeaveReading, setLocale } = useAppContext();
  const { locale } = useParams();

  useEffect(() => {
    if (isLocale(locale) && locale !== currentLocale) {
      setLocale(locale);
    }
  }, [currentLocale, locale, setLocale]);

  const resetCursor = useCallback(() => {
    onLeaveReading();
    onLeaveCursor();
  }, [onLeaveCursor, onLeaveReading]);

  useEffect(() => {
    window.addEventListener('blur', resetCursor);
    document.addEventListener('mouseleave', resetCursor);

    return () => {
      window.removeEventListener('blur', resetCursor);
      document.removeEventListener('mouseleave', resetCursor);
    };
  }, [resetCursor]);

  useEffect(() => {
    resetCursor();
  }, [location.pathname, resetCursor]);

  if (!isLocale(locale)) {
    return <Navigate to={getLocaleRedirectPath(location.pathname, currentLocale)} replace />;
  }

  return (
    <div className="min-h-screen bg-canvas text-ink px-page-x py-page-y font-sans flex flex-col overflow-x-hidden">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <CustomCursor cursorState={cursorState} mousePosition={mousePosition} />
      <Header />

      <main id="main-content" className="flex-1 relative w-full flex flex-col" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="flex flex-1 flex-col"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

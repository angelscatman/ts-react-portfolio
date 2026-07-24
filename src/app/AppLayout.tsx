import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { useAppContext } from '@/hooks/app/useAppContext';

export function AppLayout() {
  const location = useLocation();
  const { cursorState, mousePosition, onLeaveCursor, onLeaveReading } = useAppContext();

  const resetCursor = useCallback(() => {
    onLeaveReading();
    onLeaveCursor();
  }, [onLeaveCursor, onLeaveReading]);

  useEffect(() => {
    resetCursor();
  }, [location.pathname, resetCursor]);

  useEffect(() => {
    window.addEventListener('blur', resetCursor);
    document.addEventListener('mouseleave', resetCursor);

    return () => {
      window.removeEventListener('blur', resetCursor);
      document.removeEventListener('mouseleave', resetCursor);
    };
  }, [resetCursor]);

  return (
      <div className="min-h-screen bg-canvas text-ink px-page-x py-page-y font-sans flex flex-col overflow-x-hidden">
      <CustomCursor cursorState={cursorState} mousePosition={mousePosition} />
      <Header />

      <main className="flex-1 relative w-full flex flex-col">
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

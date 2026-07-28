import { motion } from 'motion/react';

import { cursorIconRegistry } from '@/lib/cursorIconRegistry';
import type { CursorState } from '@/types/ui/cursor.types';
import { cn } from '@/utils/cn';

type CustomCursorProps = {
  cursorState: CursorState;
  mousePosition: { x: number; y: number };
};

export function CustomCursor({ cursorState, mousePosition }: CustomCursorProps) {
  const visualVariant = cursorState.selecting ? 'default' : cursorState.variant;
  const shouldBlend = cursorState.selecting || visualVariant === 'pill' ? false : cursorState.blend;
  const isPrecisionMode = cursorState.selecting || cursorState.reading;
  const CursorGlyph = cursorState.icon === 'none' ? null : cursorIconRegistry[cursorState.icon];

  return (
    <motion.div
      className={cn('fixed top-0 left-0 pointer-events-none z-50 hidden md:block', shouldBlend && 'mix-blend-difference')}
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      transition={isPrecisionMode ? { type: 'tween', duration: 0.02, ease: 'linear' } : { type: 'spring', stiffness: 880, damping: 46, mass: 0.42 }}
    >
      <motion.div
        className="flex items-center justify-center bg-orange text-cursor-ink whitespace-nowrap overflow-hidden origin-center rounded-full pointer-events-none shadow-cursor ring-1 ring-canvas/50"
        animate={{
          x: '-50%',
          y: '-50%',
          width: visualVariant === 'pill' ? 'auto' : visualVariant === 'hoverLarge' ? 24 : visualVariant === 'hover' ? 16 : 12,
          height: visualVariant === 'pill' ? 32 : visualVariant === 'hoverLarge' ? 24 : visualVariant === 'hover' ? 16 : 12,
          paddingLeft: visualVariant === 'pill' ? 16 : 0,
          paddingRight: visualVariant === 'pill' ? 16 : 0,
          borderRadius: 9999,
        }}
      >
        {visualVariant === 'pill' && (
          <div className="flex items-center gap-2 pointer-events-none">
            {CursorGlyph ? <CursorGlyph className="w-3.5 h-3.5" /> : null}
            {cursorState.text && (
              <span className="font-mono text-meta uppercase font-bold tracking-meta pointer-events-none">
                {cursorState.text}
              </span>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

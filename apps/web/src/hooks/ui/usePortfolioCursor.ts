import { useCallback, useEffect, useRef, useState } from 'react';

import type { CursorIcon, CursorState } from '@/types/ui/cursor.types';

export function usePortfolioCursor() {
  const isPointerDown = useRef(false);
  const isSelectingText = useRef(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    variant: 'default',
    text: '',
    icon: 'none',
    blend: true,
    reading: false,
    selecting: false,
  });

  useEffect(() => {
    const syncSelectionState = () => {
      const selection = window.getSelection();
      const isSelecting = Boolean(selection && !selection.isCollapsed && selection.toString().trim().length > 0);
      isSelectingText.current = isSelecting;

      setCursorState((current) => {
        if (current.selecting === isSelecting && (!isSelecting || current.variant === 'default')) {
          return current;
        }

        if (isSelecting) {
          return {
            variant: 'default',
            text: '',
            icon: 'none',
            blend: false,
            reading: current.reading,
            selecting: true,
          };
        }

        return {
          ...current,
          selecting: false,
        };
      });
    };

    const handlePointerDown = () => {
      isPointerDown.current = true;
    };
    const handlePointerUp = () => {
      isPointerDown.current = false;
      window.requestAnimationFrame(syncSelectionState);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('blur', handlePointerUp);
    document.addEventListener('selectionchange', syncSelectionState);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('blur', handlePointerUp);
      document.removeEventListener('selectionchange', syncSelectionState);
    };
  }, []);

  const enterPill = useCallback((text: string, icon: CursorIcon = 'none', blend = true) => {
    if (isPointerDown.current || isSelectingText.current) {
      return;
    }

    setCursorState((current) => ({ variant: 'pill', text, icon, blend, reading: current.reading, selecting: current.selecting }));
  }, []);

  const enterHover = useCallback(() => {
    if (isPointerDown.current || isSelectingText.current) {
      return;
    }

    setCursorState((current) => ({ variant: 'hover', text: '', icon: 'none', blend: true, reading: current.reading, selecting: current.selecting }));
  }, []);

  const enterHoverLarge = useCallback(() => {
    if (isPointerDown.current || isSelectingText.current) {
      return;
    }

    setCursorState((current) => ({ variant: 'hoverLarge', text: '', icon: 'none', blend: true, reading: current.reading, selecting: current.selecting }));
  }, []);

  const enterReading = useCallback(() => {
    setCursorState((current) => {
      if (current.selecting) {
        return current;
      }

      if (current.reading && current.variant === 'default' && current.blend === false) {
        return current;
      }

      return {
        variant: 'default',
        text: '',
        icon: 'none',
        blend: false,
        reading: true,
        selecting: current.selecting,
      };
    });
  }, []);

  const leaveCursor = useCallback(() => {
    setCursorState((current) => {
      if (current.reading) {
        return {
          variant: 'default',
          text: '',
          icon: 'none',
          blend: false,
          reading: true,
          selecting: current.selecting,
        };
      }

      return {
        variant: 'default',
        text: '',
        icon: 'none',
        blend: true,
        reading: false,
        selecting: current.selecting,
      };
    });
  }, []);

  const leaveReading = useCallback(() => {
    setCursorState((current) => ({
      variant: 'default',
      text: '',
      icon: 'none',
      blend: true,
      reading: false,
      selecting: current.selecting,
    }));
  }, []);

  return {
    cursorState,
    enterPill,
    enterHover,
    enterHoverLarge,
    enterReading,
    leaveReading,
    leaveCursor,
  };
}

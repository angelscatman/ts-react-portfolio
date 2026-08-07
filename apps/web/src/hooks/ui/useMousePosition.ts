import { useEffect, useRef, useState } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const latestPositionRef = useRef(mousePosition);

  useEffect(() => {
    const flushMousePosition = () => {
      frameRef.current = null;
      setMousePosition(latestPositionRef.current);
    };

    const updateMousePosition = (event: PointerEvent) => {
      latestPositionRef.current = { x: event.clientX, y: event.clientY };

      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(flushMousePosition);
    };

    window.addEventListener('pointermove', updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener('pointermove', updateMousePosition);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return mousePosition;
}

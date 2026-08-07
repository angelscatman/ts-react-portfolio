import { useEffect, useState } from 'react';

export function useRotatingIndex(items: unknown[], delay = 3000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    const interval = window.setInterval(() => {
      setIndex((previousIndex) => (previousIndex + 1) % items.length);
    }, delay);

    return () => window.clearInterval(interval);
  }, [delay, items.length]);

  return index;
}

import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type PillTone = 'default' | 'muted' | 'accent';

type PillProps = {
  children: ReactNode;
  tone?: PillTone;
  className?: string;
  as?: 'span' | 'div';
};

const toneClasses: Record<PillTone, string> = {
  default: 'border-ink/15 bg-transparent text-ink/80',
  muted: 'border-ink/10 bg-ink/5 text-ink/60',
  accent: 'border-orange/20 bg-orange/10 text-orange',
};

export function Pill({ children, tone = 'default', className = '', as: Component = 'span' }: PillProps) {
  return (
    <Component
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-meta font-mono uppercase tracking-meta',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </Component>
  );
}

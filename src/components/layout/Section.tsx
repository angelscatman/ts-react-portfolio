import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type SectionProps = {
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div';
};

export function Section({ children, className = '', as: Component = 'section' }: SectionProps) {
  return <Component className={cn(className)}>{children}</Component>;
}

import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils/cn';

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: 'section' | 'div';
};

export function Section({ children, className = '', as: Component = 'section', ...props }: SectionProps) {
  return <Component className={cn(className)} {...props}>{children}</Component>;
}

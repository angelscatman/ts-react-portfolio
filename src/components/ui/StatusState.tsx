import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type StatusStateProps = {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function StatusState({ title, description, className }: StatusStateProps) {
  return (
    <div className={cn('flex min-h-[38vh] flex-col items-center justify-center gap-stack-sm p-layout-sm text-center', className)}>
      <p className="font-mono text-meta uppercase tracking-meta text-ink/50">{title}</p>
      {description && <p className="max-w-md font-sans text-body-lg leading-relaxed text-ink/70">{description}</p>}
    </div>
  );
}

import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useAppContext } from '@/hooks/app/useAppContext';
import type { CursorIcon } from '@/types/ui/cursor.types';

type SmartLinkProps = {
  children: ReactNode;
  className?: string;
  cursorIcon?: CursorIcon;
  cursorText?: string;
  href: string;
  isExternal: boolean;
  variant?: 'link' | 'image';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function SmartLink({ children, className, cursorIcon = 'arrow', cursorText, href, isExternal, variant = 'link', onMouseEnter, onMouseLeave }: SmartLinkProps) {
  const { onEnterPill, onLeaveCursor } = useAppContext();
  const blendCursor = variant !== 'image';

  const handleMouseEnter = () => {
    if (cursorText) {
      onEnterPill(cursorText, cursorIcon, blendCursor);
    }

    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    if (cursorText) {
      onLeaveCursor();
    }

    onMouseLeave?.();
  };

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </Link>
  );
}

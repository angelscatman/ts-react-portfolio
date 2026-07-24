import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils/cn';

type ButtonVariant = 'outline' | 'ghost' | 'icon' | 'toggle';
type ButtonSize = 'sm' | 'md' | 'icon';

type ButtonBaseProps = {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  isActive?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    as?: 'button';
  };

type ButtonAsAnchorProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
    as: 'a';
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const variantClasses: Record<ButtonVariant, string> = {
  outline: 'border border-ink/15 hover:bg-ink hover:text-canvas',
  ghost: 'border border-ink/20 hover:bg-ink hover:text-canvas',
  icon: 'border border-ink/20 hover:bg-ink hover:text-canvas',
  toggle: 'border',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1 text-[0.65rem]',
  md: 'px-4 py-2 text-meta',
  icon: 'p-1.5',
};

export function Button(props: ButtonProps) {
  const { as = 'button', children, className, icon, isActive = false, size = 'md', variant = 'outline', ...elementProps } = props;
  const buttonClassName = cn(
    'group inline-flex items-center justify-center rounded-full font-mono uppercase tracking-meta transition-colors cursor-none',
    children ? 'gap-2' : undefined,
    variantClasses[variant],
    sizeClasses[size],
    variant === 'toggle' && (isActive ? 'border-ink bg-ink text-canvas' : 'border-ink/10 text-ink/50 hover:border-ink/25 hover:text-ink'),
    className,
  );

  if (as === 'a') {
    return (
      <a className={buttonClassName} {...(elementProps as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {icon}
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = elementProps as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type={type} className={buttonClassName} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
}

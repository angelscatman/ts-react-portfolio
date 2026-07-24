import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/Button';

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  ariaLabel: string;
  className?: string;
  onChange: (value: string) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  options: SelectOption[];
  value: string;
};

export function Select({ ariaLabel, className, onChange, onMouseEnter, onMouseLeave, options, value }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (nextValue: string) => {
    onChange(nextValue);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={cn('relative inline-flex', className)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        className="min-w-40 justify-between hover:bg-transparent hover:text-ink"
        icon={<ChevronDown className={cn('h-4 w-4 transition-transform duration-base', isOpen && 'rotate-180')} />}
        onClick={() => setIsOpen((current) => !current)}
      >
        {selectedOption?.label}
      </Button>

      {isOpen && (
        <div role="listbox" aria-label={ariaLabel} className="absolute right-0 top-full z-50 mt-2 min-w-full overflow-hidden rounded-2xl border border-ink/10 bg-canvas/95 py-1 shadow-soft backdrop-blur">
          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={cn(
                  'group relative isolate flex w-full cursor-none overflow-hidden px-4 py-3 text-left font-mono text-meta uppercase tracking-meta transition-colors duration-500 ease-out hover:text-orange',
                  isSelected ? 'text-orange' : 'text-ink/70',
                )}
                onClick={() => handleSelect(option.value)}
              >
                <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/2 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-0 w-1/2 origin-right scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="relative z-10 whitespace-nowrap">{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

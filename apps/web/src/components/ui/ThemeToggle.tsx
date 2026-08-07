import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/Button';

type ThemeToggleProps = {
  ariaLabel: string;
  isDark: boolean;
  onClick: () => void;
};

export function ThemeToggle({ ariaLabel, isDark, onClick }: ThemeToggleProps) {
  return (
    <Button variant="icon" size="icon" aria-label={ariaLabel} className="w-8 h-8" onClick={onClick}>
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </Button>
  );
}

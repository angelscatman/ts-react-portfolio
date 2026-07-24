import { NavLink, useLocation } from 'react-router-dom';

import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useAppContext } from '@/hooks/app/useAppContext';
import { useContentService, useCopyService } from '@/hooks/app/useAppServices';
import { useRotatingIndex } from '@/hooks/ui/useRotatingIndex';
import { localize } from '@/lib/localize';
import { cn } from '@/utils/cn';

export function Header() {
  const location = useLocation();
  const { locale, isDark, onEnterHoverLarge, onLeaveCursor, toggleLocale, toggleTheme } = useAppContext();
  const contentService = useContentService();
  const copyService = useCopyService();
  const siteContent = contentService.getSiteContent();
  const navigation = copyService.getNavigation();
  const titleIndex = useRotatingIndex(siteContent.titles, 3000);

  return (
    <header className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-x-4 gap-y-3 pb-4 border-b border-ink/10 mb-section-sm">
      <div className="flex min-w-0 items-baseline gap-3">
        <NavLink to="/" className="font-display font-bold text-lg md:text-xl tracking-tight hover:text-orange transition-colors cursor-none shrink-0" onMouseEnter={onEnterHoverLarge} onMouseLeave={onLeaveCursor}>
          {siteContent.brand}
        </NavLink>
        <div className="font-mono text-meta text-ink/60 transition-opacity duration-base hidden lg:block w-72 uppercase tracking-meta truncate">
          - {localize(siteContent.titles[titleIndex], locale)}
        </div>
      </div>

      <nav className="col-span-2 row-start-2 flex items-center justify-between md:col-span-1 md:row-start-auto md:justify-center md:gap-8 font-mono text-meta tracking-meta uppercase">
        {navigation.items.map((item) => {
          const isActive = item.activePaths.some((path) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path)));

          return (
            <NavLink key={item.to} to={item.to} className={cn(isActive ? 'text-orange' : 'text-ink/60 hover:text-ink', 'transition-colors cursor-none')} onMouseEnter={onEnterHoverLarge} onMouseLeave={onLeaveCursor}>
              {item.label[locale]}
            </NavLink>
          );
        })}
      </nav>

      <div className="flex items-center justify-end gap-2">
        <div onMouseEnter={onEnterHoverLarge} onMouseLeave={onLeaveCursor}>
          <LanguageToggle locale={locale} ariaLabel={localize(locale === 'es' ? navigation.languageToggle.toEnglish : navigation.languageToggle.toSpanish, locale)} onClick={toggleLocale} />
        </div>
        <div onMouseEnter={onEnterHoverLarge} onMouseLeave={onLeaveCursor}>
          <ThemeToggle isDark={isDark} ariaLabel={localize(isDark ? navigation.themeToggle.toLight : navigation.themeToggle.toDark, locale)} onClick={toggleTheme} />
        </div>
      </div>
    </header>
  );
}

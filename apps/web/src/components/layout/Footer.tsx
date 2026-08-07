import { Github, Linkedin, Mail } from 'lucide-react';

import { useAppContext } from '@/hooks/app/useAppContext';
import { useCopyService } from '@/hooks/app/useAppServices';
import { localize } from '@/lib/localize';

const icons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export function Footer() {
  const { locale, onEnterHoverLarge, onLeaveCursor } = useAppContext();
  const copyService = useCopyService();
  const footer = copyService.getFooter();
  const socialLinks = copyService.getSocialLinks();

  return (
    <footer className="mt-24 md:mt-32 border-t border-ink/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="font-mono text-meta uppercase tracking-meta text-ink/60">{localize(footer.copyright, locale)}</div>
      <nav aria-label="Social links" className="flex items-center gap-6">
        {socialLinks.map((link) => {
          const Icon = icons[link.id];
          const isExternal = link.href.startsWith('http');

          return (
            <a
              key={link.id}
              href={link.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
              aria-label={localize(link.ariaLabel, locale)}
              className="hover:text-orange transition-colors cursor-none"
              onMouseEnter={onEnterHoverLarge}
              onMouseLeave={onLeaveCursor}
            >
              <Icon aria-hidden="true" className="w-5 h-5" />
            </a>
          );
        })}
      </nav>
    </footer>
  );
}

import { Link } from 'react-router-dom';

import { Section } from '@/components/layout/Section';
import { useAppContext } from '@/hooks/app/useAppContext';
import { useCopyService } from '@/hooks/app/useAppServices';
import { useDocumentSeo } from '@/hooks/ui/useDocumentSeo';
import { localize } from '@/lib/localize';
import type { ErrorPageKind } from '@/types/core/copy.types';

type ErrorPageProps = {
  kind?: ErrorPageKind;
};

export function ErrorPage({ kind = 'generic' }: ErrorPageProps) {
  const { locale, onEnterHover, onLeaveCursor } = useAppContext();
  const copyService = useCopyService();
  const errorsCopy = copyService.getErrorsCopy();
  const error = errorsCopy[kind] ?? errorsCopy.generic;

  useDocumentSeo({
    title: localize(error.title, locale),
    description: localize(error.description, locale),
  });

  return (
    <Section className="flex flex-1 flex-col items-center justify-center gap-stack-sm min-h-[52vh] animate-in fade-in duration-base text-center w-full">
      <p className="font-mono text-meta uppercase tracking-meta text-ink/60">{error.code}</p>
      <h1 className="max-w-3xl text-display-page font-serif font-normal leading-none tracking-normal">{localize(error.title, locale)}</h1>
      <p className="max-w-md font-sans text-body-lg leading-relaxed text-ink/60">{localize(error.description, locale)}</p>
      <Link to={error.actionHref} className="mt-stack-xs font-mono text-meta uppercase tracking-meta text-orange hover:text-ink transition-colors w-fit cursor-none" onMouseEnter={onEnterHover} onMouseLeave={onLeaveCursor}>
        {localize(error.actionLabel, locale)}
      </Link>
    </Section>
  );
}

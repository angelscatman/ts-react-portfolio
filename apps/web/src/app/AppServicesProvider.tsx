import { type ReactNode, startTransition, useEffect, useMemo, useState } from 'react';

import { AppServicesContext } from '@/app/AppServicesContext';
import { createAppServices } from '@/app/createAppServices';
import { loadPayloadAppData, type PayloadAppData } from '@/infrastructure/payload/loadPayloadAppData';
import { LocalUiCopyRepository } from '@/infrastructure/ui-copy/LocalUiCopyRepository';
import { getLocaleFromPathname } from '@/lib/localeRouting';
import { localize } from '@/lib/localize';

const bootstrapUiCopy = new LocalUiCopyRepository().getUiCopy();

type AppServicesProviderProps = {
  children: ReactNode;
};

export function AppServicesProvider({ children }: AppServicesProviderProps) {
  const [payloadAppData, setPayloadAppData] = useState<PayloadAppData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const locale = getLocaleFromPathname(window.location.pathname) ?? 'es';

  useEffect(() => {
    let isActive = true;

    loadPayloadAppData()
      .then((appData) => {
        if (!isActive) {
          return;
        }

        startTransition(() => {
          setError(null);
          setPayloadAppData(appData);
        });
      })
      .catch((loadError: unknown) => {
        if (!isActive) {
          return;
        }

        startTransition(() => {
          setError(loadError instanceof Error ? loadError : new Error('Failed to load app data from the content source'));
          setPayloadAppData(null);
        });
      });

    return () => {
      isActive = false;
    };
  }, []);

  const services = useMemo(() => payloadAppData ? createAppServices(payloadAppData) : null, [payloadAppData]);

  if (!services) {
    const loadingCopy = bootstrapUiCopy.appLoading;

    return (
      <div className="min-h-screen bg-canvas text-ink px-page-x py-page-y font-sans flex items-center justify-center">
        <div role={error ? 'alert' : 'status'} aria-live="polite" className="max-w-md border border-ink/10 bg-ink/5 p-layout-sm">
          <p className="font-mono text-meta uppercase tracking-meta text-ink/50 mb-3">{localize(loadingCopy.eyebrow, locale)}</p>
          <h1 className="font-serif text-3xl text-ink mb-3">{localize(error ? loadingCopy.errorTitle : loadingCopy.title, locale)}</h1>
          <p className="font-sans text-sm text-ink/70">{localize(error ? loadingCopy.errorDescription : loadingCopy.description, locale)}</p>
        </div>
      </div>
    );
  }

  return <AppServicesContext.Provider value={services}>{children}</AppServicesContext.Provider>;
}

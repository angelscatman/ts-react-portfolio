import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { StatusState } from '@/components/ui/StatusState';
import { useAppContext } from '@/hooks/app/useAppContext';
import { useCopyService, useCvService } from '@/hooks/app/useAppServices';
import { useDocumentSeo } from '@/hooks/ui/useDocumentSeo';
import { localize } from '@/lib/localize';
import type { CvCatalogEntry, CvCatalogLanguage } from '@/types/cv.types';

type CatalogStatus = 'loading' | 'ready' | 'empty';
type CatalogState = {
  language: CvCatalogLanguage | null;
  status: CatalogStatus;
  cvs: CvCatalogEntry[];
};

function getCatalogLanguage(locale: 'es' | 'en'): CvCatalogLanguage {
  return locale === 'en' ? 'EN' : 'ES';
}

export function ResumePage() {
  const { locale, onEnterHover, onLeaveCursor, showNotification } = useAppContext();
  const copyService = useCopyService();
  const cvService = useCvService();
  const resumeCopy = copyService.getResumeCopy();
  const seoCopy = copyService.getSeoCopy();
  const language = getCatalogLanguage(locale);
  const [catalogState, setCatalogState] = useState<CatalogState>({ language: null, status: 'loading', cvs: [] });
  const [selectedCvId, setSelectedCvId] = useState<string | null>(null);
  const cvs = catalogState.language === language ? catalogState.cvs : [];
  const catalogStatus = catalogState.language === language ? catalogState.status : 'loading';
  const selectedCv = cvs.find((cv) => cv.id === selectedCvId) ?? cvs[0];

  useDocumentSeo({
    title: localize(seoCopy.resume.title, locale),
    description: localize(seoCopy.resume.description, locale),
    locale,
  });

  useEffect(() => {
    let isMounted = true;

    cvService.listByLanguage(language).then((localizedCvs) => {
        if (isMounted) {
          setCatalogState({
            cvs: localizedCvs,
            language,
            status: localizedCvs.length > 0 ? 'ready' : 'empty',
          });
        }
    });

    return () => {
      isMounted = false;
    };
  }, [cvService, language]);

  const handleDownload = () => {
    showNotification(selectedCv ? 'cvDownloaded' : 'pdfNotAvailable', selectedCv ? 'success' : 'warning');
  };

  return (
    <Section className="flex flex-col mt-section-sm animate-in fade-in duration-base w-full max-w-container-wide mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-layout-sm mb-section-sm">
        <div>
          <p className="font-mono text-meta uppercase tracking-meta text-ink/60 mb-stack-xs">{localize(resumeCopy.name, locale)}</p>
          <h1 className="text-display-page font-serif font-normal leading-none tracking-normal">{localize(resumeCopy.heading, locale)}</h1>
        </div>
        {selectedCv && (
          <div className="flex flex-wrap items-center gap-3">
            {cvs.length > 1 && (
              <Select
                ariaLabel="CV role selector"
                options={cvs.map((cv) => ({ label: cv.role, value: cv.id }))}
                value={selectedCv.id}
                onChange={setSelectedCvId}
                onMouseEnter={onEnterHover}
                onMouseLeave={onLeaveCursor}
              />
            )}
            <Button as="a" href={selectedCv.url} download icon={<Download className="w-4 h-4" />} onClick={handleDownload} onMouseEnter={onEnterHover} onMouseLeave={onLeaveCursor}>
              {localize(resumeCopy.download, locale)}
            </Button>
          </div>
        )}
      </div>

      <div className="w-full min-h-[68vh] border border-ink/10 bg-ink/5 overflow-hidden">
        {catalogStatus === 'loading' && (
          <StatusState className="min-h-[68vh]" title={localize(resumeCopy.checking, locale)} />
        )}

        {catalogStatus === 'ready' && selectedCv && (
          <object data={selectedCv.url} type="application/pdf" title={selectedCv.role} className="w-full h-[72vh]">
            <div className="p-layout-sm font-sans text-ink/70">
              {localize(resumeCopy.viewerFallback, locale)}
            </div>
          </object>
        )}

        {catalogStatus === 'empty' && (
          <StatusState className="min-h-[68vh]" title={localize(resumeCopy.pendingLabel, locale)} description={localize(resumeCopy.pendingHint, locale)} />
        )}
      </div>
    </Section>
  );
}

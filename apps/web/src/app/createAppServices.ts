import type { AppServices } from '@/app/AppServicesContext';
import { ContentService } from '@/domain/content/ContentService';
import { CopyService } from '@/domain/copy/CopyService';
import { CvService } from '@/domain/cv/CvService';
import { PreferencesService } from '@/domain/preferences/PreferencesService';
import { UiCopyService } from '@/domain/ui-copy/UiCopyService';
import { StaticContentRepository } from '@/infrastructure/content/StaticContentRepository';
import { StaticCopyRepository } from '@/infrastructure/copy/StaticCopyRepository';
import { RemoteCvRepository } from '@/infrastructure/cv/RemoteCvRepository';
import type { PayloadAppData } from '@/infrastructure/payload/loadPayloadAppData';
import { BrowserPreferencesRepository } from '@/infrastructure/preferences/BrowserPreferencesRepository';
import { LocalStorageAdapter } from '@/infrastructure/storage/LocalStorageAdapter';
import { LocalUiCopyRepository } from '@/infrastructure/ui-copy/LocalUiCopyRepository';

export function createAppServices(sources: PayloadAppData): AppServices {
  const storageAdapter = new LocalStorageAdapter();
  const contentRepository = new StaticContentRepository(sources.contentSource);
  const copyRepository = new StaticCopyRepository(sources.copySource);
  const cvRepository = new RemoteCvRepository();
  const preferencesRepository = new BrowserPreferencesRepository(storageAdapter);
  const uiCopyRepository = new LocalUiCopyRepository();

  return {
    contentService: new ContentService(contentRepository),
    copyService: new CopyService(copyRepository),
    cvService: new CvService(cvRepository),
    preferencesService: new PreferencesService(preferencesRepository),
    uiCopyService: new UiCopyService(uiCopyRepository),
  };
}

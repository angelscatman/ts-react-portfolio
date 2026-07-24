import { ContentService } from '@/domain/content/ContentService';
import { CopyService } from '@/domain/copy/CopyService';
import { CvService } from '@/domain/cv/CvService';
import { PreferencesService } from '@/domain/preferences/PreferencesService';
import { StaticContentRepository } from '@/infrastructure/content/StaticContentRepository';
import { StaticCopyRepository } from '@/infrastructure/copy/StaticCopyRepository';
import { RemoteCvRepository } from '@/infrastructure/cv/RemoteCvRepository';
import { BrowserPreferencesRepository } from '@/infrastructure/preferences/BrowserPreferencesRepository';
import { LocalStorageAdapter } from '@/infrastructure/storage/LocalStorageAdapter';
import type { AppServices } from '@/app/AppServicesContext';

export function createAppServices(): AppServices {
  const storageAdapter = new LocalStorageAdapter();
  const contentRepository = new StaticContentRepository();
  const copyRepository = new StaticCopyRepository();
  const cvRepository = new RemoteCvRepository();
  const preferencesRepository = new BrowserPreferencesRepository(storageAdapter);

  return {
    contentService: new ContentService(contentRepository),
    copyService: new CopyService(copyRepository),
    cvService: new CvService(cvRepository),
    preferencesService: new PreferencesService(preferencesRepository),
  };
}

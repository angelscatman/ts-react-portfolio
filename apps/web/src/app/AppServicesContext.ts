import { createContext } from 'react';

import type { ContentService } from '@/domain/content/ContentService';
import type { CopyService } from '@/domain/copy/CopyService';
import type { CvService } from '@/domain/cv/CvService';
import type { PreferencesService } from '@/domain/preferences/PreferencesService';
import type { UiCopyService } from '@/domain/ui-copy/UiCopyService';

export type AppServices = {
  contentService: ContentService;
  copyService: CopyService;
  cvService: CvService;
  preferencesService: PreferencesService;
  uiCopyService: UiCopyService;
};

export const AppServicesContext = createContext<AppServices | null>(null);

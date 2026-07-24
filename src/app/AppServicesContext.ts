import { createContext } from 'react';

import type { ContentService } from '@/domain/content/ContentService';
import type { CopyService } from '@/domain/copy/CopyService';
import type { CvService } from '@/domain/cv/CvService';
import type { PreferencesService } from '@/domain/preferences/PreferencesService';

export type AppServices = {
  contentService: ContentService;
  copyService: CopyService;
  cvService: CvService;
  preferencesService: PreferencesService;
};

export const AppServicesContext = createContext<AppServices | null>(null);

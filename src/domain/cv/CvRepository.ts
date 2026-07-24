import type { CvCatalogEntry } from '@/types/cv.types';

export interface CvRepository {
  getCvCatalog(): Promise<CvCatalogEntry[]>;
}

import type { CvRepository } from '@/domain/cv/CvRepository';
import { cvCatalogSchema } from '@/domain/cv/cvSchemas';
import type { CvCatalogEntry } from '@/types/cv.types';

const CV_CATALOG_URL = 'https://angelscatman.github.io/render-cv/catalog/index.json';

export class RemoteCvRepository implements CvRepository {
  private catalogPromise: Promise<CvCatalogEntry[]> | null = null;

  async getCvCatalog() {
    this.catalogPromise ??= this.fetchCatalog();

    return this.catalogPromise;
  }

  private async fetchCatalog() {
    try {
      const response = await fetch(CV_CATALOG_URL);

      if (!response.ok) {
        return [];
      }

      const payload = await response.json();

      return cvCatalogSchema.parse(payload);
    } catch {
      return [];
    }
  }
}

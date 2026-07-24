import type { CvCatalogLanguage } from '@/types/cv.types';
import type { CvRepository } from '@/domain/cv/CvRepository';

export class CvService {
  constructor(private readonly repository: CvRepository) {}

  getCvCatalog() {
    return this.repository.getCvCatalog();
  }

  async listByLanguage(language: CvCatalogLanguage) {
    const catalog = await this.getCvCatalog();

    return catalog.filter((cv) => cv.language === language);
  }
}

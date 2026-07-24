export type CvCatalogLanguage = 'EN' | 'ES';

export type CvCatalogEntry = {
  id: string;
  role: string;
  language: CvCatalogLanguage;
  url: string;
  lastUpdated: string;
};

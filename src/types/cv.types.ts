import type { z } from 'zod';

import type { cvCatalogEntrySchema, cvCatalogLanguageSchema } from '@/domain/cv/cvSchemas';

export type CvCatalogLanguage = z.infer<typeof cvCatalogLanguageSchema>;
export type CvCatalogEntry = z.infer<typeof cvCatalogEntrySchema>;

import { z } from 'zod';

export const cvCatalogLanguageSchema = z.enum(['EN', 'ES']);

export const cvCatalogEntrySchema = z.object({
  id: z.string().min(1),
  role: z.string().min(1),
  language: cvCatalogLanguageSchema,
  url: z.string().url(),
  lastUpdated: z.string().min(1),
});

export const cvCatalogSchema = z.array(cvCatalogEntrySchema);

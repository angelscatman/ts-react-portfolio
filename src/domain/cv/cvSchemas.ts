import { z } from 'zod';

export const cvCatalogEntrySchema = z.object({
  id: z.string().min(1),
  role: z.string().min(1),
  language: z.enum(['EN', 'ES']),
  url: z.string().url(),
  lastUpdated: z.string().min(1),
});

export const cvCatalogSchema = z.array(cvCatalogEntrySchema);

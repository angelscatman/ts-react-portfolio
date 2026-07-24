import articlesManifestData from '@/content/data/collections/articles/manifest.json';
import projectsManifestData from '@/content/data/collections/projects/manifest.json';
import experienceData from '@/content/data/shared/experience.json';
import siteData from '@/content/data/shared/site.json';
import { collectionManifestSchema, experienceItemsSchema, siteContentSchema } from '@/domain/content/contentSchemas';
import { StaticJsonTransport } from '@/infrastructure/transport/StaticJsonTransport';

const staticJsonTransport = new StaticJsonTransport();

export const staticContentSource = {
  site: staticJsonTransport.read(siteData, siteContentSchema),
  experienceItems: staticJsonTransport.read(experienceData, experienceItemsSchema),
  projectManifest: staticJsonTransport.read(projectsManifestData, collectionManifestSchema),
  articleManifest: staticJsonTransport.read(articlesManifestData, collectionManifestSchema),
};

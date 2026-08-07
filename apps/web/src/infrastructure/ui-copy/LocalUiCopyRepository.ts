import type { UiCopy, UiCopyRepository } from '@/domain/ui-copy/UiCopyRepository';

const localUiCopy: UiCopy = {
  appLoading: {
    eyebrow: { es: 'Portfolio CMS', en: 'Portfolio CMS' },
    title: { es: 'Cargando contenido', en: 'Loading content' },
    description: {
      es: 'Obteniendo navegación, textos y contenido del sitio.',
      en: 'Fetching site navigation, copy, and content.',
    },
    errorTitle: { es: 'No se pudo cargar el contenido', en: 'Content could not be loaded' },
    errorDescription: {
      es: 'La fuente de contenido no respondió correctamente. Intenta recargar la página.',
      en: 'The content source did not respond correctly. Try reloading the page.',
    },
  },
  contentStatus: {
    projectsLoading: { es: 'Cargando proyectos desde la fuente de contenido.', en: 'Loading projects from the content source.' },
    projectsLoadError: { es: 'No se pudieron cargar los proyectos desde la fuente de contenido.', en: 'Projects could not be loaded from the content source.' },
    projectLoading: { es: 'Cargando proyecto desde la fuente de contenido.', en: 'Loading project from the content source.' },
    projectLoadError: { es: 'No se pudo cargar el proyecto desde la fuente de contenido.', en: 'Project could not be loaded from the content source.' },
    articlesLoading: { es: 'Cargando artículos desde la fuente de contenido.', en: 'Loading articles from the content source.' },
    articlesLoadError: { es: 'No se pudieron cargar los artículos desde la fuente de contenido.', en: 'Articles could not be loaded from the content source.' },
    articleLoading: { es: 'Cargando artículo desde la fuente de contenido.', en: 'Loading article from the content source.' },
    articleLoadError: { es: 'No se pudo cargar el artículo desde la fuente de contenido.', en: 'Article could not be loaded from the content source.' },
  },
};

export class LocalUiCopyRepository implements UiCopyRepository {
  getUiCopy() {
    return localUiCopy;
  }
}

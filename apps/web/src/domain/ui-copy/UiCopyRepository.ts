import type { LocalizedText } from '@/types/core/content.types';

export type AppLoadingCopy = {
  description: LocalizedText;
  errorDescription: LocalizedText;
  errorTitle: LocalizedText;
  eyebrow: LocalizedText;
  title: LocalizedText;
};

export type ContentStatusCopy = {
  articleLoadError: LocalizedText;
  articleLoading: LocalizedText;
  articlesLoadError: LocalizedText;
  articlesLoading: LocalizedText;
  projectLoadError: LocalizedText;
  projectLoading: LocalizedText;
  projectsLoadError: LocalizedText;
  projectsLoading: LocalizedText;
};

export type UiCopy = {
  appLoading: AppLoadingCopy;
  contentStatus: ContentStatusCopy;
};

export interface UiCopyRepository {
  getUiCopy(): UiCopy;
}

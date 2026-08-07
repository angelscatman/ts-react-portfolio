import { startTransition, useEffect, useState } from 'react';

import { PayloadContentRepository } from '@/infrastructure/content/PayloadContentRepository';
import type { CollectionManifestItem } from '@/types/core/content.types';
import type { Locale } from '@/types/ui/locale.types';

type PayloadArticlesState = {
  articles: CollectionManifestItem[] | null;
  error: Error | null;
  isLoading: boolean;
};

const payloadContentRepository = new PayloadContentRepository();

export function usePayloadArticles(locale: Locale): PayloadArticlesState {
  const [state, setState] = useState<PayloadArticlesState>({
    articles: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    let isActive = true;

    startTransition(() => {
      setState((current) => ({ ...current, error: null, isLoading: true }));
    });

    payloadContentRepository.listArticles(locale)
      .then((articles) => {
        if (!isActive) {
          return;
        }

        startTransition(() => {
          setState({ articles, error: null, isLoading: false });
        });
      })
      .catch((error: unknown) => {
        if (!isActive) {
          return;
        }

        startTransition(() => {
          setState({
            articles: null,
            error: error instanceof Error ? error : new Error('Failed to load articles from the content source'),
            isLoading: false,
          });
        });
      });

    return () => {
      isActive = false;
    };
  }, [locale]);

  return state;
}

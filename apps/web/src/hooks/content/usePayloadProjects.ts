import { startTransition, useEffect, useState } from 'react';

import { PayloadContentRepository } from '@/infrastructure/content/PayloadContentRepository';
import type { CollectionManifestItem } from '@/types/core/content.types';
import type { Locale } from '@/types/ui/locale.types';

type PayloadProjectsState = {
  error: Error | null;
  isLoading: boolean;
  projects: CollectionManifestItem[] | null;
};

const payloadContentRepository = new PayloadContentRepository();

export function usePayloadProjects(locale: Locale): PayloadProjectsState {
  const [state, setState] = useState<PayloadProjectsState>({
    error: null,
    isLoading: true,
    projects: null,
  });

  useEffect(() => {
    let isActive = true;

    startTransition(() => {
      setState((current) => ({ ...current, error: null, isLoading: true }));
    });

    payloadContentRepository.listProjects(locale)
      .then((projects) => {
        if (!isActive) {
          return;
        }

        startTransition(() => {
          setState({ error: null, isLoading: false, projects });
        });
      })
      .catch((error: unknown) => {
        if (!isActive) {
          return;
        }

        startTransition(() => {
          setState({
            error: error instanceof Error ? error : new Error('Failed to load projects from the content source'),
            isLoading: false,
            projects: null,
          });
        });
      });

    return () => {
      isActive = false;
    };
  }, [locale]);

  return state;
}

import { startTransition, useEffect, useState } from 'react';

import { PayloadContentRepository } from '@/infrastructure/content/PayloadContentRepository';
import type { ArticleContentDocument } from '@/types/core/content.types';
import type { Locale } from '@/types/ui/locale.types';

const payloadContentRepository = new PayloadContentRepository();

type ArticleContentState = {
  content: ArticleContentDocument | null;
  error: Error | null;
  isLoading: boolean;
};

export function useArticleContent(slug: string | undefined, locale: Locale): ArticleContentState {
  const [state, setState] = useState<ArticleContentState>({
    content: null,
    error: null,
    isLoading: Boolean(slug),
  });

  useEffect(() => {
    if (!slug) {
      return;
    }

    let isActive = true;

    startTransition(() => {
      setState({ content: null, error: null, isLoading: true });
    });

    payloadContentRepository.getArticleBySlug(slug, locale)
      .then((content) => {
        if (!isActive) {
          return;
        }

        startTransition(() => {
          setState({ content, error: null, isLoading: false });
        });
      })
      .catch((error: unknown) => {
        if (!isActive) {
          return;
        }

        startTransition(() => {
          setState({
            content: null,
            error: error instanceof Error ? error : new Error('Failed to load article content'),
            isLoading: false,
          });
        });
      });

    return () => {
      isActive = false;
    };
  }, [locale, slug]);

  return slug ? state : { content: null, error: null, isLoading: false };
}

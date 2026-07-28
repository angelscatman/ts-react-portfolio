import { useEffect, useState } from 'react';

import { articleContentSchema, projectContentSchema } from '@/domain/content/contentSchemas';
import type { ArticleContentDocument, EntryContentDocument, ProjectContentDocument } from '@/types/core/content.types';
import type { Locale } from '@/types/ui/locale.types';

const articleModules = import.meta.glob<unknown>('../../content/data/collections/articles/entries/*/content.*.json', { import: 'default' });
const projectModules = import.meta.glob<unknown>('../../content/data/collections/projects/entries/*/content.*.json', { import: 'default' });

type EntryContentResult<TContent extends EntryContentDocument> = {
  content: TContent | null;
  error: Error | null;
  isLoading: boolean;
};

export function useEntryContent(kind: 'article', slug: string | undefined, locale: Locale): EntryContentResult<ArticleContentDocument>;
export function useEntryContent(kind: 'project', slug: string | undefined, locale: Locale): EntryContentResult<ProjectContentDocument>;
export function useEntryContent(kind: 'article' | 'project', slug: string | undefined, locale: Locale): EntryContentResult<EntryContentDocument> {
  const [content, setContent] = useState<EntryContentDocument | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) {
      return;
    }

    const loadContent = async () => {
      setIsLoading(true);
      setError(null);

      const modules = kind === 'article' ? articleModules : projectModules;
      const path = `../../content/data/collections/${kind}s/entries/${slug}/content.${locale}.json`;
      const loader = modules[path];

      if (!loader) {
        setError(new Error(`Content file not found for ${path}`));
        setIsLoading(false);
        return;
      }

      try {
        const raw = await loader();
        const schema = kind === 'article' ? articleContentSchema : projectContentSchema;
        setContent(schema.parse(raw));
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load entry content'));
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [kind, slug, locale]);

  return { content, isLoading: slug ? isLoading : false, error };
}

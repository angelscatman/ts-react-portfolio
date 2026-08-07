import type { CollectionConfig } from 'payload';

import { publishedOrAuthenticatedRead } from '../access/readAccess';
import { sectionsField, seoField, statusField } from '../fields/contentFields';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    defaultColumns: ['slug', 'title', 'status'],
    useAsTitle: 'title',
  },
  access: {
    read: publishedOrAuthenticatedRead,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Publicación',
          fields: [
            {
              name: 'slug',
              type: 'select',
              index: true,
              options: ['work', 'blog', 'about', 'resume', 'not-found', 'error'],
              required: true,
              unique: true,
            },
            statusField,
          ],
        },
        {
          label: 'Hero',
          fields: [
            {
              name: 'title',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'summary',
              type: 'textarea',
              localized: true,
              required: true,
            },
          ],
        },
        {
          label: 'Contenido',
          fields: [sectionsField],
        },
        {
          label: 'SEO',
          fields: [seoField],
        },
      ],
    },
  ],
};

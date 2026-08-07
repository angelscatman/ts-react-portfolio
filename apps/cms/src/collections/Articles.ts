import type { CollectionConfig } from 'payload';

import { publishedOrAuthenticatedRead } from '../access/readAccess';
import { destinationField, publishedAtField, sectionsField, seoField, slugField, statusField, tagsField } from '../fields/contentFields';

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    defaultColumns: ['title', 'slug', 'status', 'publishedAt'],
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
          fields: [slugField, statusField, publishedAtField],
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
              name: 'excerpt',
              type: 'textarea',
              localized: true,
              required: true,
            },
            {
              name: 'coverImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'coverAlt',
              type: 'text',
              localized: true,
              required: true,
            },
            destinationField,
          ],
        },
        {
          label: 'Contenido',
          fields: [sectionsField],
        },
        {
          label: 'Detalles',
          fields: [
            {
              name: 'readingTime',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'perspective',
              type: 'text',
              localized: true,
              required: true,
            },
            tagsField,
          ],
        },
        {
          label: 'SEO',
          fields: [seoField],
        },
      ],
    },
  ],
  versions: {
    drafts: true,
  },
};

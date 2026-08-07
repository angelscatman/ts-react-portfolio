import type { CollectionConfig } from 'payload';

import { publishedOrAuthenticatedRead } from '../access/readAccess';
import { destinationField, metaField, publishedAtField, sectionsField, seoField, slugField, statusField, tagsField } from '../fields/contentFields';

export const Projects: CollectionConfig = {
  slug: 'projects',
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
          fields: [
            slugField,
            statusField,
            publishedAtField,
            {
              name: 'featured',
              type: 'checkbox',
              index: true,
            },
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
              name: 'year',
              type: 'text',
              required: true,
            },
            {
              name: 'role',
              type: 'text',
              localized: true,
              required: true,
            },
            tagsField,
            metaField,
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

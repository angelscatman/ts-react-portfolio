import type { Field } from 'payload';

import { contentBlocks } from '../blocks/editorialBlocks';

export const slugField: Field = {
  name: 'slug',
  type: 'text',
  admin: {
    description: 'Stable URL slug. Keep it shared across locales for now.',
  },
  index: true,
  required: true,
  unique: true,
};

export const statusField: Field = {
  name: 'status',
  type: 'select',
  index: true,
  defaultValue: 'draft',
  options: ['draft', 'published'],
  required: true,
};

export const publishedAtField: Field = {
  name: 'publishedAt',
  type: 'date',
  admin: {
    description: 'Publication date used for public sorting and metadata.',
  },
  index: true,
  required: true,
};

export const seoField: Field = {
  name: 'seo',
  type: 'group',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'noIndex',
      type: 'checkbox',
    },
  ],
};

export const destinationField: Field = {
  name: 'destination',
  type: 'group',
  admin: {
    description: 'Primary public action for this entry.',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'href',
      type: 'text',
      admin: {
        description: 'Internal path or external URL.',
      },
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: ['internal', 'external'],
      required: true,
    },
  ],
};

export const sectionsField: Field = {
  name: 'sections',
  type: 'array',
  admin: {
    description: 'Stable editorial sections. Localize the text fields inside each section instead of duplicating section structure per locale.',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: contentBlocks,
      admin: {
        description: 'Structured inserts for media, metrics, feature lists, callouts, quotes, galleries, and CTAs.',
      },
    },
  ],
  minRows: 1,
  required: true,
};

export const metaField: Field = {
  name: 'meta',
  type: 'array',
  localized: true,
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'value',
      type: 'textarea',
      required: true,
    },
  ],
};

export const tagsField: Field = {
  name: 'tags',
  type: 'array',
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
  ],
};

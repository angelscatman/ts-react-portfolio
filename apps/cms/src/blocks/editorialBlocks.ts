import type { Block } from 'payload';

import { editorialStyleFields, layoutPresetField } from '../fields/styleFields';

export const BodyBlock: Block = {
  slug: 'body',
  interfaceName: 'BodyBlock',
  fields: [
    {
      name: 'content',
      type: 'richText',
      localized: true,
      required: true,
    },
    ...editorialStyleFields(),
  ],
};

export const MediaBlock: Block = {
  slug: 'media',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'alt',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      localized: true,
    },
    layoutPresetField(),
    ...editorialStyleFields(),
  ],
};

export const GalleryBlock: Block = {
  slug: 'gallery',
  interfaceName: 'GalleryBlock',
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          localized: true,
        },
      ],
      minRows: 1,
      required: true,
    },
    layoutPresetField(),
    ...editorialStyleFields(),
  ],
};

export const FeatureListBlock: Block = {
  slug: 'featureList',
  interfaceName: 'FeatureListBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          required: true,
        },
      ],
      minRows: 1,
      required: true,
    },
    ...editorialStyleFields(),
  ],
};

export const MetricsBlock: Block = {
  slug: 'metrics',
  interfaceName: 'MetricsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
      ],
      minRows: 1,
      required: true,
    },
    ...editorialStyleFields(),
  ],
};

export const CalloutBlock: Block = {
  slug: 'callout',
  interfaceName: 'CalloutBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      name: 'tone',
      type: 'select',
      options: ['default', 'muted', 'strong', 'warning'],
    },
    ...editorialStyleFields(),
  ],
};

export const QuoteBlock: Block = {
  slug: 'quote',
  interfaceName: 'QuoteBlock',
  fields: [
    {
      name: 'content',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      name: 'attribution',
      type: 'text',
      localized: true,
    },
    ...editorialStyleFields(),
  ],
};

export const CtaBlock: Block = {
  slug: 'cta',
  interfaceName: 'CtaBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'label',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'href',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'internal',
      options: ['internal', 'external'],
      required: true,
    },
    ...editorialStyleFields(),
  ],
};

export const contentBlocks = [
  BodyBlock,
  MediaBlock,
  GalleryBlock,
  FeatureListBlock,
  MetricsBlock,
  CalloutBlock,
  QuoteBlock,
  CtaBlock,
];

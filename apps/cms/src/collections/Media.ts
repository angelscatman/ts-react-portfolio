import path from 'path';
import type { CollectionConfig } from 'payload';
import { fileURLToPath } from 'url';

import { publicRead } from '../access/readAccess';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    defaultColumns: ['assetKey', 'filename', 'updatedAt'],
    useAsTitle: 'assetKey',
  },
  access: {
    read: publicRead,
  },
  fields: [
    {
      name: 'assetKey',
      type: 'text',
      admin: {
        description: 'Editorial identifier such as projects/bitala-fulfillment/cover.',
      },
      index: true,
      required: true,
      unique: true,
    },
    {
      name: 'folder',
      type: 'relationship',
      admin: {
        description: 'Editorial asset folder for browsing and future portability.',
      },
      hasMany: false,
      relationTo: 'media-folders',
    },
    {
      name: 'usage',
      type: 'select',
      admin: {
        description: 'Primary usage context for this asset.',
      },
      index: true,
      options: ['brand', 'project', 'article', 'profile', 'social', 'instagram', 'case-study', 'background', 'other'],
    },
    {
      name: 'originalPath',
      type: 'text',
      admin: {
        description: 'Original static source path used during import, if any.',
      },
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
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
  upload: {
    constructorOptions: {
      limitInputPixels: false,
    },
    mimeTypes: ['image/*'],
    staticDir: path.resolve(dirname, '../../media'),
  },
};

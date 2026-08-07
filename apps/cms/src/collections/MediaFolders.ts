import type { CollectionConfig } from 'payload';

import { publicRead } from '../access/readAccess';

export const MediaFolders: CollectionConfig = {
  slug: 'media-folders',
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Assets',
    useAsTitle: 'title',
  },
  access: {
    read: publicRead,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        description: 'Stable folder key, for example brand, projects, articles, social, instagram.',
      },
      index: true,
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
};

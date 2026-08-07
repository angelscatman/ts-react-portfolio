import type { GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';

export const SeoDefaults: GlobalConfig = {
  slug: 'seo-defaults',
  access: {
    read: publicRead,
  },
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
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

import type { GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';

export const Site: GlobalConfig = {
  slug: 'site',
  access: {
    read: publicRead,
  },
  fields: [
    {
      name: 'brand',
      type: 'text',
      required: true,
    },
    {
      name: 'defaultLocale',
      type: 'select',
      defaultValue: 'es',
      options: ['es', 'en'],
      required: true,
    },
    {
      name: 'titles',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
      minRows: 1,
      required: true,
    },
  ],
};

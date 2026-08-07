import type { GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';

export const Experience: GlobalConfig = {
  slug: 'experience',
  access: {
    read: publicRead,
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      localized: true,
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'year',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};

import type { GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';

export const Notifications: GlobalConfig = {
  slug: 'notifications',
  access: {
    read: publicRead,
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'key',
          type: 'text',
          required: true,
        },
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
      ],
    },
  ],
};

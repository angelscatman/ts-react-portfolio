import type { GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';

export const Social: GlobalConfig = {
  slug: 'social',
  access: {
    read: publicRead,
  },
  fields: [
    {
      name: 'links',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'key',
          type: 'select',
          options: ['github', 'linkedin', 'email'],
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
        {
          name: 'ariaLabel',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'cursorIcon',
          type: 'select',
          options: ['none', 'arrow', 'eye', 'mail', 'github', 'linkedin', 'camera', 'music'],
          required: true,
        },
      ],
    },
  ],
};

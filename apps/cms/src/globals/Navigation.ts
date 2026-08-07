import type { GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';

export const Navigation: GlobalConfig = {
  slug: 'navigation',
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
          name: 'to',
          type: 'text',
          required: true,
        },
        {
          name: 'activePaths',
          type: 'array',
          fields: [
            {
              name: 'path',
              type: 'text',
              required: true,
            },
          ],
          minRows: 1,
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
      minRows: 1,
      required: true,
    },
    {
      name: 'languageToggle',
      type: 'group',
      fields: [
        {
          name: 'toEnglish',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'toSpanish',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
    },
    {
      name: 'themeToggle',
      type: 'group',
      fields: [
        {
          name: 'toLight',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'toDark',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
    },
  ],
};

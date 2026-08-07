import type { GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: publicRead,
  },
  fields: [
    {
      name: 'copyright',
      type: 'text',
      localized: true,
      required: true,
    },
  ],
};

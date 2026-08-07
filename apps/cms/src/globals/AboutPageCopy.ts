import type { GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';
import { localizedTextareaField, localizedTextField } from '../fields/localizedFields';

export const AboutPageCopy: GlobalConfig = {
  slug: 'about-page-copy',
  access: {
    read: publicRead,
  },
  fields: [
    localizedTextField('heading'),
    {
      name: 'hero',
      type: 'group',
      fields: [
        localizedTextField('title'),
        localizedTextField('subtitle'),
      ],
    },
    {
      name: 'intro',
      type: 'group',
      fields: [
        {
          name: 'paragraphs',
          type: 'array',
          localized: true,
          fields: [localizedTextareaField('text')],
          minRows: 1,
          required: true,
        },
        {
          name: 'bullets',
          type: 'array',
          localized: true,
          fields: [localizedTextField('text')],
          minRows: 1,
          required: true,
        },
        {
          name: 'contactLine',
          type: 'group',
          fields: [
            localizedTextareaField('prefix'),
            localizedTextField('suffix'),
            {
              name: 'links',
              type: 'select',
              hasMany: true,
              options: ['linkedin', 'github', 'email'],
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'gallerySections',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
        },
        localizedTextField('label'),
        {
          name: 'images',
          type: 'array',
          localized: true,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            localizedTextField('alt'),
            localizedTextField('cursorText'),
            {
              name: 'cursorIcon',
              type: 'select',
              options: ['none', 'arrow', 'eye', 'mail', 'github', 'linkedin', 'camera', 'music'],
            },
          ],
          minRows: 1,
          required: true,
        },
      ],
      minRows: 1,
      required: true,
    },
  ],
};

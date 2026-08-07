import type { GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';
import { localizedTextareaField,localizedTextField } from '../fields/localizedFields';

export const WorkPageCopy: GlobalConfig = {
  slug: 'work-page-copy',
  access: {
    read: publicRead,
  },
  fields: [
    localizedTextareaField('heroTitle'),
    localizedTextField('greeting'),
    localizedTextField('emptyProjectsTitle'),
    localizedTextareaField('emptyProjectsDescription'),
    {
      name: 'name',
      type: 'textarea',
      required: true,
    },
    localizedTextField('tagline'),
  ],
};

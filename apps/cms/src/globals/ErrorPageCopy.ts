import type { Field, GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';
import { localizedTextareaField,localizedTextField } from '../fields/localizedFields';

function errorVariantField(name: string): Field {
  return {
    name,
    type: 'group',
    fields: [
      {
        name: 'code',
        type: 'text',
        required: true,
      },
      localizedTextField('title'),
      localizedTextareaField('description'),
      localizedTextField('actionLabel'),
      {
        name: 'actionHref',
        type: 'text',
        required: true,
      },
    ],
  };
}

export const ErrorPageCopy: GlobalConfig = {
  slug: 'error-page-copy',
  access: {
    read: publicRead,
  },
  fields: [
    errorVariantField('generic'),
    errorVariantField('forbidden'),
    errorVariantField('notFound'),
    errorVariantField('content'),
  ],
};

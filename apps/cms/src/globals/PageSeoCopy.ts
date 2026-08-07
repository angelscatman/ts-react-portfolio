import type { Field, GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';
import { localizedTextareaField,localizedTextField } from '../fields/localizedFields';

function seoPageField(name: string): Field {
  return {
    name,
    type: 'group',
    fields: [
      localizedTextField('title'),
      localizedTextareaField('description'),
    ],
  };
}

export const PageSeoCopy: GlobalConfig = {
  slug: 'page-seo-copy',
  access: {
    read: publicRead,
  },
  fields: [
    seoPageField('work'),
    seoPageField('blog'),
    seoPageField('about'),
    seoPageField('resume'),
    seoPageField('notFound'),
    seoPageField('projectNotFound'),
    seoPageField('articleNotFound'),
  ],
};

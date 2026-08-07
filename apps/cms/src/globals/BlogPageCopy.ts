import type { GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';
import { localizedTextareaField,localizedTextField } from '../fields/localizedFields';

export const BlogPageCopy: GlobalConfig = {
  slug: 'blog-page-copy',
  access: {
    read: publicRead,
  },
  fields: [
    localizedTextField('heading'),
    localizedTextField('emptyTitle'),
    localizedTextareaField('emptyDescription'),
  ],
};

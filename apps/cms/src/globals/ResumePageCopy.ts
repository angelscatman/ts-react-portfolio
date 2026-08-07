import type { GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';
import { localizedTextareaField,localizedTextField } from '../fields/localizedFields';

export const ResumePageCopy: GlobalConfig = {
  slug: 'resume-page-copy',
  access: {
    read: publicRead,
  },
  fields: [
    localizedTextField('name'),
    localizedTextField('heading'),
    localizedTextField('download'),
    localizedTextField('open'),
    localizedTextField('checking'),
    localizedTextareaField('viewerFallback'),
    localizedTextField('pendingLabel'),
    localizedTextareaField('pendingHint'),
  ],
};

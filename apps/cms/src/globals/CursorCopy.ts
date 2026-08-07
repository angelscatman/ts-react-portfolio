import type { GlobalConfig } from 'payload';

import { publicRead } from '../access/readAccess';
import { localizedTextField } from '../fields/localizedFields';

export const CursorCopy: GlobalConfig = {
  slug: 'cursor-copy',
  access: {
    read: publicRead,
  },
  fields: [
    localizedTextField('viewCaseStudy'),
    localizedTextField('visitWebsite'),
    localizedTextField('readCase'),
    localizedTextField('openNote'),
    localizedTextField('readArticle'),
    localizedTextField('openLinkedin'),
    localizedTextField('sendEmail'),
    localizedTextField('viewGithub'),
  ],
};

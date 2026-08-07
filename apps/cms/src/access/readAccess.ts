import type { Access } from 'payload';

export const publicRead: Access = () => true;

export const publishedOrAuthenticatedRead: Access = ({ req }) => {
  if (req.user) {
    return true;
  }

  return {
    status: {
      equals: 'published',
    },
  };
};

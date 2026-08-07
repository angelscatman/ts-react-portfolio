import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';

import { Articles } from './collections/Articles';
import { Media } from './collections/Media';
import { MediaFolders } from './collections/MediaFolders';
import { Pages } from './collections/Pages';
import { Projects } from './collections/Projects';
import { Users } from './collections/Users';
import { AboutPageCopy } from './globals/AboutPageCopy';
import { BlogPageCopy } from './globals/BlogPageCopy';
import { CursorCopy } from './globals/CursorCopy';
import { ErrorPageCopy } from './globals/ErrorPageCopy';
import { Experience } from './globals/Experience';
import { Footer } from './globals/Footer';
import { Navigation } from './globals/Navigation';
import { Notifications } from './globals/Notifications';
import { PageSeoCopy } from './globals/PageSeoCopy';
import { ResumePageCopy } from './globals/ResumePageCopy';
import { SeoDefaults } from './globals/SeoDefaults';
import { Site } from './globals/Site';
import { Social } from './globals/Social';
import { WorkPageCopy } from './globals/WorkPageCopy';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/**
 * Reads a Docker/Compose secret when available.
 */
function readSecret(secretPath: string, envValue?: string): string | undefined {
  try {
    if (fs.existsSync(secretPath)) {
      const value = fs.readFileSync(secretPath, 'utf8').trim();

      if (value) {
        return value;
      }
    }
  } catch {
    // Fall through to the environment variable.
  }

  const value = envValue?.trim();

  return value || undefined;
}

const payloadPublicServerUrl = process.env.PAYLOAD_PUBLIC_SERVER_URL;

if (!payloadPublicServerUrl) {
  throw new Error('PAYLOAD_PUBLIC_SERVER_URL is required');
}

/**
 * Payload secret
 */
const payloadSecret = readSecret(
  '/run/secrets/payload_secret',
  process.env.PAYLOAD_SECRET,
);

if (!payloadSecret) {
  throw new Error('PAYLOAD_SECRET is required');
}

/**
 * Database
 */
function getDatabaseUri(): string {
  if (process.env.DATABASE_URI) {
    return process.env.DATABASE_URI;
  }

  const postgresPassword = readSecret(
    '/run/secrets/postgres_password',
    process.env.POSTGRES_PASSWORD,
  );

  if (!postgresPassword) {
    throw new Error(
      'PostgreSQL password is required via /run/secrets/postgres_password or POSTGRES_PASSWORD',
    );
  }

  const host = process.env.POSTGRES_HOST ?? 'localhost';
  const port = process.env.POSTGRES_PORT ?? '5432';
  const database = process.env.POSTGRES_DB ?? 'portfolio_cms';
  const user = process.env.POSTGRES_USER ?? 'portfolio';

  const encodedUser = encodeURIComponent(user);
  const encodedPassword = encodeURIComponent(postgresPassword);
  const encodedDatabase = encodeURIComponent(database);

  return `postgres://${encodedUser}:${encodedPassword}@${host}:${port}/${encodedDatabase}`;
}

const databaseUri = getDatabaseUri();

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },

  collections: [
    Users,
    MediaFolders,
    Media,
    Projects,
    Articles,
    Pages,
  ],

  cors: '*',

  db: postgresAdapter({
    pool: {
      connectionString: databaseUri,
    },
  }),

  editor: lexicalEditor({}),

  globals: [
    Site,
    Navigation,
    Footer,
    Social,
    SeoDefaults,
    PageSeoCopy,
    Notifications,
    CursorCopy,
    Experience,
    WorkPageCopy,
    BlogPageCopy,
    AboutPageCopy,
    ResumePageCopy,
    ErrorPageCopy,
  ],

  localization: {
    defaultLocale: 'es',
    fallback: true,
    locales: ['es', 'en'],
  },

  secret: payloadSecret,

  routes: {
    admin: '/',
    api: '/api',
    graphQL: '/graphql',
    graphQLPlayground: '/graphql-playground',
  },

  serverURL: payloadPublicServerUrl,

  sharp,

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
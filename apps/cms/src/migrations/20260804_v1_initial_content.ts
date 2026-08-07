import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres';

import { importInitialContent, type InitialContentPayload } from '../content-import/importInitialContent';

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await importInitialContent(payload as unknown as InitialContentPayload);
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  payload.logger.info('Initial content rollback is intentionally non-destructive.');
}

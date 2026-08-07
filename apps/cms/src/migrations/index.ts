import * as migration_20260804_v1_initial from './20260804_v1_initial';
import * as migration_20260804_v1_initial_content from './20260804_v1_initial_content';

export const migrations = [
  {
    up: migration_20260804_v1_initial.up,
    down: migration_20260804_v1_initial.down,
    name: '20260804_v1_initial',
  },
  {
    up: migration_20260804_v1_initial_content.up,
    down: migration_20260804_v1_initial_content.down,
    name: '20260804_v1_initial_content'
  },
];

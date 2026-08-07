import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { loadEnvFile } from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const rootEnvPath = path.resolve(dirname, '../../../.env');

if (existsSync(rootEnvPath)) {
  loadEnvFile(rootEnvPath);
}

const [command, ...args] = process.argv.slice(2);

if (!command) {
  throw new Error('A command is required');
}

const child = spawn(command, args, {
  env: process.env,
  stdio: 'inherit',
  shell: false,
});

child.on('error', (error) => {
  console.error(error);
  process.exit(1);
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
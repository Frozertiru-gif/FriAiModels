import fs from 'node:fs';
import path from 'node:path';
import { getDatabaseUrl, resolveSqliteFilePath } from './database.mjs';

export function ensureDataDir() {
  const resolvedDbPath = resolveSqliteFilePath(getDatabaseUrl());
  const dataDir = path.dirname(resolvedDbPath);

  fs.mkdirSync(dataDir, { recursive: true });
}

import fs from 'node:fs';
import path from 'node:path';
import { getDatabaseUrl, resolveSqliteFilePath } from '@/lib/database';

export function ensureDataDir(): void {
  const resolvedDbPath = resolveSqliteFilePath(getDatabaseUrl());
  const dataDir = path.dirname(resolvedDbPath);

  fs.mkdirSync(dataDir, { recursive: true });
}

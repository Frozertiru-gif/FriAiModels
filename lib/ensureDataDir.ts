import fs from 'node:fs';
import path from 'node:path';

const DEFAULT_DATABASE_URL = 'file:./data/app.db';

function resolveSqliteFilePath(databaseUrl: string): string {
  const filePrefix = 'file:';

  if (!databaseUrl.startsWith(filePrefix)) {
    return path.resolve(process.cwd(), 'data', 'app.db');
  }

  const filePath = databaseUrl.slice(filePrefix.length);
  return path.resolve(process.cwd(), filePath);
}

export function ensureDataDir(): void {
  const databaseUrl = process.env.DATABASE_URL ?? DEFAULT_DATABASE_URL;
  const resolvedDbPath = resolveSqliteFilePath(databaseUrl);
  const dataDir = path.dirname(resolvedDbPath);

  fs.mkdirSync(dataDir, { recursive: true });
}

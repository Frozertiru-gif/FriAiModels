import path from 'node:path';

const DEFAULT_DATABASE_URL = 'file:./data/app.db';

export function getDatabaseUrl(): string {
  return process.env.DATABASE_URL ?? DEFAULT_DATABASE_URL;
}

export function resolveSqliteFilePath(databaseUrl: string): string {
  const filePrefix = 'file:';

  if (!databaseUrl.startsWith(filePrefix)) {
    return path.resolve(process.cwd(), 'data', 'app.db');
  }

  const rawPath = databaseUrl.slice(filePrefix.length).split('?')[0].split('#')[0];

  if (path.isAbsolute(rawPath)) {
    return rawPath;
  }

  return path.resolve(process.cwd(), rawPath);
}

export function getPrismaDatasourceUrl(): string {
  const databaseUrl = getDatabaseUrl();
  const sqliteFilePath = resolveSqliteFilePath(databaseUrl);

  return `file:${sqliteFilePath}`;
}

import {
  getDatabaseUrl as getDatabaseUrlImpl,
  getPrismaDatasourceUrl as getPrismaDatasourceUrlImpl,
  resolveSqliteFilePath as resolveSqliteFilePathImpl,
} from './database.mjs';

export function getDatabaseUrl(): string {
  return getDatabaseUrlImpl();
}

export function resolveSqliteFilePath(databaseUrl: string): string {
  return resolveSqliteFilePathImpl(databaseUrl);
}

export function getPrismaDatasourceUrl(): string {
  return getPrismaDatasourceUrlImpl();
}

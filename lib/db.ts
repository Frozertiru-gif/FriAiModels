import fs from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';

const DATABASE_PATH = process.env.DATABASE_PATH ?? './data/app.db';

let dbInstance: Database.Database | null = null;

export function ensureSchema(db: Database.Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
  `);
}

export function getDb(): Database.Database {
  if (dbInstance) {
    return dbInstance;
  }

  const resolvedPath = path.resolve(process.cwd(), DATABASE_PATH);
  const dataDir = path.dirname(resolvedPath);

  fs.mkdirSync(dataDir, { recursive: true });

  dbInstance = new Database(resolvedPath);
  ensureSchema(dbInstance);

  return dbInstance;
}

import { prisma } from '@/lib/prisma';

let authSchemaReadyPromise: Promise<void> | null = null;

async function bootstrapAuthSchema(): Promise<void> {
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "User" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "email" TEXT NOT NULL,
      "passwordHash" TEXT NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await prisma.$executeRawUnsafe(`
    CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");
  `);
}

export async function ensureAuthSchema(): Promise<void> {
  if (!authSchemaReadyPromise) {
    authSchemaReadyPromise = bootstrapAuthSchema();
  }

  await authSchemaReadyPromise;
}

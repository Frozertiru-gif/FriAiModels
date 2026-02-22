import { z } from 'zod';
import { getDb } from '@/lib/db';
import { hashPassword, normalizeEmail } from '@/lib/auth';
import { sendTelegramMessage } from '@/lib/telegram';

export const runtime = 'nodejs';

const registerSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(72),
});

export async function POST(req: Request): Promise<Response> {
  const parsed = registerSchema.safeParse(await req.json().catch(() => null));

  if (!parsed.success) {
    return Response.json({ ok: false, message: 'Invalid request payload.' }, { status: 400 });
  }

  const email = normalizeEmail(parsed.data.email);
  const passwordHash = await hashPassword(parsed.data.password);
  const db = getDb();

  const existingUser = db.prepare('SELECT id FROM users WHERE email = ?').get(email) as { id: string } | undefined;

  if (existingUser) {
    return Response.json({ ok: false, message: 'User with this email already exists.' }, { status: 409 });
  }

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  db.prepare(
    `INSERT INTO users (id, email, password_hash, created_at)
     VALUES (?, ?, ?, ?)`,
  ).run(id, email, passwordHash, createdAt);

  void sendTelegramMessage(`✅ New user registered: email=${email} id=${id}`);

  return Response.json(
    {
      ok: true,
      user: {
        id,
        email,
        created_at: createdAt,
      },
    },
    { status: 201 },
  );
}

import { z } from 'zod';
import { getDb } from '@/lib/db';
import { normalizeEmail, verifyPassword } from '@/lib/auth';

export const runtime = 'nodejs';

const loginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(72),
});

type DbUser = {
  id: string;
  email: string;
  password_hash: string;
};

export async function POST(req: Request): Promise<Response> {
  const parsed = loginSchema.safeParse(await req.json().catch(() => null));

  if (!parsed.success) {
    return Response.json({ ok: false, message: 'Invalid request payload.' }, { status: 400 });
  }

  const email = normalizeEmail(parsed.data.email);
  const db = getDb();
  const user = db.prepare('SELECT id, email, password_hash FROM users WHERE email = ?').get(email) as DbUser | undefined;

  if (!user) {
    return Response.json({ ok: false, message: 'Invalid credentials' }, { status: 401 });
  }

  const isValid = await verifyPassword(parsed.data.password, user.password_hash);

  if (!isValid) {
    return Response.json({ ok: false, message: 'Invalid credentials' }, { status: 401 });
  }

  return Response.json({
    ok: true,
    user: {
      id: user.id,
      email: user.email,
    },
  });
}

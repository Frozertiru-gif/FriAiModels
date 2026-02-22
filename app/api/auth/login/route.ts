import { z } from 'zod';
import { normalizeEmail, verifyPassword } from '@/lib/auth';
import { ensureDataDir } from '@/lib/ensureDataDir';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

const loginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(72),
});

export async function POST(req: Request): Promise<Response> {
  const parsed = loginSchema.safeParse(await req.json().catch(() => null));

  if (!parsed.success) {
    return Response.json({ ok: false, message: 'Invalid request payload.' }, { status: 400 });
  }

  ensureDataDir();

  const email = normalizeEmail(parsed.data.email);
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      passwordHash: true,
    },
  });

  if (!user) {
    return Response.json({ ok: false, message: 'Invalid credentials' }, { status: 401 });
  }

  const isValid = await verifyPassword(parsed.data.password, user.passwordHash);

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

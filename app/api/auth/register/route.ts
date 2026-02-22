import { z } from 'zod';
import { hashPassword, normalizeEmail } from '@/lib/auth';
import { ensureDataDir } from '@/lib/ensureDataDir';
import { prisma } from '@/lib/prisma';
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

  ensureDataDir();

  const email = normalizeEmail(parsed.data.email);
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    return Response.json({ ok: false, message: 'Email already registered' }, { status: 409 });
  }

  const passwordHash = await hashPassword(parsed.data.password);
  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
    },
    select: {
      id: true,
      email: true,
      createdAt: true,
    },
  });

  void sendTelegramMessage(`✅ New user registered: email=${user.email} id=${user.id}`);

  return Response.json({ ok: true, user }, { status: 201 });
}

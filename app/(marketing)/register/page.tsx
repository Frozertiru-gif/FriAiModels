'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type RegisterState = {
  error: string | null;
  success: string | null;
  loading: boolean;
};

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState<RegisterState>({ error: null, success: null, loading: false });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ error: null, success: null, loading: true });

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      setState({ error: payload?.message ?? 'Registration failed.', success: null, loading: false });
      return;
    }

    setState({ error: null, success: 'Account created.', loading: false });
    setPassword('');
  }

  return (
    <section className="section-container py-16">
      <div className="mx-auto w-full max-w-md">
        <Card>
          <h1 className="text-2xl font-semibold">Create account</h1>
          <p className="mt-2 text-sm text-muted">Register with your email and password.</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-muted">
                Email
              </label>
              <Input id="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block text-sm text-muted">
                Password
              </label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>

            {state.error ? <p className="text-sm text-red-400">{state.error}</p> : null}
            {state.success ? (
              <p className="text-sm text-green-400">
                {state.success} <Link href="/login" className="underline">Go to login</Link>
              </p>
            ) : null}

            <Button type="submit" className="w-full" disabled={state.loading}>
              {state.loading ? 'Creating account...' : 'Sign up'}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type LoginState = {
  error: string | null;
  success: string | null;
  loading: boolean;
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState<LoginState>({ error: null, success: null, loading: false });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ error: null, success: null, loading: true });

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      setState({ error: payload?.message ?? 'Login failed.', success: null, loading: false });
      return;
    }

    setState({ error: null, success: 'Logged in (mock).', loading: false });
  }

  return (
    <section className="section-container py-16">
      <div className="mx-auto w-full max-w-md">
        <Card>
          <h1 className="text-2xl font-semibold">Login</h1>
          <p className="mt-2 text-sm text-muted">Use your account credentials to continue.</p>

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
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>

            {state.error ? <p className="text-sm text-red-400">{state.error}</p> : null}
            {state.success ? <p className="text-sm text-green-400">{state.success}</p> : null}

            <Button type="submit" className="w-full" disabled={state.loading}>
              {state.loading ? 'Signing in...' : 'Login'}
            </Button>

            {state.success ? (
              <Button type="button" variant="secondary" className="w-full" onClick={() => router.push('/app')}>
                Go to app
              </Button>
            ) : null}
          </form>
        </Card>
      </div>
    </section>
  );
}

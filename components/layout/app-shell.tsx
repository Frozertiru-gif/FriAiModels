'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const items = [
  { href: '/app', label: 'Dashboard' },
  { href: '/app/models', label: 'Models' },
  { href: '/app/generate', label: 'Generate' },
  { href: '/app/schedule', label: 'Schedule' },
  { href: '/app/analytics', label: 'Analytics' },
  { href: '/app/billing', label: 'Billing' },
  { href: '/app/settings', label: 'Settings' },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen md:grid md:grid-cols-[240px_1fr]">
      <aside className={cn('fixed inset-y-0 left-0 z-30 w-60 border-r border-border bg-background p-4 transition md:static md:translate-x-0', open ? 'translate-x-0' : '-translate-x-full')}>
        <h2 className="mb-6 text-xl font-semibold">FryAIModels</h2>
        <nav className="space-y-1">
          {items.map((item) => {
            const active = item.href === '/app' ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block rounded-lg px-3 py-2 text-sm',
                  active ? 'bg-accent/15 text-foreground' : 'text-muted hover:bg-card hover:text-foreground',
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main>
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-border bg-background/90 px-4 backdrop-blur md:px-8">
          <button
            className="rounded-lg border border-border p-2 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <Menu className="size-4" />
          </button>
          <p className="text-sm text-muted">MVP dashboard (mock data)</p>
        </header>
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}

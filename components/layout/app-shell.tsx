'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Menu } from 'lucide-react';
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
  const currentItem = items.find((item) => (item.href === '/app' ? pathname === item.href : pathname.startsWith(item.href)));
  const pageTitle = currentItem?.label ?? 'Dashboard';

  return (
    <div className="min-h-screen bg-background md:grid md:grid-cols-[240px_1fr]">
      <aside className={cn('fixed inset-y-0 left-0 z-30 w-60 border-r border-border bg-background/95 p-4 backdrop-blur transition md:static md:translate-x-0', open ? 'translate-x-0' : '-translate-x-full')}>
        <h2 className="mb-6 text-xl font-semibold tracking-tight">FryAIModels</h2>
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

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_35%_at_60%_2%,rgba(109,107,255,0.18),transparent_80%),radial-gradient(35%_30%_at_95%_5%,rgba(45,212,191,0.1),transparent_100%)]" />
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur md:px-8">
          <button
            className="rounded-lg border border-border p-2 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <Menu className="size-4" />
          </button>
          <div className="hidden items-center gap-2 text-sm md:flex">
            <span className="text-muted">App</span>
            <ChevronRight className="size-4 text-muted" />
            <span className="font-medium text-foreground">{pageTitle}</span>
          </div>
          <div className="rounded-full border border-border bg-card/80 px-3 py-1 text-xs text-muted backdrop-blur">User workspace</div>
        </header>
        <div className="relative p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}

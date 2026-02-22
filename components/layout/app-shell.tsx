'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { getEffectivePlan, initTrialIfMissing, type SubscriptionState } from '@/lib/subscription';

const items = [
  { href: '/app', label: 'Dashboard' },
  { href: '/app/models', label: 'Models' },
  { href: '/app/schedule', label: 'Schedule' },
  { href: '/app/analytics', label: 'Analytics' },
  { href: '/app/billing', label: 'Billing' },
  { href: '/app/settings', label: 'Settings' },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [subscription, setSubscription] = useState<SubscriptionState>({ planId: 'free' });

  useEffect(() => {
    setSubscription(initTrialIfMissing());
  }, []);
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
        <header className="sticky top-0 z-40 flex h-12 items-center justify-between border-b border-white/5 bg-background/70 px-4 backdrop-blur-md sm:h-14 sm:px-6 lg:px-8">
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
          <div className="flex items-center gap-2 md:hidden">
            <span className="text-xs font-semibold tracking-wide text-foreground">FryAI</span>
          </div>
          <div className="rounded-full border border-white/10 bg-card/80 px-3 py-1 text-xs tracking-wide text-muted backdrop-blur">Plan: {getEffectivePlan(subscription).toUpperCase()}</div>
        </header>
        <div className="relative mx-auto w-full max-w-[1100px] px-4 py-4 sm:px-6 sm:py-8 lg:px-8">{children}</div>
      </main>
    </div>
  );
}

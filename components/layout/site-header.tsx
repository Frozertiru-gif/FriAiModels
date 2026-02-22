'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { LinkButton } from '@/components/ui/button';

const nav = [
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          FryAIModels
        </Link>

        <nav className="hidden gap-6 text-sm text-muted md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LinkButton href="/login" variant="secondary">
            Войти
          </LinkButton>
          <LinkButton href="/register">Начать</LinkButton>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LinkButton href="/login" variant="secondary" className="h-9 px-3">
            Войти
          </LinkButton>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/70 text-foreground"
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="section-container border-t border-white/10 py-3 md:hidden">
          <nav className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-border/70 bg-card/50 px-3 py-2 text-sm text-muted hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <LinkButton href="/register" className="mt-1 h-10 w-full" onClick={() => setMenuOpen(false)}>
              Начать бесплатно
            </LinkButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

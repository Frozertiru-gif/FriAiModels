import Link from 'next/link';
import { LinkButton } from '@/components/ui/button';

const nav = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/showcase', label: 'Showcase' },
  { href: '/legal', label: 'Legal' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur">
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
            Login
          </LinkButton>
          <LinkButton href="/register">Sign up</LinkButton>
        </div>
      </div>
    </header>
  );
}

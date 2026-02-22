import type { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';

const baseClass =
  'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50';

const variantClass: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-soft shadow-soft',
  secondary: 'border border-border bg-card text-foreground hover:bg-card/90',
  ghost: 'text-muted hover:text-foreground hover:bg-card',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(baseClass, variantClass[variant], className)} {...props}>
      {children}
    </button>
  );
}

interface LinkButtonProps {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function LinkButton({ href, variant = 'primary', className, children }: LinkButtonProps) {
  return (
    <Link href={href} className={cn(baseClass, variantClass[variant], className)}>
      {children}
    </Link>
  );
}

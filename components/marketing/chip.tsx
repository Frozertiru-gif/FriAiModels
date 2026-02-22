import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ChipProps = {
  className?: string;
  children: ReactNode;
};

export function Chip({ className, children }: ChipProps) {
  return <span className={cn('inline-flex items-center rounded-full border border-border/80 bg-background/55 px-3 py-1 text-xs text-muted', className)}>{children}</span>;
}

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type GlassCardProps = {
  className?: string;
  children: ReactNode;
};

export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div
      className={cn(
        'surface border-white/10 bg-card/60 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_20px_45px_rgba(109,107,255,0.2)]',
        className,
      )}
    >
      {children}
    </div>
  );
}

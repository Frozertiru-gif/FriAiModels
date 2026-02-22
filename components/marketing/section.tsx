import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('section-container py-12 md:py-16', className)}>
      {children}
    </section>
  );
}

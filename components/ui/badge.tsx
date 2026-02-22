import { cn } from '@/lib/utils';

export function Badge({ text, className }: { text: string; className?: string }) {
  return <span className={cn('inline-flex rounded-full border border-border px-2.5 py-1 text-xs text-muted', className)}>{text}</span>;
}

import { Card } from '@/components/ui/card';

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <Card className="text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </Card>
  );
}

export function LoadingSkeleton() {
  return <div className="h-20 animate-pulse rounded-xl border border-border bg-card/60" aria-label="Loading" />;
}

export function ErrorState({ message }: { message: string }) {
  return (
    <Card className="border-warning/40">
      <p className="text-sm text-warning">{message}</p>
    </Card>
  );
}

import { CreditCard } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function BillingPage() {
  return (
    <Card className="py-12 text-center">
      <div className="mx-auto max-w-md">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60">
          <CreditCard className="size-7 text-accent" />
        </div>
        <h1 className="mt-5 text-2xl font-semibold tracking-tight">Биллинг будет доступен позже</h1>
        <p className="mt-2 text-sm text-muted">Здесь появятся тарифы, лимиты и история платежей после подключения платёжного модуля.</p>
        <p className="mt-4 text-xs text-muted">План: —</p>
      </div>
    </Card>
  );
}

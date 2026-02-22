import Link from 'next/link';
import { BarChart3 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AnalyticsPage() {
  return (
    <Card className="py-12 text-center">
      <div className="mx-auto max-w-md">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60">
          <BarChart3 className="size-7 text-accent" />
        </div>
        <h1 className="mt-5 text-2xl font-semibold tracking-tight">Данные для аналитики пока не собраны</h1>
        <p className="mt-2 text-sm text-muted">После первых генераций и публикаций здесь появятся метрики эффективности и динамика.</p>
        <Link href="/app/generate" className="mt-6 inline-flex rounded-lg border border-border px-4 py-2 text-sm hover:bg-card">
          Запустить первую генерацию
        </Link>
      </div>
    </Card>
  );
}

import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function GeneratePage() {
  return (
    <Card className="py-12 text-center">
      <div className="mx-auto max-w-xl">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60">
          <Sparkles className="size-7 text-accent" />
        </div>
        <h1 className="mt-5 text-2xl font-semibold tracking-tight">Сначала выберите модель</h1>
        <p className="mt-2 text-sm text-muted">Генерация доступна только из профиля выбранной виртуальной девушки. Откройте каталог и выберите персонажа.</p>
        <Link href="/app/models" className="mt-6 inline-flex rounded-lg border border-border px-4 py-2 text-sm hover:bg-card">
          Открыть каталог
        </Link>
      </div>
    </Card>
  );
}

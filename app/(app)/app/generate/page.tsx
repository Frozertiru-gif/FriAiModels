import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function GeneratePage() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <Card className="border border-border/80 bg-card/55 py-12 text-center backdrop-blur-xl">
        <div className="mx-auto max-w-xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60">
            <Sparkles className="size-7 text-accent" />
          </div>
          <h1 className="mt-5 text-2xl font-semibold tracking-tight">Сначала выберите модель</h1>
          <p className="mt-2 text-sm text-muted">Генерация доступна только в контексте конкретной виртуальной модели. Откройте каталог, выберите девушку и запустите генерацию из её профиля.</p>
          <Link href="/app/models" className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:bg-card">
            Открыть каталог
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Card>
    </div>
  );
}

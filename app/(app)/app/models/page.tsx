import Link from 'next/link';
import { Bot, PlusCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ModelsPage() {
  return (
    <Card className="py-12 text-center">
      <div className="mx-auto max-w-md">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60">
          <Bot className="size-7 text-accent" />
        </div>
        <h1 className="mt-5 text-2xl font-semibold tracking-tight">Модели ещё не добавлены</h1>
        <p className="mt-2 text-sm text-muted">Создайте первую модель, чтобы настраивать генерации и подключать расписание публикаций.</p>
        <Link href="/app/generate" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-black hover:bg-accent-glow">
          <PlusCircle className="size-4" /> Открыть генерации
        </Link>
      </div>
    </Card>
  );
}

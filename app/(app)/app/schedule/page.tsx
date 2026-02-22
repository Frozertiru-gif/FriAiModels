import Link from 'next/link';
import { CalendarX2, Clock3 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function SchedulePage() {
  return (
    <div className="space-y-4">
      <Card>
        <h1 className="text-2xl font-semibold tracking-tight">Расписание</h1>
        <p className="mt-2 text-sm text-muted">Планируйте публикации и управляйте выходом контента по времени.</p>
      </Card>

      <Card className="py-12 text-center">
        <div className="mx-auto flex max-w-md flex-col items-center">
          <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60">
            <CalendarX2 className="size-7 text-accent" />
          </div>
          <h2 className="mt-5 text-xl font-semibold">Пока нет запланированных публикаций</h2>
          <p className="mt-2 text-sm text-muted">Когда вы создадите первую генерацию, здесь можно будет собрать очередь и выбрать время публикации.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/app/generate" className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-black hover:bg-accent-glow">
              Перейти к генерациям
            </Link>
            <button disabled className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted">
              <Clock3 className="size-4" /> Автопланирование <span className="rounded-full border border-border px-2 py-0.5 text-xs">скоро</span>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

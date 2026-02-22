import Link from 'next/link';
import { BarChart3, CalendarClock, CheckCircle2, Layers3, Sparkles, Wand2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { mockSession } from '@/lib/mock/auth';

const statusCards = [
  { title: 'Модели', description: 'Добавляйте и настраивайте модели', href: '/app/models', icon: Layers3 },
  { title: 'Генерации', description: 'Создавайте контент батчами', href: '/app/generate', icon: Wand2 },
  { title: 'Расписание', description: 'Публикации по времени', href: '/app/schedule', icon: CalendarClock },
  { title: 'Аналитика', description: 'Статистика и эффективность', href: '/app/analytics', icon: BarChart3 },
];

const quickStats = [
  'Активные модели',
  'Генерации за месяц',
  'Запланированные публикации',
  'Текущий доход',
];

const nextSteps = [
  { title: 'Добавить первую модель', href: '/app/models', available: true },
  { title: 'Сделать тестовую генерацию', href: '/app/generate', available: true },
  { title: 'Настроить расписание', href: '/app/schedule', available: true },
  { title: 'Подключить биллинг', href: '/app/billing', available: false },
];

export default function DashboardPage() {
  const username = mockSession.user?.name ?? '';
  const greeting = username ? `Добро пожаловать, ${username}` : 'Добро пожаловать';

  return (
    <div className="space-y-6">
      <Card className="relative overflow-hidden border-white/10 bg-card/80 p-6 md:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-1/3 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted">
              <Sparkles className="size-3.5 text-accent" /> Рабочее пространство
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{greeting}</h1>
            <p className="mt-3 max-w-xl text-sm text-muted md:text-base">Настройте первую модель и запустите генерации.</p>
          </div>
          <div className="w-full max-w-xs rounded-2xl border border-border bg-background/60 p-4 backdrop-blur">
            <h2 className="text-sm font-medium text-foreground">Статус</h2>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-muted">Аккаунт</dt>
                <dd className="text-foreground">Активен</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted">План</dt>
                <dd className="text-foreground">—</dd>
              </div>
            </dl>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {quickStats.map((title) => (
          <Card key={title} className="bg-card/65">
            <p className="text-sm text-muted">{title}</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">—</p>
            <p className="mt-2 text-xs text-muted">Появится после первых данных</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {statusCards.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="group border-white/10 bg-card/60 transition hover:border-accent/40 hover:bg-card/80">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-background/60">
                    <Icon className="size-5 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
                <Link href={item.href} className="text-sm text-accent transition group-hover:text-accent-glow">
                  Открыть
                </Link>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="bg-card/65">
        <h2 className="text-xl font-semibold">Следующие шаги</h2>
        <p className="mt-2 text-sm text-muted">Пройдите короткий onboarding, чтобы подготовить рабочее пространство.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {nextSteps.map((step) => (
            <div key={step.title} className="flex items-center justify-between rounded-xl border border-border bg-background/50 px-4 py-3 text-sm">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-muted" />
                {step.title}
              </p>
              {step.available ? (
                <Link href={step.href} className="text-accent hover:text-accent-glow">
                  Перейти
                </Link>
              ) : (
                <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">скоро</span>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BarChart3, CalendarClock, CheckCircle2, ChevronRight, Layers3, Sparkles, Wand2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { mockSession } from '@/lib/mock/auth';
import { PlansGrid } from '@/components/pricing/plans-grid';
import { getEffectivePlan, getTrialDaysLeft, initTrialIfMissing, isTrialActive, type SubscriptionState } from '@/lib/subscription';

const actionTiles = [
  { title: 'Модели', description: 'Настройка моделей', href: '/app/models', icon: Layers3 },
  { title: 'Генерации', description: 'Быстрый запуск', href: '/app/generate', icon: Wand2 },
  { title: 'Расписание', description: 'Публикации', href: '/app/schedule', icon: CalendarClock },
  { title: 'Аналитика', description: 'Метрики и рост', href: '/app/analytics', icon: BarChart3 },
];

const quickStats = ['Активные модели', 'Генерации за месяц', 'Запланированные публикации', 'Текущий доход'];

const nextSteps = [
  { title: 'Добавить первую модель', href: '/app/models', available: true },
  { title: 'Сделать тестовую генерацию', href: '/app/generate', available: true },
  { title: 'Настроить расписание', href: '/app/schedule', available: true },
  { title: 'Подключить биллинг', href: '/app/billing', available: false },
];

export default function DashboardPage() {
  const username = mockSession.user?.name ?? '';
  const [subscription, setSubscription] = useState<SubscriptionState>({ planId: 'free' });

  useEffect(() => {
    setSubscription(initTrialIfMissing());
  }, []);

  const greeting = username ? `Добро пожаловать, ${username}` : 'Добро пожаловать';
  const effectivePlan = getEffectivePlan(subscription);
  const trialActive = isTrialActive(subscription);
  const trialDays = getTrialDaysLeft(subscription);

  return (
    <div className="space-y-3 sm:space-y-6">
      <Card className="relative overflow-hidden border-white/[0.08] bg-card/80 p-4 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-1/3 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-background/40 px-3 py-1 text-xs text-muted">
              <Sparkles className="size-3.5 text-accent" /> Рабочее пространство
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">{greeting}</h1>
            <p className="mt-2 max-w-xl line-clamp-2 text-sm text-muted sm:mt-3">Настройте первую модель и запустите генерации.</p>
          </div>
          <div className="grid w-full max-w-xs grid-cols-2 gap-2 rounded-xl border border-white/[0.08] bg-background/60 p-3 backdrop-blur sm:rounded-2xl sm:p-4">
            <div>
              <p className="text-xs text-muted">Аккаунт</p>
              <p className="text-sm font-medium text-foreground">Активен</p>
            </div>
            <div>
              <p className="text-xs text-muted">План</p>
              <p className="text-sm font-medium text-foreground">{effectivePlan.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </Card>

      <section>
        <h2 className="mb-2 text-lg font-semibold sm:mb-3">Actions</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {actionTiles.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="group border-white/[0.08] bg-card/60 p-4 transition hover:border-accent/40 hover:bg-card/80 sm:p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex size-9 items-center justify-center rounded-lg border border-white/[0.08] bg-background/60 sm:size-10 sm:rounded-xl">
                    <Icon className="size-4 text-accent sm:size-5" />
                  </div>
                  <Link href={item.href} className="inline-flex items-center text-xs text-accent transition group-hover:text-accent-glow">
                    Открыть <ChevronRight className="size-3" />
                  </Link>
                </div>
                <h3 className="mt-3 text-sm font-semibold sm:text-base">{item.title}</h3>
                <p className="mt-1 line-clamp-1 text-xs text-muted sm:text-sm">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-semibold sm:mb-3">Overview</h2>
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickStats.map((title) => (
            <Card key={title} className="border-white/[0.08] bg-card/65 p-4 sm:p-5">
              <p className="text-xs text-muted sm:text-sm">{title}</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight sm:mt-2 sm:text-3xl">—</p>
              <p className="mt-1 text-xs text-muted sm:mt-2">Появится после первых данных</p>
            </Card>
          ))}
        </div>
      </section>

      <Card className="border-white/[0.08] bg-card/65 p-4 sm:p-5">
        <h2 className="text-lg font-semibold">Billing</h2>
        <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-background/40 px-3 py-2.5">
          <p className="text-sm text-muted">{trialActive ? `Trial: осталось ${trialDays} дн.` : 'Trial завершен, активен Free-план.'}</p>
          <Link href="/app/billing" className="rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent hover:text-accent-glow">
            Апгрейд
          </Link>
        </div>
        <div className="mt-4">
          <PlansGrid currentPlanId={effectivePlan} compact />
        </div>
      </Card>

      <Card className="border-white/[0.08] bg-card/65 p-4 sm:p-5">
        <h2 className="text-lg font-semibold">Следующие шаги</h2>
        <p className="mt-1 line-clamp-2 text-sm text-muted">Пройдите короткий onboarding, чтобы подготовить рабочее пространство.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {nextSteps.map((step) => (
            <div key={step.title} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-background/50 px-4 py-3 text-sm">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-muted" />
                {step.title}
              </p>
              {step.available ? (
                <Link href={step.href} className="text-accent hover:text-accent-glow">
                  Перейти
                </Link>
              ) : (
                <span className="rounded-full border border-white/[0.12] px-2 py-0.5 text-xs uppercase tracking-wide text-muted">Скоро</span>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

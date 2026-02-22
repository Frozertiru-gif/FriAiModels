'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { AlertTriangle, Lock, Sparkles } from 'lucide-react';
import { getAvailableModelById } from '@/lib/available-models';
import { Badge } from '@/components/ui/badge';
import { LinkButton } from '@/components/ui/button';
import { FavoriteToggleButton } from '@/components/app/favorite-toggle-button';
import { Card } from '@/components/ui/card';
import { canAccessPlan } from '@/lib/plans';
import { getEffectivePlan, initTrialIfMissing, type SubscriptionState } from '@/lib/subscription';

export default function ModelDetailsPage({ params }: { params: { id: string } }) {
  const model = getAvailableModelById(params.id);
  const [subscription, setSubscription] = useState<SubscriptionState>({ planId: 'free' });

  useEffect(() => {
    setSubscription(initTrialIfMissing());
  }, []);

  const isLocked = useMemo(() => (model ? !canAccessPlan(getEffectivePlan(subscription), model.access) : false), [model, subscription]);

  if (!model) {
    return (
      <Card className="py-12 text-center">
        <div className="mx-auto max-w-lg">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60"><AlertTriangle className="size-7 text-accent" /></div>
          <h1 className="mt-5 text-2xl font-semibold tracking-tight">Профиль не найден</h1>
          <p className="mt-2 text-sm text-muted">Выбранная виртуальная модель недоступна.</p>
          <Link href="/app/models" className="mt-6 inline-flex rounded-lg border border-border px-4 py-2 text-sm hover:bg-card">К каталогу моделей</Link>
        </div>
      </Card>
    );
  }

  if (isLocked) {
    return (
      <Card className="py-12 text-center">
        <div className="mx-auto max-w-xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60"><Lock className="size-7 text-accent" /></div>
          <h1 className="mt-5 text-2xl font-semibold tracking-tight">Модель доступна на {model.access === 'elite' ? 'Elite' : 'Pro'}</h1>
          <p className="mt-2 text-sm text-muted">{model.displayName} входит в premium-каталог. Обновите тариф, чтобы открыть профиль и генерацию.</p>
          <div className="mt-6 flex justify-center gap-3"><LinkButton href="/app/billing">Выбрать тариф</LinkButton><LinkButton href="/app/models" variant="secondary">Назад к каталогу</LinkButton></div>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border/80 bg-card/55 backdrop-blur-xl">
        <div className={`relative h-52 rounded-2xl bg-gradient-to-br ${model.previewImages[1]} p-5`}>
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_50%)]" />
          <div className="relative mt-24 flex items-end justify-between">
            <div className="inline-flex size-16 items-center justify-center rounded-2xl border border-white/30 bg-black/25 text-lg font-semibold text-white">{model.displayName.split(' ').map((part) => part[0]).join('').slice(0, 2)}</div>
            <Badge text={model.contentRating} className="border-white/30 bg-black/25 text-white" />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{model.displayName}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted"><span>{model.specialization}</span><span>•</span><span>{model.languages.join(', ')}</span></div>
          </div>
          <Badge text={model.access.toUpperCase()} />
        </div>

        <p className="mt-4 max-w-4xl text-sm text-muted">{model.bio}</p>
        <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent"><Sparkles className="size-3.5" /> Adult 21+ персонаж • {model.contentRating}</p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3"><div className="flex flex-wrap gap-2">{model.tags.map((tag) => <Badge key={tag} text={tag} className="border-border/90" />)}</div><FavoriteToggleButton modelId={model.id} /></div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Сильные стороны</h2>
        <ul className="mt-3 flex flex-wrap gap-2">{model.strengths.map((item) => <li key={item} className="rounded-lg border border-border/90 bg-background/60 px-3 py-2 text-sm text-muted">{item}</li>)}</ul>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Примеры</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 6 }, (_, index) => <div key={`${model.id}-${index}`} className={`h-36 rounded-xl bg-gradient-to-br ${model.previewImages[index % 3]}`} />)}</div>
        <LinkButton href={`/app/models/${model.id}/generate`} className="mt-6">Перейти к генерации</LinkButton>
      </Card>
    </div>
  );
}

'use client';

import { useEffect, useMemo, useState } from 'react';
import { CreditCard } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlansGrid } from '@/components/pricing/plans-grid';
import { getEffectivePlan, getSubscription, getTrialDaysLeft, initTrialIfMissing, isTrialActive, setPlan, type SubscriptionState } from '@/lib/subscription';
import type { PlanId } from '@/lib/plans';

const demoBillingEnabled = process.env.NEXT_PUBLIC_DEMO_BILLING === 'true';

export default function BillingPage() {
  const [subscription, setSubscription] = useState<SubscriptionState>({ planId: 'free' });

  useEffect(() => {
    setSubscription(initTrialIfMissing());
  }, []);

  const trialActive = isTrialActive(subscription);
  const trialDaysLeft = getTrialDaysLeft(subscription);
  const effectivePlan = getEffectivePlan(subscription);

  const trialProgress = useMemo(() => {
    if (!subscription.trialStartedAt || !subscription.trialEndsAt || !trialActive) {
      return 100;
    }

    const total = new Date(subscription.trialEndsAt).getTime() - new Date(subscription.trialStartedAt).getTime();
    const left = new Date(subscription.trialEndsAt).getTime() - Date.now();
    return Math.max(0, Math.min(100, Math.round((left / total) * 100)));
  }, [subscription, trialActive]);

  const handleSelectPlan = (planId: PlanId) => {
    if (!demoBillingEnabled) {
      return;
    }

    setSubscription(setPlan(planId));
  };

  return (
    <div className="space-y-6">
      <Card className="border border-border/80 bg-card/55 backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Тарифы</h1>
            <p className="mt-2 text-sm text-muted">Единая витрина планов для апгрейда внутри кабинета.</p>
          </div>
          <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-background/60"><CreditCard className="size-6 text-accent" /></div>
        </div>

        <div className="mt-5 rounded-xl border border-border/80 bg-background/60 p-4">
          {trialActive ? (
            <>
              <p className="text-sm font-medium">Trial активен: осталось {trialDaysLeft} дн.</p>
              <div className="mt-3 h-2 rounded-full bg-card">
                <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${trialProgress}%` }} />
              </div>
            </>
          ) : (
            <p className="text-sm font-medium">Trial закончился</p>
          )}
          <p className="mt-2 text-xs text-muted">Текущий план: {effectivePlan.toUpperCase()}</p>
        </div>

        {!demoBillingEnabled && <p className="mt-4 text-xs text-muted">Покупки ещё не подключены. Для демо включите NEXT_PUBLIC_DEMO_BILLING=true.</p>}
      </Card>

      <PlansGrid currentPlanId={effectivePlan} onPlanSelect={handleSelectPlan} />

      {demoBillingEnabled && (
        <Card className="border border-border/80 bg-card/45">
          <p className="text-sm text-muted">Demo billing: кнопки «Выбрать» меняют план локально в localStorage.</p>
          <div className="mt-3 flex gap-2">
            <Button variant="secondary" onClick={() => setSubscription(getSubscription())}>Обновить состояние</Button>
            <Button variant="ghost" onClick={() => setSubscription(setPlan('trial'))}>Вернуть Trial</Button>
          </div>
        </Card>
      )}
    </div>
  );
}

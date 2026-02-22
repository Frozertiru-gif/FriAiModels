'use client';

import { Check, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PLANS, type PlanId } from '@/lib/plans';

type PlansGridProps = {
  currentPlanId?: PlanId;
  onPlanSelect?: (planId: PlanId) => void;
  compact?: boolean;
};

export function PlansGrid({ currentPlanId, onPlanSelect, compact = false }: PlansGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {PLANS.map((plan) => {
        const isCurrent = currentPlanId === plan.id;
        return (
          <Card key={plan.id} className={`relative border border-border/80 bg-card/55 backdrop-blur-xl ${plan.isPopular ? 'border-accent/60 shadow-soft' : ''}`}>
            {plan.isPopular && (
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-accent/35 bg-accent/15 px-2 py-1 text-xs text-accent">
                <Sparkles className="size-3.5" /> Популярный
              </span>
            )}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-3xl font-semibold">${plan.priceMonthly}<span className="text-sm text-muted"> /month</span></p>
            <p className="mt-2 text-sm text-muted">{plan.description}</p>

            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>{plan.limits.modelsUnlocked}</li>
              <li>{plan.limits.generationsPerDay}</li>
              <li>{plan.limits.watermark ? 'С водяным знаком' : 'Без водяного знака'}</li>
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {!compact && (
              <Button
                variant={isCurrent ? 'secondary' : 'primary'}
                disabled={isCurrent}
                className="mt-5 w-full"
                onClick={() => onPlanSelect?.(plan.id)}
              >
                {isCurrent ? 'Текущий' : plan.ctaLabel}
              </Button>
            )}
          </Card>
        );
      })}
    </div>
  );
}

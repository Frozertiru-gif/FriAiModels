'use client';

import { useState } from 'react';
import { Check, ChevronDown, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PLANS, type PlanId } from '@/lib/plans';
import { cn } from '@/lib/utils';

type PlansGridProps = {
  currentPlanId?: PlanId;
  onPlanSelect?: (planId: PlanId) => void;
  compact?: boolean;
};

export function PlansGrid({ currentPlanId, onPlanSelect, compact = false }: PlansGridProps) {
  const [expandedPlan, setExpandedPlan] = useState<PlanId | null>(null);

  return (
    <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
      {PLANS.map((plan) => {
        const isCurrent = currentPlanId === plan.id;
        const isExpanded = expandedPlan === plan.id;

        return (
          <Card key={plan.id} className={cn('relative border border-white/[0.08] bg-card/55 p-4 backdrop-blur-xl sm:p-5', plan.isPopular && 'border-accent/60 shadow-soft')}>
            {plan.isPopular && (
              <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-accent/35 bg-accent/15 px-2 py-1 text-[11px] text-accent sm:right-4 sm:top-4 sm:text-xs">
                <Sparkles className="size-3.5" /> Популярный
              </span>
            )}
            <h3 className="text-lg font-semibold sm:text-xl">{plan.name}</h3>
            <p className="mt-1 text-3xl font-semibold sm:mt-2">
              ${plan.priceMonthly}
              <span className="text-sm text-muted"> /month</span>
            </p>
            <p className="mt-1 line-clamp-2 text-xs text-muted sm:mt-2 sm:text-sm">{plan.description}</p>

            <ul className={cn('mt-3 space-y-2 text-sm text-muted', compact && 'hidden sm:block')}>
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

            {compact && (
              <div className="mt-3 sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-xs text-muted"
                  onClick={() => setExpandedPlan((prev) => (prev === plan.id ? null : plan.id))}
                >
                  Показать фичи <ChevronDown className={cn('size-3 transition', isExpanded && 'rotate-180')} />
                </button>
                {isExpanded && (
                  <ul className="mt-2 space-y-1.5 text-xs text-muted">
                    <li>{plan.limits.modelsUnlocked}</li>
                    <li>{plan.limits.generationsPerDay}</li>
                    <li>{plan.limits.watermark ? 'С водяным знаком' : 'Без водяного знака'}</li>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-3.5 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {!compact && (
              <Button variant={isCurrent ? 'secondary' : 'primary'} disabled={isCurrent} className="mt-5 w-full" onClick={() => onPlanSelect?.(plan.id)}>
                {isCurrent ? 'Текущий' : plan.ctaLabel}
              </Button>
            )}
          </Card>
        );
      })}
    </div>
  );
}

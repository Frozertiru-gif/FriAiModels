import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { plans } from '@/lib/mock/plans';

export default function BillingPage() {
  return (
    <div className="space-y-4">
      <Card>
        <h1 className="text-xl font-semibold">Current usage</h1>
        <p className="mt-2 text-sm text-muted">Models: 6 / 8 • Generations: 1,240 / 2,000 • Plan: Pro</p>
      </Card>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.id} className={plan.highlighted ? 'border-accent' : ''}>
            <h2 className="font-semibold">{plan.tier}</h2>
            <p className="mt-1 text-2xl font-semibold">${plan.priceMonthly}/mo</p>
            <Button className="mt-4 w-full" variant={plan.highlighted ? 'primary' : 'secondary'}>
              Upgrade
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

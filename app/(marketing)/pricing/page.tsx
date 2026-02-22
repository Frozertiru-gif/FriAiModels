import { Card } from '@/components/ui/card';
import { LinkButton } from '@/components/ui/button';
import { plans } from '@/lib/mock/plans';

export default function PricingPage() {
  return (
    <section className="section-container py-16">
      <h1 className="section-title">Pricing</h1>
      <p className="mt-3 text-muted">Scale from solo operation to agency-grade production with transparent subscription tiers.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.id} className={plan.highlighted ? 'border-accent shadow-soft' : ''}>
            <h2 className="text-xl font-semibold">{plan.tier}</h2>
            <p className="mt-2 text-3xl font-semibold">${plan.priceMonthly}<span className="text-sm text-muted"> /month</span></p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>{plan.modelLimit} models</li>
              <li>{plan.generationLimit} generations</li>
              {plan.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
          </Card>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <LinkButton href="/register">Start Creating</LinkButton>
      </div>
    </section>
  );
}

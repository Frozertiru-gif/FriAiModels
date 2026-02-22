import { LinkButton } from '@/components/ui/button';
import { PlansGrid } from '@/components/pricing/plans-grid';

export default function PricingPage() {
  return (
    <section className="section-container py-16">
      <h1 className="section-title">Pricing</h1>
      <p className="mt-3 text-muted">Scale from solo operation to agency-grade production with transparent subscription tiers.</p>
      <div className="mt-8">
        <PlansGrid />
      </div>
      <div className="mt-10 flex justify-center">
        <LinkButton href="/register">Start Creating</LinkButton>
      </div>
    </section>
  );
}

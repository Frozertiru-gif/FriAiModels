import { Card } from '@/components/ui/card';

const features = [
  'AI model creation workflows',
  'Prompt templates and generation batches',
  'Cross-platform scheduling and queue control',
  'Analytics snapshots for operations teams',
  'Plan-based access controls for growth',
  'Export-ready reports and structured data',
];

export default function FeaturesPage() {
  return (
    <section className="section-container py-16">
      <h1 className="section-title">Features</h1>
      <p className="mt-3 max-w-2xl text-muted">Everything you need to run AI influencer pipelines professionally, from first prompt to monetization analytics.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature}>{feature}</Card>
        ))}
      </div>
    </section>
  );
}

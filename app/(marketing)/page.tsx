import { ArrowRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PLANS } from '@/lib/plans';

const faqs = [
  ['Do I need coding skills?', 'No. The platform is built for creators and teams with no-code workflows.'],
  ['Can I manage multiple personas?', 'Yes, plan-based limits support solo creators through agency teams.'],
  ['Does this include publishing automation?', 'Yes. Scheduler, caption presets, hashtag suggestions and posting queues are included.'],
];

export default function HomePage() {
  return (
    <div className="space-y-20 py-14 md:py-20">
      <section className="section-container text-center">
        <Badge text="Premium SaaS for AI creator operations" />
        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">Build AI Influencers. Monetize Attention.</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted md:text-lg">Create, automate, and scale virtual models for TikTok, YouTube & premium platforms.</p>
        <div className="mt-8 flex justify-center gap-3">
          <LinkButton href="/register">Start Creating</LinkButton>
          <LinkButton href="/showcase" variant="secondary">
            View Showcase
          </LinkButton>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Model Types</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['Realistic', 'Anime', 'Stylized'].map((type) => (
            <Card key={type}>
              <h3 className="text-lg font-medium">{type}</h3>
              <p className="mt-2 text-sm text-muted">Professionally tuned pipelines for visual consistency and platform-fit content.</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">How it works</h2>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
          {['Create', 'Generate', 'Schedule', 'Analyze', 'Scale'].map((step, i) => (
            <div key={step} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
              <span>{step}</span>
              {i < 4 && <ArrowRight className="size-4" />}
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Automation</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {['Scheduler', 'Captions', 'Hashtags', 'Trend assistant'].map((item) => (
            <Card key={item}>
              <h3 className="text-lg font-medium">{item}</h3>
              <p className="mt-2 text-sm text-muted">Reduce manual work with policy-safe automation that keeps your brand voice consistent.</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Pricing preview</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {PLANS.map((plan) => (
            <Card key={plan.id} className={plan.isPopular ? 'border-accent shadow-soft' : ''}>
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-semibold">${plan.priceMonthly}<span className="text-sm text-muted"> /mo</span></p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-container pb-8">
        <h2 className="section-title">FAQ</h2>
        <div className="mt-6 space-y-3">
          {faqs.map(([q, a]) => (
            <Card key={q}>
              <h3 className="font-medium">{q}</h3>
              <p className="mt-1 text-sm text-muted">{a}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

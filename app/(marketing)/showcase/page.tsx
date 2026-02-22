import { Card } from '@/components/ui/card';
import { models } from '@/lib/mock/models';

export default function ShowcasePage() {
  return (
    <section className="section-container py-16">
      <h1 className="section-title">Showcase</h1>
      <p className="mt-3 text-muted">Demo model concepts generated with mock portfolio data.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((model) => (
          <Card key={model.id}>
            <div className={`h-36 rounded-xl bg-gradient-to-br ${model.avatarGradient}`} />
            <h2 className="mt-4 text-lg font-semibold">{model.name}</h2>
            <p className="text-sm text-muted">{model.type} • {model.platformFocus.join(', ')}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

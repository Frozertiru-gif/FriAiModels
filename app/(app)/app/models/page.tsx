import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/states';
import { models } from '@/lib/mock/models';
import { formatCurrency, formatNumber } from '@/lib/utils';

export default function ModelsPage() {
  if (models.length === 0) {
    return <EmptyState title="No models yet" description="Create your first AI model to start generating content." />;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Models</h1>
        <Button>Create model</Button>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {models.map((model) => (
          <Card key={model.id}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">{model.name}</h2>
                <p className="text-sm text-muted">{model.type} • {model.platformFocus.join(', ')}</p>
              </div>
              <Link href={`/app/models/${model.id}`} className="text-sm text-accent hover:text-accent-glow">Open</Link>
            </div>
            <div className="mt-4 flex gap-4 text-sm text-muted">
              <span>{formatNumber(model.followers)} followers</span>
              <span>{formatCurrency(model.monthlyRevenue)}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

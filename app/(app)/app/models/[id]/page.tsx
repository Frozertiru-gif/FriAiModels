import { notFound } from 'next/navigation';
import { ModelDetailTabs } from '@/components/app/model-detail-tabs';
import { Card } from '@/components/ui/card';
import { models } from '@/lib/mock/models';

export default function ModelDetailsPage({ params }: { params: { id: string } }) {
  const model = models.find((item) => item.id === params.id);
  if (!model) notFound();

  return (
    <div className="space-y-4">
      <Card>
        <h1 className="text-2xl font-semibold">{model.name}</h1>
        <p className="mt-1 text-sm text-muted">{model.type} model optimized for {model.platformFocus.join(', ')}</p>
      </Card>
      <ModelDetailTabs model={model} />
    </div>
  );
}

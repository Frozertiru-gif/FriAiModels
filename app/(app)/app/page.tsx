import { Card } from '@/components/ui/card';
import { models } from '@/lib/mock/models';
import { generationJobs } from '@/lib/mock/jobs';
import { scheduledPosts } from '@/lib/mock/scheduled-posts';
import { formatCurrency } from '@/lib/utils';

const revenue = models.reduce((acc, item) => acc + item.monthlyRevenue, 0);

export default function DashboardPage() {
  const cards = [
    ['Models', models.length.toString()],
    ['Monthly generations', generationJobs.length.toString()],
    ['Scheduled posts', scheduledPosts.length.toString()],
    ['Estimated revenue', formatCurrency(revenue)],
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map(([title, value]) => (
        <Card key={title}>
          <p className="text-sm text-muted">{title}</p>
          <p className="mt-2 text-2xl font-semibold">{value}</p>
        </Card>
      ))}
    </div>
  );
}

import { Card } from '@/components/ui/card';
import { scheduledPosts } from '@/lib/mock/scheduled-posts';
import { formatDate } from '@/lib/utils';

export default function SchedulePage() {
  return (
    <Card>
      <h1 className="text-xl font-semibold">Scheduled posts</h1>
      <div className="mt-4 space-y-2 text-sm">
        {scheduledPosts.map((post) => (
          <div key={post.id} className="rounded-lg border border-border bg-background/70 p-3">
            <p className="font-medium">{post.platform} • {post.status}</p>
            <p className="text-muted">{post.caption}</p>
            <p className="mt-1 text-muted">{formatDate(post.scheduledFor)}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

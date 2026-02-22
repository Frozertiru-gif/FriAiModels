import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { generationJobs } from '@/lib/mock/jobs';
import { formatDate } from '@/lib/utils';

export default function GeneratePage() {
  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-xl font-semibold">Generate content</h1>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Input placeholder="Campaign prompt" aria-label="Campaign prompt" />
          <Select aria-label="Output type">
            <option>Image set</option>
            <option>Short video</option>
            <option>Caption pack</option>
          </Select>
          <Button>Run generation</Button>
        </div>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">Recent jobs</h2>
        <div className="mt-4 space-y-2 text-sm">
          {generationJobs.slice(0, 8).map((job) => (
            <div key={job.id} className="rounded-lg border border-border bg-background/70 p-3">
              <p className="font-medium">{job.prompt}</p>
              <p className="text-muted">{job.status} • {job.outputType} • {formatDate(job.createdAt)}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

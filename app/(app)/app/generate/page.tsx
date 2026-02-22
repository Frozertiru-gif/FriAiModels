import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

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
        <h2 className="text-lg font-semibold">Generation queue</h2>
        <div className="mt-4 rounded-xl border border-dashed border-border bg-background/40 p-6 text-center">
          <p className="font-medium">История генераций пока пуста</p>
          <p className="mt-2 text-sm text-muted">Запустите первую задачу, чтобы увидеть статус и результаты в этой секции.</p>
        </div>
      </Card>
    </div>
  );
}

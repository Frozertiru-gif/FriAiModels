import Link from 'next/link';
import { Card } from '@/components/ui/card';

export default function ModelDetailsPage() {
  return (
    <Card className="py-10 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Карточка модели появится после создания</h1>
      <p className="mt-2 text-sm text-muted">Пока у вас нет сохранённых моделей. После создания здесь будут параметры, контент и расписание.</p>
      <Link href="/app/models" className="mt-6 inline-flex rounded-lg border border-border px-4 py-2 text-sm hover:bg-card">
        Вернуться к разделу моделей
      </Link>
    </Card>
  );
}

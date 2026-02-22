import Link from 'next/link';
import { AlertTriangle, Sparkles } from 'lucide-react';
import { getAvailableModelById } from '@/lib/available-models';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

export default function GenerateWithModelPage({ params }: { params: { modelId: string } }) {
  const selectedModel = getAvailableModelById(params.modelId);

  if (!selectedModel) {
    return (
      <Card className="py-12 text-center">
        <div className="mx-auto max-w-lg">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60">
            <AlertTriangle className="size-7 text-accent" />
          </div>
          <h1 className="mt-5 text-2xl font-semibold tracking-tight">Модель не найдена</h1>
          <p className="mt-2 text-sm text-muted">Возможно, модель больше не доступна или ссылка устарела. Выберите модель заново из каталога.</p>
          <Link href="/app/models" className="mt-6 inline-flex rounded-lg border border-border px-4 py-2 text-sm hover:bg-card">
            К списку моделей
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border/80 bg-card/55 backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.14em] text-muted">Выбранная модель</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">{selectedModel.title}</h1>
        <p className="mt-1 text-sm text-accent">{selectedModel.tagline}</p>
        <p className="mt-3 max-w-3xl text-sm text-muted">{selectedModel.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge text={selectedModel.category} />
          <Badge text={selectedModel.difficulty} />
          <Badge text={selectedModel.eta} />
          {selectedModel.badges.map((badge) => (
            <Badge key={badge} text={badge} />
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Запуск генерации</h2>
        <p className="mt-1 text-sm text-muted">Форма использует контекст выбранной модели. При смене модели параметры будут адаптированы.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Input placeholder="Опишите задачу или промпт" aria-label="Generation prompt" />
          <Select aria-label="Output type">
            <option>Основной результат</option>
            <option>Вариант с A/B акцентом</option>
            <option>Краткий summary</option>
          </Select>
          <Button>
            <Sparkles className="mr-2 size-4" />
            Запустить генерацию
          </Button>
        </div>
      </Card>
    </div>
  );
}

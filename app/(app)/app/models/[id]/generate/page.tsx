'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { AlertTriangle, ChevronDown, Heart, Sparkles } from 'lucide-react';
import { getAvailableModelById } from '@/lib/available-models';
import { useFavorites } from '@/hooks/useFavorites';
import { Badge } from '@/components/ui/badge';
import { Button, LinkButton } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

const promptTemplates = [
  'Съёмка в отеле, вечерний свет, editorial-подача, акцент на детали образа и мягкий контраст.',
  'Street style в центре города, city lights, динамика движения, акцент на энергетику и уверенный tone.',
  'Premium morning routine: минимализм, естественный свет, lifestyle-ракурс и мягкие подписи для Stories.',
  'Люксовый fashion-сет для запуска коллекции: 6 кадров, единый цветовой код, цепляющие подводки.',
];

export default function ModelGeneratePage({ params }: { params: { id: string } }) {
  const model = getAvailableModelById(params.id);
  const { isFavorite, toggle } = useFavorites();
  const [task, setTask] = useState('');
  const [contentType, setContentType] = useState('Фото-сет');

  const styleChips = useMemo(() => model?.tags.slice(0, 6) ?? [], [model]);

  if (!model) {
    return (
      <Card className="py-12 text-center">
        <div className="mx-auto max-w-lg">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60">
            <AlertTriangle className="size-7 text-accent" />
          </div>
          <h1 className="mt-5 text-2xl font-semibold tracking-tight">Модель не найдена</h1>
          <p className="mt-2 text-sm text-muted">Ссылка устарела или модель больше недоступна. Вернитесь в каталог и выберите актуальный профиль.</p>
          <Link href="/app/models" className="mt-6 inline-flex rounded-lg border border-border px-4 py-2 text-sm hover:bg-card">
            К каталогу
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <Card className="border border-border/80 bg-card/55 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className={`flex h-20 w-20 shrink-0 items-end justify-end rounded-2xl bg-gradient-to-br p-3 ${model.previewImages[0]}`}>
              <Badge text={model.ageBadge} className="border-white/30 bg-black/25 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">{model.displayName}</h1>
              <p className="mt-1 text-sm text-muted">{model.niche} • {model.languages.join(', ')}</p>
              <p className="mt-1 text-sm text-accent">{model.vibe}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <LinkButton href={`/app/models/${model.id}`} variant="secondary">Профиль модели</LinkButton>
            <Button variant={isFavorite(model.id) ? 'primary' : 'secondary'} className="gap-2" onClick={() => toggle(model.id)}>
              <Heart className={`size-4 ${isFavorite(model.id) ? 'fill-current' : ''}`} />
              {isFavorite(model.id) ? 'В избранном' : 'В избранное'}
            </Button>
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {model.tags.map((tag) => (
            <Badge key={tag} text={tag} className="whitespace-nowrap border-border/80" />
          ))}
        </div>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
        <Card className="border border-border/80 bg-card/55 backdrop-blur-xl">
          <h2 className="text-lg font-semibold">Параметры генерации</h2>
          <div className="mt-4 space-y-4">
            <label className="block space-y-2 text-sm">
              <span className="text-muted">Тип контента</span>
              <Select value={contentType} onChange={(event) => setContentType(event.target.value)}>
                <option>Фото-сет</option>
                <option>Stories</option>
                <option>Reels-сценарий</option>
                <option>Подписи</option>
              </Select>
            </label>

            <div>
              <p className="text-sm text-muted">Стиль</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {styleChips.map((tag) => (
                  <button key={tag} type="button" className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted hover:text-foreground">
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="text-muted">Количество</span>
                <Input value="Скоро" disabled />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-muted">Формат</span>
                <Select>
                  <option>Стандартный</option>
                  <option>Кампания</option>
                  <option>Лонгрид</option>
                </Select>
              </label>
            </div>
          </div>
        </Card>

        <Card className="border border-border/80 bg-card/55 backdrop-blur-xl">
          <h2 className="text-lg font-semibold">Prompt / Задача</h2>
          <textarea
            value={task}
            onChange={(event) => setTask(event.target.value)}
            placeholder="Опишите задачу, желаемую атмосферу, сцену, стиль, ограничения и результат..."
            className="mt-4 h-48 w-full rounded-xl border border-border bg-background/70 p-3 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />

          <details className="mt-4 rounded-xl border border-border bg-background/50 p-3">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              Подсказки для быстрого старта
              <ChevronDown className="size-4 text-muted" />
            </summary>
            <div className="mt-3 flex flex-wrap gap-2">
              {promptTemplates.map((template) => (
                <button
                  key={template}
                  type="button"
                  onClick={() => setTask(template)}
                  className="rounded-lg border border-border bg-card px-3 py-2 text-left text-xs text-muted hover:text-foreground"
                >
                  {template}
                </button>
              ))}
            </div>
          </details>

          <div className="mt-5 flex flex-col items-end gap-2">
            <Button className="gap-2">
              <Sparkles className="size-4" />
              Запустить
            </Button>
            <p className="text-xs text-muted">MVP: результаты появятся в разделе History (скоро).</p>
          </div>
        </Card>
      </div>

      <Card className="border border-border/80 bg-card/45 backdrop-blur-xl">
        <h2 className="text-lg font-semibold">Последние генерации</h2>
        <div className="mt-4 rounded-xl border border-dashed border-border bg-background/40 p-8 text-center">
          <p className="font-medium">Пока пусто</p>
          <p className="mt-2 text-sm text-muted">Здесь появятся результаты после первых запусков.</p>
          <Button className="mt-4">Сгенерировать первый сет</Button>
        </div>
      </Card>
    </div>
  );
}

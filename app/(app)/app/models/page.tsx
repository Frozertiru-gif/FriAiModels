'use client';

import { useMemo, useState } from 'react';
import {
  AudioLines,
  Bot,
  Boxes,
  Clock3,
  Film,
  Image as ImageIcon,
  Search,
  Sparkles,
  TextCursorInput,
  WandSparkles,
} from 'lucide-react';
import { AVAILABLE_MODELS } from '@/lib/available-models';
import { Badge } from '@/components/ui/badge';
import { Button, LinkButton } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const categoryIcon = {
  Video: Film,
  Image: ImageIcon,
  Text: TextCursorInput,
  Audio: AudioLines,
  'Audio/Text': AudioLines,
  'Text/Video': Boxes,
};

export default function ModelsPage() {
  const [query, setQuery] = useState('');

  const filteredModels = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return AVAILABLE_MODELS;
    }

    return AVAILABLE_MODELS.filter((model) => model.title.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(280px,0.9fr)_minmax(0,2.1fr)]">
      <Card className="h-fit border border-border/80 bg-card/55 backdrop-blur-xl">
        <div className="rounded-2xl border border-dashed border-border/90 bg-background/60 p-6 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-card/80 shadow-soft">
            <Bot className="size-7 text-accent" />
          </div>
          <h1 className="mt-5 text-2xl font-semibold tracking-tight">Мои модели</h1>
          <p className="mt-2 text-sm text-muted">Здесь будут ваши персональные модели и шаблоны генераций.</p>

          <div className="mt-8 rounded-xl border border-border/80 bg-background/60 p-5 text-left">
            <p className="font-medium">У вас пока нет добавленных моделей</p>
            <p className="mt-2 text-sm text-muted">После подключения пользовательских моделей вы сможете хранить их настройки и запускать генерации в один клик.</p>
            <div className="mt-5 flex items-center gap-3">
              <Button disabled className="gap-2">
                Добавить модель
              </Button>
              <Badge text="скоро" className="border-accent/30 text-accent" />
            </div>
          </div>
        </div>
      </Card>

      <Card className="border border-border/80 bg-card/55 backdrop-blur-xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Доступные модели</h2>
            <p className="mt-1 text-sm text-muted">Выберите преднастроенную модель и перейдите к генерации в её контексте.</p>
          </div>
          <label className="relative w-full max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Поиск модели по названию"
              className="pl-9"
              aria-label="Поиск модели по названию"
            />
          </label>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
          {filteredModels.map((model) => {
            const Icon = categoryIcon[model.category] ?? WandSparkles;

            return (
              <article
                key={model.id}
                className="group rounded-2xl border border-border/75 bg-background/55 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-[0_10px_35px_rgba(109,107,255,0.18)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-card/80">
                    <Icon className="size-5 text-accent" />
                  </div>
                  <Badge text={model.category} className="border-border/90" />
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-tight">{model.title}</h3>
                <p className="mt-1 text-sm text-accent">{model.tagline}</p>
                <p className="mt-3 text-sm text-muted">{model.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge text={model.difficulty} />
                  <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                    <Clock3 className="size-3" /> {model.eta}
                  </span>
                  {model.badges.slice(0, 2).map((item) => (
                    <Badge key={item} text={item} />
                  ))}
                </div>

                <ul className="mt-4 space-y-1.5 text-sm text-muted">
                  {model.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 size-3.5 text-accent" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  <LinkButton href={`/app/generate/${model.id}`} className="flex-1 min-w-32">
                    Выбрать модель
                  </LinkButton>
                  <Button variant="secondary" className="flex-1 min-w-28" disabled>
                    Подробнее
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        {filteredModels.length === 0 && (
          <div className="mt-6 rounded-xl border border-dashed border-border bg-background/40 p-8 text-center">
            <p className="font-medium">По вашему запросу модели не найдены</p>
            <p className="mt-2 text-sm text-muted">Попробуйте изменить название или очистить поиск.</p>
          </div>
        )}
      </Card>
    </div>
  );
}

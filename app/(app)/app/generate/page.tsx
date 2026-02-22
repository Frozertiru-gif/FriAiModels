'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { AVAILABLE_GIRLS } from '@/lib/available-models';
import { useFavorites } from '@/hooks/useFavorites';
import { Badge } from '@/components/ui/badge';
import { Button, LinkButton } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function GenerateLanding() {
  const router = useRouter();
  const { favorites, isReady, toggle } = useFavorites();

  const favoriteModels = useMemo(
    () => AVAILABLE_GIRLS.filter((model) => favorites.includes(model.id)),
    [favorites],
  );

  const hasFavorites = favoriteModels.length > 0;

  if (!isReady) {
    return (
      <div className="mx-auto w-full max-w-3xl">
        <Card className="border border-border/80 bg-card/55 py-12 text-center backdrop-blur-xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60">
            <Sparkles className="size-7 text-accent" />
          </div>
          <p className="mt-5 text-sm text-muted">Загружаем избранные модели…</p>
        </Card>
      </div>
    );
  }

  if (!hasFavorites) {
    return (
      <div className="mx-auto w-full max-w-3xl">
        <Card className="border border-border/80 bg-card/55 py-12 text-center backdrop-blur-xl">
          <div className="mx-auto max-w-xl">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60">
              <Sparkles className="size-7 text-accent" />
            </div>
            <h1 className="mt-5 text-2xl font-semibold tracking-tight">Сначала выберите модель</h1>
            <p className="mt-2 text-sm text-muted">Добавьте модели в избранное, чтобы запускать генерацию в один клик.</p>
            <Link href="/app/models" className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:bg-card">
              Открыть каталог
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border/80 bg-card/55 backdrop-blur-xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Быстрый запуск</h1>
            <p className="mt-2 text-sm text-muted">Выберите одну из избранных моделей, чтобы перейти к генерации.</p>
          </div>
          <LinkButton href="/app/models" variant="secondary">Открыть каталог</LinkButton>
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {favoriteModels.map((model) => {
          const visibleTags = model.tags.slice(0, 5);

          return (
            <article
              key={model.id}
              className="rounded-2xl border border-border/75 bg-card/55 p-4 backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-[0_14px_35px_rgba(109,107,255,0.2)]"
            >
              <div className={`flex h-32 items-end justify-between rounded-xl bg-gradient-to-br p-3 ${model.previewImages[0]}`}>
                <div className="inline-flex size-10 items-center justify-center rounded-xl border border-white/30 bg-black/20 text-sm font-semibold text-white">
                  {model.displayName
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <button
                  type="button"
                  aria-label="Убрать из избранного"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-rose-300/60 bg-rose-500/20 text-rose-100 transition hover:bg-rose-500/35"
                  onClick={() => toggle(model.id)}
                >
                  <Heart className="size-4 fill-current" />
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <h3 className="text-lg font-semibold leading-tight">{model.displayName}</h3>
                <Badge text={model.ageBadge} />
              </div>
              <p className="mt-1 text-sm text-muted">{model.niche}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {visibleTags.map((tag) => (
                  <Badge key={tag} text={tag} className="border-border/90" />
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Button className="flex-1 min-w-28" onClick={() => router.push(`/app/models/${model.id}/generate`)}>
                  Генерировать
                </Button>
                <LinkButton href={`/app/models/${model.id}`} variant="secondary" className="flex-1 min-w-24">
                  Профиль
                </LinkButton>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

'use client';

import { useMemo, useRef, useState } from 'react';
import { Heart, Search, Sparkles } from 'lucide-react';
import { AVAILABLE_GIRLS, type PriceTier } from '@/lib/available-models';
import { useFavorites } from '@/hooks/useFavorites';
import { Badge } from '@/components/ui/badge';
import { Button, LinkButton } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const nicheFilters = ['All', 'Fitness', 'Cosplay', 'Luxury', 'Alt', 'Girl-next-door', 'Business', 'Travel'] as const;
const languageFilters = ['All', 'RU', 'EN', 'ES', 'DE', 'JP', 'IT', 'PT'] as const;
const priceFilters = ['All', 'Standard', 'Pro', 'Elite'] as const;

function FilterChip({ active, onClick, label, disabled = false }: { active: boolean; onClick: () => void; label: string; disabled?: boolean }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs transition ${
        active ? 'border-accent/70 bg-accent/10 text-accent' : 'border-border/80 text-muted hover:border-accent/40 hover:text-foreground'
      } disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {label}
    </button>
  );
}

export default function ModelsPage() {
  const [query, setQuery] = useState('');
  const [selectedNiche, setSelectedNiche] = useState<(typeof nicheFilters)[number]>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<(typeof languageFilters)[number]>('All');
  const [selectedPrice, setSelectedPrice] = useState<'All' | PriceTier>('All');
  const { favorites, isFavorite, toggle } = useFavorites();
  const catalogRef = useRef<HTMLDivElement>(null);

  const favoriteModels = useMemo(() => AVAILABLE_GIRLS.filter((model) => favorites.includes(model.id)).slice(0, 5), [favorites]);

  const filteredModels = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return AVAILABLE_GIRLS.filter((model) => {
      const matchesQuery =
        !normalized ||
        model.displayName.toLowerCase().includes(normalized) ||
        model.tags.some((tag) => tag.toLowerCase().includes(normalized));

      const matchesNiche = selectedNiche === 'All' || model.niche === selectedNiche;
      const matchesLanguage = selectedLanguage === 'All' || model.languages.includes(selectedLanguage);
      const matchesPrice = selectedPrice === 'All' || model.priceTier === selectedPrice;

      return matchesQuery && matchesNiche && matchesLanguage && matchesPrice;
    });
  }, [query, selectedLanguage, selectedNiche, selectedPrice]);

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(280px,0.9fr)_minmax(0,2.1fr)]">
      <Card className="h-fit border border-border/80 bg-card/55 backdrop-blur-xl">
        <div className="rounded-2xl border border-dashed border-border/90 bg-background/60 p-6">
          <h1 className="text-2xl font-semibold tracking-tight">Мои модели</h1>
          <p className="mt-2 text-sm text-muted">Избранные виртуальные модели для быстрого запуска генерации.</p>

          {favoriteModels.length === 0 ? (
            <div className="mt-8 rounded-xl border border-border/80 bg-background/70 p-5">
              <p className="font-medium">В избранном пока пусто</p>
              <p className="mt-2 text-sm text-muted">Добавьте девушек из каталога — они появятся здесь для быстрого доступа.</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button onClick={() => catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Добавить из каталога</Button>
              </div>
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {favoriteModels.map((model) => (
                <div key={model.id} className="rounded-xl border border-border/80 bg-background/75 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium">{model.displayName}</p>
                      <p className="mt-1 text-xs text-muted">{model.niche} • {model.languages.join(', ')}</p>
                    </div>
                    <Badge text={model.priceTier} />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <LinkButton href={`/app/models/${model.id}`} variant="secondary">Открыть</LinkButton>
                    <Button variant="ghost" className="gap-2" onClick={() => toggle(model.id)}>
                      <Heart className="size-4 fill-current text-accent" />
                      Убрать
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>

      <div ref={catalogRef}>
        <Card className="border border-border/80 bg-card/55 backdrop-blur-xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Каталог моделей</h2>
              <p className="mt-1 text-sm text-muted">Выберите виртуальную девушку (18+) и откройте её профиль перед запуском генерации.</p>
            </div>
            <label className="relative w-full max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Поиск по имени или тегам"
                className="pl-9"
                aria-label="Поиск по имени или тегам"
              />
            </label>
          </div>

          <div className="mt-5 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted">Ниша:</span>
              {nicheFilters.map((item) => (
                <FilterChip key={item} label={item} active={selectedNiche === item} onClick={() => setSelectedNiche(item)} />
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted">Язык:</span>
              {languageFilters.map((item) => (
                <FilterChip key={item} label={item} active={selectedLanguage === item} onClick={() => setSelectedLanguage(item)} />
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted">Тариф:</span>
              {priceFilters.map((item) => (
                <FilterChip key={item} label={item} active={selectedPrice === item} onClick={() => setSelectedPrice(item)} />
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
            {filteredModels.map((model) => {
              const visibleTags = model.tags.slice(0, 5);
              const hiddenCount = Math.max(0, model.tags.length - visibleTags.length);
              const activeFavorite = isFavorite(model.id);

              return (
                <article
                  key={model.id}
                  className="group rounded-2xl border border-border/75 bg-background/60 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-[0_14px_35px_rgba(109,107,255,0.2)]"
                >
                  <div className={`flex h-36 items-end justify-between rounded-xl bg-gradient-to-br p-3 ${model.previewImages[0]}`}>
                    <div className="inline-flex size-10 items-center justify-center rounded-xl border border-white/30 bg-black/20 text-sm font-semibold text-white">
                      {model.displayName
                        .split(' ')
                        .map((part) => part[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={activeFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
                        className={`inline-flex size-9 items-center justify-center rounded-lg border transition ${
                          activeFavorite
                            ? 'border-rose-300/60 bg-rose-500/20 text-rose-100'
                            : 'border-white/35 bg-black/20 text-white hover:bg-black/35'
                        }`}
                        onClick={(event) => {
                          event.stopPropagation();
                          toggle(model.id);
                        }}
                      >
                        <Heart className={`size-4 ${activeFavorite ? 'fill-current' : ''}`} />
                      </button>
                      <Badge text={model.ageBadge} className="border-white/30 bg-black/25 text-white" />
                    </div>
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-tight">{model.displayName}</h3>
                    <Badge text={model.priceTier} />
                  </div>
                  <p className="mt-1 text-sm text-accent">{model.vibe}</p>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted">
                    <span>{model.niche}</span>
                    <span>•</span>
                    <span>{model.languages.join(', ')}</span>
                    {model.city && (
                      <>
                        <span>•</span>
                        <span>{model.city}</span>
                      </>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {visibleTags.map((tag) => (
                      <Badge key={tag} text={tag} className="border-border/90" />
                    ))}
                    {hiddenCount > 0 && <Badge text={`+${hiddenCount}`} className="border-border/90" />}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <LinkButton href={`/app/models/${model.id}`} className="flex-1 min-w-32">
                      Открыть профиль
                    </LinkButton>
                    <LinkButton href={`/app/models/${model.id}/generate`} variant="secondary" className="flex-1 min-w-28">
                      Создать контент
                    </LinkButton>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredModels.length === 0 && (
            <div className="mt-6 rounded-xl border border-dashed border-border bg-background/40 p-8 text-center">
              <p className="font-medium">По вашему запросу модели не найдены</p>
              <p className="mt-2 text-sm text-muted">Измените фильтры или очистите строку поиска.</p>
            </div>
          )}

          <p className="mt-6 flex items-center gap-2 text-xs text-muted">
            <Sparkles className="size-3.5 text-accent" /> Все персонажи в каталоге — вымышленные виртуальные модели (18+).
          </p>
        </Card>
      </div>
    </div>
  );
}

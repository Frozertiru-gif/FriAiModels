import Link from 'next/link';
import { AlertTriangle, Sparkles } from 'lucide-react';
import { getAvailableModelById } from '@/lib/available-models';
import { Badge } from '@/components/ui/badge';
import { LinkButton } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ModelDetailsPage({ params }: { params: { id: string } }) {
  const model = getAvailableModelById(params.id);

  if (!model) {
    return (
      <Card className="py-12 text-center">
        <div className="mx-auto max-w-lg">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-background/60">
            <AlertTriangle className="size-7 text-accent" />
          </div>
          <h1 className="mt-5 text-2xl font-semibold tracking-tight">Профиль не найден</h1>
          <p className="mt-2 text-sm text-muted">Выбранная виртуальная модель недоступна. Вернитесь к каталогу и выберите персонажа снова.</p>
          <Link href="/app/models" className="mt-6 inline-flex rounded-lg border border-border px-4 py-2 text-sm hover:bg-card">
            К каталогу моделей
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border/80 bg-card/55 backdrop-blur-xl">
        <div className={`relative h-52 rounded-2xl bg-gradient-to-br ${model.previewImages[1]} p-5`}> 
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_50%)]" />
          <div className="relative mt-24 flex items-end justify-between">
            <div className="inline-flex size-16 items-center justify-center rounded-2xl border border-white/30 bg-black/25 text-lg font-semibold text-white">
              {model.displayName
                .split(' ')
                .map((part) => part[0])
                .join('')
                .slice(0, 2)}
            </div>
            <Badge text={model.ageBadge} className="border-white/30 bg-black/25 text-white" />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{model.displayName}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted">
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
          </div>
          <Badge text={model.priceTier} />
        </div>

        <p className="mt-4 max-w-4xl text-sm text-muted">{model.bio}</p>

        <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
          <Sparkles className="size-3.5" /> Виртуальная модель (18+)
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {model.tags.map((tag) => (
            <Badge key={tag} text={tag} className="border-border/90" />
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Контент-форматы</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {model.capabilities.map((capability) => (
            <li key={capability} className="rounded-lg border border-border/90 bg-background/60 px-3 py-2 text-sm text-muted">
              {capability}
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Примеры</h2>
        <p className="mt-1 text-sm text-muted">Абстрактные preview-плейсхолдеры для визуального направления профиля.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={`${model.id}-${index}`} className={`h-36 rounded-xl bg-gradient-to-br ${model.previewImages[index % 3]}`} />
          ))}
        </div>

        <LinkButton href={`/app/generate/${model.id}`} className="mt-6">
          Перейти к генерации
        </LinkButton>
      </Card>
    </div>
  );
}

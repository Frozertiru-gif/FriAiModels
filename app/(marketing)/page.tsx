import { ArrowRight, CalendarClock, ChevronDown, Compass, FolderKanban, Sparkles, Wand2 } from 'lucide-react';
import { LinkButton } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Chip } from '@/components/marketing/chip';
import { GlassCard } from '@/components/marketing/glass-card';
import { Section } from '@/components/marketing/section';
import { PLANS } from '@/lib/plans';

const faqs = [
  {
    q: 'Нужны ли навыки разработки?',
    a: 'Нет. Лендинг и продукт ориентированы на no-code сценарии: выбираете модель, запускаете генерацию и управляете контентом через понятные карточки.',
  },
  {
    q: 'Что входит в Trial 7 дней?',
    a: 'Пробный доступ к каталогу, запуску генераций и основным workflow-инструментам. Этого достаточно, чтобы проверить качество и скорость.',
  },
  {
    q: 'Можно ли работать командой?',
    a: 'Да. Тарифы Pro и Elite подходят для команд и агентств с большим объёмом генераций.',
  },
  {
    q: 'Есть ли готовые шаблоны для запуска?',
    a: 'Да, вы получаете базовые сценарии, которые ускоряют запуск первых кампаний без ручной настройки.',
  },
  {
    q: 'Контент можно планировать заранее?',
    a: 'Да. В workflow заложено планирование публикаций, а расширенные сценарии постоянно дополняются.',
  },
  {
    q: 'Куда ведут CTA на лендинге?',
    a: 'Все основные действия ведут в существующие страницы: регистрация, вход и каталог моделей.',
  },
];

const modelPreviews = [
  'from-fuchsia-500/30 via-indigo-500/20 to-cyan-400/30',
  'from-violet-500/35 via-blue-500/20 to-sky-400/30',
  'from-purple-500/35 via-pink-500/20 to-indigo-500/30',
  'from-cyan-500/30 via-indigo-500/25 to-blue-500/35',
  'from-indigo-500/30 via-violet-500/25 to-fuchsia-500/30',
  'from-blue-500/30 via-violet-500/20 to-purple-500/30',
];

const steps = [
  {
    title: 'Выберите модель',
    text: 'Откройте каталог и подберите нужный стиль под задачу кампании.',
    icon: Compass,
  },
  {
    title: 'Запустите генерацию в контексте',
    text: 'Генерация учитывает выбранную модель и её параметры.',
    icon: Wand2,
  },
  {
    title: 'Планируйте и публикуйте',
    text: 'Собирайте контент-пайплайн и масштабируйте выпуск публикаций.',
    icon: CalendarClock,
  },
];

const sortedPlans = [...PLANS].sort((a, b) => Number(b.isPopular) - Number(a.isPopular));

export default function HomePage() {
  return (
    <div className="pb-12 pt-6 md:pb-20 md:pt-10">
      <Section className="pt-10 md:pt-14">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Badge text="Premium AI SaaS • Trial 7 дней" className="border-accent/35 bg-accent/10 text-accent" />
            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Премиальный каталог AI-моделей для быстрого контент-производства
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Создавайте, запускайте и масштабируйте AI-персонажей в едином workflow: от выбора модели до готового контент-плана.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <LinkButton href="/app/models" className="h-11 w-full">
                Открыть каталог моделей
              </LinkButton>
              <LinkButton href="#features" variant="secondary" className="h-11 w-full">
                Посмотреть как работает
              </LinkButton>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Chip>Dark UI + Glass style</Chip>
              <Chip>Быстрый запуск без кода</Chip>
              <Chip>Контекстная генерация</Chip>
            </div>
          </div>

          <GlassCard className="overflow-hidden p-4 sm:p-5">
            <div className="rounded-xl border border-border/80 bg-background/70 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-muted">Product preview</p>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <Chip className="text-foreground">Каталог моделей</Chip>
                <ArrowRight className="size-4 text-muted" />
                <Chip className="text-foreground">Выбор</Chip>
                <ArrowRight className="size-4 text-muted" />
                <Chip className="text-foreground">Генерация</Chip>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              <GlassCard className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">Trial 7 дней</p>
                    <p className="mt-1 text-sm text-muted">Старт без риска с понятным онбордингом.</p>
                  </div>
                  <Sparkles className="mt-1 size-4 text-accent" />
                </div>
              </GlassCard>
              <GlassCard className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">Избранное</p>
                    <p className="mt-1 text-sm text-muted">Быстрый доступ к ключевым персонажам.</p>
                  </div>
                  <FolderKanban className="mt-1 size-4 text-accent" />
                </div>
              </GlassCard>
              <GlassCard className="p-4">
                <p className="font-medium">Генерация в контексте модели</p>
                <p className="mt-1 text-sm text-muted">Стабильный стиль и предсказуемый результат в каждой итерации.</p>
              </GlassCard>
            </div>
          </GlassCard>
        </div>
      </Section>

      <div className="section-container"><div className="section-divider" /></div>

      <Section id="features">
        <h2 className="section-title">Как это работает</h2>
        <p className="mt-3 max-w-2xl text-muted">Минимум действий, максимум скорости: три шага от идеи до регулярного контента.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step) => (
            <GlassCard key={step.title}>
              <step.icon className="size-5 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <div className="section-container"><div className="section-divider" /></div>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Каталог моделей</h2>
            <p className="mt-3 max-w-2xl text-muted">Превью доступных AI-моделей с аккуратной карточной структурой.</p>
          </div>
          <LinkButton href="/app/models" variant="secondary" className="w-full sm:w-auto">
            Открыть весь каталог
          </LinkButton>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {modelPreviews.map((gradient, index) => (
            <GlassCard key={gradient} className="p-4">
              <div className={`h-32 rounded-xl border border-white/20 bg-gradient-to-br ${gradient}`} />
              <div className="mt-3 flex items-center justify-between">
                <p className="font-medium">Model #{index + 1}</p>
                <Badge text={index % 2 === 0 ? 'Trial' : 'Pro'} className="text-xs" />
              </div>
              <p className="mt-1 text-sm text-muted">Подходит для визуально консистентной генерации.</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <div className="section-container"><div className="section-divider" /></div>

      <Section id="pricing">
        <h2 className="section-title">Тарифы</h2>
        <p className="mt-3 max-w-2xl text-muted">Единая тарифная линейка продукта: от старта до масштабной команды.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPlans.map((plan) => (
            <GlassCard key={plan.id} className={plan.isPopular ? 'border-accent/50 shadow-soft' : ''}>
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge text="Trial 7 дней" className="border-accent/30 bg-accent/10 text-accent" />
                  {plan.isPopular ? <Badge text="Popular" className="border-accent/30 bg-accent/10 text-accent" /> : null}
                </div>
              </div>
              <p className="mt-3 text-3xl font-semibold">
                ${plan.priceMonthly}
                <span className="text-sm text-muted"> /month</span>
              </p>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>{plan.limits.modelsUnlocked}</li>
                <li>{plan.limits.generationsPerDay}</li>
                <li>{plan.limits.watermark ? 'С водяным знаком' : 'Без водяного знака'}</li>
              </ul>
              <LinkButton href="/register" className="mt-5 h-11 w-full">
                {plan.ctaLabel}
              </LinkButton>
            </GlassCard>
          ))}
        </div>
      </Section>

      <div className="section-container"><div className="section-divider" /></div>

      <Section id="faq">
        <h2 className="section-title">FAQ</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((item) => (
            <GlassCard key={item.q} className="p-0">
              <details className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-medium">
                  {item.q}
                  <ChevronDown className="size-4 text-muted transition group-open:rotate-180" />
                </summary>
                <p className="pt-3 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section className="pb-2">
        <GlassCard className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Готовы запустить Trial?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">Начните бесплатно и откройте каталог моделей за пару кликов.</p>
          <div className="mx-auto mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
            <LinkButton href="/register" className="h-11 w-full">Начать бесплатно (Trial)</LinkButton>
            <LinkButton href="/login" variant="secondary" className="h-11 w-full">Войти</LinkButton>
          </div>
        </GlassCard>
      </Section>
    </div>
  );
}

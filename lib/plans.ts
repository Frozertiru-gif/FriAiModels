export type PlanId = 'free' | 'trial' | 'pro' | 'elite';

export type PlanDefinition = {
  id: PlanId;
  name: string;
  priceMonthly: number;
  description: string;
  features: string[];
  ctaLabel: string;
  isPopular?: boolean;
  limits: {
    modelsUnlocked: string;
    generationsPerDay: string;
    watermark: boolean;
  };
};

export const PLAN_ORDER: PlanId[] = ['free', 'trial', 'pro', 'elite'];

export const PLANS: PlanDefinition[] = [
  {
    id: 'free',
    name: 'Free',
    priceMonthly: 0,
    description: 'Базовый доступ для знакомства с продуктом.',
    features: ['Доступ к ограниченному каталогу', 'Базовые генерации', 'Поддержка сообщества'],
    ctaLabel: 'Остаться на Free',
    limits: {
      modelsUnlocked: '2 модели',
      generationsPerDay: '10 / день',
      watermark: true,
    },
  },
  {
    id: 'pro',
    name: 'Pro',
    priceMonthly: 49,
    description: 'Основной план для активных креаторов и команд.',
    features: ['Почти весь каталог моделей', 'Расширенные шаблоны генерации', 'Приоритет очереди'],
    ctaLabel: 'Выбрать Pro',
    isPopular: true,
    limits: {
      modelsUnlocked: '10 моделей',
      generationsPerDay: '120 / день',
      watermark: false,
    },
  },
  {
    id: 'elite',
    name: 'Elite',
    priceMonthly: 129,
    description: 'Максимальный доступ для масштабирования контента.',
    features: ['Полный каталог + premium-персоны', 'Безлимитные сценарии кампаний', 'Приоритетная поддержка'],
    ctaLabel: 'Выбрать Elite',
    limits: {
      modelsUnlocked: 'Все модели',
      generationsPerDay: 'Без лимита*',
      watermark: false,
    },
  },
];

export function getPlan(planId: PlanId) {
  return PLANS.find((plan) => plan.id === planId);
}

export function canAccessPlan(currentPlan: PlanId, requiredPlan: PlanId) {
  return PLAN_ORDER.indexOf(currentPlan) >= PLAN_ORDER.indexOf(requiredPlan);
}

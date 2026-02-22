import type { Plan } from '@/lib/types';

export const plans: Plan[] = [
  {
    id: 'starter',
    tier: 'Starter',
    priceMonthly: 49,
    modelLimit: 2,
    generationLimit: 300,
    features: ['Core model builder', 'Basic scheduler', 'Weekly analytics'],
  },
  {
    id: 'pro',
    tier: 'Pro',
    priceMonthly: 149,
    modelLimit: 8,
    generationLimit: 2000,
    highlighted: true,
    features: ['Advanced generation', 'Trend assistant', 'Daily analytics + exports'],
  },
  {
    id: 'agency',
    tier: 'Agency',
    priceMonthly: 399,
    modelLimit: 30,
    generationLimit: 10000,
    features: ['Workspace controls', 'Priority queue', 'Dedicated success manager'],
  },
];

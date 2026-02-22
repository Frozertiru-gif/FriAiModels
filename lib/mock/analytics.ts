import type { AnalyticsSnapshot } from '@/lib/types';

export const analyticsSnapshots: AnalyticsSnapshot[] = Array.from({ length: 7 }).map((_, index) => ({
  date: new Date(Date.now() - (6 - index) * 24 * 60 * 60 * 1000).toISOString(),
  impressions: 85000 + index * 9200,
  engagementRate: 4.2 + index * 0.25,
  revenue: 2100 + index * 430,
}));

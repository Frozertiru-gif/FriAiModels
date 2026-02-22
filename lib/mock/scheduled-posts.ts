import type { ScheduledPost } from '@/lib/types';

const platforms: ScheduledPost['platform'][] = ['TikTok', 'YouTube', 'Premium'];

export const scheduledPosts: ScheduledPost[] = Array.from({ length: 12 }).map((_, index) => ({
  id: `post-${index + 1}`,
  modelId: ['nova', 'lena', 'iris', 'aiko'][index % 4],
  platform: platforms[index % platforms.length],
  caption: `Automated launch clip ${index + 1}: high-retention hook with CTA and trend tags.`,
  scheduledFor: new Date(Date.now() + index * 1000 * 60 * 60 * 6).toISOString(),
  status: index < 2 ? 'published' : 'scheduled',
}));

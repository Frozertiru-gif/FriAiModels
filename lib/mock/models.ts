import type { Model } from '@/lib/types';

export const models: Model[] = [
  { id: 'nova', name: 'Nova Vale', type: 'Realistic', platformFocus: ['TikTok', 'Premium'], status: 'active', followers: 124000, monthlyRevenue: 12200, avatarGradient: 'from-indigo-500/40 to-violet-500/20' },
  { id: 'aiko', name: 'Aiko Pulse', type: 'Anime', platformFocus: ['YouTube', 'TikTok'], status: 'active', followers: 88000, monthlyRevenue: 7600, avatarGradient: 'from-purple-500/40 to-fuchsia-500/20' },
  { id: 'strix', name: 'Strix Mono', type: 'Stylized', platformFocus: ['Premium'], status: 'paused', followers: 45200, monthlyRevenue: 3100, avatarGradient: 'from-sky-500/40 to-indigo-500/20' },
  { id: 'lena', name: 'Lena Drift', type: 'Realistic', platformFocus: ['TikTok', 'YouTube'], status: 'active', followers: 156000, monthlyRevenue: 18800, avatarGradient: 'from-cyan-500/40 to-blue-500/20' },
  { id: 'iris', name: 'Iris Flux', type: 'Stylized', platformFocus: ['Premium', 'YouTube'], status: 'active', followers: 67400, monthlyRevenue: 6900, avatarGradient: 'from-violet-500/40 to-indigo-500/20' },
  { id: 'miko', name: 'Miko K', type: 'Anime', platformFocus: ['TikTok'], status: 'active', followers: 53100, monthlyRevenue: 4700, avatarGradient: 'from-rose-500/40 to-purple-500/20' },
];

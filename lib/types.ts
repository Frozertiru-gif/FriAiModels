export type PlanTier = 'Starter' | 'Pro' | 'Agency';

export interface Plan {
  id: string;
  tier: PlanTier;
  priceMonthly: number;
  modelLimit: number;
  generationLimit: number;
  features: string[];
  highlighted?: boolean;
}

export interface Model {
  id: string;
  name: string;
  type: 'Realistic' | 'Anime' | 'Stylized';
  platformFocus: string[];
  status: 'active' | 'paused';
  followers: number;
  monthlyRevenue: number;
  avatarGradient: string;
}

export interface GenerationJob {
  id: string;
  modelId: string;
  prompt: string;
  status: 'queued' | 'running' | 'completed' | 'failed';
  createdAt: string;
  outputType: 'image' | 'short_video' | 'caption_set';
}

export interface ScheduledPost {
  id: string;
  modelId: string;
  platform: 'TikTok' | 'YouTube' | 'Premium';
  caption: string;
  scheduledFor: string;
  status: 'scheduled' | 'published';
}

export interface AnalyticsSnapshot {
  date: string;
  impressions: number;
  engagementRate: number;
  revenue: number;
}

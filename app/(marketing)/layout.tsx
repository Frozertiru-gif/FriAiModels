import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export const metadata: Metadata = {
  title: {
    default: 'FryAIModels | Build AI Influencers',
    template: '%s | FryAIModels',
  },
  description: 'Create, automate, and scale AI models for TikTok, YouTube and premium platforms.',
  openGraph: {
    title: 'FryAIModels',
    description: 'Premium SaaS for AI influencer operations.',
    type: 'website',
  },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-hero-glow">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

import type { Metadata } from 'next';
import HeroSection from '@/components/black-friday/HeroSection';
import TrustedSection from '@/components/black-friday/TrustedSection';
import FeaturesSection from '@/components/black-friday/FeaturesSection';
import PricingSection from '@/components/black-friday/PricingSection';
import HowItWorksSection from '@/components/black-friday/HowItWorksSection';
import LiveStudioSection from '@/components/black-friday/LiveStudioSection';
import SolutionsSection from '@/components/black-friday/SolutionsSection';
import IntegrationsSection from '@/components/black-friday/IntegrationsSection';
import TestimonialsSection from '@/components/black-friday/TestimonialsSection';
import FaqSection from '@/components/black-friday/FaqSection';
import CtaSection from '@/components/black-friday/CtaSection';
import NewsletterSection from '@/components/black-friday/NewsletterSection';

export const metadata: Metadata = {
  title: 'Black Friday 2026 — 20% Off | ZoikoStream',
  description:
    'Professional live streaming for events, creators and businesses. Black Friday 2026: 20% off eligible first-event platform fees.',
};

export default function BlackFridayPage() {
  return (
    <main className="flex w-full flex-col overflow-hidden bg-[#0a0a0f] font-inter">
      <HeroSection />
      <TrustedSection />
      <FeaturesSection />
      <PricingSection />
      <HowItWorksSection />
      <LiveStudioSection />
      <SolutionsSection />
      <IntegrationsSection />
      <FaqSection />
      <TestimonialsSection />
      <CtaSection />
      <NewsletterSection />
    </main>
  );
}

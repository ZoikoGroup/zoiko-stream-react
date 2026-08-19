import React from 'react';
import HeroSection from '@/components/faqs-and-support/HeroSection';
import UrgentHelpStrip from '@/components/faqs-and-support/UrgentHelpStrip';
import CategoryClustersSection from '@/components/faqs-and-support/CategoryClustersSection';
import FaqAccordionsAreaSection from '@/components/faqs-and-support/FaqAccordionsAreaSection';
import SupportRouterSection from '@/components/faqs-and-support/SupportRouterSection';
import TrustLogosSection from '@/components/faqs-and-support/TrustLogosSection';
import CtaSection from '@/components/faqs-and-support/CtaSection';

export const metadata = {
  title: 'FAQs & Support | Zoiko Stream',
  description: 'Find answers about platform guidelines, compliance limits, pricing models, and event delivery standards for Zoiko Stream.',
};

export default function FAQsAndSupportPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0d13]">
      <HeroSection />
      <UrgentHelpStrip />
      <CategoryClustersSection />
      <FaqAccordionsAreaSection />
      <SupportRouterSection />
      <TrustLogosSection />
      <CtaSection />
      {/* Subsequent sections will be added here */}
    </main>
  );
}

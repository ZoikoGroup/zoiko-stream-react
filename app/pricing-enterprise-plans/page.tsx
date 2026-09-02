import React from 'react';
import {
  PricingEnterprisePlansHeroSection,
  PricingEnterprisePlansComplexitySection,
  PricingEnterprisePlansStructureSection,
  PricingEnterprisePlansDimensionsSection,
  PricingEnterprisePlansNoticeSection,
  PricingEnterprisePlansProofSection,
  PricingEnterprisePlansRoutingSection,
  PricingEnterprisePlansFaqSection,
  PricingEnterprisePlansFinalCtaSection,
} from '@/components/pricing-enterprise-plans';

export const metadata = {
  title: 'Enterprise Plans & Pricing - ZoikoStream',
  description: 'Enterprise pricing built around the scope you actually need. Approved commercial structure, pricing drivers, and scoping process for ZoikoStream enterprise deployments.',
};

export default function PricingEnterprisePlansPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <PricingEnterprisePlansHeroSection />
        <PricingEnterprisePlansComplexitySection />
        <PricingEnterprisePlansStructureSection />
        <PricingEnterprisePlansDimensionsSection />
        <PricingEnterprisePlansNoticeSection />
        <PricingEnterprisePlansProofSection />
        <PricingEnterprisePlansRoutingSection />
        <PricingEnterprisePlansFaqSection />
        <PricingEnterprisePlansFinalCtaSection />
      </main>
    </div>
  );
}

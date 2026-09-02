import React from 'react';
import {
  PricingDeveloperAccessHeroSection,
  PricingDeveloperAccessDecisionsSection,
  PricingDeveloperAccessRoutingSection,
  PricingDeveloperAccessDimensionsSection,
  PricingDeveloperAccessEstimatorSection,
  PricingDeveloperAccessTechNextStepsSection,
  PricingDeveloperAccessAccountDifferenceSection,
  PricingDeveloperAccessQuoteScopedSection,
  PricingDeveloperAccessFaqSection,
} from '@/components/pricing-developer-access';

export const metadata = {
  title: 'Developer Access & Pricing - ZoikoStream',
  description: 'Understand the access and pricing path for building with ZoikoStream. Self-service developer eligibility, usage dimensions, and non-invoice estimation.',
};

export default function PricingDeveloperAccessPage() {
  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <PricingDeveloperAccessHeroSection />
        <PricingDeveloperAccessDecisionsSection />
        <PricingDeveloperAccessRoutingSection />
        <PricingDeveloperAccessDimensionsSection />
        <PricingDeveloperAccessEstimatorSection />
        <PricingDeveloperAccessTechNextStepsSection />
        <PricingDeveloperAccessAccountDifferenceSection />
        <PricingDeveloperAccessQuoteScopedSection />
        <PricingDeveloperAccessFaqSection />
      </main>
    </div>
  );
}

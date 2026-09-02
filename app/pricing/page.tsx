import React from 'react';
import {
  PricingHeroSection,
  PricingDriverModelSection,
  PricingEventScopeBuilderSection,
  PricingEstimatorNoticeSection,
  PricingProcurementBoundarySection,
  PricingRelatedPathsSection,
  PricingFaqSection,
  PricingFinalCtaSection,
} from '@/components/pricing';

export const metadata = {
  title: 'Live Events Pricing - ZoikoStream',
  description: 'Plan event pricing around the scope you actually need. Understand the factors shaping ZoikoStream Live Events commercial configurations.',
};

export default function MainPricingPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <PricingHeroSection />
        <PricingDriverModelSection />
        <PricingEventScopeBuilderSection />
        <PricingEstimatorNoticeSection />
        <PricingProcurementBoundarySection />
        <PricingRelatedPathsSection />
        <PricingFaqSection />
        <PricingFinalCtaSection />
      </main>
    </div>
  );
}

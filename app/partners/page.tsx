import React from 'react';
import {
  HeroSection,
  TwoWaysInSection,
  EcosystemDefinitionSection,
  FindRightExpertiseSection,
  EcosystemTaxonomySection,
  FindByNeedSection,
  DecisionSupportSection,
  TrustArchitectureSection,
  PartnerEcosystemBenefitsSection,
  EligibilityAndReviewJourneySection,
  PartnerResourcesSection,
  FaqSection,
  FinalCtaBannerSection,
} from '@/components/partners';

export default function PartnersPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeroSection />
      <TwoWaysInSection />
      <EcosystemDefinitionSection />
      <FindRightExpertiseSection />
      <EcosystemTaxonomySection />
      <FindByNeedSection />
      <DecisionSupportSection />
      <TrustArchitectureSection />
      <PartnerEcosystemBenefitsSection />
      <EligibilityAndReviewJourneySection />
      <PartnerResourcesSection />
      <FaqSection />
      <FinalCtaBannerSection />
    </main>
  );
}

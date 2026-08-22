import React from 'react';
import {
  HeroSection,
  WhatIsZoikoTechSection,
  CoreAccountabilitySection,
  PlatformOutcomesSection,
  RelationshipClaritySection,
  EngineeringPrinciplesSection,
  EvidencePathsSection,
  DeveloperPathwaySection,
  TrustBoundarySection,
  PeopleEcosystemSection,
  DecisionRoutingSection,
  FaqSection,
  FinalCtaSection,
} from '@/components/zoiko-tech';

export default function ZoikoTechPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <HeroSection />
      <WhatIsZoikoTechSection />
      <CoreAccountabilitySection />
      <PlatformOutcomesSection />
      <RelationshipClaritySection />
      <EngineeringPrinciplesSection />
      <EvidencePathsSection />
      <DeveloperPathwaySection />
      <TrustBoundarySection />
      <PeopleEcosystemSection />
      <DecisionRoutingSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

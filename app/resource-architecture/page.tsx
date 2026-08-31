import React from 'react';
import {
  ArchitectureHeroSection,
  ArchitecturePrinciplesSection,
  ArchitectureGoalSection,
  ArchitectureBrowseSection,
  ArchitectureCompareSection,
  ArchitectureHowToReadSection,
  ArchitectureTrustBoundariesSection,
  ArchitectureImplementationPathSection,
  ArchitectureCustomReviewCtaSection,
  ArchitectureFaqSection,
} from '@/components/resource-architecture';

export default function ResourceArchitecturePage() {
  return (
    <main className="w-full flex flex-col justify-start items-start min-h-screen bg-gray-950 overflow-x-hidden">
      <ArchitectureHeroSection />
      <ArchitecturePrinciplesSection />
      <ArchitectureGoalSection />
      <ArchitectureBrowseSection />
      <ArchitectureCompareSection />
      <ArchitectureHowToReadSection />
      <ArchitectureTrustBoundariesSection />
      <ArchitectureImplementationPathSection />
      <ArchitectureCustomReviewCtaSection />
      <ArchitectureFaqSection />
    </main>
  );
}

import React from 'react';

import {
  HeroSection,
  TeamDecisionSection,
  StartWithProductJobSection,
  ExplicitHandoffSection,
  AuthoritativeSurfacesSection,
  DeliberateLifecycleSection,
  ArchitectureFitSection,
  ServerSideSecretsSection,
  ProductionIntegrationStatesSection,
  OperatingLifecycleSection,
  AccessibilityRequirementSection,
  ReplayReadinessSection,
  DeveloperExperienceSection,
  ProductionReadinessReviewSection,
  TeamPathSelectionSection,
  FinalCtaBannerSection,
} from '@/components/solutions-developer-product-teams';

export default function SolutionsDeveloperProductTeamsPage() {
  return (
      <main className="flex-1 w-full">
        <HeroSection />
        <TeamDecisionSection />
        <StartWithProductJobSection />
        <ExplicitHandoffSection />
        <AuthoritativeSurfacesSection />
        <DeliberateLifecycleSection />
        <ArchitectureFitSection />
        <ServerSideSecretsSection />
        <ProductionIntegrationStatesSection />
        <OperatingLifecycleSection />
        <AccessibilityRequirementSection />
        <ReplayReadinessSection />
        <DeveloperExperienceSection />
        <ProductionReadinessReviewSection />
        <TeamPathSelectionSection />
        <FinalCtaBannerSection />
      </main>
     
  );
}

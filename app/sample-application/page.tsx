import React from 'react';
import {
  HeroSection,
  ChooseWorkflowSection,
  VerifiedSampleCatalogSection,
  TellsTruthBeforeCodeSection,
  RepositoryActionsSourceProvenanceSection,
  ConfigurationSecretSafetySection,
  RunAndVerifySampleSection,
  ArchitectureMapBoundariesSection,
  WhatThisSampleDemonstratesSection,
  ErrorAsyncRecoveryUXSection,
  VersionDependencyCompatibilityGovernanceSection,
  SecurityProductionBoundarySection,
  AccessibilityInclusiveExampleExperienceSection,
  MaintenanceSupportLifecycleSection,
  SampleSuccessToProductionReadinessSection,
} from '@/components/sample-application';

export default function SampleApplicationPage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 flex flex-col justify-start items-start overflow-hidden">
      <HeroSection />
      <ChooseWorkflowSection />
      <VerifiedSampleCatalogSection />
      <TellsTruthBeforeCodeSection />
      <RepositoryActionsSourceProvenanceSection />
      <ConfigurationSecretSafetySection />
      <RunAndVerifySampleSection />
      <ArchitectureMapBoundariesSection />
      <WhatThisSampleDemonstratesSection />
      <ErrorAsyncRecoveryUXSection />
      <VersionDependencyCompatibilityGovernanceSection />
      <SecurityProductionBoundarySection />
      <AccessibilityInclusiveExampleExperienceSection />
      <MaintenanceSupportLifecycleSection />
      <SampleSuccessToProductionReadinessSection />
    </main>
  );
}

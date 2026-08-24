import React from 'react';
import {
  HeroSection,
  OperatingContextSection,
  LifecycleMatrixSection,
  ProductBuildSection,
  EnterpriseGovernanceSection,
  MediaChainSection,
  InstitutionalVideoSection,
  CommunityBroadcastSection,
  ContinuousBroadcastingSection,
  RequirementComparisonSection,
  OperatingModelSection,
  EvidenceInspectionSection,
  WorkflowSelectionSection,
  NextStepLanesSection,
  FaqSection,
  FinalCtaBannerSection,
} from '@/components/solutions-organization-overview';

export default function SolutionsOrganizationOverviewPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950">
      <HeroSection />
      <OperatingContextSection />
      <LifecycleMatrixSection />
      <ProductBuildSection />
      <EnterpriseGovernanceSection />
      <MediaChainSection />
      <InstitutionalVideoSection />
      <CommunityBroadcastSection />
      <ContinuousBroadcastingSection />
      <RequirementComparisonSection />
      <OperatingModelSection />
      <EvidenceInspectionSection />
      <WorkflowSelectionSection />
      <NextStepLanesSection />
      <FaqSection />
      <FinalCtaBannerSection />
    </main>
  );
}

import React from 'react';
import {
  HeroSection,
  OperatingModelAssessmentSection,
  OperatingContractSection,
  AccountableFunctionsSection,
  LifecycleWorkflowsSection,
  StatefulControlGovernanceSection,
  ServerSideSecretsTrustSection,
  ResilienceDisciplineSection,
  AccessibleProductVideoSection,
  LiveEndingReplayStateSection,
  OperationalAnalyticsSection,
  ArchitectureProofSection,
  InspectableProofSection,
  LifecycleEngagementSection,
  FinalDecisionSection,
} from '@/components/solutions-enterprise';

export default function SolutionsEnterprisePage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 flex flex-col font-['Inter']">
      <HeroSection />
      <OperatingModelAssessmentSection />
      <OperatingContractSection />
      <AccountableFunctionsSection />
      <LifecycleWorkflowsSection />
      <StatefulControlGovernanceSection />
      <ServerSideSecretsTrustSection />
      <ResilienceDisciplineSection />
      <AccessibleProductVideoSection />
      <LiveEndingReplayStateSection />
      <OperationalAnalyticsSection />
      <ArchitectureProofSection />
      <InspectableProofSection />
      <LifecycleEngagementSection />
      <FinalDecisionSection />
    </main>
  );
}

import React from 'react';
import {
  HeroSection,
  OperatingModelSection,
  OperatingContractSection,
  GovernedReadinessSection,
  SourceProofSection,
  OperatorActionsSection,
  IntentAuthorizationSection,
  DecisionAuthoritySection,
  InclusiveDeliverySection,
  StatusModelSection,
  FailureContinuitySection,
  EndLiveReplaySection,
  OperationalEvidenceSection,
  PlatformSurfacesSection,
  ConversionFaqSection,
} from '@/components/solutions-enterprise-broadcast';

export default function SolutionsEnterpriseBroadcastPage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 flex flex-col">
      <HeroSection />
      <OperatingModelSection />
      <OperatingContractSection />
      <GovernedReadinessSection />
      <SourceProofSection />
      <OperatorActionsSection />
      <IntentAuthorizationSection />
      <DecisionAuthoritySection />
      <InclusiveDeliverySection />
      <StatusModelSection />
      <FailureContinuitySection />
      <EndLiveReplaySection />
      <OperationalEvidenceSection />
      <PlatformSurfacesSection />
      <ConversionFaqSection />
    </main>
  );
}

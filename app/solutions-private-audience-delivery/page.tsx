import React from 'react';
import {
  HeroSection,
  AudienceIntentSection,
  OperatingContractSection,
  InspectableObjectSection,
  ViewerIdentitySection,
  DeterministicAccessSection,
  ExplainAccessSection,
  TemporaryAccessSection,
  DeliverySeparationSection,
  AccessibleGateSection,
  ReplayDecisionSection,
  ObservableAuditSection,
  RoleGovernanceSection,
  ProcurementFaqSection,
  CustomerJourneySection,
} from '@/components/solutions-private-audience-delivery';

export default function SolutionsPrivateAudienceDeliveryPage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 flex flex-col">
      <HeroSection />
      <AudienceIntentSection />
      <OperatingContractSection />
      <InspectableObjectSection />
      <ViewerIdentitySection />
      <DeterministicAccessSection />
      <ExplainAccessSection />
      <TemporaryAccessSection />
      <DeliverySeparationSection />
      <AccessibleGateSection />
      <ReplayDecisionSection />
      <ObservableAuditSection />
      <RoleGovernanceSection />
      <ProcurementFaqSection />
      <CustomerJourneySection />
    </main>
  );
}

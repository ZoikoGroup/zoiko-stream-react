import {
  ContinuityContextsSection,
  ContinuityPathsSection,
  DependencyModelSection,
  DomainModelSection,
  EvidenceProofSection,
  FailureTaxonomySection,
  RecoveryLifecycleSection,
  ResilientDeliveryCta,
  ResilientDeliveryFaqSection,
  ResilientDeliveryHero,
  SecurityPrivacySection,
  StateModelSection,
} from "@/components/platform-resilient-delivery";

export default function page() {
  return (
    <main className="bg-slate-950">
      <ResilientDeliveryHero />
      <DomainModelSection />
      <FailureTaxonomySection />
      <RecoveryLifecycleSection />
      <ContinuityPathsSection />
      <StateModelSection />
      <DependencyModelSection />
      <ContinuityContextsSection />
      <EvidenceProofSection />
      <SecurityPrivacySection />
      <ResilientDeliveryFaqSection />
      <ResilientDeliveryCta />
    </main>
  );
}

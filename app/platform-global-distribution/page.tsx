import {
  AvailabilityStatesSection,
  CapabilityMatrixSection,
  ContextApplicabilitySection,
  DeliveryVsResidencySection,
  GlobalDistributionCta,
  GlobalDistributionFaqSection,
  GlobalDistributionHero,
  HowDistributionWorksSection,
  PerformanceEvidenceSection,
  ResilienceBoundariesSection,
  RoutingPathSection,
  SecurityPrivacySection,
} from "@/components/platform-global-distribution";

export default function page() {
  return (
    <main className="bg-slate-900">
      <GlobalDistributionHero />
      <HowDistributionWorksSection />
      <AvailabilityStatesSection />
      <CapabilityMatrixSection />
      <RoutingPathSection />
      <PerformanceEvidenceSection />
      <DeliveryVsResidencySection />
      <ContextApplicabilitySection />
      <ResilienceBoundariesSection />
      <SecurityPrivacySection />
      <GlobalDistributionFaqSection />
      <GlobalDistributionCta />
    </main>
  );
}

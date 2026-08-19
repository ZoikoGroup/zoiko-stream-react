import {
  HeroSection,
  OperatingPathSection,
  AccountableLifecycleSection,
  MapsToPlatformSection,
  ReadinessReviewSection,
  RolesDecisionSection,
  StateArchitectureSection,
  ControlCenterSection,
  ObserveAlertEscalateSection,
  ControlledInterventionSection,
  SpecialistCapabilitiesSection,
  SecurityPrivacyAccessibilitySection,
  EnterpriseProcurementSection,
  CustomerNextSection,
  FaqSection,
  FinalCtaSection,
} from '@/components/platform-media-operations-overview';

export default function PlatformMediaOperationsOverviewPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-100">
      <HeroSection />
      <OperatingPathSection />
      <AccountableLifecycleSection />
      <MapsToPlatformSection />
      <ReadinessReviewSection />
      <RolesDecisionSection />
      <StateArchitectureSection />
      <ControlCenterSection />
      <ObserveAlertEscalateSection />
      <ControlledInterventionSection />
      <SpecialistCapabilitiesSection />
      <SecurityPrivacyAccessibilitySection />
      <EnterpriseProcurementSection />
      <CustomerNextSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

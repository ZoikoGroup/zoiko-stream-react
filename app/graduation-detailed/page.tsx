import {
  GraduationHero,
  PlanningSurfacesSection,
  CeremonyAwarePlanningSection,
  EventShapeSection,
  ProgramIntegritySection,
  GuestAccessSection,
  ResponsibilitiesSection,
  InclusiveParticipationSection,
  ReplayArchiveSection,
  DataPrivacySection,
  ReadinessHelpSection,
  ProcurementReviewSection,
  TrustClaimsSection,
  GraduationBriefStepsSection,
  FaqAccordionSection,
  FinalCtaBand
} from '@/components/graduation-detailed';

export default function GraduationDetailedPage() {
  return (
    <main className="w-full bg-white min-h-screen text-zinc-900 transition-colors duration-250">
      <GraduationHero />
      <PlanningSurfacesSection />
      <CeremonyAwarePlanningSection />
      <EventShapeSection />
      <ProgramIntegritySection />
      <GuestAccessSection />
      <ResponsibilitiesSection />
      <InclusiveParticipationSection />
      <ReplayArchiveSection />
      <DataPrivacySection />
      <ReadinessHelpSection />
      <ProcurementReviewSection />
      <TrustClaimsSection />
      <GraduationBriefStepsSection />
      <FaqAccordionSection />
      <FinalCtaBand />
    </main>
  );
}

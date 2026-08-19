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
    <main className="w-full bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-white transition-colors duration-250">
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

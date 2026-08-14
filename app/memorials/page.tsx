import { 
  MemorialsHero,
  DecisionsSection,
  PlanningPathSection,
  AudienceAccessSection,
  IngestPathSection,
  AccessibilitySection,
  ArchiveReplaySection,
  ResilienceConfidenceSection,
  IntakeWizardForm,
  FaqAccordionSection,
  CtaFooterPanel
} from "@/components/memorials";

export default function MemorialsPage() {
  return (
    <main>
      <MemorialsHero />
      <DecisionsSection />
      <PlanningPathSection />
      <AudienceAccessSection />
      <IngestPathSection />
      <AccessibilitySection />
      <ArchiveReplaySection />
      <ResilienceConfidenceSection />
      <IntakeWizardForm />
      <FaqAccordionSection />
      <CtaFooterPanel />
    </main>
  );
}

import {
  WorshipHero,
  SchedulingSection,
  EightStepTimeline,
  AudienceHelpSection,
  ProductionIngestSection,
  AudioPathRightsSection,
  RemoteSpeakersSection,
  InclusiveInclusionSection,
  ArchiveRetentionSection,
  SafeguardingSection,
  ReadinessIndicatorsSection,
  RegularServicesToolsSection,
  IntakeWorshipForm,
  PlainFactsSection,
  WorshipFaqAccordion,
  CtaWorshipFooter
} from '@/components/workship-detailed';

export default function WorshipDetailedPage() {
  return (
    <main>
      <WorshipHero />
      <SchedulingSection />
      <EightStepTimeline />
      <AudienceHelpSection />
      <ProductionIngestSection />
      <AudioPathRightsSection />
      <RemoteSpeakersSection />
      <InclusiveInclusionSection />
      <ArchiveRetentionSection />
      <SafeguardingSection />
      <ReadinessIndicatorsSection />
      <RegularServicesToolsSection />
      <IntakeWorshipForm />
      <PlainFactsSection />
      <WorshipFaqAccordion />
      <CtaWorshipFooter />
    </main>
  );
}

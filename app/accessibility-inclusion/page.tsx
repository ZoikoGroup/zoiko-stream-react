import type { Metadata } from 'next';
import {
  AccessibleAccessSection,
  CaptionsLanguageSection,
  CoverageSection,
  GovernanceSection,
  HeroSection,
  LimitationsSection,
  LiveSupportSection,
  FaqSection,
  FinalCtaSection,
  PlanningBriefSection,
  ReadinessBoardSection,
  SourceBarriersSection,
  SystemSection,
  TemplateReuseSection,
  VerificationEvidenceSection,
  ViewerControlsSection,
} from '@/components/accessibility-inclusion';

export const metadata: Metadata = {
  title: 'Accessibility & Inclusion | ZoikoStream',
  description:
    'Define accessibility requirements early, verify what matters before go-live, and keep limitations and recovery paths visible when conditions change.',
};

export default function AccessibilityInclusionPage() {
  return (
    <main>
      <HeroSection />
      <CoverageSection />
      <SystemSection />
      <ReadinessBoardSection />
      <ViewerControlsSection />
      <AccessibleAccessSection />
      <CaptionsLanguageSection />
      <SourceBarriersSection />
      <VerificationEvidenceSection />
      <LimitationsSection />
      <LiveSupportSection />
      <TemplateReuseSection />
      <GovernanceSection />
      <PlanningBriefSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

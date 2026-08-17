import type { Metadata } from 'next';
import {
  AccessibilityContinuitySection,
  CompareOptionsSection,
  ControlCenterSection,
  EnterpriseTrustSection,
  EvidenceCloseoutSection,
  FaqSection,
  FinalCtaSection,
  GoLiveOperationsSection,
  HeroSection,
  OperatingModelSection,
  ResponsibilitySection,
  ScopeCommitmentSection,
  VerificationChangeSection,
  WhoItsForSection,
} from '@/components/assured-event';

export const metadata: Metadata = {
  title: 'Assured Event | ZoikoStream',
  description:
    'Our highest-assurance tier: active engineering supervision, dual-WAN venue audits, verified scope, and cryptographically signed operational evidence.',
};

export default function AssuredEventPage() {
  return (
    <main>
      <HeroSection />
      <OperatingModelSection />
      <WhoItsForSection />
      <ControlCenterSection />
      <ScopeCommitmentSection />
      <ResponsibilitySection />
      <VerificationChangeSection />
      <GoLiveOperationsSection />
      <AccessibilityContinuitySection />
      <EvidenceCloseoutSection />
      <CompareOptionsSection />
      <EnterpriseTrustSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

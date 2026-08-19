import React from 'react';
import HeroSection from '@/components/remote-contribution-landing/HeroSection';
import ConfidenceStripSection from '@/components/remote-contribution-landing/ConfidenceStripSection';
import WhyGovernedSection from '@/components/remote-contribution-landing/WhyGovernedSection';
import HowItWorksSection from '@/components/remote-contribution-landing/HowItWorksSection';
import SourceTypesSection from '@/components/remote-contribution-landing/SourceTypesSection';
import ContributorSetupSection from '@/components/remote-contribution-landing/ContributorSetupSection';
import PreflightVerificationSection from '@/components/remote-contribution-landing/PreflightVerificationSection';
import ProducerContributionDeskSection from '@/components/remote-contribution-landing/ProducerContributionDeskSection';
import RecoveryFallbackSection from '@/components/remote-contribution-landing/RecoveryFallbackSection';
import SecurityPrivacySection from '@/components/remote-contribution-landing/SecurityPrivacySection';
import AccessibilitySection from '@/components/remote-contribution-landing/AccessibilitySection';
import ManagedOpsSection from '@/components/remote-contribution-landing/ManagedOpsSection';
import TemplatesSection from '@/components/remote-contribution-landing/TemplatesSection';
import EvidenceGatedSection from '@/components/remote-contribution-landing/EvidenceGatedSection';
import EventBriefSection from '@/components/remote-contribution-landing/EventBriefSection';
import FaqSection from '@/components/remote-contribution-landing/FaqSection';
import FinalCtaSection from '@/components/remote-contribution-landing/FinalCtaSection';

export const metadata = {
  title: 'Remote Contribution | Zoiko Stream',
  description: 'Bring remote contributors into the live production with confidence.',
};

export default function RemoteContributionLandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-black w-full">
      <HeroSection />
      <ConfidenceStripSection />
      <WhyGovernedSection />
      <HowItWorksSection />
      <SourceTypesSection />
      <ContributorSetupSection />
      <PreflightVerificationSection />
      <ProducerContributionDeskSection />
      <RecoveryFallbackSection />
      <SecurityPrivacySection />
      <AccessibilitySection />
      <ManagedOpsSection />
      <TemplatesSection />
      <EvidenceGatedSection />
      <EventBriefSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

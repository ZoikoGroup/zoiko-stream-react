import React from 'react';
import {
  HeroSection,
  UnderstandMediaSecurityBoundarySection,
  SixControlDomainsSection,
  EncryptionKeyManagementSection,
  ZeroTrustAuthorizationSection,
  PlaybackAuthorizationContentProtectionSection,
  SecretsCredentialsDeveloperSafetySection,
  DependenciesThirdPartyResponsibilitySection,
  EvidenceTrustCenterOperationalTruthSection,
  SharedResponsibilitySection,
  IncidentResponseMonitoringSection,
  SevenStageLifecycleSecuritySection,
  SecurityAcrossWorkflowsSection,
  FaqSection,
  FinalCtaSection,
} from '@/components/platform-media-security';

export default function PlatformMediaSecurityPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-950">
      <HeroSection />
      <UnderstandMediaSecurityBoundarySection />
      <SixControlDomainsSection />
      <EncryptionKeyManagementSection />
      <ZeroTrustAuthorizationSection />
      <PlaybackAuthorizationContentProtectionSection />
      <SecretsCredentialsDeveloperSafetySection />
      <DependenciesThirdPartyResponsibilitySection />
      <EvidenceTrustCenterOperationalTruthSection />
      <SharedResponsibilitySection />
      <IncidentResponseMonitoringSection />
      <SevenStageLifecycleSecuritySection />
      <SecurityAcrossWorkflowsSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

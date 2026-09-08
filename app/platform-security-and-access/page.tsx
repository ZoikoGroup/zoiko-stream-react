import React from 'react';
import {
  PlatformSecurityAccessHeroSection,
  PlatformSecurityAccessQuestionSection,
  PlatformSecurityAccessModelSection,
  PlatformSecurityAccessResourcesSection,
  PlatformSecurityAccessBoundarySection,
  PlatformSecurityAccessAuthorizationSection,
  PlatformSecurityAccessLeastPrivilegeSection,
  PlatformSecurityAccessDeveloperSection,
  PlatformSecurityAccessPlaybackSection,
  PlatformSecurityAccessLifecycleSection,
  PlatformSecurityAccessEvidenceSection,
  PlatformSecurityAccessTrustSection,
  PlatformSecurityAccessFaqSection,
  PlatformSecurityAccessCtaSection,
} from '@/components/platform-security-and-access';

export const metadata = {
  title: 'Platform Security and Access - ZoikoStream',
  description: 'Control access to video workflows without turning security into guesswork. Layered security architecture across video workflows.',
};

export default function PlatformSecurityAccessPage() {
  return (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <PlatformSecurityAccessHeroSection />
        <PlatformSecurityAccessQuestionSection />
        <PlatformSecurityAccessModelSection />
        <PlatformSecurityAccessResourcesSection />
        <PlatformSecurityAccessBoundarySection />
        <PlatformSecurityAccessAuthorizationSection />
        <PlatformSecurityAccessLeastPrivilegeSection />
        <PlatformSecurityAccessDeveloperSection />
        <PlatformSecurityAccessPlaybackSection />
        <PlatformSecurityAccessLifecycleSection />
        <PlatformSecurityAccessEvidenceSection />
        <PlatformSecurityAccessTrustSection />
        <PlatformSecurityAccessFaqSection />
        <PlatformSecurityAccessCtaSection />
      </main>
    </div>
  );
}

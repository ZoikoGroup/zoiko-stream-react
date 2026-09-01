import React from 'react';

import {
  TrustCenterHeroSection,
  TrustCenterEvidenceStatesSection,
  TrustCenterSearchFilterSection,
  TrustCenterInventorySection,
  TrustCenterGovernanceSection,
  TrustCenterMediaArchitectureSection,
  TrustCenterIdentityAccessSection,
  TrustCenterDataProtectionSection,
  TrustCenterSecureDeliverySection,
  TrustCenterSupplyChainSection,
  TrustCenterResilienceSection,
  TrustCenterSharedResponsibilitySection,
  TrustCenterControlledAccessSection,
  TrustCenterSpecialistRoutesSection,
  TrustCenterFaqSection,
  TrustCenterSecurityReviewCtaSection,
} from '@/components/resource-security-trust-center';

export const metadata = {
  title: 'Security & Trust Center - ZoikoStream',
  description: 'Inspect approved ZoikoStream trust evidence, compliance reports, security architecture, and data protection practices.',
};

export default function ResourceSecurityTrustCenterPage() {
  return (
    <div className="w-full min-h-screen bg-gray-950 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <TrustCenterHeroSection />
        <TrustCenterEvidenceStatesSection />
        <TrustCenterSearchFilterSection />
        <TrustCenterInventorySection />
        <TrustCenterGovernanceSection />
        <TrustCenterMediaArchitectureSection />
        <TrustCenterIdentityAccessSection />
        <TrustCenterDataProtectionSection />
        <TrustCenterSecureDeliverySection />
        <TrustCenterSupplyChainSection />
        <TrustCenterResilienceSection />
        <TrustCenterSharedResponsibilitySection />
        <TrustCenterControlledAccessSection />
        <TrustCenterSpecialistRoutesSection />
        <TrustCenterFaqSection />
        <TrustCenterSecurityReviewCtaSection />
      </main>
    </div>
  );
}

import React from 'react';
import {
  HeroSection,
  CoreAccessControlDomainModelSection,
  AccessContextMatrixSection,
  IdentityAuthAuthorizationSection,
  AccessLifecycleManagementSection,
  DelegationAdminAuthoritySection,
  AudienceAccessModelsSection,
  DecisionEvidenceAuditabilitySection,
  WhereAccessControlEndsSection,
  ImplementationPathwaysSection,
  FaqSection,
  FinalCtaSection,
} from '@/components/platform-access-control';

export default function PlatformAccessControlPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-950">
      <HeroSection />
      <CoreAccessControlDomainModelSection />
      <AccessContextMatrixSection />
      <IdentityAuthAuthorizationSection />
      <AccessLifecycleManagementSection />
      <DelegationAdminAuthoritySection />
      <AudienceAccessModelsSection />
      <DecisionEvidenceAuditabilitySection />
      <WhereAccessControlEndsSection />
      <ImplementationPathwaysSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

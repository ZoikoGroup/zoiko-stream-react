import React from 'react';
import HeroSection from '@/components/responsible-disclosure/HeroSection';
import PolicyStateSection from '@/components/responsible-disclosure/PolicyStateSection';
import RoutingSection from '@/components/responsible-disclosure/RoutingSection';
import AuthorizationBoundarySection from '@/components/responsible-disclosure/AuthorizationBoundarySection';
import AssetScopeSection from '@/components/responsible-disclosure/AssetScopeSection';
import TestingMethodsSection from '@/components/responsible-disclosure/TestingMethodsSection';
import SafeHarborSection from '@/components/responsible-disclosure/SafeHarborSection';
import PrepareReportSection from '@/components/responsible-disclosure/PrepareReportSection';
import ReportIntakeSection from '@/components/responsible-disclosure/ReportIntakeSection';
import ReceiptFollowUpSection from '@/components/responsible-disclosure/ReceiptFollowUpSection';
import DisclosureCoordinationSection from '@/components/responsible-disclosure/DisclosureCoordinationSection';
import AdvisoriesSecurityTxtSection from '@/components/responsible-disclosure/AdvisoriesSecurityTxtSection';
import ReportPrivacySection from '@/components/responsible-disclosure/ReportPrivacySection';
import FaqSection from '@/components/responsible-disclosure/FaqSection';
import TrustAuthoritiesSection from '@/components/responsible-disclosure/TrustAuthoritiesSection';

export const metadata = {
  title: 'Responsible Disclosure | ZoikoStream',
  description:
    "ZoikoStream's official public route for reporting a potential security vulnerability, with published asset scope, testing rules, and secure report intake.",
};

export default function ResponsibleDisclosurePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#0a0d13] w-full overflow-hidden">
      <HeroSection />
      <PolicyStateSection />
      <RoutingSection />
      <AuthorizationBoundarySection />
      <AssetScopeSection />
      <TestingMethodsSection />
      <SafeHarborSection />
      <PrepareReportSection />
      <ReportIntakeSection />
      <ReceiptFollowUpSection />
      <DisclosureCoordinationSection />
      <AdvisoriesSecurityTxtSection />
      <ReportPrivacySection />
      <FaqSection />
      <TrustAuthoritiesSection />
    </main>
  );
}

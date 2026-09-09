import React from 'react';
import HeroSection from '@/components/security-advisories/HeroSection';
import AdvisoryStatesSection from '@/components/security-advisories/AdvisoryStatesSection';
import CurrentAdvisoriesSection from '@/components/security-advisories/CurrentAdvisoriesSection';
import SearchFiltersSection from '@/components/security-advisories/SearchFiltersSection';
import HistoricalRecordsSection from '@/components/security-advisories/HistoricalRecordsSection';
import AdvisoryFieldsSection from '@/components/security-advisories/AdvisoryFieldsSection';
import ReportVulnerabilitySection from '@/components/security-advisories/ReportVulnerabilitySection';
import ServiceHealthSection from '@/components/security-advisories/ServiceHealthSection';
import FaqSection from '@/components/security-advisories/FaqSection';
import RelatedResourcesSection from '@/components/security-advisories/RelatedResourcesSection';

export const metadata = {
  title: 'Security Advisories | ZoikoStream',
  description:
    'Review approved ZoikoStream security advisories, affected scope, publication and update history, and source-backed remediation guidance.',
};

export default function SecurityAdvisoriesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#0a0d13] w-full overflow-hidden">
      <HeroSection />
      <AdvisoryStatesSection />
      <CurrentAdvisoriesSection />
      <SearchFiltersSection />
      <HistoricalRecordsSection />
      <AdvisoryFieldsSection />
      <ReportVulnerabilitySection />
      <ServiceHealthSection />
      <FaqSection />
      <RelatedResourcesSection />
    </main>
  );
}

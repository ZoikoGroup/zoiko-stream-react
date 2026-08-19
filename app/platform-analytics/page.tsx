import React from 'react';
import HeroSection from '@/components/platform-analytics/HeroSection';
import TrustStripSection from '@/components/platform-analytics/TrustStripSection';
import JobSelectorSection from '@/components/platform-analytics/JobSelectorSection';
import FrameworkSection from '@/components/platform-analytics/FrameworkSection';
import CoverageSection from '@/components/platform-analytics/CoverageSection';
import MetricsRegistrySection from '@/components/platform-analytics/MetricsRegistrySection';
import DataQualitySection from '@/components/platform-analytics/DataQualitySection';
import ResultExperienceSection from '@/components/platform-analytics/ResultExperienceSection';
import AnalysisPatternsSection from '@/components/platform-analytics/AnalysisPatternsSection';
import AccessibilitySection from '@/components/platform-analytics/AccessibilitySection';
import EnterpriseOpsSection from '@/components/platform-analytics/EnterpriseOpsSection';
import DevPathwaySection from '@/components/platform-analytics/DevPathwaySection';
import TrustSecurityPrivacySection from '@/components/platform-analytics/TrustSecurityPrivacySection';
import ConversionBandSection from '@/components/platform-analytics/ConversionBandSection';
import FaqSection from '@/components/platform-analytics/FaqSection';
import FinalCtaSection from '@/components/platform-analytics/FinalCtaSection';

export default function PlatformAnalyticsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0f1a]">
      <HeroSection />
      <TrustStripSection />
      <JobSelectorSection />
      <FrameworkSection />
      <CoverageSection />
      <MetricsRegistrySection />
      <DataQualitySection />
      <ResultExperienceSection />
      <AnalysisPatternsSection />
      <AccessibilitySection />
      <EnterpriseOpsSection />
      <DevPathwaySection />
      <TrustSecurityPrivacySection />
      <ConversionBandSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

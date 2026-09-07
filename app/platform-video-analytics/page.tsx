import React from 'react';
import {
  PlatformVideoAnalyticsHeroSection,
  PlatformVideoAnalyticsPathSection,
  PlatformVideoAnalyticsCoverageSection,
  PlatformVideoAnalyticsDefinitionsSection,
  PlatformVideoAnalyticsDashboardSection,
  PlatformVideoAnalyticsQualitySection,
  PlatformVideoAnalyticsSurfacesSection,
  PlatformVideoAnalyticsComparisonSection,
  PlatformVideoAnalyticsReportsSection,
  PlatformVideoAnalyticsGovernanceSection,
  PlatformVideoAnalyticsFaqSection,
  PlatformVideoAnalyticsCtaSection,
} from '@/components/platform-video-analytics';

export const metadata = {
  title: 'Platform Video Analytics - ZoikoStream',
  description: 'Understand video performance with metrics you can define and trust across live and on-demand workflows.',
};

export default function PlatformVideoAnalyticsPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <PlatformVideoAnalyticsHeroSection />
        <PlatformVideoAnalyticsPathSection />
        <PlatformVideoAnalyticsCoverageSection />
        <PlatformVideoAnalyticsDefinitionsSection />
        <PlatformVideoAnalyticsDashboardSection />
        <PlatformVideoAnalyticsQualitySection />
        <PlatformVideoAnalyticsSurfacesSection />
        <PlatformVideoAnalyticsComparisonSection />
        <PlatformVideoAnalyticsReportsSection />
        <PlatformVideoAnalyticsGovernanceSection />
        <PlatformVideoAnalyticsFaqSection />
        <PlatformVideoAnalyticsCtaSection />
      </main>
    </div>
  );
}

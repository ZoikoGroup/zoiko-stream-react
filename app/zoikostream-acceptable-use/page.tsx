import { Metadata } from 'next';
import {
  HeroSection,
  WhichRouteDoINeedSection,
  ScopeSection,
  RuleCategoriesSection,
  RuleDetailsSection,
  SecurityResearchBanner,
  ReportSuspectedMisuseSection,
  WhatHappensAfterReportSection,
  VersionHistorySection,
  QuickAnswersSection,
  MobileRelatedLinksSection,
} from '@/components/zoikostream-acceptable-use';

export const metadata: Metadata = {
  title: 'Acceptable Use Policy | ZoikoStream Legal',
  description:
    'This policy explains how ZoikoStream may be used responsibly, the current scope of that expectation, and how to report suspected misuse or a security concern.',
};

export default function ZoikostreamAcceptableUsePage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-stretch bg-white">
      <HeroSection />
      <WhichRouteDoINeedSection />
      <ScopeSection />
      <RuleCategoriesSection />
      <RuleDetailsSection />
      <SecurityResearchBanner />
      <ReportSuspectedMisuseSection />
      <WhatHappensAfterReportSection />
      <VersionHistorySection />
      <QuickAnswersSection />
      <MobileRelatedLinksSection />
    </main>
  );
}

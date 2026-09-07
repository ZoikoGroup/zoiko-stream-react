import { Metadata } from 'next';
import {
  HeroSection,
  WhatThisNoticeCoversSection,
  HowCategoriesAndChoicesWorkSection,
  CookieTrackerInventorySection,
  HowActivationWorksSection,
  ManagePrivacyChoicesSection,
  BrowserPrivacySignalsSection,
  ChangesAndHistorySection,
  RelatedPrivacyPoliciesSection,
  NeedAccessibilityHelpSection,
  CookieQuickAnswersSection,
} from '@/components/zoikostream-cookie-notice';

export const metadata: Metadata = {
  title: 'Cookie Notice | ZoikoStream Privacy Choices',
  description:
    'Review the current source-approved disclosure of cookies and similar technologies for the published ZoikoStream website context.',
};

export default function ZoikostreamCookieNoticePage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-stretch bg-white">
      <HeroSection />
      <WhatThisNoticeCoversSection />
      <HowCategoriesAndChoicesWorkSection />
      <CookieTrackerInventorySection />
      <HowActivationWorksSection />
      <ManagePrivacyChoicesSection />
      <BrowserPrivacySignalsSection />
      <ChangesAndHistorySection />
      <RelatedPrivacyPoliciesSection />
      <NeedAccessibilityHelpSection />
      <CookieQuickAnswersSection />
    </main>
  );
}

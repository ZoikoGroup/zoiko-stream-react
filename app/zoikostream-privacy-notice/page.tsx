import { Metadata } from 'next';
import {
  HeroSection,
  WhatThisNoticeCoversSection,
  HowPersonalDataIsHandledSection,
  RecipientsRetentionTransfersSection,
  PrivacyRightsChoicesSection,
  SubmitPrivacyRequestSection,
  CookiesSimilarTechnologiesSection,
  AdditionalTopicsSection,
  DpaSubprocessorsSecuritySection,
  PrivacyUpdatesSection,
  ContactPrivacySection,
  PrivacyQuickAnswersSection,
  RelatedUtilitiesSection,
  PrivacyFooterCtaSection,
} from '@/components/zoikostream-privacy-notice';

export const metadata: Metadata = {
  title: 'Privacy Notice | ZoikoStream Legal',
  description:
    'Understand how ZoikoStream handles personal data in the contexts this notice covers. What personal data we collect, why, who we share it with, and your choices.',
};

export default function ZoikostreamPrivacyNoticePage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-stretch bg-white">
      <HeroSection />
      <WhatThisNoticeCoversSection />
      <HowPersonalDataIsHandledSection />
      <RecipientsRetentionTransfersSection />
      <PrivacyRightsChoicesSection />
      <SubmitPrivacyRequestSection />
      <CookiesSimilarTechnologiesSection />
      <AdditionalTopicsSection />
      <DpaSubprocessorsSecuritySection />
      <PrivacyUpdatesSection />
      <ContactPrivacySection />
      <PrivacyQuickAnswersSection />
      <RelatedUtilitiesSection />
      <PrivacyFooterCtaSection />
    </main>
  );
}

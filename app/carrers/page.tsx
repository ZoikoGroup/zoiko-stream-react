import React from 'react';
import {
  HeroSection,
  BannerNoticeSection,
  OpenRolesSearchSection,
  WorkDomainsSection,
  OperatingExpectationsSection,
  CandidateJourneySection,
  GlobalClaritySection,
  TermsAndTrustSection,
  EqualAccessAccommodationsSection,
  RecruitmentSafetyFraudSection,
  CandidatePrivacySection,
  FaqSection,
  FinalCtaBannerSection,
} from '@/components/carrers';

export default function CarrersPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-100">
      <HeroSection />
      <BannerNoticeSection />
      <OpenRolesSearchSection />
      <WorkDomainsSection />
      <OperatingExpectationsSection />
      <CandidateJourneySection />
      <GlobalClaritySection />
      <TermsAndTrustSection />
      <EqualAccessAccommodationsSection />
      <RecruitmentSafetyFraudSection />
      <CandidatePrivacySection />
      <FaqSection />
      <FinalCtaBannerSection />
    </main>
  );
}

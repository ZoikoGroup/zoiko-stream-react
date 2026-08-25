import React from 'react';
import {
  PressHeroSection,
  MediaResourcesJumpSection,
  CompanyAtAGlanceSection,
  MediaAssetLibrarySection,
  BrandGovernanceSection,
  LeadershipResourcesSection,
  MediaInquiryFormSection,
  EmbargoPolicySection,
  PressFaqSection,
} from '@/components/press';

export default function PressPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col ">
      <PressHeroSection />
      <MediaResourcesJumpSection />
      <CompanyAtAGlanceSection />
      <MediaAssetLibrarySection />
      <BrandGovernanceSection />
      <LeadershipResourcesSection />
      <MediaInquiryFormSection />
      <EmbargoPolicySection />
      <PressFaqSection />
    </main>
  );
}

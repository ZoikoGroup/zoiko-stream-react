import React from 'react';
import HeroSection from '@/components/zoikostream-developer-support/HeroSection';
import TopicSelectorSection from '@/components/zoikostream-developer-support/TopicSelectorSection';
import FastTechnicalAuthorityCheckSection from '@/components/zoikostream-developer-support/FastTechnicalAuthorityCheckSection';
import HowDeveloperSupportWorksSection from '@/components/zoikostream-developer-support/HowDeveloperSupportWorksSection';
import SpecialistHandoffMatrixSection from '@/components/zoikostream-developer-support/SpecialistHandoffMatrixSection';
import HumanSupportChannelsSection from '@/components/zoikostream-developer-support/HumanSupportChannelsSection';
import DiagnosticEvidenceSafetySection from '@/components/zoikostream-developer-support/DiagnosticEvidenceSafetySection';
import ReproductionContextBuilderSection from '@/components/zoikostream-developer-support/ReproductionContextBuilderSection';
import FAQSection from '@/components/zoikostream-developer-support/FAQSection';
import ClosingSection from '@/components/zoikostream-developer-support/ClosingSection';

export const metadata = {
  title: 'Developer Support | ZoikoStream',
  description: 'Get technical help with your ZoikoStream integration.',
};

export default function ZoikoStreamDeveloperSupportPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white w-full font-inter">
      <HeroSection />
      <TopicSelectorSection />
      <FastTechnicalAuthorityCheckSection />
      <HowDeveloperSupportWorksSection />
      <ReproductionContextBuilderSection />
      <SpecialistHandoffMatrixSection />
      <HumanSupportChannelsSection />
      <DiagnosticEvidenceSafetySection />
      <FAQSection />
      <ClosingSection />
    </main>
  );
}

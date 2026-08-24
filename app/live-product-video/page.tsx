import React from 'react';
import SectionHero from '@/components/live-product-video/SectionHero';
import SectionWorkflowFit from '@/components/live-product-video/SectionWorkflowFit';
import SectionOperatingContract from '@/components/live-product-video/SectionOperatingContract';
import SectionWorkflowArchitecture from '@/components/live-product-video/SectionWorkflowArchitecture';
import SectionCreateConfigure from '@/components/live-product-video/SectionCreateConfigure';
import Section6ContributionIngest from '@/components/live-product-video/Section6ContributionIngest';
import Section7ProduceDeliver from '@/components/live-product-video/Section7ProduceDeliver';
import Section8SecurePlayback from '@/components/live-product-video/Section8SecurePlayback';
import Section9PlayerExperience from '@/components/live-product-video/Section9PlayerExperience';
import Section10RecordingReplay from '@/components/live-product-video/Section10RecordingReplay';
import SectionObservability from '@/components/live-product-video/SectionObservability';
import SectionAccessibility from '@/components/live-product-video/SectionAccessibility';
import SectionReliability from '@/components/live-product-video/SectionReliability';
import SectionHandoff from '@/components/live-product-video/SectionHandoff';
import SectionConversionFaq from '@/components/live-product-video/SectionConversionFaq';

export default function LiveProductVideoPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0f1a]">
      <SectionHero />
      <SectionWorkflowFit />
      <SectionOperatingContract />
      <SectionWorkflowArchitecture />
      <SectionCreateConfigure />
      <Section6ContributionIngest />
      <Section7ProduceDeliver />
      <Section8SecurePlayback />
      <Section9PlayerExperience />
      <Section10RecordingReplay />
      <SectionObservability />
      <SectionAccessibility />
      <SectionReliability />
      <SectionHandoff />
      <SectionConversionFaq />
    </main>
  );
}

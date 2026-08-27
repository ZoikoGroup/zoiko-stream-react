import React from 'react';
import {
  HeroSection,
  OnThisPageNavSection,
  FullLifecycleSection,
  BeforeYouCreateAnythingSection,
  PickYourTransferMethodSection,
  RequestResponseExplorerSection,
  LargeFilesImperfectNetworksSection,
  AsynchronousByDesignSection,
  ManageWhatYouCreatedSection,
  HandOffToYourPlayerSection,
  ReactDontPollAggressivelySection,
  FailSafelySection,
  KnowBeforeYouScaleSection,
  YourLanguageYourStackSection,
  BeforeYouLaunchSection,
  NextStepCtaSection,
} from '@/components/developer-video-demand-api';

export default function DeveloperVideoDemandApiPage() {
  return (
    <main className="w-full min-h-screen bg-slate-100 flex flex-col justify-start items-start overflow-hidden">
      <HeroSection />
      <OnThisPageNavSection />
      <FullLifecycleSection />
      <BeforeYouCreateAnythingSection />
      <PickYourTransferMethodSection />
      <RequestResponseExplorerSection />
      <LargeFilesImperfectNetworksSection />
      <AsynchronousByDesignSection />
      <ManageWhatYouCreatedSection />
      <HandOffToYourPlayerSection />
      <ReactDontPollAggressivelySection />
      <FailSafelySection />
      <KnowBeforeYouScaleSection />
      <YourLanguageYourStackSection />
      <BeforeYouLaunchSection />
      <NextStepCtaSection />
    </main>
  );
}

import React from 'react';
import HeroSection from '@/components/developers-overview/HeroSection';
import JourneySection from '@/components/developers-overview/JourneySection';
import NowSection from '@/components/developers-overview/NowSection';
import MapSection from '@/components/developers-overview/MapSection';
import StreamSection from '@/components/developers-overview/StreamSection';
import DeveloperAuthSection from '@/components/developers-overview/DeveloperAuthSection';
import BuildMapSection from '@/components/developers-overview/BuildMapSection';
import WorkflowFitSection from '@/components/developers-overview/WorkflowFitSection';
import AsyncStateSection from '@/components/developers-overview/AsyncStateSection';
import SecurePlaybackSection from '@/components/developers-overview/SecurePlaybackSection';
import OperateMapSection from '@/components/developers-overview/OperateMapSection';
import RecordingLifecycleSection from '@/components/developers-overview/RecordingLifecycleSection';
import ErrorsLimitsSection from '@/components/developers-overview/ErrorsLimitsSection';
import TrustSupportSection from '@/components/developers-overview/TrustSupportSection';
import DecisionClosureSection from '@/components/developers-overview/DecisionClosureSection';
import FaqSection from '@/components/developers-overview/FaqSection';
import CtaBannerSection from '@/components/developers-overview/CtaBannerSection';

export default function DevelopersOverviewPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0f1a]">
      <HeroSection />
      <JourneySection />
      <NowSection />
      <MapSection />
      <StreamSection />
      <DeveloperAuthSection />
      <BuildMapSection />
      <WorkflowFitSection />
      <AsyncStateSection />
      <SecurePlaybackSection />
      <OperateMapSection />
      <RecordingLifecycleSection />
      <ErrorsLimitsSection />
      <TrustSupportSection />
      <DecisionClosureSection />
      <FaqSection />
      <CtaBannerSection />
    </main>
  );
}

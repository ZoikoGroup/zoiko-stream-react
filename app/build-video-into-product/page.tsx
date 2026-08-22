import React from 'react';
import HeroSection from '@/components/build-video-into-product/HeroSection';
import JobToBeDoneSection from '@/components/build-video-into-product/JobToBeDoneSection';
import VideoBehaviorSection from '@/components/build-video-into-product/VideoBehaviorSection';
import ArchitectureSection from '@/components/build-video-into-product/ArchitectureSection';
import InterfacesSection from '@/components/build-video-into-product/InterfacesSection';
import MediaIngestSection from '@/components/build-video-into-product/MediaIngestSection';
import SecuritySection from '@/components/build-video-into-product/SecuritySection';
import PlaybackStatesSection from '@/components/build-video-into-product/PlaybackStatesSection';
import RecordingReplaySection from '@/components/build-video-into-product/RecordingReplaySection';
import AccessibilitySection from '@/components/build-video-into-product/AccessibilitySection';
import OperateSection from '@/components/build-video-into-product/OperateSection';
import LifecycleSection from '@/components/build-video-into-product/LifecycleSection';
import ResponsibilitySection from '@/components/build-video-into-product/ResponsibilitySection';
import EvidenceSection from '@/components/build-video-into-product/EvidenceSection';
import FaqSection from '@/components/build-video-into-product/FaqSection';
import ClosingCtaSection from '@/components/build-video-into-product/ClosingCtaSection';

export default function BuildVideoIntoProductPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0f1a]">
      <HeroSection />
      <JobToBeDoneSection />
      <VideoBehaviorSection />
      <ArchitectureSection />
      <InterfacesSection />
      <MediaIngestSection />
      <SecuritySection />
      <PlaybackStatesSection />
      <RecordingReplaySection />
      <AccessibilitySection />
      <OperateSection />
      <LifecycleSection />
      <ResponsibilitySection />
      <EvidenceSection />
      <FaqSection />
      <ClosingCtaSection />
    </main>
  );
}

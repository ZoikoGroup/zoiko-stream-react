import React from 'react';
import HeroSection from '@/components/zoikostream-newsroom/HeroSection';
import DirectAnswerSection from '@/components/zoikostream-newsroom/DirectAnswerSection';
import LatestNewsSection from '@/components/zoikostream-newsroom/LatestNewsSection';
import ArchiveSection from '@/components/zoikostream-newsroom/ArchiveSection';
import MediaCoverageSection from '@/components/zoikostream-newsroom/MediaCoverageSection';
import PressAndFeedSection from '@/components/zoikostream-newsroom/PressAndFeedSection';

export default function ZoikostreamNewsroomPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1c1f26]">
      <HeroSection />
      <DirectAnswerSection />
      <LatestNewsSection />
      <ArchiveSection />
      <MediaCoverageSection />
      <PressAndFeedSection />
    </main>
  );
}

import React from 'react';
import HeroSection from '@/components/live-streaming-api/HeroSection';
import LifecycleSection from '@/components/live-streaming-api/LifecycleSection';
import ImplementationPathsSection from '@/components/live-streaming-api/ImplementationPathsSection';
import CreateStreamSection from '@/components/live-streaming-api/CreateStreamSection';
import EncoderConnectionSection from '@/components/live-streaming-api/EncoderConnectionSection';
import StreamStatesSection from '@/components/live-streaming-api/StreamStatesSection';
import PlaybackHandoffSection from '@/components/live-streaming-api/PlaybackHandoffSection';
import WebhooksEventsSection from '@/components/live-streaming-api/WebhooksEventsSection';
import MonitoringHealthSection from '@/components/live-streaming-api/MonitoringHealthSection';
import RecordingAssetsSection from '@/components/live-streaming-api/RecordingAssetsSection';
import ErrorsRetriesSection from '@/components/live-streaming-api/ErrorsRetriesSection';
import RateLimitsSection from '@/components/live-streaming-api/RateLimitsSection';
import BuildStackSection from '@/components/live-streaming-api/BuildStackSection';
import ProductionReadinessSection from '@/components/live-streaming-api/ProductionReadinessSection';
import FaqSection from '@/components/live-streaming-api/FaqSection';
import FinalConversionSection from '@/components/live-streaming-api/FinalConversionSection';

export default function LiveStreamingApiPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white w-full">
      <HeroSection />
      <LifecycleSection />
      <ImplementationPathsSection />
      <CreateStreamSection />
      <EncoderConnectionSection />
      <StreamStatesSection />
      <PlaybackHandoffSection />
      <WebhooksEventsSection />
      <MonitoringHealthSection />
      <RecordingAssetsSection />
      <ErrorsRetriesSection />
      <RateLimitsSection />
      <BuildStackSection />
      <ProductionReadinessSection />
      <FaqSection />
      <FinalConversionSection />
    </main>
  );
}

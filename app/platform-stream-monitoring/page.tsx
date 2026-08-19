import React from 'react';
import HeroSection from '@/components/platform-stream-monitoring/HeroSection';
import TrustContractSection from '@/components/platform-stream-monitoring/TrustContractSection';
import MonitoringQuestionsSection from '@/components/platform-stream-monitoring/MonitoringQuestionsSection';
import ScopeContextSection from '@/components/platform-stream-monitoring/ScopeContextSection';
import StateModelSection from '@/components/platform-stream-monitoring/StateModelSection';
import ObservationAnatomySection from '@/components/platform-stream-monitoring/ObservationAnatomySection';
import AlertGovernanceSection from '@/components/platform-stream-monitoring/AlertGovernanceSection';
import StreamHealthReviewSection from '@/components/platform-stream-monitoring/StreamHealthReviewSection';
import ControlCenterSection from '@/components/platform-stream-monitoring/ControlCenterSection';
import PlatformHandoffsSection from '@/components/platform-stream-monitoring/PlatformHandoffsSection';
import PlatformConnectivitySection from '@/components/platform-stream-monitoring/PlatformConnectivitySection';
import EnterpriseTrustSection from '@/components/platform-stream-monitoring/EnterpriseTrustSection';
import FaqSection from '@/components/platform-stream-monitoring/FaqSection';
import FinalCtaSection from '@/components/platform-stream-monitoring/FinalCtaSection';

export const metadata = {
  title: 'Stream Monitoring | Zoiko Stream',
  description: 'Understand stream state, health, impact, and next action.',
};

export default function PlatformStreamMonitoringPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start bg-black">
      <HeroSection />
      <TrustContractSection />
      <MonitoringQuestionsSection />
      <ScopeContextSection />
      <StateModelSection />
      <ObservationAnatomySection />
      <StreamHealthReviewSection />
      <AlertGovernanceSection />
      <ControlCenterSection />
      <EnterpriseTrustSection />
      <PlatformConnectivitySection />
      <PlatformHandoffsSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

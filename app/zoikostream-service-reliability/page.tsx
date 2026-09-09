import React from 'react';
import HeroSection from '@/components/zoikostream-service-reliability/HeroSection';
import ReadEvidenceSection from '@/components/zoikostream-service-reliability/ReadEvidenceSection';
import CurrentEvidenceSection from '@/components/zoikostream-service-reliability/CurrentEvidenceSection';
import MethodologySection from '@/components/zoikostream-service-reliability/MethodologySection';
import HistorySection from '@/components/zoikostream-service-reliability/HistorySection';
import ResilienceSection from '@/components/zoikostream-service-reliability/ResilienceSection';
import IncidentLearningSection from '@/components/zoikostream-service-reliability/IncidentLearningSection';
import DependenciesSection from '@/components/zoikostream-service-reliability/DependenciesSection';
import SharedResponsibilitySection from '@/components/zoikostream-service-reliability/SharedResponsibilitySection';
import ControlledAccessSection from '@/components/zoikostream-service-reliability/ControlledAccessSection';
import LiveStatusBridge from '@/components/zoikostream-service-reliability/LiveStatusBridge';
import FaqSection from '@/components/zoikostream-service-reliability/FaqSection';
import ContextualNextSteps from '@/components/zoikostream-service-reliability/ContextualNextSteps';

export const metadata = {
  title: 'Service Reliability | ZoikoStream',
  description: 'ZoikoStream Service Reliability',
};

export default function ZoikoStreamServiceReliabilityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#0a0f1a] w-full overflow-hidden">
      <HeroSection />
      <ReadEvidenceSection />
      <CurrentEvidenceSection />
      <MethodologySection />
      <HistorySection />
      <ResilienceSection />
      <IncidentLearningSection />
      <DependenciesSection />
      <SharedResponsibilitySection />
      <ControlledAccessSection />
      <LiveStatusBridge />
      <FaqSection />
      <ContextualNextSteps />
    </main>
  );
}

import React from 'react';
import HeroSection from '@/components/event-resilience/HeroSection';
import CoreResilienceModelSection from '@/components/event-resilience/CoreResilienceModelSection';
import WhyEventResilienceMattersSection from '@/components/event-resilience/WhyEventResilienceMattersSection';
import ShowcaseSection from '@/components/event-resilience/ShowcaseSection';
import PlanForChangeSection from '@/components/event-resilience/PlanForChangeSection';
import RecoveryAndFallbackSection from '@/components/event-resilience/RecoveryAndFallbackSection';
import AudienceContinuitySection from '@/components/event-resilience/AudienceContinuitySection';
import OperationalHandoffSection from '@/components/event-resilience/OperationalHandoffSection';
import FitAndAssuranceSection from '@/components/event-resilience/FitAndAssuranceSection';
import TrustAndEvidenceSection from '@/components/event-resilience/TrustAndEvidenceSection';
import EventBriefSection from '@/components/event-resilience/EventBriefSection';
import FaqSection from '@/components/event-resilience/FaqSection';
import TrustLogosSection from '@/components/event-resilience/TrustLogosSection';
import FinalCtaSection from '@/components/event-resilience/FinalCtaSection';

export const metadata = {
  title: 'Event Resilience | Zoiko Stream',
  description: 'Built for the one shot that matters.',
};

export default function EventResiliencePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-black w-full">
      <HeroSection />
      <CoreResilienceModelSection />
      <WhyEventResilienceMattersSection />
      <ShowcaseSection />
      <PlanForChangeSection />
      <RecoveryAndFallbackSection />
      <AudienceContinuitySection />
      <OperationalHandoffSection />
      <FitAndAssuranceSection />
      <TrustAndEvidenceSection />
      <FaqSection />
      <EventBriefSection />
      <TrustLogosSection />
      <FinalCtaSection />
      {/* Subsequent sections will be added here */}
    </main>
  );
}

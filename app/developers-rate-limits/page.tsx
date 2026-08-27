import React from 'react';
import Section1Hero from '@/components/developers-rate-limits/Section1Hero';
import Section2MentalModel from '@/components/developers-rate-limits/Section2MentalModel';
import Section3Explorer from '@/components/developers-rate-limits/Section3Explorer';
import Section4Scope from '@/components/developers-rate-limits/Section4Scope';
import Section5Observation from '@/components/developers-rate-limits/Section5Observation';
import Section6Planner from '@/components/developers-rate-limits/Section6Planner';
import Section7Throttling from '@/components/developers-rate-limits/Section7Throttling';
import Section8Retry from '@/components/developers-rate-limits/Section8Retry';
import Section9AdmissionControl from '@/components/developers-rate-limits/Section9AdmissionControl';
import Section10Optimization from '@/components/developers-rate-limits/Section10Optimization';
import Section11Idempotency from '@/components/developers-rate-limits/Section11Idempotency';
import Section12Observability from '@/components/developers-rate-limits/Section12Observability';
import Section13LaunchReadiness from '@/components/developers-rate-limits/Section13LaunchReadiness';
import Section14Qualification from '@/components/developers-rate-limits/Section14Qualification';
import Section15Faq from '@/components/developers-rate-limits/Section15Faq';
import Section16CTA from '@/components/developers-rate-limits/Section16CTA';

export default function DeveloperRateLimitsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0d14] w-full">
      <Section1Hero />
      <Section2MentalModel />
      <Section3Explorer />
      <Section4Scope />
      <Section5Observation />
      <Section6Planner />
      <Section7Throttling />
      <Section8Retry />
      <Section9AdmissionControl />
      <Section10Optimization />
      <Section11Idempotency />
      <Section12Observability />
      <Section13LaunchReadiness />
      <Section14Qualification />
      <Section15Faq />
      <Section16CTA />
    </main>
  );
}

import React from 'react';
import HeroSection from '@/components/planning-and-briefing/HeroSection';
import WhatTheBriefCoversSection from '@/components/planning-and-briefing/WhatTheBriefCoversSection';
import WhyBriefFirstSection from '@/components/planning-and-briefing/WhyBriefFirstSection';
import StepperPreviewSection from '@/components/planning-and-briefing/StepperPreviewSection';
import BriefReadinessPreviewSection from '@/components/planning-and-briefing/BriefReadinessPreviewSection';
import FitRouteGuideSection from '@/components/planning-and-briefing/FitRouteGuideSection';
import MinimumInformationSection from '@/components/planning-and-briefing/MinimumInformationSection';
import WhatHappensNextSection from '@/components/planning-and-briefing/WhatHappensNextSection';
import TrustPrivacySection from '@/components/planning-and-briefing/TrustPrivacySection';
import RepeatEventsSection from '@/components/planning-and-briefing/RepeatEventsSection';
import FaqSection from '@/components/planning-and-briefing/FaqSection';
import TrustLogosSection from '@/components/planning-and-briefing/TrustLogosSection';
import FinalCtaSection from '@/components/planning-and-briefing/FinalCtaSection';

export const metadata = {
  title: 'Planning & Briefing | Zoiko Stream',
  description: 'Turn your event idea into a reviewable brief with Zoiko Stream planning services.',
};

export default function PlanningAndBriefingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0d13]">
      <HeroSection />
      <WhatTheBriefCoversSection />
      <WhyBriefFirstSection />
      <StepperPreviewSection />
      <BriefReadinessPreviewSection />
      <FitRouteGuideSection />
      <MinimumInformationSection />
      <WhatHappensNextSection />
      <TrustPrivacySection />
      <RepeatEventsSection />
      <FaqSection />
      <TrustLogosSection />
      <FinalCtaSection />
      {/* Subsequent sections will be added here */}
    </main>
  );
}

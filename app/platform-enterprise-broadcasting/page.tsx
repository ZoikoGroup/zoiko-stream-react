import React from 'react';
import HeroSection from '@/components/platform-enterprise-broadcasting/HeroSection';
import IntentSelectorSection from '@/components/platform-enterprise-broadcasting/IntentSelectorSection';
import OperatingModelSection from '@/components/platform-enterprise-broadcasting/OperatingModelSection';
import ReadinessSection from '@/components/platform-enterprise-broadcasting/ReadinessSection';
import SourcesContributionSection from '@/components/platform-enterprise-broadcasting/SourcesContributionSection';
import AudienceAccessSection from '@/components/platform-enterprise-broadcasting/AudienceAccessSection';
import AccessibilityLanguagesSection from '@/components/platform-enterprise-broadcasting/AccessibilityLanguagesSection';
import RehearsalSafetySection from '@/components/platform-enterprise-broadcasting/RehearsalSafetySection';
import ProgramControlSection from '@/components/platform-enterprise-broadcasting/ProgramControlSection';
import ObservationSection from '@/components/platform-enterprise-broadcasting/ObservationSection';
import RecordingReplaySection from '@/components/platform-enterprise-broadcasting/RecordingReplaySection';
import AnalyticsSection from '@/components/platform-enterprise-broadcasting/AnalyticsSection';
import SecuritySection from '@/components/platform-enterprise-broadcasting/SecuritySection';
import FaqSection from '@/components/platform-enterprise-broadcasting/FaqSection';
import CustomerContinuationSection from '@/components/platform-enterprise-broadcasting/CustomerContinuationSection';
import CtaBandSection from '@/components/platform-enterprise-broadcasting/CtaBandSection';

export default function PlatformEnterpriseBroadcastingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0f1a]">
      <HeroSection />
      <IntentSelectorSection />
      <OperatingModelSection />
      <ReadinessSection />
      <SourcesContributionSection />
      <AudienceAccessSection />
      <AccessibilityLanguagesSection />
      <RehearsalSafetySection />
      <ProgramControlSection />
      <ObservationSection />
      <RecordingReplaySection />
      <AnalyticsSection />
      <SecuritySection />
      <CustomerContinuationSection />
      <FaqSection />
      <CtaBandSection />
    </main>
  );
}

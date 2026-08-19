import React from 'react';
import HeroSection from '@/components/real-time-contribution/HeroSection';
import JobsSection from '@/components/real-time-contribution/JobsSection';
import LifecycleSection from '@/components/real-time-contribution/LifecycleSection';
import ReadinessSection from '@/components/real-time-contribution/ReadinessSection';
import HandoffSection from '@/components/real-time-contribution/HandoffSection';
import RecoverySection from '@/components/real-time-contribution/RecoverySection';
import DeveloperSection from '@/components/real-time-contribution/DeveloperSection';
import EnterpriseSection from '@/components/real-time-contribution/EnterpriseSection';
import TrustSection from '@/components/real-time-contribution/TrustSection';
import FaqSection from '@/components/real-time-contribution/FaqSection';
import FinalCtaBand from '@/components/real-time-contribution/FinalCtaBand';

export const metadata = {
  title: 'Real-Time Contribution - Zoiko Stream',
  description: 'Controlled real-time contribution from approved sources into production.',
};

export default function RealTimeContributionPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1a]">
      <HeroSection />
      <JobsSection />
      <LifecycleSection />
      <ReadinessSection />
      <HandoffSection />
      <RecoverySection />
      <DeveloperSection />
      <EnterpriseSection />
      <TrustSection />
      <FaqSection />
      <FinalCtaBand />
    </main>
  );
}

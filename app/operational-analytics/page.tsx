import React from 'react';
import HeroSection from '@/components/operational-analytics/HeroSection';
import QuestionsSection from '@/components/operational-analytics/QuestionsSection';
import ContractSection from '@/components/operational-analytics/ContractSection';
import DashboardSection from '@/components/operational-analytics/DashboardSection';
import TruthSection from '@/components/operational-analytics/TruthSection';
import ViewerSection from '@/components/operational-analytics/ViewerSection';
import ReachSection from '@/components/operational-analytics/ReachSection';
import AccessSection from '@/components/operational-analytics/AccessSection';
import DimensionsSection from '@/components/operational-analytics/DimensionsSection';
import AccessibilitySection from '@/components/operational-analytics/AccessibilitySection';
import RecordingSection from '@/components/operational-analytics/RecordingSection';
import InvestigationSection from '@/components/operational-analytics/InvestigationSection';
import DataQualitySection from '@/components/operational-analytics/DataQualitySection';
import GovernanceSection from '@/components/operational-analytics/GovernanceSection';
import DecisionSection from '@/components/operational-analytics/DecisionSection';
import FaqSection from '@/components/operational-analytics/FaqSection';
import FinalCtaSection from '@/components/operational-analytics/FinalCtaSection';

export default function OperationalAnalyticsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0f1a]">
      <HeroSection />
      <QuestionsSection />
      <ContractSection />
      <DashboardSection />
      <TruthSection />
      <ViewerSection />
      <ReachSection />
      <AccessSection />
      <DimensionsSection />
      <AccessibilitySection />
      <RecordingSection />
      <InvestigationSection />
      <DataQualitySection />
      <GovernanceSection />
      <DecisionSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

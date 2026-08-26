import React from 'react';
import HeroSection from '@/components/developer-access-page/HeroSection';
import AccessBoundarySection from '@/components/developer-access-page/AccessBoundarySection';
import StartingStateSection from '@/components/developer-access-page/StartingStateSection';
import AccessContractSection from '@/components/developer-access-page/AccessContractSection';
import AccessStateSection from '@/components/developer-access-page/AccessStateSection';
import WorkspaceSetupSection from '@/components/developer-access-page/WorkspaceSetupSection';
import JoinWorkspaceSection from '@/components/developer-access-page/JoinWorkspaceSection';
import RolesPermissionsSection from '@/components/developer-access-page/RolesPermissionsSection';
import AccessMatrixSection from '@/components/developer-access-page/AccessMatrixSection';
import ReviewProcessSection from '@/components/developer-access-page/ReviewProcessSection';
import LifecycleSection from '@/components/developer-access-page/LifecycleSection';
import HandoffSection from '@/components/developer-access-page/HandoffSection';
import ProductionAccessSection from '@/components/developer-access-page/ProductionAccessSection';
import SupportSection from '@/components/developer-access-page/SupportSection';
import FaqSection from '@/components/developer-access-page/FaqSection';
import FinalCtaSection from '@/components/developer-access-page/FinalCtaSection';

export default function DeveloperAccessPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0f1a]">
      <HeroSection />
      <AccessBoundarySection />
      <StartingStateSection />
      <AccessContractSection />
      <AccessStateSection />
      <WorkspaceSetupSection />
      <JoinWorkspaceSection />
      <RolesPermissionsSection />
      <AccessMatrixSection />
      <ReviewProcessSection />
      <LifecycleSection />
      <HandoffSection />
      <ProductionAccessSection />
      <SupportSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

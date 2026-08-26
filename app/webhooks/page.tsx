import React from 'react';
import HeroSection from '@/components/webhooks/HeroSection';
import MentalModelSection from '@/components/webhooks/MentalModelSection';
import DiscoverEventsSection from '@/components/webhooks/DiscoverEventsSection';
import PayloadAnatomySection from '@/components/webhooks/PayloadAnatomySection';
import EndpointSetupSection from '@/components/webhooks/EndpointSetupSection';
import SecurityImplementationSection from '@/components/webhooks/SecurityImplementationSection';
import ReferenceArchitectureSection from '@/components/webhooks/ReferenceArchitectureSection';
import DeliveryLifecycleSection from '@/components/webhooks/DeliveryLifecycleSection';
import DiagnoseFailuresSection from '@/components/webhooks/DiagnoseFailuresSection';
import TestingDevelopmentSection from '@/components/webhooks/TestingDevelopmentSection';
import VersioningSection from '@/components/webhooks/VersioningSection';
import SecurityPrivacySection from '@/components/webhooks/SecurityPrivacySection';
import EnterpriseArchitectureSection from '@/components/webhooks/EnterpriseArchitectureSection';
import ProductionReadinessSection from '@/components/webhooks/ProductionReadinessSection';

export default function WebhooksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="w-full">
        <HeroSection />
        <MentalModelSection />
        <DiscoverEventsSection />
        <PayloadAnatomySection />
        <EndpointSetupSection />
        <SecurityImplementationSection />
        <ReferenceArchitectureSection />
        <DeliveryLifecycleSection />
        <DiagnoseFailuresSection />
        <TestingDevelopmentSection />
        <VersioningSection />
        <SecurityPrivacySection />
        <EnterpriseArchitectureSection />
        <ProductionReadinessSection />
      </div>
    </main>
  );
}

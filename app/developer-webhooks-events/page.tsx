import React from 'react';
import HeroSection from '@/components/developer-webhooks-events/HeroSection';
import MentalModelSection from '@/components/developer-webhooks-events/MentalModelSection';
import DiscoverEventsSection from '@/components/developer-webhooks-events/DiscoverEventsSection';
import PayloadAnatomySection from '@/components/developer-webhooks-events/PayloadAnatomySection';
import EndpointSetupSection from '@/components/developer-webhooks-events/EndpointSetupSection';
import SecurityImplementationSection from '@/components/developer-webhooks-events/SecurityImplementationSection';
import ReferenceArchitectureSection from '@/components/developer-webhooks-events/ReferenceArchitectureSection';
import DeliveryLifecycleSection from '@/components/developer-webhooks-events/DeliveryLifecycleSection';
import DiagnoseFailuresSection from '@/components/developer-webhooks-events/DiagnoseFailuresSection';
import TestingDevelopmentSection from '@/components/developer-webhooks-events/TestingDevelopmentSection';
import VersioningSection from '@/components/developer-webhooks-events/VersioningSection';
import SecurityPrivacySection from '@/components/developer-webhooks-events/SecurityPrivacySection';
import EnterpriseArchitectureSection from '@/components/developer-webhooks-events/EnterpriseArchitectureSection';
import ProductionReadinessSection from '@/components/developer-webhooks-events/ProductionReadinessSection';

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

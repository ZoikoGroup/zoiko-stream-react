import React from 'react';
import HeroSection from '@/components/webhooks/HeroSection';
import TaskRouterSection from '@/components/webhooks/TaskRouterSection';
import WebhooksVsApiSection from '@/components/webhooks/WebhooksVsApiSection';
import EventCatalogSection from '@/components/webhooks/EventCatalogSection';
import EventContractSection from '@/components/webhooks/EventContractSection';
import SubscriptionModelSection from '@/components/webhooks/SubscriptionModelSection';
import VerificationSection from '@/components/webhooks/VerificationSection';
import DeliveryLifecycleSection from '@/components/webhooks/DeliveryLifecycleSection';
import RetriesIdempotencySection from '@/components/webhooks/RetriesIdempotencySection';
import ReplayRecoverySection from '@/components/webhooks/ReplayRecoverySection';
import TestingWorkflowSection from '@/components/webhooks/TestingWorkflowSection';
import ObservabilitySection from '@/components/webhooks/ObservabilitySection';
import ErrorTaxonomySection from '@/components/webhooks/ErrorTaxonomySection';
import SchemaVersioningSection from '@/components/webhooks/SchemaVersioningSection';
import SecurityPrivacySection from '@/components/webhooks/SecurityPrivacySection';
import FaqSection from '@/components/webhooks/FaqSection';
import FinalCtaSection from '@/components/webhooks/FinalCtaSection';

export const metadata = {
  title: 'Webhooks | ZoikoStream',
  description:
    'Subscribe to current source-approved ZoikoStream events and process deliveries using explicit event versions, endpoint requirements, verification, retry, replay, and lifecycle rules.',
};

export default function WebhooksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#0a0d13] w-full overflow-hidden">
      <HeroSection />
      <TaskRouterSection />
      <WebhooksVsApiSection />
      <EventCatalogSection />
      <EventContractSection />
      <SubscriptionModelSection />
      <VerificationSection />
      <DeliveryLifecycleSection />
      <RetriesIdempotencySection />
      <ReplayRecoverySection />
      <TestingWorkflowSection />
      <ObservabilitySection />
      <ErrorTaxonomySection />
      <SchemaVersioningSection />
      <SecurityPrivacySection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

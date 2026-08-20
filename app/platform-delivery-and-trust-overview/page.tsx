import React from 'react';
import {
  HeroSection,
  HowSecureDeliveryWorksSection,
  ChooseRightControlBoundarySection,
  IdentityAccessAuthorizationSection,
  AdaptiveDeliverySection,
  ResilienceFailureHandlingSection,
  SharedResponsibilitySection,
  DeliveryContextSection,
  WhereEvidenceLivesSection,
  FinalCtaSection,
} from '@/components/platform-delivery-and-trust-overview';

export default function PlatformDeliveryAndTrustOverviewPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-950">
      <HeroSection />
      <HowSecureDeliveryWorksSection />
      <ChooseRightControlBoundarySection />
      <IdentityAccessAuthorizationSection />
      <AdaptiveDeliverySection />
      <ResilienceFailureHandlingSection />
      <SharedResponsibilitySection />
      <DeliveryContextSection />
      <WhereEvidenceLivesSection />
      <FinalCtaSection />
    </main>
  );
}

import {
  AdaptationStateSection,
  AdaptiveDeliveryCta,
  AdaptiveDeliveryFaqSection,
  AdaptiveDeliveryHero,
  DocumentationSupportSection,
  ErrorsRecoverySection,
  LiveVodEnterpriseSection,
  MediaReadinessSection,
  NetworkConditionsSection,
  PlaybackEnvironmentSection,
  QualifyContextSection,
  QualityOutcomesSection,
  WhatCanChangeSection,
} from "@/components/platform-adaptive-video-delivery";

export default function page() {
  return (
    <main className="bg-gray-950">
      <AdaptiveDeliveryHero />
      <WhatCanChangeSection />
      <QualifyContextSection />
      <MediaReadinessSection />
      <PlaybackEnvironmentSection />
      <NetworkConditionsSection />
      <AdaptationStateSection />
      <QualityOutcomesSection />
      <LiveVodEnterpriseSection />
      <ErrorsRecoverySection />
      <DocumentationSupportSection />
      <AdaptiveDeliveryFaqSection />
      <AdaptiveDeliveryCta />
    </main>
  );
}

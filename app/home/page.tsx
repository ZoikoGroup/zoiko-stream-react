import {
  DevelopersSection,
  EnterpriseOperatorsSection,
  HeroSection,
  MediaLifecycleSection,
  PathwaysSection,
  ResourcesSection,
  SupportFaqSection,
  TrustedMediaOperationsSection,
  WhatIsZoikoStreamSection,
  ZoikoStreamLiveEvents,
} from '@/components/home';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsZoikoStreamSection />
      <PathwaysSection />
      <MediaLifecycleSection />
      <DevelopersSection />
      <EnterpriseOperatorsSection />
      <ZoikoStreamLiveEvents />
      <TrustedMediaOperationsSection />
      <ResourcesSection />
      <SupportFaqSection />
    </>
  );
}

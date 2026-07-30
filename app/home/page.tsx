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
import { AboutHeroSection } from '@/components/about-us';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutHeroSection />
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

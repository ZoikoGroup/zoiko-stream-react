import type { Metadata } from 'next';
import {
  AssurancesSection,
  FaqSection,
  FinalCtaSection,
  GraphicsAssetsSection,
  HeroSection,
  HowItWorksSection,
  MixerConsoleSection,
  OperatingModelSection,
  PathRouterSection,
  RecoverySection,
  RunOfShowSection,
  SourcePlanSection,
  TrustSecuritySection,
  VerifyDimensionsSection,
} from '@/components/production-switching-graphics';

export const metadata: Metadata = {
  title: 'Production, Switching & Graphics | ZoikoStream',
  description:
    'Plan cameras and sources, show cues, switching responsibilities, layouts, graphics, and approved assets around one versioned production run-of-show.',
};

export default function ProductionSwitchingGraphicsPage() {
  return (
    <main>
      <HeroSection />
      <AssurancesSection />
      <HowItWorksSection />
      <SourcePlanSection />
      <MixerConsoleSection />
      <GraphicsAssetsSection />
      <RunOfShowSection />
      <VerifyDimensionsSection />
      <RecoverySection />
      <OperatingModelSection />
      <TrustSecuritySection />
      <PathRouterSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

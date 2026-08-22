import {
  HeroSection,
  WorkflowSection,
  LifecycleSection,
  AssetReadinessSection,
  SourceIdentitySection,
  AccessibilityMetadataSection,
  AudienceAccessSection,
  ExperienceControlSection,
  OperateRecoverSection,
  PreserveChangeSection,
  DeveloperEnterpriseSection,
  FaqSection,
  FinalCtaSection,
} from '@/components/platform-video-on-demand';

export default function PlatformVideoOnDemandPage() {
  return (
    <main>
      <HeroSection />
      <WorkflowSection />
      <LifecycleSection />
      <AssetReadinessSection />
      <SourceIdentitySection />
      <AccessibilityMetadataSection />
      <AudienceAccessSection />
      <ExperienceControlSection />
      <OperateRecoverSection />
      <PreserveChangeSection />
      <DeveloperEnterpriseSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

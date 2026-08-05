import {
  DeveloperSection,
  EnterpriseOperateSection,
  EvidenceSection,
  HeroSection,
  LiveEventsSection,
  MediaLifecycleSection,
  PostLiveSection,
  SecuritySection,
} from '@/components/platform';

export default function PlatformPage() {
  return (
    <>
      <HeroSection />
      <MediaLifecycleSection />
      <DeveloperSection />
      <EnterpriseOperateSection />
      <SecuritySection />
      <PostLiveSection />
      <LiveEventsSection />
      <EvidenceSection />
    </>
  );
}

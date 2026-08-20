import {
  ArtifactControlsSection,
  AuditabilitySection,
  AuthorizationStateSection,
  DeveloperBoundarySection,
  DrmPublicationGateSection,
  ErrorRecoverySection,
  ExpiryRevocationSection,
  LifecycleSection,
  LiveVodContextSection,
  PlayerIntegrationSection,
  PolicyDecisionSection,
  ResourceContextSection,
  SecurePlaybackCtaBand,
  SecurePlaybackFaqSection,
  SecurePlaybackHero,
} from "@/components/platform-secure-playback";

export default function page() {
  return (
    <main>
      <SecurePlaybackHero />
      <ResourceContextSection />
      <PolicyDecisionSection />
      <LifecycleSection />
      <AuthorizationStateSection />
      <ArtifactControlsSection />
      <ExpiryRevocationSection />
      <PlayerIntegrationSection />
      <DrmPublicationGateSection />
      <LiveVodContextSection />
      <ErrorRecoverySection />
      <AuditabilitySection />
      <DeveloperBoundarySection />
      <SecurePlaybackFaqSection />
      <SecurePlaybackCtaBand />
    </main>
  );
}

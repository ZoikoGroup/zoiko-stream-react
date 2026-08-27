import {
  CredentialAnatomySection,
  DrmOptionsSection,
  HowItWorksSection,
  KeyLifecycleSection,
  LifecycleStatesSection,
  PlayerContractSection,
  ProtectionInheritanceSection,
  ProtectionSelectorSection,
  ReadinessChecklistSection,
  SecurePlaybackCta,
  SecurePlaybackFaqSection,
  SecurePlaybackHero,
  TrustScaleSection,
} from "@/components/developer-secure-playback";

export default function page() {
  return (
    <main className="bg-white">
      <SecurePlaybackHero />
      <HowItWorksSection />
      <ProtectionSelectorSection />
      <CredentialAnatomySection />
      <KeyLifecycleSection />
      <DrmOptionsSection />
      <PlayerContractSection />
      <LifecycleStatesSection />
      <ProtectionInheritanceSection />
      <TrustScaleSection />
      <ReadinessChecklistSection />
      <SecurePlaybackFaqSection />
      <SecurePlaybackCta />
    </main>
  );
}

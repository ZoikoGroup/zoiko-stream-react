import React from 'react';
import {
  HeroSection,
  AuthenticationIsNotAuthorizationSection,
  SupportedAuthenticationMethodsSection,
  UnderstandWhatYouAreHandlingSection,
  CredentialsRightChannelSection,
  ShortestSafeAuthenticationPatternSection,
  RequestOnlyWhatYouNeedSection,
  CredentialsDoNotCrossEnvironmentBoundariesSection,
  TrackEveryCredentialLifecycleSection,
  DelegatedAuthorizationSection,
  DiagnoseFailuresWithoutExposingSecretsSection,
  WhenCredentialLeaksActImmediatelySection,
  KnowWhatToLogSection,
  ShipWithConfidenceChecklistSection,
  CommonAuthenticationQuestionsSection,
} from '@/components/authentication';

export default function AuthenticationPage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 flex flex-col justify-start items-start">
      <HeroSection />
      <AuthenticationIsNotAuthorizationSection />
      <SupportedAuthenticationMethodsSection />
      <UnderstandWhatYouAreHandlingSection />
      <CredentialsRightChannelSection />
      <ShortestSafeAuthenticationPatternSection />
      <RequestOnlyWhatYouNeedSection />
      <CredentialsDoNotCrossEnvironmentBoundariesSection />
      <TrackEveryCredentialLifecycleSection />
      <DelegatedAuthorizationSection />
      <DiagnoseFailuresWithoutExposingSecretsSection />
      <WhenCredentialLeaksActImmediatelySection />
      <KnowWhatToLogSection />
      <ShipWithConfidenceChecklistSection />
      <CommonAuthenticationQuestionsSection />
    </main>
  );
}

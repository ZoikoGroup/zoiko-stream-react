import React from 'react';
import {
  HeroSection,
  ControlledOutcomesSection,
  PolicyDecisionFormulaSection,
  FiveControlLayersSection,
  AdminRolesMatrixSection,
  IdentityModelsAndVerificationSection,
  PlayerEnforcementSection,
  AccessControlVsProtectionSection,
  LiveToReplayPersistenceSection,
  ExternalAccessNoOverexposureSection,
  RealTimeAuditLogSection,
  DataLifecycleRulesSection,
  TelemetryIncidentReadinessSection,
  VerifyBeforeCommitSection,
  NextStepPathsSection,
} from '@/components/secure-enterprise-video';

export default function SecureEnterpriseVideoPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-900">
      <HeroSection />
      <ControlledOutcomesSection />
      <PolicyDecisionFormulaSection />
      <FiveControlLayersSection />
      <AdminRolesMatrixSection />
      <IdentityModelsAndVerificationSection />
      <PlayerEnforcementSection />
      <AccessControlVsProtectionSection />
      <LiveToReplayPersistenceSection />
      <ExternalAccessNoOverexposureSection />
      <RealTimeAuditLogSection />
      <DataLifecycleRulesSection />
      <TelemetryIncidentReadinessSection />
      <VerifyBeforeCommitSection />
      <NextStepPathsSection />
    </main>
  );
}

import React from 'react';
import {
  HeroSection,
  ChooseByRuntimeContextWorkflowSection,
  SdkCatalogOfficialInventorySection,
  SdkDetailPackageIdentitySection,
  InstallAndPinSection,
  InitializeSafelySection,
  TypedApiSurfaceSection,
  AsyncPaginationRetriesTimeoutsSection,
  ErrorsAndDiagnosticsSection,
  WebhooksAndEventConsumersSection,
  TestingEnvironmentsFixturesSection,
  VersioningCompatibilityDeprecationSection,
  PackageProvenanceSecuritySection,
  DocumentationSampleApplicationsSection,
  ProductionSdkReadinessSection,
} from '@/components/developer-sdk';

export default function DeveloperSdkPage() {
  return (
    <main className="w-full min-h-screen bg-gray-950 flex flex-col justify-start items-start overflow-hidden">
      <HeroSection />
      <ChooseByRuntimeContextWorkflowSection />
      <SdkCatalogOfficialInventorySection />
      <SdkDetailPackageIdentitySection />
      <InstallAndPinSection />
      <InitializeSafelySection />
      <TypedApiSurfaceSection />
      <AsyncPaginationRetriesTimeoutsSection />
      <ErrorsAndDiagnosticsSection />
      <WebhooksAndEventConsumersSection />
      <TestingEnvironmentsFixturesSection />
      <VersioningCompatibilityDeprecationSection />
      <PackageProvenanceSecuritySection />
      <DocumentationSampleApplicationsSection />
      <ProductionSdkReadinessSection />
    </main>
  );
}

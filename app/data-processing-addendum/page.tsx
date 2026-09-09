import React from 'react';
import {
  HeroSection,
  NavigationSection,
  ApplicabilitySection,
  PackageStatusSection,
  PartiesRolesSection,
  ProcessingInstructionsSection,
  ProcessingAnnexSection,
  SecurityMeasuresSection,
  SubprocessorsSection,
  InternationalTransfersSection,
  AssistanceSection,
  SecurityIncidentsSection,
  DeletionRetentionSection,
  AuditAssuranceSection,
} from '@/components/data-processing-addendum';

export const metadata = {
  title: 'Data Processing Addendum - ZoikoStream',
  description: 'Review the current ZoikoStream Data Processing Addendum and approved annexes.',
};

export default function DataProcessingAddendumPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <NavigationSection />
      <ApplicabilitySection />
      <PackageStatusSection />
      <PartiesRolesSection />
      <ProcessingInstructionsSection />
      <ProcessingAnnexSection />
      <SecurityMeasuresSection />
      <SubprocessorsSection />
      <InternationalTransfersSection />
      <AssistanceSection />
      <SecurityIncidentsSection />
      <DeletionRetentionSection />
      <AuditAssuranceSection />
    </main>
  );
}

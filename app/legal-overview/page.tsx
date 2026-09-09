import React from 'react';
import {
  HeroSection,
  TaskNavigationSection,
  LegalDocumentRegistrySection,
  DocumentRelationshipsSection,
  GeneralVsSupplementalSection,
  DistinctAuthoritiesSection,
  GovernedPathwaysSection,
  CurrentnessStatesSection,
  SpecialistAuthoritiesSection,
  FaqSection,
} from '@/components/legal-overview';

export const metadata = {
  title: 'Legal overview - ZoikoStream',
  description: 'Navigational index for legal terms, policies, disclosures, and governance authorities across ZoikoStream services.',
};

export default function LegalOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <TaskNavigationSection />
      <LegalDocumentRegistrySection />
      <DocumentRelationshipsSection />
      <GeneralVsSupplementalSection />
      <DistinctAuthoritiesSection />
      <GovernedPathwaysSection />
      <CurrentnessStatesSection />
      <SpecialistAuthoritiesSection />
      <FaqSection />
    </main>
  );
}

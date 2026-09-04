import { Metadata } from 'next';
import {
  HeroSection,
  SourceAuthoritySection,
  ApiFamiliesSection,
  OperationIndexSection,
  OperationDetailSection,
  SchemaExplorerSection,
  OutcomesErrorsSection,
  VerifiedExamplesSection,
  ContractLifecycleSection,
  AuthorityRoutingSection,
  ApiFaqSection,
  ApiCtaSection,
} from '@/components/resources-api-reference';

export const metadata: Metadata = {
  title: 'API Reference Hub | ZoikoStream',
  description:
    'Look up exact API contracts without guessing. Search approved ZoikoStream API resources, operations, schemas, events, errors, and identifiers.',
};

export default function ResourcesApiReferencePage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-stretch bg-[#070b14]">
      <HeroSection />
      <SourceAuthoritySection />
      <ApiFamiliesSection />
      <OperationIndexSection />
      <OperationDetailSection />
      <SchemaExplorerSection />
      <OutcomesErrorsSection />
      <VerifiedExamplesSection />
      <ContractLifecycleSection />
      <AuthorityRoutingSection />
      <ApiFaqSection />
      <ApiCtaSection />
    </main>
  );
}

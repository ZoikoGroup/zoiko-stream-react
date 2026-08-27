import {
  ApiReferenceCta,
  ApiReferenceFaqSection,
  ApiReferenceHero,
  AsyncOperationsSection,
  CollectionSemanticsSection,
  ContractHistorySection,
  DomainCatalogSection,
  ErrorsSection,
  MutationSemanticsSection,
  OperationIdentitySection,
  OperationalRoutesSection,
  RateLimitsSection,
  RequestConstructionSection,
  ResponseContractSection,
  SafeExamplesSection,
} from "@/components/developer-api-reference";

export default function page() {
  return (
    <main className="bg-white">
      <ApiReferenceHero />
      <DomainCatalogSection />
      <OperationIdentitySection />
      <RequestConstructionSection />
      <ResponseContractSection />
      <ErrorsSection />
      <MutationSemanticsSection />
      <CollectionSemanticsSection />
      <AsyncOperationsSection />
      <RateLimitsSection />
      <SafeExamplesSection />
      <ContractHistorySection />
      <OperationalRoutesSection />
      <ApiReferenceFaqSection />
      <ApiReferenceCta />
    </main>
  );
}

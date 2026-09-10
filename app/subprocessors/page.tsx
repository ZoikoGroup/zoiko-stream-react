import {
  SubprocessorsHero,
  SubprocessorMetadata,
  SubprocessorRegistry,
  SubprocessorFieldGuide,
  SubprocessorDetail,
  SubprocessorChanges,
  SecurityBoundaries,
  ApprovedChangeNotification,
  PrivacySemantics,
  DirectAnswers,
  ContinueReview,
  ContractualRights,
} from "@/components/subprocessors";

export default function SubprocessorsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0A0D13]">
      <SubprocessorsHero />
      <SubprocessorMetadata />
      <SubprocessorRegistry />
      <SubprocessorFieldGuide />
      <SubprocessorDetail />
      <SubprocessorChanges />
      <ApprovedChangeNotification />
      <ContractualRights />
      <SecurityBoundaries />
      <PrivacySemantics />
      <DirectAnswers />
      <ContinueReview />
    </main>
  );
}

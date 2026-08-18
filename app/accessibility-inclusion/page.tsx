import { Metadata } from 'next';
import {
  A11yHero,
  A11yCapabilities,
  A11yDoctrine,
  A11yReadinessBoard,
  A11yViewerControls,
  A11yAccessJourney,
  A11yExperienceBreadth,
  A11ySourceBarriers,
  A11yVerificationRegistry,
  A11yLimitations,
  A11yOpsRouting,
  A11yPlanReuse,
  A11yGovernedClaims,
  A11yBriefForm,
  A11yFaq,
  A11yCta,
} from '@/components/accessibility-inclusion';

export const metadata: Metadata = {
  title: 'Accessibility & Inclusion Stream Orchestration | ZoikoStream',
  description: 'Plan and audit accessible enterprise live events. WCAG 2.2 compliant player controls, PiP sign language feeds, live transcriptions, and auditable readiness registries.',
};

export default function AccessibilityInclusionPage() {
  return (
    <main className="w-full bg-zinc-955 min-h-screen text-zinc-900 dark:text-white transition-colors duration-250">
      <A11yHero />
      <A11yCapabilities />
      <A11yDoctrine />
      <A11yReadinessBoard />
      <A11yViewerControls />
      <A11yAccessJourney />
      <A11yExperienceBreadth />
      <A11ySourceBarriers />
      <A11yVerificationRegistry />
      <A11yLimitations />
      <A11yOpsRouting />
      <A11yPlanReuse />
      <A11yGovernedClaims />
      <A11yBriefForm />
      <A11yFaq />
      <A11yCta />
    </main>
  );
}

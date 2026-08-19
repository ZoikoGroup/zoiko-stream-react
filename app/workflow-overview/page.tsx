import { Metadata } from 'next';
import {
  WorkflowHero,
  WorkflowLifecycle,
  WorkflowBriefChecklist,
  WorkflowOwnership,
  WorkflowFeeds,
  WorkflowRunOfShow,
  WorkflowAudienceAccess,
  WorkflowA11y,
  WorkflowResilience,
  WorkflowIntegrityChecks,
  WorkflowPostEvent,
  WorkflowOperationsBoard,
  WorkflowRoleSeparation,
  WorkflowTemplateReuse,
  WorkflowFaq,
  WorkflowCta,
} from '@/components/workflow-overview';

export const metadata: Metadata = {
  title: 'Live Events Workflow Overview & Scope Management | ZoikoStream',
  description: 'Master the complete 9-step planning lifecycle for live events. Build run-of-show cues, manage access rules, preflight failover checks, and coordinate roles.',
};

export default function WorkflowOverviewPage() {
  return (
    <main className="w-full bg-zinc-955 min-h-screen text-zinc-900 dark:text-white transition-colors duration-250 font-spaceGrotesk">
      <WorkflowHero />
      <WorkflowLifecycle />
      <WorkflowBriefChecklist />
      <WorkflowOwnership />
      <WorkflowFeeds />
      <WorkflowRunOfShow />
      <WorkflowAudienceAccess />
      <WorkflowA11y />
      <WorkflowResilience />
      <WorkflowIntegrityChecks />
      <WorkflowPostEvent />
      <WorkflowOperationsBoard />
      <WorkflowRoleSeparation />
      <WorkflowTemplateReuse />
      <WorkflowFaq />
      <WorkflowCta />
    </main>
  );
}

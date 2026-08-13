import { AccessibilitySection, AudienceAccessSection, EventBriefFormSection, EventPlanningSteps, EventSelectionGrid, FrequentlyAskedQuestionsSection, LiveEventsHero, ManagedPathSection, MultiTrackSection, OperationalChainSection, PlanningDimensionsSection, PreEventAndCtaSections, QuestionsSection, ReplayArchiveSection, ResilienceSection } from "@/components/live-events-overview";

export default function page(){
    return(
        <main>
        <LiveEventsHero/>
        <EventSelectionGrid/>
        <PlanningDimensionsSection/>
        <EventPlanningSteps/>
        <ManagedPathSection/>
        <OperationalChainSection/>
        <AudienceAccessSection/>
        <AccessibilitySection/>
        <ReplayArchiveSection/>
        <MultiTrackSection/>
        <ResilienceSection/>
        <EventBriefFormSection/>
        <QuestionsSection/>
        <PreEventAndCtaSections/>
        <FrequentlyAskedQuestionsSection/>
        </main>
    )
}
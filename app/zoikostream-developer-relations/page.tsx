import SectionHero from '@/components/zoikostream-developer-relations/SectionHero';
import SectionEcosystemBento from '@/components/zoikostream-developer-relations/SectionEcosystemBento';
import SectionDirectAnswer from '@/components/zoikostream-developer-relations/SectionDirectAnswer';
import SectionResourceRail from '@/components/zoikostream-developer-relations/SectionResourceRail';
import SectionWaysToEngage from '@/components/zoikostream-developer-relations/SectionWaysToEngage';
import SectionCommunityEvents from '@/components/zoikostream-developer-relations/SectionCommunityEvents';
import SectionOpenSource from '@/components/zoikostream-developer-relations/SectionOpenSource';
import SectionFeedback from '@/components/zoikostream-developer-relations/SectionFeedback';
import SectionContactForm from '@/components/zoikostream-developer-relations/SectionContactForm';
import SectionRoutingMatrix from '@/components/zoikostream-developer-relations/SectionRoutingMatrix';
import SectionFaq from '@/components/zoikostream-developer-relations/SectionFaq';

export const metadata = {
  title: 'Developer Relations - Zoiko Stream',
  description: 'Build with ZoikoStream. Developer Relations connects developers with docs, APIs, community, events, open source and product feedback.',
};

export default function ZoikostreamDeveloperRelationsPage() {
  return (
    <main>
      <SectionHero />
      <SectionEcosystemBento />
      <SectionDirectAnswer />
      <SectionResourceRail />
      <SectionWaysToEngage />
      <SectionCommunityEvents />
      <SectionOpenSource />
      <SectionFeedback />
      <SectionContactForm />
      <SectionRoutingMatrix />
      <SectionFaq />
    </main>
  );
}

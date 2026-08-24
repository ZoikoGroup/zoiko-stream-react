import SectionHero from '@/components/zoikostream-company-updates/SectionHero';
import SectionDirectAnswer from '@/components/zoikostream-company-updates/SectionDirectAnswer';
import SectionLatestUpdates from '@/components/zoikostream-company-updates/SectionLatestUpdates';
import SectionUpcomingChanges from '@/components/zoikostream-company-updates/SectionUpcomingChanges';
import SectionBrowseAllUpdates from '@/components/zoikostream-company-updates/SectionBrowseAllUpdates';
import SectionHowToReadAnUpdate from '@/components/zoikostream-company-updates/SectionHowToReadAnUpdate';
import SectionRelatedAuthoritativeSources from '@/components/zoikostream-company-updates/SectionRelatedAuthoritativeSources';
import SectionFollowFeed from '@/components/zoikostream-company-updates/SectionFollowFeed';

export const metadata = {
  title: 'Company Updates - Zoiko Stream',
  description: "Track meaningful changes to ZoikoStream's platform, Live Events, commercial model, trust posture and operating experience — with clear dates, scope and action guidance.",
};

export default function ZoikostreamCompanyUpdatesPage() {
  return (
    <main>
      <SectionHero />
      <SectionDirectAnswer />
      <SectionLatestUpdates />
      <SectionUpcomingChanges />
      <SectionBrowseAllUpdates />
      <SectionHowToReadAnUpdate />
      <SectionRelatedAuthoritativeSources />
      <SectionFollowFeed />
    </main>
  );
}

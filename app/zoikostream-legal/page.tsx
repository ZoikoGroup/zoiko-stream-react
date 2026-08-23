import SectionHero from '@/components/zoikostream-legal/SectionHero';
import SectionPopularDocuments from '@/components/zoikostream-legal/SectionPopularDocuments';
import SectionBrowseByCategory from '@/components/zoikostream-legal/SectionBrowseByCategory';
import SectionFindADocument from '@/components/zoikostream-legal/SectionFindADocument';
import SectionWhichDocumentsRelevant from '@/components/zoikostream-legal/SectionWhichDocumentsRelevant';
import SectionChangesVersionsRegional from '@/components/zoikostream-legal/SectionChangesVersionsRegional';
import SectionNeedSomethingElse from '@/components/zoikostream-legal/SectionNeedSomethingElse';
import SectionFaq from '@/components/zoikostream-legal/SectionFaq';

export const metadata = {
  title: 'Legal Center - Zoiko Stream',
  description: 'Terms, policies and legal notices governing use of ZoikoStream, its APIs, Live Events and related services.',
};

export default function ZoikostreamLegalPage() {
  return (
    <main>
      <SectionHero />
      <SectionPopularDocuments />
      <SectionBrowseByCategory />
      <SectionFindADocument />
      <SectionWhichDocumentsRelevant />
      <SectionChangesVersionsRegional />
      <SectionNeedSomethingElse />
      <SectionFaq />
    </main>
  );
}

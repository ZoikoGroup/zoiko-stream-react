import React from 'react';
import ChangelogHeroSection from '@/components/zoikostream-changelog/ChangelogHeroSection';
import ChangelogRecordsSection from '@/components/zoikostream-changelog/ChangelogRecordsSection';
import ChangelogMigrationSection from '@/components/zoikostream-changelog/ChangelogMigrationSection';
import ChangelogTrustworthySection from '@/components/zoikostream-changelog/ChangelogTrustworthySection';
import ChangelogFAQSection from '@/components/zoikostream-changelog/ChangelogFAQSection';
import ChangelogReleaseNotesSection from '@/components/zoikostream-changelog/ChangelogReleaseNotesSection';
import ChangelogInformedCTASection from '@/components/zoikostream-changelog/ChangelogInformedCTASection';

export default function ZoikoStreamChangelogPage() {
  return (
    <main className="w-full flex flex-col justify-start items-start min-h-screen bg-slate-950 overflow-x-hidden">
      <ChangelogHeroSection />
      <ChangelogRecordsSection />
      <ChangelogMigrationSection />
      <ChangelogTrustworthySection />
      <ChangelogFAQSection />
      <ChangelogReleaseNotesSection />
      <ChangelogInformedCTASection />
    </main>
  );
}

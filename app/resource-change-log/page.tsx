import React from 'react';

import {
  ChangelogHeroSection,
  ChangelogActionRequiredSection,
  ChangelogClassificationSection,
  ChangelogLatestChangesSection,
  ChangelogCompleteRecordSection,
  ChangelogDeprecationMapSection,
  ChangelogFindWhatChangedSection,
  ChangelogConnectedResourcesSection,
  ChangelogBuiltForDevelopersSection,
  ChangelogFaqSection,
  ChangelogMigrationCtaSection,
} from '@/components/resource-change-log';

export const metadata = {
  title: 'Changelog - ZoikoStream',
  description: 'Track released implementation-level changes, compatibility impact, deprecations, migrations, and required actions across ZoikoStream developer surfaces.',
};

export default function ResourceChangeLogPage() {
  return (
    <div className="w-full min-h-screen bg-gray-950 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <ChangelogHeroSection />
        <ChangelogActionRequiredSection />
        <ChangelogClassificationSection />
        <ChangelogLatestChangesSection />
        <ChangelogCompleteRecordSection />
        <ChangelogDeprecationMapSection />
        <ChangelogFindWhatChangedSection />
        <ChangelogConnectedResourcesSection />
        <ChangelogBuiltForDevelopersSection />
        <ChangelogFaqSection />
        <ChangelogMigrationCtaSection />
      </main>
    </div>
  );
}

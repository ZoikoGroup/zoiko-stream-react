import React from 'react';
import Image from 'next/image';

const govRows = [
  {
    label: 'Sample Version',
    val: 'v2.4.1 (Stable release)',
    note: 'Semantic versioning strictly enforced.',
  },
  {
    label: 'Validated Revision',
    val: 'API Endpoint Revision v3.2-prod',
    note: 'Registry matches project commit hash.',
  },
  {
    label: 'SDK/API Version',
    val: '@zoikostream/node v3.2.0-rc3',
    note: 'Backwards compatible down to SDK v2.8.',
  },
  {
    label: 'Runtime',
    val: 'Node.js LTS >=18.16.0 / Go >=1.20',
    note: 'Target platform runtime validated weekly.',
  },
  {
    label: 'Dependencies',
    val: 'Minimal direct libraries, verified cryptographic hashes',
    note: 'Zero unpinned or transitive dependencies.',
  },
  {
    label: 'Breaking Changes',
    val: 'Auth token payload migration required if upgrading from v2.0',
    note: 'Documented upgrade paths in registry.',
  },
  {
    label: 'Compatibility Window',
    val: 'Active window through Dec 31, 2026',
    note: 'Standard maintenance lifecycle applies.',
  },
];

export function VersionDependencyCompatibilityGovernanceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sample-application/bg (5).png"
          alt="Version Governance Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Version, dependency, and compatibility governance
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Every sample carries validated version and compatibility data.
          </p>
        </div>

        {/* Governance Table Box */}
        <div className="w-full bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col overflow-hidden shadow-xl backdrop-blur-md">
          {govRows.map((row, idx) => (
            <div
              key={idx}
              className={`p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                idx < govRows.length - 1 ? 'border-b border-gray-800' : ''
              }`}
            >
              <div className="w-64 text-teal-400 text-base font-bold font-mono flex-shrink-0">
                {row.label}
              </div>
              <div className="flex-1 text-white text-base font-normal">{row.val}</div>
              <div className="w-full md:w-80 text-left md:text-right text-slate-400 text-xs font-normal">
                {row.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';

const imgBg = "/images/webhooks/schemas-background.webp";

const lifecycleStates = [
  { title: 'Current', badge: 'APPROVED', tone: 'bg-[#d1fae5] text-[#065f46]', description: 'Approved event contract for stated scope.' },
  { title: 'Preview', badge: 'EXPERIMENTAL', tone: 'bg-[#dbeafe] text-[#1e40af]', description: 'Source-defined limitations and no GA inference.' },
  { title: 'Deprecated', badge: 'MIGRATE', tone: 'bg-[#fef3c7] text-[#92400e]', description: 'Still documented for migration with replacement path.' },
  { title: 'Retired', badge: 'ARCHIVE ONLY', tone: 'bg-[#fee2e2] text-[#991b1b]', description: 'No new subscription; archive only if approved.' },
];

export default function SchemaVersioningSection() {
  return (
    <section className="bg-white flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="Schema-Versioning-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-70px] top-[-133px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-160px] bottom-[-120px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />

      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            Schema versioning, deprecation, and change management
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            Event lifecycle states govern what documentation is current. Schema and delivery changes publish atomically
            with Changelog.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] w-full">
          {lifecycleStates.map((state) => (
            <div
              key={state.title}
              className="bg-white border border-[#e2e8f0] border-solid flex flex-col gap-[12px] items-start p-[20px] rounded-[12px]"
            >
              <div className="flex flex-wrap gap-2 justify-between items-center w-full">
                <p className="font-sans font-bold text-[#0a0d13] text-[18px]">{state.title}</p>
                <div className={`${state.tone} flex items-start px-[8px] py-[2px] rounded-[2px] shrink-0`}>
                  <span className="font-mono font-bold text-[9px]">{state.badge}</span>
                </div>
              </div>
              <p className="font-sans font-normal text-[#4f5e74] text-[12px] leading-[18px] w-full">{state.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center p-[24px] rounded-[12px] w-full">
          <div className="flex flex-col gap-[4px] items-start">
            <p className="font-sans font-bold text-[#0a0d13] text-[16px]">Atomic Releases</p>
            <p className="font-sans font-normal text-[#4f5e74] text-[12px] leading-[18px]">
              Event catalog, schemas, examples, Changelog, API models, and AEO caches release atomically or fail closed.
            </p>
          </div>
          <Link
            href="/developers-changelog"
            className="bg-gradient-to-b from-[#00d4aa] to-[#4c86ff] flex items-start px-[24px] py-[12px] rounded-[8px] shrink-0 transition-opacity hover:opacity-90"
          >
            <span className="font-sans font-bold text-[#0a0d13] text-[14px]">View Changelog</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';

import bg7 from '@/public/images/resource-release-notes/section-9bg.png';

const STATES = [
  {
    title: 'Available',
    dotColor: 'bg-emerald-500',
    description:
      'The update is fully active and deployed across all global ingest edges and player CDN nodes.',
  },
  {
    title: 'Rolling Out',
    dotColor: 'bg-teal-400',
    description:
      'Deployments are moving region-by-region. Active transition logs are inspectable weekly.',
  },
  {
    title: 'Limited Availability',
    dotColor: 'bg-blue-500',
    description:
      'The feature is restricted to select enterprise regions, beta domains, or dedicated pipelines.',
  },
  {
    title: 'Preview / Beta',
    dotColor: 'bg-violet-500',
    description:
      'Public sandbox testing stage. APIs are stable but minor changes can occur based on operational feedback.',
  },
];

export default function ReleaseNotesRolloutSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/75 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg7}
          alt="Rollout Understanding Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Understanding availability and rollout
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          We deploy changes gradually across our global network zones. Track each state to gauge integration windows.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATES.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-zinc-900/80 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-3 hover:outline-teal-400/50 transition-all group"
          >
            <div className="flex items-center gap-2">
              <div className={`size-2 ${item.dotColor} rounded-full shrink-0`} />
              <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
            </div>
            <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

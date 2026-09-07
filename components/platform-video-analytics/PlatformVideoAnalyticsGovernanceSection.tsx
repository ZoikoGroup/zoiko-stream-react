import React from 'react';
import Image from 'next/image';
import {  Shield, Key, NotepadText, Database } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const GOVERNANCE_ITEMS = [
  {
    icon: Shield,
    title: 'Privacy & Aggregation',
    desc: 'No person-level surveillance or identifiable viewer exposure. Aggregate and purpose-bound semantics by default.',
  },
  {
    icon: Key,
    title: 'Access Control',
    desc: 'Authorization at tenant, object, metric and export level. No universal access assumptions.',
  },
  {
    icon: NotepadText,
    title: 'Enterprise Evidence',
    desc: 'Metric Registry definitions, versioned formulas, data lineage and quality indicators for procurement evaluation.',
  },
  {
    icon: Database,
    title: 'Data Protection',
    desc: 'Small-group suppression, retention governance and privacy thresholds from approved sources.',
  },
];

export default function PlatformVideoAnalyticsGovernanceSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-white flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* White Background Snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-36 -top-20 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="w-full text-zinc-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
            Privacy, access and enterprise governance
          </h2>
          <p className="w-full text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Aggregate by default. Purpose-bound access. Source-governed privacy boundaries.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOVERNANCE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 bg-slate-50/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 backdrop-blur-xs flex flex-col justify-start items-start gap-4 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
                    {item.title}
                  </h3>
                  <div className="size-10 bg-blue-500/10 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-center text-blue-500 shrink-0">
                    <Icon className="size-5 text-blue-500" />
                  </div>
                </div>
                <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

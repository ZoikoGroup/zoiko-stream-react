import React from 'react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import Image from 'next/image';
const pipelineSteps = [
  { num: '01', title: 'Authorization', desc: 'Verify user stream permission constraints' },
  { num: '02', title: 'Capture', desc: 'Deterministic cloud ingest tracking' },
  { num: '03', title: 'Asset', desc: 'Immutable registration on CDN networks' },
  { num: '04', title: 'Qualify', desc: 'Auto transcriptions and accessibility checks' },
  { num: '05', title: 'Publish', desc: 'SSO-gated catalog listing activation' },
  { num: '06', title: 'Retain/Preserve', desc: 'Enforce enterprise cold-storage rules' },
];

const outcomePills = [
  'Not Configured: Waiting',
  'Authorized: Active',
  'In Progress: Active',
  'Complete: Finished',
  'Partial: Needs Review',
  'Failed: Error',
  'Unknown: Timeout',
];

export default function ReplayReadinessSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-24 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
     <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src={bg147}
                alt="Media Lifecycle Background"
                fill
                className="object-cover opacity-30"
                priority
              />
              <div className="absolute inset-0 " />
            </div>
<div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Live ending does not automatically mean replay is ready
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Inter'] leading-relaxed max-w-4xl">
            Distinguish recording authorization, capture outcome, asset registration, replay readiness, access policy, accessibility/language state, versioning, retention and preservation.
          </p>
        </div>

        {/* 6-Step Horizontal Pipeline Bar */}
        <div className="p-5 bg-slate-50 rounded-xl border border-gray-200 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {pipelineSteps.map((st, idx) => (
            <div key={idx} className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-blue-500 text-sm font-bold font-['Space_Grotesk']">
                  {st.num}
                </span>
                <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                  {st.title}
                </h3>
              </div>
              <p className="text-slate-600 text-xs font-normal font-['Inter']">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="p-8 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-5 justify-center">
            <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
              Regulatory Retention Protocols
            </h3>
            <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
              Enforce legal hold criteria, automated archiving timelines, complete data deletions, cold-storage backup systems, and digital preservation strategies. Verify that state rules conform with target global compliance zones.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-5 justify-center">
            <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
              Capture Processing Outcomes
            </h3>
            <div className="flex flex-wrap gap-2">
              {outcomePills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-slate-200 rounded-full text-slate-900 text-xs font-semibold font-['Inter']"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';
import bg167 from '@/public/images/Enterprises/bg (167).png';

const phases = [
  { num: '1', title: 'Discover', desc: 'SOP Mapping, scope evaluation', role: 'Solutions Architect' },
  { num: '2', title: 'Validate', desc: 'SAML integration, token tests', role: 'IT Admin / Zoiko' },
  { num: '3', title: 'Configure', desc: 'Custom ingest path setup', role: 'Video Engineering' },
  { num: '4', title: 'Test', desc: 'Load capacity stress trials', role: 'SRE Operations' },
  { num: '5', title: 'Launch', desc: 'Live event monitoring active', role: 'Dedicated Support' },
  { num: '6', title: 'Operate', desc: 'Continuous telemetry logging', role: 'Platform Admin' },
  { num: '7', title: 'Review', desc: 'Quarterly compliance audit', role: 'Sponsor / Counsel' },
];

export function LifecycleEngagementSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg167}
          alt="Lifecycle Engagement Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Enterprise adoption continues after contract signature and launch.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Implementation and ongoing operation as a governed lifecycle with explicit artifacts and exit evidence.
          </p>
        </div>

        {/* 7-Phase Stepper Box */}
        <div className="w-full p-6 bg-slate-50/90 rounded-2xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm backdrop-blur-sm">
          <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk'] uppercase">
            THE 7-PHASE LIFECYCLE ENGAGEMENT
          </span>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {phases.map((p, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold font-['Space_Grotesk'] text-base border border-gray-200">
                  {p.num}
                </div>
                <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">{p.title}</span>
                <span className="text-slate-500 text-[10px] font-normal font-['Inter'] leading-4">{p.desc}</span>
                <span className="text-blue-500 text-[9px] font-bold font-['Inter'] uppercase">{p.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Support & Change Control Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-5 shadow-sm backdrop-blur-sm">
            <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">Operational Support Guarantees</h3>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
              Our service model establishes strict response boundaries. Critical pipeline events trigger immediate on-call SRE routing with a dedicated engineering lead assigned within 15 minutes of threshold breach. Continuous event telemetry is mirrored to Zoiko operations for proactive escalation.
            </p>
          </div>

          <div className="p-7 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-5 shadow-sm backdrop-blur-sm">
            <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">Governed Change Control</h3>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
              All infrastructure adjustments, routing edits, or authentication parameter modifications follow a dual-signature signoff cycle. Configuration states are tracked on an immutable git-style ledger. Non-destructive, instant policy rollback paths are maintained for all active stream endpoints.
            </p>
          </div>
        </div>

        <div className="inline-flex justify-start items-center gap-4 flex-wrap">
          <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
            <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
              Plan Implementation
            </span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-gray-200 flex justify-center items-center cursor-pointer">
            <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
              Talk to an Expert
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

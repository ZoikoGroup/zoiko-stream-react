import React from 'react';
import Image from 'next/image';
import bg167 from '@/public/images/Enterprises/bg (167).png';

const domains = [
  {
    title: 'Contribution / Source',
    owner: 'SRE / Video Engineering',
    audit: 'Encoder route mapping & redundant loop verification tests',
    telemetry: 'Real-time telemetry inputs on dual ingest routes',
  },
  {
    title: 'Production / Configuration',
    owner: 'Compliance Officer',
    audit: 'Dual-signature workspace policy checks and review',
    telemetry: 'Verified config ledger with version lock',
  },
  {
    title: 'Access / Security',
    owner: 'Security / IT Admin',
    audit: 'SAML SSO integration check & endpoint encryption check',
    telemetry: 'Edge evaluation logs checking token state',
  },
  {
    title: 'Delivery',
    owner: 'SRE / Operations Team',
    audit: 'Multi-CDN capacity load tests and automatic fallbacks',
    telemetry: 'Distributed telemetry tracking edge loads',
  },
  {
    title: 'Accessibility',
    owner: 'Accessibility Owner',
    audit: 'Pre-event caption accuracy test and alignment mapping',
    telemetry: 'Closed captions status telemetry active',
  },
  {
    title: 'Recording / Replay',
    owner: 'Compliance Officer',
    audit: 'Cold-storage replication test & automated backup loops',
    telemetry: 'Dual-stream archiving output verification',
  },
];

export function ResilienceDisciplineSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg167}
          alt="Resilience Background"
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
            Resilience is an operating discipline, not a guaranteed outcome.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Deploy seven readiness domains with verified pre-live audits and active fallback pathways to achieve operational continuity under failure.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((d, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-4 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <div className="w-full flex justify-between items-center pb-3 border-b border-gray-200">
                <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">{d.title}</h3>
                <span className="text-blue-500 text-xs font-semibold font-['Inter']">{d.owner}</span>
              </div>
              <div className="flex flex-col gap-2 text-xs">
                <div>
                  <strong className="text-slate-900 font-['Inter']">Pre-Live Audit: </strong>
                  <span className="text-slate-600 font-['Inter'] leading-5">{d.audit}</span>
                </div>
                <div>
                  <strong className="text-slate-900 font-['Inter']">Active Telemetry: </strong>
                  <span className="text-slate-600 font-['Inter'] leading-5">{d.telemetry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

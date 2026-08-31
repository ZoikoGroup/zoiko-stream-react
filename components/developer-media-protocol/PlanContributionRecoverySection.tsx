import React from 'react';
import Image from 'next/image';
import { CircleAlert } from 'lucide-react';

const recoveryScenarios = [
  {
    title: 'Primary Protocol Unavailable',
    badge: 'ENDPOINT OFF-LINE',
    desc: 'Endpoint unreachable or degraded. Check System Status first. Prepare alternate protocol if qualified.',
  },
  {
    title: 'Encoder Migration',
    badge: 'VERIFICATION GATED',
    desc: 'Switching encoder vendor or version. Re-verify qualification before production cutover.',
  },
  {
    title: 'Venue Network Restriction',
    badge: 'PORT BLOCKED',
    desc: 'On-site firewall blocks required ports. Fallback to TCP-based protocol or request network exception.',
  },
  {
    title: 'Event Redundancy',
    badge: 'DUAL CONTRIBUTION',
    desc: 'Multi-encoder setup for critical events. Confirm redundant ingest is supported before relying on it.',
  },
  {
    title: 'Version Deprecation',
    badge: 'MIGRATION ACTIVE',
    desc: 'Protocol version reaching end of support. Follow migration timeline and test replacement path.',
  },
  {
    title: 'Protocol Retirement',
    badge: 'END OF LIFE',
    desc: 'Full protocol being retired. Use changelog, migration guide, and replacement qualification.',
  },
];

export function PlanContributionRecoverySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-media-protocol/bg 14.png"
          alt="Plan Contribution Recovery Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Plan how contribution recovers when the network, encoder, or protocol path changes
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Support real production transitions without implying automatic failover. Only show fallback, redundant ingest, or simultaneous contribution when officially supported and tested. If switching protocol requires a new stream resource, credential, or session — state it explicitly.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="w-full flex flex-col gap-4">
          {recoveryScenarios.map((sc, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-4 shadow-xl backdrop-blur-md"
            >
              <div className="w-full flex justify-between items-center">
                <h3 className="text-white text-lg font-bold   ">{sc.title}</h3>
                <span className="px-2.5 py-1 bg-amber-500/10 rounded-full border border-amber-500/30 text-amber-500 text-[10px] font-bold    uppercase">
                  {sc.badge}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-5">{sc.desc}</p>
            </div>
          ))}
        </div>

        {/* Protocol Change Warning Box */}
        <div className="w-full p-5 bg-amber-500/10 rounded-lg border border-amber-500/30 flex items-center gap-4">
          <CircleAlert className="w-5 h-5 text-amber-500/30 flex items-center justify-center text-amber-500 font-bold shrink-0"/>
          
          <p className="text-white text-sm font-medium leading-5">
            Changing protocol may require a new endpoint, credential, stream resource, or encoder restart. Verify all dependencies before cutover.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-slate-950 text-base font-bold   ">View resilience guidance</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 text-white font-bold    text-center cursor-pointer hover:border-white transition-colors">
            Talk to an expert
          </div>
        </div>
      </div>
    </section>
  );
}

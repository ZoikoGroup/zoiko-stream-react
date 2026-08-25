import React from 'react';
import Image from 'next/image';
import { Clock, Shield, SquareCheckBig, Users, Video } from 'lucide-react';

const replayCards = [
  {
    icon:Video,
    title: 'Capture Decision',
    desc: 'Systematic policy determining if replay assets are generated. Controlled at intake, default off.',
  },
  {
    icon:SquareCheckBig,
    title: 'Replay Readiness',
    desc: 'Mandatory processing, packaging, administrative review, and explicit authorization loop before publishing.',
  },
  {
    icon:Users,
    title: 'Audience Inheritance',
    desc: 'Live entitlement lists do not automatically inherit replay rights. Separate, unique policy evaluates instantly.',
  },
  {
    icon:Clock,
    title: 'Time-Limited Replay',
    desc: 'Automated expiration envelopes, programmatic extension approvals, and instant global revocation controls.',
  },
  {
    icon:Shield,
    title: 'Governance Audit',
    desc: 'Every capture request, publish stage, user view, and asset decay is compiled in immutable access ledgers.',
  },
];

export function ReplayDecisionSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/60 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-private-audience-delivery/bg (6).png"
          alt="Replay Decision Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[52px]">
            Replay access is a separate decision, not a side effect of live
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Capture, audience inheritance, and replay readiness are distinct governance steps.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {replayCards.map((card, idx) => {
            const Icon=card.icon;
            return(
            <div
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-5 hover:border-gray-700 transition-colors backdrop-blur-sm"
            >
              <div className="w-10 h-10 bg-slate-600/10 rounded-lg border border-gray-800 flex items-center justify-center">
                <div className="w-5 h-5 flex items-center justify-center">
                <Icon className="w-5 h-5 text-slate-400" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-white text-lg font-bold ">{card.title}</h3>
                <p className="text-slate-400 text-sm font-normal  leading-5">{card.desc}</p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}

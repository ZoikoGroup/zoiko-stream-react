import React from 'react';
import Image from 'next/image';
import { Check, Lock, Minus, TriangleAlert } from 'lucide-react';

const statusCards = [
  {
    badge: 'ELIGIBLE',
    badgeCls: 'bg-emerald-500/10 text-teal-400 border-teal-400/30',
    dotCls: 'text-teal-400',
    icon:Check,
    title: 'Configured / Eligible',
    desc: 'Active flag found on origin. Safe for automated stream handoff on immediate start signal.',
  },
  {
    badge: 'INACTIVE',
    badgeCls: 'bg-gray-800 text-slate-400 border-gray-700',
    dotCls: 'text-slate-400',
    icon:Minus,
    title: 'Not Configured',
    desc: 'No record bound. Stream operates normally but chunks are dropped without persistent state.',
  },
  {
    badge: 'RESTRICTED',
    badgeCls: 'bg-red-500/10 text-red-400 border-red-400/30',
    dotCls: 'text-red-400',
    icon:Lock,
    title: 'Restricted',
    desc: 'Local policy blocks archiving. Regulatory parameters require absolute stream bypass.',
  },
  {
    badge: 'PENDING',
    badgeCls: 'bg-amber-500/10 text-amber-300 border-amber-300/30',
    dotCls: 'text-amber-300',
    icon:TriangleAlert,
    title: 'Unknown Status',
    desc: 'Inconsistent database schemas. Telemetry verification pending engine verification.',
  },
];

export function VerifyRecordingConfiguredSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/70 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Recording-assest/bg (9).png"
          alt="Verify Recording Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/90 to-gray-950/95" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Verify recording is configured before you go live.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Avoid lost broadcasts. Query current stream eligibility parameters prior to initialization to ensure reliable execution of downstream processing rules.
          </p>
        </div>

        {/* 4 Cards Grid (2x2) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {statusCards.map((card, idx) => {
            const Icon=card.icon;
            return(
            <div
              key={idx}
              className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-between gap-5 shadow-xl backdrop-blur-md"
            >
              <div className="w-full flex justify-between items-center">
                <div className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center">
                  <Icon className={`w-5 h-5 rounded-full ${card.dotCls}`} />
                </div>
                <div className={`px-2.5 py-1 rounded-full border text-xs font-bold ${card.badgeCls}`}>
                  {card.badge}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-5">{card.desc}</p>
              </div>

              <div className="w-full h-px bg-gray-800" />

              <span className="text-teal-400 text-xs font-bold cursor-pointer hover:underline">
                Configure parameters →
              </span>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';

import bg126 from '@/public/images/secure-enterprise/bg (127).png';
import psv0 from '@/public/images/secure-enterprise/player-screen-visual.png';
import psv1 from '@/public/images/secure-enterprise/player-screen-visual (1).png';
import psv2 from '@/public/images/secure-enterprise/player-screen-visual (2).png';
import psv3 from '@/public/images/secure-enterprise/player-screen-visual (3).png';

const playerStates = [
  {
    tag: 'ALLOWED',
    tagStyle: 'bg-emerald-500/10 text-emerald-500',
    dot: 'bg-emerald-500',
    title: 'Authorized Stream Active',
    desc: 'SSO parameters confirmed. Encryption matrix verified.',
    image: psv0,
  },
  {
    tag: 'DENIED',
    tagStyle: 'bg-red-500/10 text-red-500',
    dot: 'bg-red-500',
    title: 'Playback Blocked',
    desc: 'Client subnet failed organization security parameters.',
    image: psv1,
  },
  {
    tag: 'EXPIRED',
    tagStyle: 'bg-amber-500/10 text-amber-500',
    dot: 'bg-amber-500',
    title: 'Session Expired',
    desc: 'Maximum continuous session window achieved. Re-auth mandatory.',
    image: psv2,
  },
  {
    tag: 'REVOKED',
    tagStyle: 'bg-red-800/10 text-red-800',
    dot: 'bg-red-800',
    title: 'Access Revoked by Admin',
    desc: 'Administrator terminated session remotely. Pipeline closed.',
    image: psv3,
  },
];

export default function PlayerEnforcementSection() {
  return (
    <section className="relative w-full bg-slate-900/75 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg126}
          alt="Player Enforcement Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Authorization decides. The player enforces.
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-relaxed max-w-3xl">
            Verification doesn&apos;t stop when video starts. ZoikoStream maintains active telemetry loops during the stream session to verify persistent criteria compliance.
          </p>
        </div>

        {/* Stepper Pipeline Bar */}
        <div className="p-5 bg-gray-800 rounded-xl border border-gray-800 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-1 bg-teal-400/10 text-teal-400 text-xs font-bold   rounded">
              REQUEST
            </span>
            <span className="text-white text-xs font-normal  ">
              Authorization Request
            </span>
          </div>

          <span className="text-teal-400 font-bold">→</span>

          <div className="flex items-center gap-2.5">
            <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-xs font-bold   rounded">
              DECISION
            </span>
            <span className="text-white text-xs font-normal  ">
              Policy evaluation matrix
            </span>
          </div>

          <span className="text-teal-400 font-bold">→</span>

          <div className="flex items-center gap-2.5">
            <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold   rounded">
              ENFORCE
            </span>
            <span className="text-white text-xs font-normal  ">
              Enforced playback state
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {playerStates.map((ps, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col backdrop-blur-md hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-36 bg-zinc-800">
                <Image
                  src={ps.image}
                  alt={ps.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-1.5">
                  <div className={`size-1.5 ${ps.dot} rounded-full`} />
                  <span className={`text-xs font-bold   ${ps.tagStyle}`}>
                    {ps.tag}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-base font-bold  ">
                    {ps.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal   leading-relaxed">
                    {ps.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

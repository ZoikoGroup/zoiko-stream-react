import React from 'react';
import Image from 'next/image';

import bg151 from '@/public/images/Organization-overview/bg (151).png';
import rect124 from '@/public/images/Organization-overview/Rectangle (121).png';
import rect125 from '@/public/images/Organization-overview/Rectangle (120).png';
import rect126 from '@/public/images/Organization-overview/Rectangle (119).png';
import rect127 from '@/public/images/Organization-overview/Rectangle (118).png';
import rect128 from '@/public/images/Organization-overview/Rectangle (117).png';
import rect129 from '@/public/images/Organization-overview/Rectangle (122).png';

const continuousCards = [
  {
    title: 'Audience/Access',
    desc: 'Deploy public-facing open streams alongside secure authenticated administrative portals without cross-contamination.',
    tags: ['ACCESSIBLE', 'SECURED'],
    image: rect124,
  },
  {
    title: 'Captions & Translation',
    desc: 'Automated real-time speech-to-text models instantly streaming synchronized global multi-lingual subtitles.',
    tags: ['COMPLIANT', 'AUTOMATED'],
    image: rect125,
  },
  {
    title: 'Continuity Readiness',
    desc: 'Hot-standby redundant feeds backing up live legislative streams with zero-second automatic packet recovery.',
    tags: ['RESILIENT', 'FAILSAFE'],
    image: rect126,
  },
  {
    title: 'Recording/Replay',
    desc: 'Immediate durable package archiving that saves raw broadcasts directly back into institutional cloud storage containers.',
    tags: ['PERMANENT', 'AUTO-SAVE'],
    image: rect127,
  },
  {
    title: 'Publication Status',
    desc: 'Verifiable public audit logs tracking continuous stream health, uptime metrics, and absolute tamper-proofing evidence.',
    tags: ['AUDITABLE', 'TRANSPARENT'],
    image: rect128,
  },
  {
    title: 'Evidence Ledger',
    desc: 'Downloadable certified reports proving full telemetry records, accessibility benchmarks, and regulatory compliance paths.',
    tags: ['COMPLIANCE', 'PDF EXPORT'],
    image: rect129,
  },
];

export default function ContinuousBroadcastingSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg151}
          alt="Continuous Broadcasting Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Accountable, accessible, continuous broadcasting.
          </h2>
          <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed max-w-4xl">
            Satisfy absolute public transparency requirements, mandatory accessibility standards, and robust continuous archives with zero cognitive load.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {continuousCards.map((c, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/90 rounded-2xl border border-gray-800 backdrop-blur-md overflow-hidden flex flex-col group hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-40 bg-slate-950 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {c.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-800 rounded-xs text-teal-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                    {c.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                    {c.desc}
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

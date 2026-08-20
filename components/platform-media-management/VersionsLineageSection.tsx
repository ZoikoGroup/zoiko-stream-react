import React from 'react';
import Image from 'next/image';

const lineageCards = [
  {
    title: 'Version Identity',
    desc: 'Stable cryptographic version ID distinct from the root media record for permanent, tamper-proof tracking.',
    image: '/images/platform-media-managemnt/illustration.png',
  },
  {
    title: 'Current Designation',
    desc: 'Exactly one current-for-purpose authoritative version with dynamic, microsecond-accurate effective timestamps.',
    image: '/images/platform-media-managemnt/illustration (1).png',
  },
  {
    title: 'Superseded Versions',
    desc: 'Maintains structural historical state with unambiguous reference mapping pointing forward to successors.',
    image: '/images/platform-media-managemnt/illustration (2).png',
  },
  {
    title: 'Derivative Tracking',
    desc: 'Traces parent/source relationships across clips, crops, transcodes, and audio alternate tracks dynamically.',
    image: '/images/platform-media-managemnt/illustration (3).png',
  },
  {
    title: 'Correction History',
    desc: 'Auditable log recording before/after changes, revision reasons, authorized actors, and affected endpoints.',
    image: '/images/platform-media-managemnt/illustration (4).png',
  },
  {
    title: 'Concurrent Edit Safety',
    desc: 'Detects editing conflicts automatically. Compares and prompts safe merge or hot reload safely.',
    image: '/images/platform-media-managemnt/illustration (5).png',
  },
];

export default function VersionsLineageSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-managemnt/bg (80).png"
          alt="Versions Lineage Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Versions, lineage, and relationships
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk']">
            Track every version, derivative, and correction with full lineage
          </p>
        </div>

        {/* Diagram Box */}
        <div className="p-6 md:p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-md flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-12">
          <div className="w-44 p-4 bg-slate-800 rounded-lg border border-gray-800 flex flex-col gap-1.5">
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">ORIGINAL SOURCE</span>
            <span className="text-white text-sm font-bold font-['Space_Grotesk'] truncate">Raw Ingest v1.0</span>
            <span className="text-slate-400 text-xs font-['Space_Grotesk']">Steward: Live Ops</span>
          </div>

          <div className="text-teal-400 font-bold">→</div>

          <div className="w-48 p-4 bg-slate-800 rounded-lg border border-gray-800 flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">ACTIVE CURRENT</span>
              <div className="size-2 bg-teal-400 rounded-full" />
            </div>
            <span className="text-white text-sm font-bold font-['Space_Grotesk'] truncate">VOD Master v2.4</span>
            <span className="text-slate-400 text-xs font-['Space_Grotesk']">Verified: 10m ago</span>
          </div>

          <div className="text-teal-400 font-bold">→</div>

          <div className="flex flex-col gap-2">
            <div className="w-44 p-3 bg-slate-800/60 rounded-lg border border-gray-800 flex flex-col gap-0.5">
              <span className="text-blue-400 text-[10px] font-bold font-['Space_Grotesk']">DERIVATIVE</span>
              <span className="text-white text-xs font-bold font-['Space_Grotesk'] truncate">Social Clip 16:9</span>
            </div>
            <div className="w-44 p-3 bg-slate-800/60 rounded-lg border border-gray-800 flex flex-col gap-0.5">
              <span className="text-blue-400 text-[10px] font-bold font-['Space_Grotesk']">DERIVATIVE</span>
              <span className="text-white text-xs font-bold font-['Space_Grotesk'] truncate">Teaser 9:16</span>
            </div>
          </div>

          <div className="text-teal-400 font-bold">→</div>

          <div className="w-44 p-4 bg-slate-800 rounded-lg border border-gray-800 flex flex-col gap-1.5">
            <span className="text-rose-400 text-xs font-bold font-['Space_Grotesk']">CORRECTED REPLAY</span>
            <span className="text-white text-sm font-bold font-['Space_Grotesk'] truncate">Audio Fixed v2.4.1</span>
            <span className="text-slate-400 text-xs font-['Space_Grotesk']">By: H. Smith</span>
          </div>
        </div>

        {/* 6 Illustration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lineageCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col hover:border-teal-400/40 transition-colors group"
            >
              <div className="relative w-full h-40 bg-slate-900 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col gap-1.5">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

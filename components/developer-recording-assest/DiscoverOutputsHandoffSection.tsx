import React from 'react';
import Image from 'next/image';

const outputCards = [
  {
    title: 'Available',
    badge: 'READY',
    badgeCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
    desc: 'Ready for client playback. HLS/DASH manifest generated successfully.',
    action: 'Copy Manifest URL',
    img: '/images/Recording-assest/card-image (7).png',
  },
  {
    title: 'Processing',
    badge: 'TRANSCODING',
    badgeCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
    desc: 'Transcoding multi-bitrate profiles. Chunks generating in real-time.',
    action: 'Check Telemetry',
    img: '/images/Recording-assest/card-image (8).png',
  },
  {
    title: 'Unavailable',
    badge: 'BYPASSED',
    badgeCls: 'bg-gray-700 text-slate-400 border-gray-600',
    desc: 'Ingest error or bypass policy. No playable output generated.',
    action: 'View Event Log',
    img: '/images/Recording-assest/card-image (9).png',
  },
  {
    title: 'Protected',
    badge: 'ENCRYPTED',
    badgeCls: 'bg-teal-400/10 text-teal-400 border-teal-400/30',
    desc: 'SSO token-gated or DRM enabled. Strict key validation required.',
    action: 'Handoff Auth Key',
    img: '/images/Recording-assest/card-image (10).png',
  },
];

export function DiscoverOutputsHandoffSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Recording-assest/bg (12).png"
          alt="Discover Outputs Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Discover outputs and hand off to secure playback.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Manifest generation, security handoff, and access checking represent asynchronous pipelines that resolve only when recording evidence is fully verified.
          </p>
        </div>

        {/* 4 Output State Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outputCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-2xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-md"
            >
              <div className="w-full h-36 relative bg-slate-900">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col justify-between gap-5 flex-1">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-white text-lg font-bold">{card.title}</h3>
                  <div className={`px-2.5 py-1 rounded-full border text-[10px] font-bold ${card.badgeCls}`}>
                    {card.badge}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-5">{card.desc}</p>
                <div className="w-full h-px bg-gray-800" />

                <span className="text-teal-400 text-xs font-bold cursor-pointer hover:underline">
                  {card.action} →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

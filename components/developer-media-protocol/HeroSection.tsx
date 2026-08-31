import React from 'react';
import Image from 'next/image';
import { Activity, Globe, Lock } from 'lucide-react';

const heroCards = [
  {
    title: 'RTMPS',
    desc: 'Highest compatibility. TCP-based. Safe for common encoders.',
    badge: 'VERIFIED',
    icon:Lock
  },
  {
    title: 'SRT',
    desc: 'Ultra-low loss over unstable networks. UDP-based. Highly customizable.',
    badge: 'VERIFIED',
    icon:Activity
  },
  {
    title: 'WebRTC / WHIP',
    desc: 'Sub-second latency direct from browser or specialized software.',
    badge: 'VERIFIED',
    icon:Globe
  },
];

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-media-protocol/bg 9.png"
          alt="Media Protocol Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 flex-1 max-w-[640px] flex flex-col justify-start items-start gap-8">
        <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight lg:leading-[60px]">
          Choose the right way to get your live source into ZoikoStream
        </h1>

        <p className="text-stone-300 text-base lg:text-lg font-normal leading-7">
          Compare RTMPS, SRT, and WHIP by source, network, latency, security, and operational needs — then open the verified setup path for your stream.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-slate-950 text-base font-bold">Start building</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
            <span className="text-white text-base font-bold">Compare protocols</span>
          </div>
        </div>
      </div>

      {/* Right Protocol Cards Stack */}
      <div className="relative z-10 w-full lg:w-[520px] flex flex-col gap-4">
        {heroCards.map((card, idx) => {
          const Icon=card.icon;
          return(
          <div
            key={idx}
            className="p-5 bg-zinc-900/80 rounded-xl border border-gray-800 flex items-center gap-4 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-teal-400" />
            </div>

            <div className="flex-1 flex flex-col justify-start items-start gap-1">
              <h3 className="text-white text-lg font-bold">{card.title}</h3>
              <p className="text-slate-400 text-xs leading-4">{card.desc}</p>
            </div>

            <div className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30 shrink-0">
              <span className="text-teal-400 text-xs font-semibold uppercase">{card.badge}</span>
            </div>
          </div>
        )})}
      </div>
    </section>
  );
}

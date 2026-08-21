'use client';

import React from 'react';
import { Home, Globe2, Camera, ShieldCheck, Wifi, User } from 'lucide-react';

export default function WeddingVenueClarity() {
  const cards = [
    {
      title: 'Venue & source setup',
      desc: 'Structured preflight audits of physical venue layout to map local transmission blockages.',
      icon: Home
    },
    {
      title: 'Connectivity & network',
      desc: 'Dual-WAN pathway guarantees switching smoothly between local fiber and cellular streams.',
      icon: Wifi
    },
    {
      title: 'Camera & equipment',
      desc: 'Hardware verification loop ensuring ingest streams maintain consistent 1080p outputs.',
      icon: Camera
    },
    {
      title: 'Production operator',
      desc: 'Dedicated operations lead coordinates cues directly with on-site audio-visual crews.',
      icon: User
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/wedding-celebration/SectionBackground.png')" }}
      />
      <div className="absolute right-[-100px] bottom-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 to-teal-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-slate-105 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Venue, source &amp; production clarity
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Understand who supplies the source, connectivity, equipment, and operator responsibilities.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                className="p-6 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm flex flex-col justify-start items-start gap-4 hover:border-zinc-700/50 transition-all duration-300 shadow-md"
              >
                {/* Grey Icon Box */}
                <div className="size-12 bg-gray-850 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex justify-center items-center shrink-0">
                  <Icon className="size-5 text-teal-400 stroke-[1.8]" />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <h3 className="text-slate-105 text-lg font-bold font-spaceGrotesk">
                    {c.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
                    {c.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex justify-start pt-2">
          <a 
              href="/talk-to-an-expert"
            className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-teal-400 transition-colors text-slate-105 text-base font-medium font-spaceGrotesk"
          >
            Talk to an event expert
          </a>
        </div>

      </div>
    </section>
  );
}

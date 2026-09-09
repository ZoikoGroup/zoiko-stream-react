import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import imgProd1 from '@/public/images/live-event-conferences/Rectangle.png';
import imgProd2 from '@/public/images/live-event-conferences/Rectangle (1).png';
import imgProd3 from '@/public/images/live-event-conferences/Rectangle (2).png';

export function ProductionBoundarySection() {
  const cards = [
    {
      badge: 'REAL-TIME MATRIX',
      title: 'Source Switching',
      description: 'Transition cleanly between live cameras, slides decks, virtual presenter grids, and backup VOD directories instantly.',
      image: imgProd1,
    },
    {
      badge: 'BRAND ALIGNMENT',
      title: 'Graphics & Overlays',
      description: 'Natively embed transparent lower-third titles, sponsor watermarks, countdown tickers, and interactive social panels.',
      image: imgProd2,
    },
    {
      badge: 'RUN-OF-SHOW CONTROL',
      title: 'Show Management',
      description: 'Map preflight checklist items, cue sequences, automatic backup triggers, and active operator permission limits.',
      image: imgProd3,
    },
  ];

  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-white text-slate-900 overflow-hidden border-b border-gray-200">
      {/* Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-96 -left-35 -top-22 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] text-zinc-950 leading-tight">
            Production &amp; Presentation Boundary
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Apportion video switching power, transparent graphic layers, and compliance limits to your local AV crew or our L1 managed support teams.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-44 bg-slate-200">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-6 flex flex-col justify-start items-start gap-3">
                <span className="text-blue-500 text-xs font-bold font-['IBM_Plex_Mono'] uppercase tracking-wider">
                  {card.badge}
                </span>
                <h3 className="text-zinc-950 text-lg font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-5">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

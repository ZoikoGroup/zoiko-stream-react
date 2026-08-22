'use client';

import React from 'react';
import Image from 'next/image';

export default function WeddingAudioRights() {
  const cards = [
    {
      title: 'Spoken word quality',
      desc: 'Isolated podium and lapel microphone configurations engineered to transmit clean, echo-free speech.',
      badge: 'SPEECH PRO',
      img: '/images/wedding-celebration/CardImage2x.png'
    },
    {
      title: 'Music & performance',
      desc: 'High-fidelity stereo stream encoding optimized specifically to preserve live band acoustics and DJ sets.',
      badge: 'HD STEREO',
      img: '/images/wedding-celebration/CardImage (10).png'
    },
    {
      title: 'Rights & licensing',
      desc: 'Structured compliance guidelines for music platforms protecting broadcast feeds from automatic content strikes.',
      badge: 'COMPLIANT',
      img: '/images/wedding-celebration/CardImage (11).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-b border-gray-200 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Audio, music &amp; content rights
          </h2>
          <p className="text-slate-655 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Plan spoken word and music quality while understanding content-rights boundaries.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image box */}
              <div className="relative h-48 w-full bg-slate-100">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Padding */}
              <div className="p-6 flex flex-col gap-3 justify-start items-start">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-zinc-955 text-lg font-bold font-spaceGrotesk leading-tight">
                    {c.title}
                  </h3>
                  <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-[10px] font-bold font-mono rounded-sm tracking-wider uppercase shrink-0">
                    {c.badge}
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

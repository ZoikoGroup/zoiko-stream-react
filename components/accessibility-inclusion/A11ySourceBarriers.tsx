'use client';

import React from 'react';
import Image from 'next/image';

export default function A11ySourceBarriers() {
  const cards = [
    {
      title: 'Slide & Doc Hierarchy',
      desc: 'Proper heading structures and sequential reading orders verified pre-air.',
      img: '/images/accessibility-inclusion/Rectangle (65).png'
    },
    {
      title: 'Graphics & Contrast',
      desc: 'Strict visual designs that do not rely on color markers alone for meaning.',
      img: '/images/accessibility-inclusion/Rectangle (66).png'
    },
    {
      title: 'Source Audio Quality',
      desc: 'Crystal clear live sound feeds mapped to support caption engines and listeners.',
      img: '/images/accessibility-inclusion/Rectangle (67).png'
    },
    {
      title: 'Alternative Descriptions',
      desc: 'Text descriptions added where visual displays carry crucial event context.',
      img: '/images/accessibility-inclusion/Rectangle (68).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-5xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-3xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Prevent source barriers before they reach viewers
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 text-base sm:text-sm font-normal font-spaceGrotesk leading-relaxed">
            Readable stage graphics, raw source audio quality, slide visual hierarchy, contrast checks, and alternative descriptions — verified before go-live.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800/80 flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {/* Image cover */}
              <div className="relative h-40 w-full bg-slate-200 dark:bg-zinc-950">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Padding */}
              <div className="p-5 flex flex-col gap-2 justify-start items-start">
                <h3 className="text-zinc-950 dark:text-white text-base font-bold font-spaceGrotesk">
                  {c.title}
                </h3>
                <p className="text-gray-600 dark:text-zinc-400 text-xs font-normal font-spaceGrotesk leading-relaxed text-left">
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

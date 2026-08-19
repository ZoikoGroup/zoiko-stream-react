'use client';

import React from 'react';
import Image from 'next/image';

export default function WeddingPatterns() {
  const cards = [
    {
      title: 'Ceremony-focused',
      desc: 'A direct high-fidelity feed capturing the vows, exchange of rings, and main recessional walk.',
      img: '/images/wedding-celebration/CardImage (4).png'
    },
    {
      title: 'Multi-part event',
      desc: 'Transition smoothly between the main ceremony hall, cocktails, dinner toasts, and first dance spaces.',
      img: '/images/wedding-celebration/CardImage (5).png'
    },
    {
      title: 'Private / controlled access',
      desc: 'Keep the event strictly limited to invited family and friends using passcode protection and custom credentials.',
      img: '/images/wedding-celebration/CardImage (6).png'
    },
    {
      title: 'Shareable / broader access',
      desc: 'Provide open public link formats optimized for broad social circles, coworkers, and community groups.',
      img: '/images/wedding-celebration/CardImage (7).png'
    },
    {
      title: 'Remote contributors',
      desc: 'Integrate virtual toasts and live screen projections directly into the physical venue speakers & displays.',
      img: '/images/wedding-celebration/CardImage (8).png'
    },
    {
      title: 'Unsure — help me plan',
      desc: 'Access our interactive walkthrough, design models, and talk directly to our specialized planning desk.',
      img: '/images/wedding-celebration/CardImage (9).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Choose your event pattern
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Select the structured flow that matches how you wish to coordinate your physical space with remote observers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {/* Image box */}
              <div className="relative h-44 w-full bg-slate-100 dark:bg-zinc-950">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Padding */}
              <div className="p-6 flex flex-col gap-2 justify-start items-start">
                <h3 className="text-zinc-955 dark:text-white text-lg font-bold font-spaceGrotesk">
                  {c.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
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

'use client';

import React from 'react';
import Image from 'next/image';

export default function A11yAccessJourney() {
  const cards = [
    {
      title: 'Accessible Authentication',
      desc: 'Login and corporate credential entries engineered to be fully navigated via keyboards and screen readers without traps.',
      img: '/images/accessibility-inclusion/Rectangle (58).png'
    },
    {
      title: 'Recovery Paths',
      desc: 'When security checkpoints or authentication tokens fail, backup recovery channels remain accessible and compliant.',
      img: '/images/accessibility-inclusion/Rectangle (59).png'
    },
    {
      title: 'Gated Viewer Access',
      desc: 'Enterprise ticketed and private invite events backed by fully accessible, compliant front-end security gates.',
      img: '/images/accessibility-inclusion/Rectangle (60).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-5xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Accessible access is part of the accessibility journey
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 text-base sm:text-xm font-normal font-spaceGrotesk leading-relaxed">
            Authentication, authorization, recovery, and access gates that remain fully operable with assistive technology.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800/80 flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full bg-slate-200 dark:bg-zinc-950">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col gap-3 justify-start items-start">
                <h3 className="text-zinc-955 dark:text-white text-lg font-bold font-spaceGrotesk leading-tight">
                  {c.title}
                </h3>
                <p className="text-gray-605 dark:text-zinc-400 text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
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

'use client';

import React from 'react';
import Image from 'next/image';

export default function A11yCapabilities() {
  const cards = [
    {
      title: 'Accessible Viewer Controls',
      desc: 'Keyboard, focus, screen labels, zoom/reflow, and reduced-motion options natively configured.',
      img: '/images/accessibility-inclusion/Rectangle (53).png'
    },
    {
      title: 'Captions & Language',
      desc: 'SLA-backed captions and multi-language audio streams wherever configured and verified.',
      img: '/images/accessibility-inclusion/Rectangle (54).png'
    },
    {
      title: 'Accessible Access',
      desc: 'Credential flows, SAML SSO, and recovery options fully operable with assistive technology.',
      img: '/images/accessibility-inclusion/Rectangle (82).png'
    },
    {
      title: 'Content Accessibility',
      desc: 'Readable stage graphics, rigid color contrast checks, and alternative text-descriptions.',
      img: '/images/accessibility-inclusion/Rectangle (55).png'
    },
    {
      title: 'Alternative Access',
      desc: 'Deterministic fallback pathways available immediately when primary experience hits limits.',
      img: '/images/accessibility-inclusion/Rectangle (56).png'
    },
    {
      title: 'Live Accessibility Support',
      desc: 'Direct hotline issue routing to engineers dedicated to live accessibility operations.',
      img: '/images/accessibility-inclusion/Rectangle (57).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-gray-900 dark:text-white text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            What accessible event delivery covers
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Six fundamental operational tracks designed to secure programmatic inclusion for every enterprise broadcast.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 dark:bg-zinc-900/60 rounded-2xl border border-gray-200 dark:border-zinc-800/80 flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {/* Image box */}
              <div className="relative h-44 w-full bg-slate-200 dark:bg-zinc-950">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Padding */}
              <div className="p-6 flex flex-col gap-2.5 justify-start items-start">
                <h3 className="text-zinc-950 dark:text-white text-lg font-bold font-spaceGrotesk leading-snug">
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

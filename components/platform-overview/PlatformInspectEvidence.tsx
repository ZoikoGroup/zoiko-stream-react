'use client';

import React from 'react';
import Image from 'next/image';

export default function PlatformInspectEvidence() {
  const cards = [
    {
      title: 'Developer Documentation',
      desc: 'Core Platform - access technical references, API schemas, and integration guides updated 2 days ago.',
      overlay: '/images/platform-overview/overlay.png'
    },
    {
      title: 'Architecture Resource',
      desc: 'SRT & Low Latency - engineering schematics and protocol deep-dives updated 1 week ago.',
      overlay: '/images/platform-overview/overlay (1).png'
    },
    {
      title: 'System Status Board',
      desc: 'Live Telemetry - real-time health signals, uptime metrics, and incident logs across all nodes.',
      overlay: '/images/platform-overview/overlay (2).png'
    },
    {
      title: 'Security/Trust Report',
      desc: 'SSO & SAML Auth - compliance documentation, penetration test results, and trust policies updated 3 days ago.',
      overlay: '/images/platform-overview/overlay (3).png'
    },
    {
      title: 'Platform Changelog',
      desc: 'Release Notes - detailed feature updates, bug fixes, and deprecation notices from yesterday\'s release.',
      overlay: '/images/platform-overview/overlay (4).png'
    },
    {
      title: 'Case Study Archives',
      desc: 'Customer Success - documented outcomes, workflow transformations, and ROI breakdowns from 2 weeks ago.',
      overlay: '/images/platform-overview/overlay (5).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250 font-spaceGrotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold tracking-tight">
            Inspect the evidence. Choose your path.
          </h2>
          <p className="text-slate-655 dark:text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
            Explore our public reports, engineering schematics, and developer archives.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 min-h-[320px]"
            >
              {/* Overlay Graphic Header */}
              <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                {/* Visual Backdrop Overlay Image */}
                <Image 
                  src={c.overlay} 
                  alt={c.title}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
              </div>

              {/* Text Padding */}
              <div className="p-6 flex flex-col justify-start items-start gap-2.5 flex-1 text-left">
                <h3 className="text-zinc-955 dark:text-white text-base sm:text-lg font-bold">
                  {c.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed">
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

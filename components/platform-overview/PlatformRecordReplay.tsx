'use client';

import React from 'react';
import Image from 'next/image';

export default function PlatformRecordReplay() {
  const cards = [
    {
      title: 'Redundant Capture',
      desc: 'Cloud records master files automatically across multiple datacenters with optional clean video feeds.',
      img: '/images/platform-overview/CardImage1.png'
    },
    {
      title: 'Instant Highlights',
      desc: 'Generate social clips, micro-assets, and event recap reels within minutes of stream sign-off.',
      img: '/images/platform-overview/CardImage2.png'
    },
    {
      title: 'Interactive Replay',
      desc: 'Enable full VOD scrubbing, transcript searching, and multilingual audio channel swapping.',
      img: '/images/platform-overview/CardImage3.png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-b border-gray-200 transition-colors duration-250 font-spaceGrotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 text-3xl sm:text-4xl font-bold tracking-tight">
            Record, replay, and understand
          </h2>
          <p className="text-slate-655 text-base sm:text-lg font-normal leading-relaxed">
            Automate post-event video retention, index live captions, and query deep playback telemetry.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-2xl border border-gray-255 flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 min-h-[350px]"
            >
              {/* Image Box */}
              <div className="relative h-56 w-full bg-slate-100">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-7 flex flex-col justify-start items-start gap-3 flex-1 text-left">
                <h3 className="text-zinc-955 text-xl font-bold">
                  {c.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal leading-relaxed">
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

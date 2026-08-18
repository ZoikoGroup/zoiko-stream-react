'use client';

import React from 'react';
import Image from 'next/image';

export default function WorkflowFeeds() {
  const cards = [
    {
      title: 'Venue Cameras',
      desc: '1080p SRT Stream',
      badge: { text: 'Ready', style: 'bg-teal-500/10 text-teal-400' },
      img: '/images/workflow-overview/CardImage (15).png'
    },
    {
      title: 'Remote Presenter',
      desc: 'WebRTC Low-Latency Link',
      badge: { text: 'Needs Input', style: 'bg-red-500/10 text-red-405' },
      img: '/images/workflow-overview/CardImage (16).png'
    },
    {
      title: 'Backup Feed',
      desc: 'Pre-recorded VOD Fallback',
      badge: { text: 'Changed Since Test', style: 'bg-amber-500/10 text-amber-400' },
      img: '/images/workflow-overview/CardImage (17).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/workflow-overview/bg (39).png')" }}
      />
      <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-slate-105 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Know how every source reaches the event path
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Track active feeds from main stage cameras, auxiliary presentation decks, and virtual guest stream links with automatic latency testing.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col overflow-hidden hover:border-zinc-700 transition-all duration-300 shadow-lg"
            >
              {/* Image Box */}
              <div className="relative h-44 w-full bg-slate-950">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Padding */}
              <div className="p-6 flex flex-col justify-start items-start gap-2.5 flex-1">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-slate-105 text-base sm:text-lg font-bold font-spaceGrotesk">
                    {c.title}
                  </h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-spaceGrotesk shrink-0 ${c.badge.style}`}>
                    {c.badge.text}
                  </span>
                </div>
                <p className="text-slate-400 text-xs font-medium font-mono text-left">
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

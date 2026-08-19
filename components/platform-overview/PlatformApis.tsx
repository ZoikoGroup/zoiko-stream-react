'use client';

import React from 'react';
import { Tv, Disc,  Code, Smartphone, Milestone, Folder } from 'lucide-react';

export default function PlatformApis() {
  const cards = [
    {
      title: 'Live Streaming',
      desc: 'Auto-scaling infrastructure supporting sub-second global broadcast streams.',
      icon: Tv
    },
    {
      title: 'Real-time Contribution',
      desc: 'Zero-latency feedback pathways for remote speakers and guest anchors.',
      icon: Disc
    },
    {
      title: 'Video on Demand',
      desc: 'Seamless asset packaging, metadata injection, and cloud transcode automation.',
      icon: Folder
    },
    {
      title: 'Video APIs',
      desc: 'Integrate programmable stream switches, clip triggers, and cloud recordings into your app.',
      icon: Code
    },
    {
      title: 'Developer SDKs',
      desc: 'Native frameworks for iOS, Android, and WebRTC streaming endpoints.',
      icon: Smartphone
    },
    {
      title: 'Media Protocols',
      desc: 'Full-scale native support for SRT, RTMP, WebRTC, and HLS distribution.',
      icon: Milestone
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900 font-spaceGrotesk">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/platform-overview/bg (46).png')" }}
      />
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />
      <div className="absolute right-[-100px] top-[100px] w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-slate-101 text-3xl sm:text-4xl font-bold tracking-tight">
            Build with APIs and protocols
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            Programmable video architecture designed for modern developer frameworks, webhooks, and secure low-latency routing.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                className="p-6 bg-gray-900/75 rounded-2xl border border-slate-700 backdrop-blur-sm flex flex-col justify-start items-start gap-4 overflow-hidden hover:border-teal-400 transition-colors duration-300 min-h-[220px]"
              >
                {/* Gradient Icon Box */}
                <div className="size-12 bg-gradient-to-br from-teal-450 to-blue-600 rounded-xl flex justify-center items-center shrink-0 shadow-inner">
                  <Icon className="size-5 text-white stroke-[1.8]" />
                </div>
                
                <div className="flex flex-col gap-2 w-full text-left">
                  <h3 className="text-slate-101 text-base sm:text-lg font-bold">
                    {c.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

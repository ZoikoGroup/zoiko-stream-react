'use client';

import React from 'react';

export default function ApiSecurityTrust() {
  const cards = [
    {
      title: 'Key Credentials',
      desc: 'No permanent raw client credentials ever reside in the control plane database.'
    },
    {
      title: 'Token Authorization',
      desc: 'HMAC signatures gate stream playback access. Configurable token expiration windows.'
    },
    {
      title: 'Secure Data Handling',
      desc: 'Video data processing complies fully with federal data sovereignty policies.'
    },
    {
      title: 'Logging & Telemetry',
      desc: 'Query real-time access logs, security incidents, and operational QoS changes instantly.'
    },
    {
      title: 'Verified Code Safety',
      desc: 'Every code sample in the public directory undergoes scheduled automated tests.'
    },
    {
      title: 'Compliance Evidence',
      desc: 'Access verified penetration test summaries, SOC 2 reports, and trust documentation.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900 font-spaceGrotesk">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-30"
        style={{ backgroundImage: "url('/images/video-api/CtaBackground.png')" }}
      />
      {/* Dark overlay mask */}
      <div className="absolute inset-0 bg-slate-950/65 pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left font-spaceGrotesk">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-slate-101 text-3xl sm:text-4xl font-bold tracking-tight">
            Security, Privacy, and Trust
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
            Precise boundaries, not marketing claims. Enterprise security baked into our streaming core.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-3 hover:border-zinc-700/50 transition-all duration-300 min-h-[150px]"
            >
              <h3 className="text-slate-101 text-base sm:text-lg font-bold">
                {c.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center pt-4">
          <button className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-sm font-bold rounded-[10px] cursor-pointer border-none shadow-md">
            Visit Trust Center
          </button>
        </div>

      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';

export default function PlatformSecureDeliver() {
  const cards = [
    {
      title: 'Identity & Access',
      desc: 'Authenticate viewers with SAML SSO, active directory sync, and one-time access tokens.',
      img: '/images/platform-overview/Rectangle (84).png'
    },
    {
      title: 'Secure Playback',
      desc: 'Prevent stream ripping, unauthorized frame-grabbing, and credential sharing natively.',
      img: '/images/platform-overview/Rectangle (85).png'
    },
    {
      title: 'Adaptive Delivery',
      desc: 'Low-latency global distribution that adjusts smoothly to any local network jitter.',
      img: '/images/platform-overview/Rectangle (86).png'
    },
    {
      title: 'Global Distribution',
      desc: 'Scale streams dynamically across multi-region cloud CDNs without node failure.',
      img: '/images/platform-overview/Rectangle (87).png'
    },
    {
      title: 'Failover Resilience',
      desc: 'Automatic redundant SRT backups that switch live pathways if local venue links drop.',
      img: '/images/platform-overview/Rectangle (88).png'
    },
    {
      title: 'Media Security',
      desc: 'End-to-end payload encryption matching federal standards for classified briefings.',
      img: '/images/platform-overview/Rectangle (89).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900 font-spaceGrotesk">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/platform-overview/bg (47).png')" }}
      />
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />
      <div className="absolute left-[-100px] top-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-slate-105 text-3xl sm:text-4xl font-bold tracking-tight">
            Secure and deliver globally
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed font-spaceGrotesk">
            Enforce corporate SAML Whitelists, passcode gates, and IP-restricted routing rules without sacrificing sub-second media propagation speed.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col overflow-hidden hover:border-teal-400 transition-all duration-300 shadow-md min-h-[300px]"
            >
              {/* Image Box */}
              <div className="relative h-48 w-full bg-slate-950">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Padding */}
              <div className="p-6 flex flex-col justify-start items-start gap-2.5 flex-1 text-left">
                <h3 className="text-slate-101 text-base sm:text-lg font-bold">
                  {c.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed">
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

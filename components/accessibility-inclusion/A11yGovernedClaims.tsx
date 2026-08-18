'use client';

import React from 'react';
import Image from 'next/image';

export default function A11yGovernedClaims() {
  const cards = [
    {
      title: 'Claim Control',
      desc: 'We forbid unsupported compliance, certification, or universal-access claims. We verify each statement strictly.',
      img: '/images/accessibility-inclusion/Rectangle (78).png'
    },
    {
      title: 'Privacy Protection',
      desc: 'No user profiling based on disability or personal medical status. Requests remain strictly minimized.',
      img: '/images/accessibility-inclusion/Rectangle (79).png'
    },
    {
      title: 'Registry Architecture',
      desc: 'Capability, evidence, and limitation registries systematically gate and validate all external public declarations.',
      img: '/images/accessibility-inclusion/Rectangle (80).png'
    },
    {
      title: 'Operational Boundary',
      desc: 'Live-ops support lines remain separate and are never subordinated to commercial sales teams.',
      img: '/images/accessibility-inclusion/Rectangle (81).png'
    }
  ];

  return (
    <section className="relative w-full bg-black/65 py-16 sm:py-24  text-white overflow-hidden border-b border-zinc-900">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-35 "
        style={{ backgroundImage: "url('/images/accessibility-inclusion/bg (29).png')" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-slate-105 text-3xl sm:text-3xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Governed claims. Controlled registries. No marketing shortcuts.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Every public accessibility claim resolves through evidence and legal-claim registries.
          </p>
        </div>

        {/* 2x2 Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="p-6 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col sm:flex-row justify-start items-center gap-5 hover:border-zinc-700/50 transition-colors shadow-md"
            >
              {/* Square image */}
              <div className="relative size-36 shrink-0 rounded-lg overflow-hidden bg-zinc-950">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col justify-start items-start gap-2 text-left">
                <h3 className="text-slate-100 text-base sm:text-lg font-bold font-spaceGrotesk">
                  {c.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed">
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

'use client';

import React from 'react';
import Image from 'next/image';

export default function WorkflowResilience() {
  const cards = [
    {
      title: 'Readiness Checks',
      desc: '10-point local diagnostics mapping ingest packet structures and connectivity jitter limits at the physical broadcast site.',
      badge: { text: 'Passed Test', style: 'bg-teal-500/10 text-teal-400' },
      img: '/images/workflow-overview/CardImage (22).png'
    },
    {
      title: 'Assurance Review',
      desc: 'Independent peer verification loop of Run-of-Show cues, backup video directories, and asset compliance layers beforehand.',
      badge: { text: 'Ready', style: 'bg-teal-500/10 text-teal-400' },
      img: '/images/workflow-overview/CardImage (23).png'
    },
    {
      title: 'Active-Event Support',
      desc: 'Dedicated L1 infrastructure engineers assigned strictly to your live broadcast window. Immediate operations chat active.',
      badge: { text: 'Live Active', style: 'bg-teal-500/10 text-teal-400' },
      img: '/images/workflow-overview/CardImage (24).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-955 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-35"
        style={{ backgroundImage: "url('/images/workflow-overview/bg (41).png')" }}
      />
      {/* black/75 mask */}
      <div className="absolute inset-0 bg-black/75 pointer-events-none z-0" />
      
      <div className="absolute left-[-100px] top-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-teal-555/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-4xl font-spaceGrotesk">
          <h2 className="text-slate-105 text-3xl sm:text-3xl font-bold leading-tight tracking-tight">
            Review dependencies, tests, and support paths
          </h2>
          <p className="text-slate-400 text-base sm:text-xm font-normal leading-relaxed">
            Banish stream anxiety. Our multi-redundant encoding systems actively failover across secondary cellular connections if the venue line drops.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-sm flex flex-col overflow-hidden hover:border-zinc-700/50 transition-all duration-300 shadow-lg"
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
              <div className="p-6 flex flex-col justify-start items-start gap-4 flex-1">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-slate-101 text-base sm:text-lg font-bold font-spaceGrotesk">
                    {c.title}
                  </h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-spaceGrotesk shrink-0 ${c.badge.style}`}>
                    {c.badge.text}
                  </span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-start pt-2">
          <button className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-teal-405 transition-colors text-white text-base font-bold font-spaceGrotesk bg-transparent">
            Explore Event resilience
          </button>
        </div>

      </div>
    </section>
  );
}

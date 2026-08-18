'use client';

import React from 'react';

export default function WeddingAccessOptions() {
  const cards = [
    {
      category: 'LOCKED ACCESS',
      title: 'Private / invite-only',
      desc: 'Personal passcodes generated only for designated guests. Recommended for close family lists.'
    },
    {
      category: 'MAPPED ACCESS',
      title: 'Controlled / credentialed',
      desc: 'Requires visitor approval lists. Perfect for managing specific group authentication rules.'
    },
    {
      category: 'OPEN PIPELINE',
      title: 'Shareable / broader access',
      desc: 'Open links optimized for casual observers, coworkers, and secondary circles to easily tune in.'
    },
    {
      category: 'GUIDED DESIGN',
      title: 'Unsure',
      desc: 'We will walk you through access variables step-by-step during your briefing session.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-65"
        style={{ backgroundImage: "url('/images/wedding-celebration/bg (44).png')" }}
      />
      <div className="absolute right-[100px] top-[200px] w-[500px] h-[400px] bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-5xl">
          <h2 className="text-slate-105 text-3xl sm:text-3xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Audience access designed around your choices
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Control visibility and security parameters so your celebration stays comfortable and private.
          </p>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm flex flex-col justify-start items-start gap-4 hover:border-zinc-700/50 transition-all duration-300 shadow-md"
            >
              <div className="w-full flex justify-between items-center pb-2 border-b border-zinc-800">
                <span className="text-teal-500 text-[10px] font-bold font-mono tracking-wider">
                  {c.category}
                </span>
                <div className="size-2 bg-blue-500 rounded-full" />
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-slate-100 text-base sm:text-lg font-bold font-spaceGrotesk">
                  {c.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
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

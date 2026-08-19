'use client';

import React from 'react';
import { Users2, HardDrive, Eye, ShieldCheck, Languages } from 'lucide-react';

export default function WeddingRemoteGuests() {
  const cards = [
    {
      title: 'Include everyone who matters',
      desc: "Don't let travel restrictions, health concerns, or short notice exclude grandparents, international friends, or key family members.",
      icon: Users2
    },
    {
      title: 'No technical burden',
      desc: 'Our platform and verified venue partners manage the complexity so you can focus entirely on enjoying your celebration.',
      icon: HardDrive
    },
    {
      title: 'Accessible viewing for all',
      desc: 'High-definition streaming, clean captions, and straightforward web player interfaces designed for viewers of all ages.',
      icon: Languages
    },
    {
      title: 'Respectful of privacy',
      desc: 'Decide exactly who watches and who interacts. No public tracking scripts, unwanted ads, or invasive data collection.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-65"
        style={{ backgroundImage: "url('/images/wedding-celebration/bg (33).png')" }}
      />
      <div className="absolute left-[100px] top-[100px] w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-5xl">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Why include remote guests?
          </h2>
          <p className="text-slate-200 text-base sm:text-xm font-normal font-spaceGrotesk leading-relaxed">
            Bridge structural and geographic boundaries without altering the intimate personal texture of your physical space.
          </p>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                className="p-7 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm flex flex-col justify-start items-start gap-5 hover:border-zinc-700/50 transition-all duration-300 shadow-md"
              >
                {/* Gradient Icon Container */}
                <div className="size-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl flex justify-center items-center shrink-0">
                  <Icon className="size-5 text-slate-950 stroke-[1.8]" />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <h3 className="text-slate-100 text-base font-bold font-spaceGrotesk leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
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

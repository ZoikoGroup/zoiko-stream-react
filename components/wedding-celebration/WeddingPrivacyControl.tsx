'use client';

import React from 'react';
import { ShieldCheck, Database, KeyRound, EyeOff } from 'lucide-react';

export default function WeddingPrivacyControl() {
  const cards = [
    {
      title: 'Data minimization',
      desc: 'We strictly collect only the transmission data needed to pipe your stream safely. Your guest lists and invitations are never sold, compiled, or monetized.',
      icon: Database
    },
    {
      title: 'Access boundaries',
      desc: 'Delineate clearly who belongs on guest viewer lists. Our SAML SSO or simplified family passcode keys shield streams from public observers.',
      icon: KeyRound
    },
    {
      title: 'Guest identity protection',
      desc: 'No invasive third-party ad tracking, pixel cookies, or platform signup barriers forced onto your virtual attendees during the stream.',
      icon: EyeOff
    },
    {
      title: 'Recording consent',
      desc: 'Retain complete sovereignty over who can capture, download, or distribute archives. Safeguard your family archive securely.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Privacy &amp; participant control
          </h2>
          <p className="text-slate-655 dark:text-zinc-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Data minimization, access boundaries, and guest identity protection built into every step.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-start items-start gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                {/* Circular Icon Container */}
                <div className="size-9 bg-blue-500/10 dark:bg-blue-505/20 rounded-lg flex justify-center items-center shrink-0">
                  <Icon className="size-4 text-blue-500 dark:text-blue-400 stroke-[1.8]" />
                </div>
                
                <div className="flex flex-col gap-2 w-full text-left">
                  <h3 className="text-zinc-955 dark:text-white text-lg font-bold font-spaceGrotesk leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed">
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

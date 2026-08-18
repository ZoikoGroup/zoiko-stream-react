'use client';

import React from 'react';
import Image from 'next/image';

export default function A11yLimitations() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Known limitations stay visible. Alternatives stay planned.
          </h2>
          <p className="text-gray-605 dark:text-zinc-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Incomplete states are shown with impact, workaround, owner, and review date — never hidden for polish.
          </p>
        </div>

        {/* 2 Column cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          
          {/* Card 1: Known Limitation Card */}
          <div className="bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-805/80 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-start items-start">
            <div className="relative h-60 w-full bg-slate-200 dark:bg-zinc-950">
              <Image 
                src="/images/accessibility-inclusion/Rectangle (72).png" 
                alt="Known Limitation Visual Proof"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6 sm:p-7 flex flex-col justify-start items-start gap-5 w-full">
              <div className="flex justify-between items-center w-full">
                <h3 className="text-zinc-955 dark:text-white text-lg sm:text-xl font-bold font-spaceGrotesk">
                  Known Limitation Card
                </h3>
                <span className="px-2.5 py-0.5 bg-red-500/10 text-red-500 rounded-sm outline outline-1 outline-red-550/20 text-xs font-bold font-spaceGrotesk uppercase tracking-wider shrink-0 select-none">
                  FLAGGED
                </span>
              </div>

              <div className="flex flex-col gap-3 w-full border-t border-gray-200/50 dark:border-zinc-800/80 pt-4 text-xs sm:text-sm font-spaceGrotesk">
                <div className="flex justify-start items-start gap-4">
                  <span className="w-36 text-gray-600 dark:text-zinc-400 font-bold">Impact:</span>
                  <span className="flex-1 text-zinc-955 dark:text-slate-100 font-normal">High-latency rendering on local braille streams</span>
                </div>
                <div className="flex justify-start items-start gap-4">
                  <span className="w-36 text-gray-600 dark:text-zinc-400 font-bold">Affected users:</span>
                  <span className="flex-1 text-zinc-955 dark:text-slate-100 font-normal">Tactile terminal output audience</span>
                </div>
                <div className="flex justify-start items-start gap-4">
                  <span className="w-36 text-gray-600 dark:text-zinc-400 font-bold">Workaround/Alt:</span>
                  <span className="flex-1 text-blue-750 dark:text-blue-400 font-medium underline cursor-pointer">Deploy dedicated SRT-TXT fallback pathway</span>
                </div>
                <div className="flex justify-start items-start gap-4">
                  <span className="w-36 text-gray-600 dark:text-zinc-400 font-bold">Owner:</span>
                  <span className="flex-1 text-zinc-955 dark:text-slate-100 font-normal">Alex T. (Inclusion Desk)</span>
                </div>
                <div className="flex justify-start items-start gap-4">
                  <span className="w-36 text-gray-600 dark:text-zinc-400 font-bold">Last review date:</span>
                  <span className="flex-1 text-zinc-955 dark:text-slate-100 font-normal">March 12, 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Alternative Access Path */}
          <div className="bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-805/80 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-start items-start">
            <div className="relative h-60 w-full bg-slate-200 dark:bg-zinc-950">
              <Image 
                src="/images/accessibility-inclusion/Rectangle (73).png" 
                alt="Alternative Access Path Visual Proof"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6 sm:p-7 flex flex-col justify-start items-start gap-5 w-full">
              <div className="flex justify-between items-center w-full">
                <h3 className="text-zinc-955 dark:text-white text-lg sm:text-xl font-bold font-spaceGrotesk">
                  Alternative Access Path
                </h3>
                <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-500 rounded-sm outline outline-1 outline-emerald-550/20 text-xs font-bold font-spaceGrotesk uppercase tracking-wider shrink-0 select-none">
                  STANDBY
                </span>
              </div>

              <div className="flex flex-col gap-3 w-full border-t border-gray-200/50 dark:border-zinc-800/80 pt-4 text-xs sm:text-sm font-spaceGrotesk">
                <div className="flex justify-start items-start gap-4">
                  <span className="w-36 text-gray-600 dark:text-zinc-400 font-bold">Purpose:</span>
                  <span className="flex-1 text-zinc-955 dark:text-slate-100 font-normal">Fallback live translation when auto-audio fails</span>
                </div>
                <div className="flex justify-start items-start gap-4">
                  <span className="w-36 text-gray-600 dark:text-zinc-400 font-bold">Eligibility:</span>
                  <span className="flex-1 text-zinc-955 dark:text-slate-100 font-normal">All multi-lingual and non-hearing accounts</span>
                </div>
                <div className="flex justify-start items-start gap-4">
                  <span className="w-36 text-gray-600 dark:text-zinc-400 font-bold">Instructions:</span>
                  <span className="flex-1 text-zinc-955 dark:text-slate-100 font-normal">Toggle &apos;AUX V3 Player&apos; in audio panel configuration</span>
                </div>
                <div className="flex justify-start items-start gap-4">
                  <span className="w-36 text-gray-600 dark:text-zinc-400 font-bold">Owner:</span>
                  <span className="flex-1 text-zinc-955 dark:text-slate-100 font-normal">Sarah K. (Operations Center)</span>
                </div>
                <div className="flex justify-start items-start gap-4">
                  <span className="w-36 text-gray-600 dark:text-zinc-400 font-bold">Status:</span>
                  <span className="flex-1 text-emerald-600 dark:text-emerald-400 font-bold">Verified and Operational</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

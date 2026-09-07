'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070b14] text-white pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 border-b border-slate-800/60">
      {/* Innovation Summit Auditorium Background */}
      <div
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/live-events-planning-guide/bg1.png')`,
        }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay for text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/85 to-[#070b14]/70 pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/40 bg-blue-950/50 backdrop-blur-sm mb-7">
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-blue-300 uppercase">
                LIVE EVENTS PLANNING GUIDE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08] mb-6">
              Plan a live event with the decisions clear before the day matters
            </h1>

            {/* Subtext */}
            <p className="text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              This guide helps event teams define audience, timing, production, contribution, access, accessibility, resilience, recording, roles, rehearsal, and open questions before specialist planning begins.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/plan-a-live-event"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#27c3a7] hover:bg-[#22b298] text-[#06181f] font-semibold text-sm transition-all duration-150 shadow-[0_4px_16px_rgba(39,195,167,0.25)] hover:shadow-[0_6px_22px_rgba(39,195,167,0.35)]"
              >
                Start Planning
              </Link>
              <Link
                href="/plan-a-live-event"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0e1422] hover:bg-slate-800/80 text-white font-semibold text-sm border border-slate-300/80 transition-all duration-150 shadow-sm"
              >
                Plan a Live Event
              </Link>
            </div>
          </div>

          {/* Right Column: Run-Of-Show Board Widget */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#0c1322]/90 backdrop-blur-xl border border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-5 sm:p-6 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase">
                  RUN-OF-SHOW BOARD
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    READY
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {/* Item 1 */}
                <div className="bg-[#070c18] border border-slate-800/80 rounded-xl p-3.5 flex items-center">
                  <span className="font-mono text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded shrink-0">
                    00:00
                  </span>
                  <span className="text-xs sm:text-[13px] text-slate-300 font-medium ml-3">
                    Pre-Show Loop &amp; Audio check
                  </span>
                </div>

                {/* Item 2 */}
                <div className="bg-[#070c18] border border-slate-800/80 rounded-xl p-3.5 flex items-center">
                  <span className="font-mono text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded shrink-0">
                    00:10
                  </span>
                  <span className="text-xs sm:text-[13px] text-slate-300 font-medium ml-3">
                    Keynote Address (RTMP Primary Ingest)
                  </span>
                </div>

                {/* Item 3 */}
                <div className="bg-[#070c18] border border-slate-800/80 rounded-xl p-3.5 flex items-center">
                  <span className="font-mono text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded shrink-0">
                    00:35
                  </span>
                  <span className="text-xs sm:text-[13px] text-slate-300 font-medium ml-3">
                    Remote Q&amp;A Session (WebRTC Mesh Ingest)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

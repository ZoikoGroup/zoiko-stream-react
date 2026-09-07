'use client';

import React from 'react';
import Link from 'next/link';

export default function GuideCtaSection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-20 lg:py-28 overflow-hidden">
      {/* Innovation Summit Auditorium Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/live-events-planning-guide/bg1.png')`,
        }}
        aria-hidden="true"
      />

      {/* Subtle background glow overlay */}
      <div
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight mb-4">
          Your planning decisions, ready for the next step
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-9">
          You&apos;ve defined your event, designed the workflow, protected your audience, and rehearsed the critical paths. When you&apos;re ready for specialist engagement, your planning summary transfers with full transparency.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/plan-a-live-event"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#27c3a7] hover:bg-[#22b298] text-[#06181f] font-semibold text-sm transition-all duration-150 shadow-[0_4px_16px_rgba(39,195,167,0.25)] hover:shadow-[0_6px_22px_rgba(39,195,167,0.35)]"
          >
            Plan a Live Event
          </Link>
          <Link
            href="/resources-live-events-planning-guide"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0e1422] hover:bg-slate-800/80 text-white font-semibold text-sm border border-slate-300/80 transition-all duration-150 shadow-sm"
          >
            Continue Self-Service Planning
          </Link>
        </div>
      </div>
    </section>
  );
}

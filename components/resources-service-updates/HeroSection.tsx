'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070b14] text-white pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 border-b border-slate-800/60">
      {/* Operations Command Center Control Room Background */}
      <div
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/service-updates/su-bg1.png')`,
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
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-500/40 bg-teal-950/50 backdrop-blur-sm mb-7">
              <span className="text-[11px] font-mono font-semibold tracking-wider text-teal-300 uppercase">
                SERVICE UPDATES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08] mb-6">
              Planned service changes, clearly communicated
            </h1>

            {/* Subtext */}
            <p className="text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              See approved maintenance windows and operational changes, including timing, affected scope, expected impact, reschedules, cancellations, and completion updates.
            </p>

            {/* Search Input Bar */}
            <div className="w-full max-w-xl mb-7">
              <div className="relative flex items-center bg-[#0c1322]/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-1.5 shadow-lg">
                <Search className="w-4 h-4 text-slate-400 ml-3 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search by title, notice ID, or service scope..."
                  className="w-full bg-transparent text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none py-1.5"
                />
                <button
                  type="button"
                  className="bg-[#1e293b] hover:bg-slate-700 text-white font-medium text-xs px-4 py-2 rounded-lg transition-colors shrink-0"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Link
                href="#upcoming-maintenance"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#27c3a7] hover:bg-[#22b298] text-[#06181f] font-semibold text-sm transition-all duration-150 shadow-[0_4px_16px_rgba(39,195,167,0.25)] hover:shadow-[0_6px_22px_rgba(39,195,167,0.35)]"
              >
                View Upcoming Updates
              </Link>
              <Link
                href="/subscribe-to-updates"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0e1422] hover:bg-slate-800/80 text-white font-semibold text-sm border border-slate-300/80 transition-all duration-150 shadow-sm"
              >
                Subscribe to Service Updates
              </Link>
            </div>

            {/* Helper Text */}
            <p className="text-xs text-slate-400">
              For current incidents and live availability, use{' '}
              <Link
                href="/zoikostream-status"
                className="text-teal-400 underline underline-offset-4 hover:text-teal-300 transition-colors font-medium"
              >
                System status
              </Link>
              .
            </p>
          </div>

          {/* Right Column: Live Operations Monitoring Widget */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#0c1322]/90 backdrop-blur-xl border border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-5 sm:p-6 overflow-hidden">
              {/* Photo Banner */}
              <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-4 bg-slate-900">
                <Image
                  src="/images/service-updates/su1.png"
                  alt="Live Operations Monitoring"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Card Label & Content */}
              <span className="font-mono text-[10px] font-bold text-teal-400 tracking-wider uppercase mb-1.5 block">
                LIVE OPERATIONS MONITORING
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Operational compliance logs are cryptographically anchored and globally distributed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

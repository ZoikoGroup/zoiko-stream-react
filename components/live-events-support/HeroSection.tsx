import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#040813] text-white overflow-hidden py-16 lg:py-24">
      {/* Background with Cyber / Circuit Lines Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/Live Events Support Page/les-bg-1.png"
          alt="Live Events Support Background"
          fill
          priority
          className="object-cover object-center opacity-75"
        />
        {/* Subtle Dark Overlays for smooth depth & contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040813]/60 via-[#040813]/25 to-[#040813]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#040813_80%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Information & Controls */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/40 bg-[#022b3a]/70 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-teal-300 uppercase font-mono">
                LIVE EVENTS SUPPORT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.12] mb-6">
              Get the right help for <br className="hidden sm:inline" />
              your Live Event.
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-300 text-base sm:text-[17px] leading-relaxed max-w-xl mb-8 font-inter">
              Tell us where you are in the event lifecycle and what is affected.
              ZoikoStream routes you to the correct support path and asks only for the
              context needed to continue.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <button
                type="button"
                className="bg-[#00c2ff] hover:bg-[#00aff0] active:scale-[0.98] text-[#04111d] font-semibold text-sm sm:text-base px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-[0_0_16px_rgba(0,194,255,0.4)] cursor-pointer"
              >
                Choose Event Phase
              </button>

              <button
                type="button"
                className="bg-[#09111e]/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 text-slate-100 font-medium text-sm sm:text-base px-5 py-3 rounded-lg transition-all duration-200 cursor-pointer"
              >
                View System Status
              </button>

              <button
                type="button"
                className="bg-[#09111e]/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 text-slate-100 font-medium text-sm sm:text-base px-5 py-3 rounded-lg transition-all duration-200 cursor-pointer"
              >
                Planning Guide
              </button>
            </div>

            {/* Security Notice Box */}
            <div className="w-full max-w-xl rounded-xl border border-slate-800/90 bg-[#060c18]/60 backdrop-blur-md px-4 py-3.5 sm:px-5 sm:py-3.5 shadow-lg">
              <p className="text-xs sm:text-[13px] leading-relaxed">
                <span className="text-[#f59e0b] font-semibold">Security Notice: </span>
                <span className="text-slate-400">
                  Do not paste passwords, API secrets, stream keys, access tokens, private keys, attendee lists, or unreleased media.
                </span>
              </p>
            </div>
          </div>

          {/* Right Column: Live Operations Hub Monitor Card */}
          <div className="lg:col-span-6 xl:col-span-5 w-full">
            <div className="relative rounded-2xl border border-slate-800/90 bg-[#080f1d]/90 backdrop-blur-md p-4 sm:p-5 shadow-2xl shadow-cyan-950/30">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800/70">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_6px_#10b981]" />
                  <span className="font-mono text-[11px] sm:text-xs font-bold tracking-wider text-slate-200 uppercase">
                    ZOIKOSTREAM SUPPORT CONTROL
                  </span>
                </div>
                <div className="font-mono text-[10px] sm:text-[11px] font-medium tracking-wider text-slate-400 uppercase">
                  SYS TEMP: NOMINAL
                </div>
              </div>

              {/* Operations Hub Image */}
              <div className="relative w-full aspect-[16/10] my-3.5 rounded-xl overflow-hidden border border-slate-800/60 bg-[#030712]">
                <Image
                  src="/images/Live Events Support Page/les1.png"
                  alt="Live Event Operations Hub"
                  fill
                  priority
                  className="object-contain p-1"
                />
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-3.5 border-t border-slate-800/70">
                <span className="text-slate-300 font-medium text-xs sm:text-sm">
                  L1 On-Call Response Time
                </span>
                <span className="text-[#00e599] font-mono font-semibold text-xs sm:text-sm tracking-wide">
                  &lt; 3 Minutes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

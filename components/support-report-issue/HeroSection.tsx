import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#040813] text-white py-16 lg:py-24 overflow-hidden">
      {/* Hexagonal Honeycomb Matrix Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/Report Issue Page/sri1.png"
          alt="Report issue matrix backdrop"
          fill
          priority
          className="object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040813]/70 via-[#040813]/35 to-[#040813]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle, Buttons, Notice */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/40 bg-[#022b3a]/70 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-teal-300 uppercase font-mono">
                REPORT AN ISSUE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.12] mb-6">
              Tell us what is not <br className="hidden sm:inline" />
              working as expected.
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-300 text-base sm:text-[17px] leading-relaxed max-w-xl mb-8 font-inter">
              Report a product, website, content, reliability, or quality problem. We will
              use the details you provide to route the report to the appropriate team or support path.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <button
                type="button"
                className="bg-[#00c2ff] hover:bg-[#00aff0] active:scale-[0.98] text-[#04111d] font-semibold text-sm sm:text-base px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-[0_0_16px_rgba(0,194,255,0.4)] cursor-pointer"
              >
                Report an Issue
              </button>

              <button
                type="button"
                className="bg-[#09111e]/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 text-slate-100 font-medium text-sm sm:text-base px-5 py-3 rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5"
              >
                <span>Check System Status</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Important Notice Box */}
            <div className="w-full max-w-xl rounded-xl border border-slate-800/90 bg-[#060c18]/60 backdrop-blur-md px-4 py-3.5 sm:px-5 sm:py-3.5 shadow-lg">
              <p className="text-xs sm:text-[13px] leading-relaxed font-inter">
                <span className="text-[#f59e0b] font-semibold">Important Notice: </span>
                <span className="text-slate-400">
                  Do not include passwords, access tokens, private keys, stream keys,
                  payment card data, or unnecessary personal/confidential information in your reports.
                </span>
              </p>
            </div>
          </div>

          {/* Right Column: Live Diagnostics Board Card */}
          <div className="lg:col-span-5 xl:col-span-5 w-full">
            <div className="relative rounded-2xl border border-slate-800/90 bg-[#080f1d]/90 backdrop-blur-md p-6 sm:p-7 shadow-2xl shadow-cyan-950/30">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/70">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_6px_#f59e0b]" />
                  <span className="font-mono text-[11px] sm:text-xs font-bold tracking-wider text-slate-200 uppercase">
                    LIVE DIAGNOSTICS BOARD
                  </span>
                </div>
                <div className="font-mono text-[10px] sm:text-[11px] font-medium tracking-wider text-slate-400 uppercase">
                  HEURISTIC FEED
                </div>
              </div>

              {/* Integrity Exception Banner Box */}
              <div className="rounded-xl border border-orange-500/40 bg-[#160c08]/85 p-4 sm:p-5 my-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] sm:text-xs font-bold text-white tracking-wider uppercase">
                    ACTIVE INTEGRITY EXCEPTION DETECTED
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs font-bold text-orange-400 uppercase">
                    WARN_03
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 rounded-full mb-3.5 shadow-[0_0_8px_rgba(249,115,22,0.5)]" />

                <p className="text-slate-300 text-xs leading-relaxed font-inter">
                  Auto-tuning failover thresholds. Routing path re-allocation required for L1 compliance.
                </p>
              </div>

              {/* Protocol & Latency Diagnostic Rows */}
              <div className="space-y-3">
                <div className="rounded-lg border border-slate-800/80 bg-[#050b14]/85 px-4 py-3 flex items-center justify-between">
                  <span className="text-slate-400 text-xs font-medium font-inter">
                    Ingest Protocol
                  </span>
                  <span className="text-white text-xs font-mono font-semibold">
                    SRT - Secure Reliable Transport
                  </span>
                </div>

                <div className="rounded-lg border border-slate-800/80 bg-[#050b14]/85 px-4 py-3 flex items-center justify-between">
                  <span className="text-slate-400 text-xs font-medium font-inter">
                    Estimated Loss
                  </span>
                  <span className="text-red-400 text-xs font-mono font-semibold">
                    12.4% Jitter / Packet Drop
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

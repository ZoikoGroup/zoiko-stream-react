'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function ProvideCaseContextSection() {
  const [frequency, setFrequency] = useState(
    'Intermittent (occurs during specific peak traffic blocks)'
  );

  return (
    <section className="relative w-full bg-[#040813] text-white py-16 lg:py-24 overflow-hidden">
      {/* Background Matrix & Tech HUD Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/Live Events Support Page/les-bg-4.png"
          alt="Case context diagnostics backdrop"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040813]/80 via-[#040813]/35 to-[#040813]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight mb-2.5">
            Provide context for your support case.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-inter">
            Every field is there because it changes how your case is routed, prioritized, or resolved.
          </p>
        </div>

        {/* 2-Column Responsive Form Layout */}
        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-4.5">
            {/* Subject line */}
            <div>
              <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                Subject line
              </label>
              <input
                type="text"
                placeholder="e.g., SRT Ingestion Jitter Spike on US-East-1 Entry Node"
                className="w-full bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* What happened? */}
            <div>
              <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                What happened?
              </label>
              <textarea
                rows={4}
                placeholder="Provide a detailed description of the observed symptom, frequency, and active stream impacts."
                className="w-full bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
            </div>

            {/* Steps to reproduce */}
            <div>
              <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                Steps to reproduce
              </label>
              <textarea
                rows={4}
                suppressHydrationWarning
                defaultValue={`1. Configure SRT encoder to US-East stream target\n2. Initiate active broadcast with 1080p stream parameters`}
                className="w-full bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none font-mono text-xs sm:text-[13px]"
              />
            </div>

            {/* Expected behavior */}
            <div>
              <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                Expected behavior
              </label>
              <input
                type="text"
                placeholder="Describe the expected system and output behavior under healthy conditions."
                className="w-full bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4.5">
            {/* Environment details */}
            <div>
              <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                Environment details
              </label>
              <input
                type="text"
                placeholder="e.g., Browser: Chrome 122, OS: macOS Sonoma, SDK: v4.8.2-live"
                className="w-full bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Event configuration */}
            <div>
              <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                Event configuration
              </label>
              <input
                type="text"
                placeholder="e.g., Public Broadcast, US-West region ingest, active SAML gating"
                className="w-full bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Frequency of occurrence */}
            <div>
              <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                Frequency of occurrence
              </label>
              <div className="relative">
                <select
                  aria-label="Frequency of occurrence"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full appearance-none bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer"
                >
                  <option value="Intermittent (occurs during specific peak traffic blocks)" className="bg-[#050b14] text-slate-200">
                    Intermittent (occurs during specific peak traffic blocks)
                  </option>
                  <option value="Continuous / Constant throughout event" className="bg-[#050b14] text-slate-200">
                    Continuous / Constant throughout event
                  </option>
                  <option value="Single occurrence / Transient spike" className="bg-[#050b14] text-slate-200">
                    Single occurrence / Transient spike
                  </option>
                  <option value="Reproducible on demand" className="bg-[#050b14] text-slate-200">
                    Reproducible on demand
                  </option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Business impact summary */}
            <div>
              <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                Business impact summary
              </label>
              <input
                type="text"
                placeholder="e.g., Fails active preflight checks, potential 1200+ VIP attendee block"
                className="w-full bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                type="submit"
                className="bg-[#00c2ff] hover:bg-[#00aff0] active:scale-[0.98] text-[#04111d] font-semibold text-sm sm:text-base px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-[0_0_16px_rgba(0,194,255,0.4)] cursor-pointer"
              >
                Continue to attachments
              </button>

              <button
                type="button"
                className="bg-[#09111e]/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 text-slate-100 font-medium text-sm sm:text-base px-6 py-3 rounded-lg transition-all duration-200 cursor-pointer"
              >
                Save Draft
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

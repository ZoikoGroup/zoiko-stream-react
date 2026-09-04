'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function ReportImpactFactsSection() {
  const [reproducibility, setReproducibility] = useState('Always / Intermittent');
  const [workaroundAvailable, setWorkaroundAvailable] = useState('No');

  return (
    <section className="relative w-full bg-[#040813] text-white py-16 lg:py-24 overflow-hidden">
      {/* Background Matrix & Network Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/Live Events Support Page/les-bg-4.png"
          alt="Impact evaluation matrix background"
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
            Report impact facts. Not contractual severity.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-inter">
            User-reported impact is triage evidence for routing. It is not a contract, SLA, severity assignment, or promise of response.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Triage Severity Evaluation Form */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="bg-[#080f1d]/90 rounded-2xl border border-slate-800/90 p-6 sm:p-7 backdrop-blur-md shadow-2xl">
              <h3 className="font-sans font-bold text-white text-lg sm:text-xl mb-6">
                Triage Severity Evaluation
              </h3>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4.5">
                {/* Field 1: Affected participants */}
                <div>
                  <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                    Affected participants
                  </label>
                  <div className="relative">
                    <select
                      aria-label="Affected participants"
                      defaultValue=""
                      className="w-full appearance-none bg-[#050b14] border border-slate-800 rounded-lg px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-500">
                        Select quantity scale (e.g. 50-100 attendees)
                      </option>
                      <option value="1-10" className="bg-[#050b14] text-slate-200">
                        1 - 10 attendees
                      </option>
                      <option value="50-100" className="bg-[#050b14] text-slate-200">
                        50 - 100 attendees
                      </option>
                      <option value="500-1000" className="bg-[#050b14] text-slate-200">
                        500 - 1,000 attendees
                      </option>
                      <option value="10000+" className="bg-[#050b14] text-slate-200">
                        10,000+ full audience
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Field 2: Business/event effect */}
                <div>
                  <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                    Business/event effect
                  </label>
                  <div className="relative">
                    <select
                      aria-label="Business/event effect"
                      defaultValue=""
                      className="w-full appearance-none bg-[#050b14] border border-slate-800 rounded-lg px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-500">
                        Choose descriptive business impact...
                      </option>
                      <option value="critical-blackout" className="bg-[#050b14] text-slate-200">
                        Total Broadcast Outage / Audience Blackout
                      </option>
                      <option value="degraded-quality" className="bg-[#050b14] text-slate-200">
                        Degraded Audio/Video Quality & Buffering
                      </option>
                      <option value="interactive-failure" className="bg-[#050b14] text-slate-200">
                        Interactive & Moderation Feature Failure
                      </option>
                      <option value="operational-inconvenience" className="bg-[#050b14] text-slate-200">
                        Pre-Broadcast Configuration Blockage
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Field 3: Event timing */}
                <div>
                  <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                    Event timing
                  </label>
                  <input
                    type="text"
                    placeholder="HH:MM PM (Target timezone)"
                    className="w-full bg-[#050b14] border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Field 4: Reproducibility & Workaround available? */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                      Reproducibility
                    </label>
                    <div className="relative">
                      <select
                        aria-label="Reproducibility"
                        value={reproducibility}
                        onChange={(e) => setReproducibility(e.target.value)}
                        className="w-full appearance-none bg-[#050b14] border border-slate-800 rounded-lg px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer"
                      >
                        <option value="Always / Intermittent" className="bg-[#050b14] text-slate-200">
                          Always / Intermittent
                        </option>
                        <option value="Constant / Always" className="bg-[#050b14] text-slate-200">
                          Constant / Always
                        </option>
                        <option value="Intermittent" className="bg-[#050b14] text-slate-200">
                          Intermittent
                        </option>
                        <option value="Once Only" className="bg-[#050b14] text-slate-200">
                          Once Only
                        </option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                      Workaround available?
                    </label>
                    <div className="relative">
                      <select
                        aria-label="Workaround available?"
                        value={workaroundAvailable}
                        onChange={(e) => setWorkaroundAvailable(e.target.value)}
                        className="w-full appearance-none bg-[#050b14] border border-slate-800 rounded-lg px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer"
                      >
                        <option value="No" className="bg-[#050b14] text-slate-200">
                          No
                        </option>
                        <option value="Yes" className="bg-[#050b14] text-slate-200">
                          Yes
                        </option>
                        <option value="Partial" className="bg-[#050b14] text-slate-200">
                          Partial
                        </option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Field 5: Prior case/incident ID (optional) */}
                <div>
                  <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                    Prior case/incident ID (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. 28-4481-01"
                    className="w-full bg-[#050b14] border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="bg-[#00c2ff] hover:bg-[#00aff0] active:scale-[0.98] text-[#04111d] font-semibold text-sm sm:text-base px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-[0_0_16px_rgba(0,194,255,0.4)] cursor-pointer"
                  >
                    Proceed to Final Submission
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: How impact context is used */}
          <div className="lg:col-span-5 xl:col-span-5 w-full">
            <div className="bg-[#080f1d]/90 rounded-2xl border border-slate-800/90 p-6 sm:p-7 backdrop-blur-md shadow-2xl">
              <h3 className="font-sans font-bold text-white text-lg sm:text-xl mb-5">
                How impact context is used
              </h3>

              <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed mb-4 font-inter">
                Our systems analyze current telemetry metrics in tandem with your reported impact facts. This data acts as primary triage evidence.
              </p>

              <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed mb-6 font-inter">
                By establishing clear, objective parameters up front, we ensure your ticket lands directly with engineers who hold domain authority for the affected service layer.
              </p>

              {/* SLA Notice Box */}
              <div className="w-full rounded-xl border border-slate-800 bg-[#050c18]/80 px-4 py-3 flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                <span className="text-teal-400 font-mono text-xs font-medium">
                  Contractual SLAs are evaluated independently.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

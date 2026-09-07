'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function UrgentIncidentDispatchSection() {
  const [affectedScope, setAffectedScope] = useState('Broad Audience');
  const [isStillHappening, setIsStillHappening] = useState('Yes');
  const [workaroundAvailable, setWorkaroundAvailable] = useState(true);

  return (
    <section className="relative w-full bg-[#040813] text-white py-16 lg:py-24 overflow-hidden">
      {/* Background with panoramic control room screens */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/Live Events Support Page/les-bg-3.png"
          alt="Operations control room screens"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        {/* Subtle Dark Overlays for smooth depth & text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040813]/80 via-[#040813]/35 to-[#040813]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight mb-2.5">
            Event is live now. What is affected?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-inter">
            When your event is active, we compress the support path. Fewer steps, calmer interface, faster routing.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Urgent Incident Dispatch Form */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="bg-[#080f1d]/90 rounded-2xl border border-slate-800/90 p-6 sm:p-7 backdrop-blur-md shadow-2xl">
              <h3 className="font-sans font-bold text-white text-lg sm:text-xl mb-6">
                Urgent Incident Dispatch
              </h3>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                {/* Field 1: What is affected? */}
                <div>
                  <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                    What is affected?
                  </label>
                  <div className="relative">
                    <select
                      aria-label="What is affected?"
                      defaultValue=""
                      className="w-full appearance-none bg-[#050b14] border border-slate-800 rounded-lg px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-500">
                        Select service category...
                      </option>
                      <option value="ingest" className="bg-[#050b14] text-slate-200">
                        RTMP / SRT Ingest Pipeline
                      </option>
                      <option value="playback" className="bg-[#050b14] text-slate-200">
                        Audience Playback Stream
                      </option>
                      <option value="transcoding" className="bg-[#050b14] text-slate-200">
                        Live Transcoding & ABR
                      </option>
                      <option value="access" className="bg-[#050b14] text-slate-200">
                        Access Control & Authentication
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Field 2: Observed symptom */}
                <div>
                  <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                    Observed symptom
                  </label>
                  <input
                    type="text"
                    placeholder="E.g., Ingest signal stuttering, frame drops..."
                    className="w-full bg-[#050b14] border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Field 3: Who is affected? */}
                <div>
                  <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                    Who is affected?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {['One Contributor', 'Some Viewers', 'Broad Audience', 'Unknown'].map((scope) => {
                      const isSelected = affectedScope === scope;
                      return (
                        <button
                          key={scope}
                          type="button"
                          onClick={() => setAffectedScope(scope)}
                          className={`rounded-lg px-3 py-2.5 text-xs transition-all flex items-center gap-2 cursor-pointer font-medium ${
                            isSelected
                              ? 'border border-teal-500/70 bg-[#002d38]/70 text-teal-300 shadow-[0_0_10px_rgba(20,184,166,0.15)]'
                              : 'border border-slate-800 bg-[#050b14] text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span
                            className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'border border-teal-400 bg-teal-950'
                                : 'border border-slate-600 bg-transparent'
                            }`}
                          >
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                            )}
                          </span>
                          <span className="truncate">{scope}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Field 4: When did it start? & Is it still happening? */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                      When did it start?
                    </label>
                    <input
                      type="text"
                      placeholder="HH:MM (e.g. 14:15 PST)"
                      className="w-full bg-[#050b14] border border-slate-800 rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-2 font-inter">
                      Is it still happening?
                    </label>
                    <div className="relative">
                      <select
                        aria-label="Is it still happening?"
                        value={isStillHappening}
                        onChange={(e) => setIsStillHappening(e.target.value)}
                        className="w-full appearance-none bg-[#050b14] border border-slate-800 rounded-lg px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer"
                      >
                        <option value="Yes" className="bg-[#050b14] text-slate-200">
                          Yes
                        </option>
                        <option value="Intermittent" className="bg-[#050b14] text-slate-200">
                          Intermittent
                        </option>
                        <option value="Resolved" className="bg-[#050b14] text-slate-200">
                          Resolved
                        </option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Field 5: Workaround available toggle */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-300 text-xs sm:text-[13px] font-medium font-inter">
                    Workaround available? (e.g. local redundant encoder activated)
                  </span>
                  <button
                    type="button"
                    aria-label="Toggle workaround availability"
                    onClick={() => setWorkaroundAvailable(!workaroundAvailable)}
                    className={`w-11 h-6 rounded-full transition-colors duration-200 relative p-0.5 cursor-pointer shrink-0 ${
                      workaroundAvailable ? 'bg-teal-500' : 'bg-slate-700'
                    }`}
                  >
                    <span
                      className={`block w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
                        workaroundAvailable ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#00c2ff] hover:bg-[#00aff0] active:scale-[0.98] text-[#04111d] font-semibold text-sm sm:text-base px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-[0_0_16px_rgba(0,194,255,0.4)] cursor-pointer"
                  >
                    Dispatch L1 Support Engineers
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: System Status Check */}
          <div className="lg:col-span-5 xl:col-span-5 w-full">
            <div className="bg-[#080f1d]/90 rounded-2xl border border-slate-800/90 p-6 sm:p-7 backdrop-blur-md shadow-2xl">
              <h3 className="font-sans font-bold text-white text-lg sm:text-xl mb-5">
                System Status Check
              </h3>

              {/* Status Badge */}
              <div className="w-full rounded-xl border border-teal-500/40 bg-[#01252f]/70 px-4 py-3 flex items-center gap-2.5 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
                <span className="font-mono text-xs sm:text-[13px] font-semibold tracking-wider text-teal-300 uppercase">
                  All Core Ingest Systems Nominal
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed mb-6 font-inter">
                We are currently monitoring no active global incidents. If you are experiencing a local
                ingestion block, please proceed with the dispatch form on the left.
              </p>

              {/* Metric Row */}
              <div className="flex items-center justify-between py-3.5 border-y border-slate-800/80 mb-6">
                <span className="text-slate-300 text-xs sm:text-sm font-medium">
                  Global Ingest Latency
                </span>
                <span className="text-teal-400 font-mono font-semibold text-xs sm:text-sm tracking-wide">
                  1.2s avg
                </span>
              </div>

              {/* View Detailed Status Button */}
              <button
                type="button"
                className="w-full bg-[#09111e]/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 text-slate-100 font-medium text-xs sm:text-sm py-3 rounded-lg text-center transition-all duration-200 cursor-pointer"
              >
                View Detailed System Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

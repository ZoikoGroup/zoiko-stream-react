'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function ReportImpactFactsSection() {
  const [broadScope, setBroadScope] = useState<'single' | 'multiple'>('single');
  const [workaroundAvailable, setWorkaroundAvailable] = useState(true);
  const [isOngoing, setIsOngoing] = useState(true);
  const [selectedObstacle, setSelectedObstacle] = useState('Select event obstacle...');

  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/images/Enterprise Page/se-bg2.png"
          alt="Circuit Grid Background"
          fill
          className="object-cover object-center opacity-35 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Report impact facts, not contractual severity
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            User-reported impact is triage evidence. It is not a contract, SLA, severity assignment, or promise of response.
          </p>
        </div>

        {/* Content Row: Interactive Form Widget + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Impact Parameters Check Card */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#0c1322]/95 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <h3 className="text-base sm:text-lg font-bold text-white mb-6">
                Impact Parameters Check
              </h3>

              <div className="divide-y divide-slate-800/80 space-y-3.5 text-xs sm:text-sm">
                {/* Row 1: What cannot be completed? */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 pb-3">
                  <span className="text-slate-300 font-medium">What cannot be completed?</span>
                  <div className="relative">
                    <select
                      value={selectedObstacle}
                      onChange={(e) => setSelectedObstacle(e.target.value)}
                      className="appearance-none bg-[#131d31] border border-slate-700/80 rounded-lg px-3 py-2 pr-8 text-slate-300 text-xs focus:outline-none focus:border-teal-500 cursor-pointer"
                    >
                      <option>Select event obstacle...</option>
                      <option>Live stream ingest failure</option>
                      <option>VOD transcode queue stall</option>
                      <option>Playback authorization error</option>
                      <option>Webhook delivery drop</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Row 2: How broad is the impact? */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 pb-3">
                  <span className="text-slate-300 font-medium">How broad is the impact?</span>
                  <div className="inline-flex rounded-lg bg-[#131d31] p-0.5 border border-slate-700/80">
                    <button
                      type="button"
                      onClick={() => setBroadScope('single')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                        broadScope === 'single'
                          ? 'bg-[#1b3b3a] text-teal-300 border border-teal-500/40 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Single Org
                    </button>
                    <button
                      type="button"
                      onClick={() => setBroadScope('multiple')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                        broadScope === 'multiple'
                          ? 'bg-[#1b3b3a] text-teal-300 border border-teal-500/40 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Multiple
                    </button>
                  </div>
                </div>

                {/* Row 3: Is a workaround available? */}
                <div className="flex items-center justify-between gap-2 pt-3 pb-3">
                  <span className="text-slate-300 font-medium">Is a workaround available?</span>
                  <button
                    type="button"
                    onClick={() => setWorkaroundAvailable(!workaroundAvailable)}
                    className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-0.5 ${
                      workaroundAvailable ? 'bg-teal-400' : 'bg-slate-700'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                        workaroundAvailable ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Row 4: When did it start? */}
                <div className="flex items-center justify-between gap-2 pt-3 pb-3">
                  <span className="text-slate-300 font-medium">When did it start?</span>
                  <span className="font-mono text-xs text-slate-300">
                    2026-03-20 14:02 UTC
                  </span>
                </div>

                {/* Row 5: Is it ongoing? */}
                <div className="flex items-center justify-between gap-2 pt-3">
                  <span className="text-slate-300 font-medium">Is it ongoing?</span>
                  <div className="flex items-center gap-4 text-xs">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="ongoing"
                        checked={isOngoing}
                        onChange={() => setIsOngoing(true)}
                        className="accent-teal-400"
                      />
                      <span className={isOngoing ? 'text-teal-300 font-medium' : 'text-slate-400'}>
                        Yes
                      </span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="ongoing"
                        checked={!isOngoing}
                        onChange={() => setIsOngoing(false)}
                        className="accent-teal-400"
                      />
                      <span className={!isOngoing ? 'text-teal-300 font-medium' : 'text-slate-400'}>
                        No
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 leading-snug">
              Empower our engineers with objective facts
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We focus on objective constraints rather than subjective panic. By describing the exact functional blockages and workaround scopes up front, we can isolate infrastructure faults with absolute speed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

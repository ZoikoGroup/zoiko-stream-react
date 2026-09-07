'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function MinimumContextSection() {
  const [description, setDescription] = useState('');

  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/images/Enterprise Page/se-bg3.png"
          alt="Circuit Grid Background"
          fill
          className="object-cover object-center opacity-35 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.1] mb-4">
              Minimum context. Maximum clarity.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Structured fields before free text. Safe identifiers over raw data. Every field has a purpose.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
              Precision triaging for critical situations
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Our structured intake form minimizes initial processing delays. By populating precise metadata before describing symptoms, cases route instantly to active support desks without the need for manual sorting.
            </p>
          </div>

          {/* Right Column: Structured Support Request Card */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[#0c1322]/95 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <h3 className="text-sm sm:text-base font-bold text-white mb-6">
                Structured Support Request
              </h3>

              <div className="divide-y divide-slate-800/80 space-y-3.5 text-xs sm:text-sm">
                {/* Organization / Account */}
                <div className="flex items-center justify-between gap-2 pt-1 pb-3">
                  <span className="text-slate-400">Organization / Account</span>
                  <span className="font-mono text-xs text-teal-400 font-semibold tracking-wider">
                    ORG_ID_901_44E (VERIFIED)
                  </span>
                </div>

                {/* Support Intent */}
                <div className="flex items-center justify-between gap-2 pt-3 pb-3">
                  <span className="text-slate-400">Support Intent</span>
                  <span className="text-xs text-slate-300">
                    Live Event Operations
                  </span>
                </div>

                {/* Affected Area */}
                <div className="flex items-center justify-between gap-2 pt-3 pb-3">
                  <span className="text-slate-400">Affected Area</span>
                  <span className="text-xs text-slate-300">
                    Camera Ingest (SRT)
                  </span>
                </div>

                {/* Impact Facts */}
                <div className="flex items-center justify-between gap-2 pt-3 pb-3">
                  <span className="text-slate-400">Impact Facts</span>
                  <span className="text-xs text-slate-300">
                    Signal Jitter &gt; 150ms
                  </span>
                </div>

                {/* What Happened? */}
                <div className="flex flex-col gap-2 pt-3 pb-3">
                  <span className="text-slate-400">What Happened?</span>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe the technical obstacle... (Do not include private tokens)"
                    className="w-full bg-[#131d31] border border-slate-700/80 rounded-lg px-3 py-2.5 text-slate-300 text-xs placeholder:text-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                {/* Safe Identifiers */}
                <div className="flex items-center justify-between gap-2 pt-3 pb-3">
                  <span className="text-slate-400">Safe Identifiers</span>
                  <span className="font-mono text-xs text-slate-400">
                    ZS_ERR_HANDSHAKE_TIMEOUT
                  </span>
                </div>

                {/* Contact Method */}
                <div className="flex items-center justify-between gap-2 pt-3">
                  <span className="text-slate-400">Contact Method</span>
                  <span className="font-mono text-[10px] font-bold text-teal-400 bg-[#162a34] px-2.5 py-1 rounded border border-teal-500/40">
                    L1 Operations Chat
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

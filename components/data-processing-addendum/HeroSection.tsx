'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-slate-900/90 via-violet-900/80 to-teal-400/50 px-6 sm:px-12 lg:px-20 py-12 lg:py-14 text-white">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-3.5">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
          <span className="text-[#40C4AA] text-xs font-mono uppercase tracking-wide font-normal">
            DATA PROCESSING ADDENDUM
          </span>
        </div>

        {/* Title */}
        <div className="max-w-[680px]">
          <h1 className="text-white text-3xl sm:text-4xl font-semibold font-['Space_Grotesk'] leading-tight sm:leading-10">
            Review the current ZoikoStream Data
            <br className="hidden sm:block" />
            Processing Addendum and approved
            <br className="hidden sm:block" />
            annexes.
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-[660px]">
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
            This page is the public review and routing surface for the current standard DPA package. It shows source-backed scope and currentness, but it does not by itself decide whether this standard package is the executed agreement governing your specific account — see the applicability navigator below.
          </p>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          <span className="px-3 py-1 bg-slate-900/60 rounded-full border border-cyan-400/40 text-cyan-300 text-xs font-mono">
            State: Current (illustrative)
          </span>
          <span className="px-3 py-1 bg-slate-900/60 rounded-full border border-slate-700 text-slate-300 text-xs font-mono">
            Version 1.0
          </span>
          <span className="px-3 py-1 bg-slate-900/60 rounded-full border border-slate-700 text-slate-300 text-xs font-mono">
            Effective: Aug 1, 2026
          </span>
          <span className="px-3 py-1 bg-slate-900/60 rounded-full border border-slate-700 text-slate-300 text-xs font-mono">
            Last reviewed: Aug 20, 2026
          </span>
          <span className="px-3 py-1 bg-slate-900/60 rounded-full border border-slate-700 text-slate-300 text-xs font-mono">
            Scope: Standard ZoikoStream services
          </span>
        </div>

        {/* Download PDF Button */}
        <div className="pt-2">
          <button
            type="button"
            className="w-full sm:w-64 min-h-[48px] px-6 py-3 bg-gradient-to-r from-[#40C4AA] to-[#0D6EFD] rounded-[10px] text-slate-950 text-base font-semibold hover:opacity-90 transition-opacity"
          >
            Download PDF
          </button>
        </div>

        {/* Controlling Text Notice Box */}
        <div className="max-w-[680px] p-4 bg-slate-900/80 rounded-lg border-l-[3px] border-l-[#40C4AA] border border-slate-800 text-xs leading-relaxed text-slate-300">
          <span className="font-bold text-white">Controlling text notice:</span> if this HTML summary and the current downloadable DPA artifact ever differ, the current downloadable artifact and any applicable executed account agreement control.
        </div>

      </div>
    </section>
  );
}

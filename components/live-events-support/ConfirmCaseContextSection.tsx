import React from 'react';
import Image from 'next/image';
import { FileText, Image as ImageIcon } from 'lucide-react';

export default function ConfirmCaseContextSection() {
  return (
    <section className="relative w-full bg-[#040813] text-white py-16 lg:py-24 overflow-hidden">
      {/* Background Matrix & HUD Graphic */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/Live Events Support Page/les-bg-5.png"
          alt="Case review telemetry backdrop"
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
            Confirm your case context before submitting.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-inter">
            Review every field. You can edit anything before submitting. Once submitted, the case enters a defined lifecycle.
          </p>
        </div>

        {/* Main Review Card */}
        <div className="bg-[#080f1d]/90 rounded-2xl border border-slate-800/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          {/* Card Header Row */}
          <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-slate-800/80">
            <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-white uppercase">
              CASE REVIEW DETAILS
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold tracking-wider uppercase font-mono bg-teal-950/90 text-teal-400 border border-teal-800/80">
              VALIDATED
            </span>
            <span className="font-mono text-xs text-slate-400 tracking-wider uppercase">
              TRIAGE PATH: ENG-L1-INGEST
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
            {/* Box 1: Event Context */}
            <div className="rounded-xl border border-slate-800/80 bg-[#050b14]/85 p-5 space-y-2">
              <h3 className="font-mono text-[11px] sm:text-xs font-bold text-teal-400 tracking-wider uppercase mb-2">
                EVENT CONTEXT
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 font-inter">
                <span className="text-slate-400">Event ID: </span>ZS-2040-A
              </p>
              <p className="text-xs sm:text-[13px] text-slate-300 font-inter">
                <span className="text-slate-400">Current Phase: </span>Pre-Live Testing
              </p>
              <p className="text-xs sm:text-[13px] text-slate-300 font-inter">
                <span className="text-slate-400">Broadcast Intent: </span>Public Keynote
              </p>
            </div>

            {/* Box 2: Impact Evaluation */}
            <div className="rounded-xl border border-slate-800/80 bg-[#050b14]/85 p-5 space-y-2">
              <h3 className="font-mono text-[11px] sm:text-xs font-bold text-teal-400 tracking-wider uppercase mb-2">
                IMPACT EVALUATION
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 font-inter">
                <span className="text-slate-400">Severity Target: </span>Moderate Jitter
              </p>
              <p className="text-xs sm:text-[13px] text-slate-300 font-inter">
                <span className="text-slate-400">Scope: </span>US-East Edge Region
              </p>
              <p className="text-xs sm:text-[13px] text-slate-300 font-inter">
                <span className="text-slate-400">Target Timing: </span>24h before go-live
              </p>
            </div>

            {/* Box 3: Safe Attachments */}
            <div className="rounded-xl border border-slate-800/80 bg-[#050b14]/85 p-5 space-y-2">
              <h3 className="font-mono text-[11px] sm:text-xs font-bold text-teal-400 tracking-wider uppercase mb-2">
                SAFE ATTACHMENTS (2)
              </h3>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-teal-300 font-mono">
                <FileText className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>console_trace_sn-20.log</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-teal-300 font-mono">
                <ImageIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>ingest_error_ss_109.png</span>
              </div>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              type="button"
              className="bg-[#00c2ff] hover:bg-[#00aff0] active:scale-[0.98] text-[#04111d] font-semibold text-sm sm:text-base px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-[0_0_16px_rgba(0,194,255,0.4)] cursor-pointer"
            >
              Submit Support Case
            </button>

            <button
              type="button"
              className="bg-[#09111e]/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 text-slate-100 font-medium text-sm sm:text-base px-6 py-3 rounded-lg transition-all duration-200 cursor-pointer"
            >
              Modify Case Data
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

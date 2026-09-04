import React from 'react';
import Image from 'next/image';
import { Check, ShieldAlert } from 'lucide-react';

export default function ReviewPayloadSection() {
  return (
    <section className="relative w-full bg-[#030611] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-slate-800/60">
      {/* Background Data Center Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/Report Issue Page/sri5.png"
          alt="Data center telemetry background"
          fill
          priority
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030611]/90 via-[#030611]/60 to-[#030611]" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#030611]/40 to-[#030611]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight mb-3">
            Review exactly what will be sent.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal max-w-3xl leading-relaxed">
            You can edit or remove anything before submitting. Once submitted, the report enters a defined routing lifecycle.
          </p>
        </div>

        {/* Draft Report Payload Summary Card */}
        <div className="rounded-2xl border border-slate-800/90 bg-[#050b17]/90 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Card Top Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 border-b border-slate-800/70">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Draft Report payload Summary
            </h3>
            <span className="font-mono text-xs text-slate-400 bg-slate-900/80 px-3 py-1 rounded border border-slate-800 tracking-wider">
              REF: 2026_0941-01
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-6 sm:py-8 border-b border-slate-800/70">
            {/* Column 1: Issue Details */}
            <div className="space-y-6">
              <div>
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#00e5ff] uppercase block mb-3">
                  01 / ISSUE DETAILS
                </span>
                <div className="space-y-4">
                  <div>
                    <span className="text-slate-500 text-xs block font-medium">Category</span>
                    <p className="text-slate-200 text-sm font-semibold mt-0.5">
                      Playback & Player Controller
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-500 text-xs block font-medium">Surface & Impact</span>
                    <p className="text-slate-200 text-sm font-semibold mt-0.5">
                      Live Event stream Jitter (High Operational Impact)
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-500 text-xs block font-medium">Reproducibility</span>
                    <p className="text-slate-300 text-xs sm:text-sm font-medium mt-0.5">
                      Intermittent — happens on secondary cellular connections
                    </p>
                  </div>
                </div>
              </div>

              {/* Follow-up & Routing */}
              <div className="pt-2">
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#00e5ff] uppercase block mb-3">
                  03 / FOLLOW-UP & ROUTING
                </span>
                <div className="space-y-3">
                  <div>
                    <span className="text-slate-500 text-xs block font-medium">Follow-up Contact</span>
                    <p className="text-slate-200 text-sm font-medium mt-0.5">
                      Using signed-in account profile details.
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-500 text-xs block font-medium">Initial Routing Path</span>
                    <p className="text-[#00c5ff] text-sm font-semibold mt-0.5">
                      L1 Live Stream Support Queue
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Evidence Summary */}
            <div className="space-y-6">
              <div>
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#00e5ff] uppercase block mb-3">
                  02 / EVIDENCE SUMMARY
                </span>
                <div className="space-y-4">
                  <div>
                    <span className="text-slate-500 text-xs block font-medium">Uploaded Attachments</span>
                    <div className="mt-1.5 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs sm:text-[13px] font-mono text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>console_logs_active_stream.txt [42 KB]</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-[13px] font-mono text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>hardware_acceleration_specs.json [12 KB]</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-500 text-xs block font-medium">Diagnostic Facts</span>
                    <p className="text-slate-200 text-xs sm:text-[13px] font-mono mt-1">
                      Chrome 122.0.0 / macOS Sonoma (Apple Silicon)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Check Banner */}
          <div className="my-6 rounded-xl border border-orange-500/40 bg-[#160904]/75 px-4 sm:px-5 py-3.5 flex items-start sm:items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0 mt-1 sm:mt-0 shadow-[0_0_6px_#f97316]" />
            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
              <span className="text-orange-400 font-semibold mr-1.5">Security Check:</span>
              Verify that your attachments do not expose private tokens, passwords, cookies, or database credentials.
            </p>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              className="bg-[#00c5ff] hover:bg-[#00b2e8] active:scale-[0.98] text-[#021324] font-semibold text-sm sm:text-base px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-[0_0_16px_rgba(0,197,255,0.4)] cursor-pointer"
            >
              Submit Report
            </button>

            <button
              type="button"
              className="bg-[#09111e]/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 text-slate-200 font-medium text-sm sm:text-base px-6 py-2.5 rounded-lg transition-all duration-200 cursor-pointer"
            >
              Edit Draft Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

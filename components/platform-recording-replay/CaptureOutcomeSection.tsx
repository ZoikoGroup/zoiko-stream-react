import React from 'react';
import Image from 'next/image';

export default function CaptureOutcomeSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-24 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-recording-replay/bg (64).png"
          alt="Capture Outcome Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            What actually happened during capture?
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk']">
            Completion truth determines what may proceed to asset registration and replay
          </p>
        </div>

        {/* Capture Outcome Review Banner Box */}
        <div className="p-6 md:p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-md flex flex-col gap-6 mb-8">
          <div className="flex flex-wrap justify-between items-center gap-4 border-b border-gray-800/80 pb-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                Capture Outcome Review
              </h3>
              <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
                Attempt: #ATT-9082 • Scope: Multi-track A/V + Captions
              </p>
            </div>
            <span className="px-3 py-1.5 bg-emerald-950/90 border border-emerald-800/50 rounded-md text-teal-400 text-xs font-bold font-['Space_Grotesk']">
              Completed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-slate-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                Start/End Boundary
              </span>
              <p className="text-slate-300 text-sm font-['Space_Grotesk']">
                2025-08-15 19:00:00 - 20:32:15 UTC
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-slate-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                Source/Track Result
              </span>
              <p className="text-slate-300 text-sm font-['Space_Grotesk']">
                Video (1080p60), Audio (Stereo), WebVTT (EN)
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-slate-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                Known Limitations
              </span>
              <p className="text-slate-300 text-sm font-['Space_Grotesk']">
                None. All index blocks matched authoritative signatures.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-gray-800/80">
            <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-slate-950 text-sm font-bold font-['Space_Grotesk'] rounded-lg hover:opacity-90 transition-opacity">
              Register asset
            </button>
            <button className="px-6 py-3 rounded-lg border border-slate-500 text-slate-300 text-sm font-bold font-['Space_Grotesk'] hover:bg-white/10 transition-colors">
              Review evidence
            </button>
          </div>
        </div>

        {/* 4 Outcome Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-zinc-900/80 rounded-xl border-t-2 border-t-teal-400 border-x border-b border-gray-800 flex flex-col gap-3">
            <h4 className="text-teal-400 text-lg font-bold font-['Space_Grotesk']">
              Completed
            </h4>
            <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
              Authoritative result with verified scope and evidence available instantly.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/80 rounded-xl border-t-2 border-t-amber-500 border-x border-b border-gray-800 flex flex-col gap-3">
            <h4 className="text-amber-500 text-lg font-bold font-['Space_Grotesk']">
              Partial
            </h4>
            <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
              Limitation prominent, requires manual operator review before proceeding to replay.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/80 rounded-xl border-t-2 border-t-red-500 border-x border-b border-gray-800 flex flex-col gap-3">
            <h4 className="text-red-500 text-lg font-bold font-['Space_Grotesk']">
              Failed
            </h4>
            <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
              No intended result saved. Automated support triggers recovery and retry logic.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/80 rounded-xl border-t-2 border-t-slate-400 border-x border-b border-gray-800 flex flex-col gap-3">
            <h4 className="text-slate-400 text-lg font-bold font-['Space_Grotesk']">
              Unknown
            </h4>
            <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
              Outcome unresolved. System prevents unsafe retry until state is verified manually.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

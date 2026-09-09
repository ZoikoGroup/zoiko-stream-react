import React from "react";
import Image from "next/image";

export default function EnterpriseMediaOperationsHero() {
  return (
    <section className="relative min-h-[720px] w-full overflow-hidden text-white font-sans py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-slate-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/media/bg1.png"
          alt="Enterprise Media Operations Background"
          fill
          className="object-cover object-center opacity-50"
          priority
        />
        {/* Subtle dark overlay for optimal text contrast */}
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Subtitle & Action Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-teal-400 uppercase">
            ENTERPRISE MEDIA OPERATIONS
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Run enterprise video as an operating system, not a collection of
            one-off streams
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl mb-8">
            Connect source-approved contribution, broadcasting, security/access,
            monitoring, recording/replay, captions/translation, analytics, and
            operational support into a governed recurring workflow.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-teal-400 via-sky-400 to-blue-500 hover:brightness-105 transition-all shadow-lg shadow-teal-500/10 cursor-pointer"
            >
              Explore the operating model
            </button>
            <button
              type="button"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white border border-slate-700/80 hover:bg-slate-800/80 transition-all cursor-pointer"
            >
              Review Platform capabilities
            </button>
          </div>
        </div>

        {/* Right Column: Ops Command Widget Card */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-800 bg-[#0B0F17]/80 backdrop-blur-xl p-6 shadow-2xl">
            {/* Widget Header */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono tracking-wider text-slate-300 uppercase">
                  ZOIKOSTREAM OPS COMMAND
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                ACTIVE BROADCASTS
              </span>
            </div>

            {/* List Items */}
            <div className="space-y-5 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">
                  01 / CONTRIBUTION ASSURANCES
                </span>
                <span className="text-emerald-400 font-semibold tracking-wide">
                  STABLE
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-300">
                  02 / COMPLIANCE & PRIVACY GATES
                </span>
                <span className="text-emerald-400 font-semibold tracking-wide">
                  STABLE
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-300">
                  03 / PLAYBACK DELIVERY NODES
                </span>
                <span className="text-sky-400 font-semibold tracking-wide">
                  LIVE TRACK
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 pt-2">
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full w-[85%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

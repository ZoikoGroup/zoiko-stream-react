import React from 'react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-zinc-950 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stream-monitoring/hero bg.jpg"
          alt="Stream Monitoring Hero Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 flex-1 max-w-[680px] flex flex-col justify-start items-start gap-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
          <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
            STREAM MONITORING
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight lg:leading-[52px]">
          Know when a stream needs attention — and understand the evidence behind it.
        </h1>

        <p className="text-neutral-300 text-base lg:text-lg font-normal leading-7">
          Use ZoikoStream monitoring to inspect stream lifecycle and operational health signals, review alert state, and follow an evidence-first troubleshooting path when monitoring capabilities are available to your account.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-gray-800 text-base font-semibold">Check a stream</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-white/30 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
            <span className="text-white text-base font-semibold">Open monitoring docs</span>
          </div>
        </div>

        <p className="text-teal-300 text-xs font-normal pt-2">
          Freshness-aware status · Explainable health · No invented thresholds or SLA claims
        </p>
      </div>

      {/* Right Box: MONITORING ANATOMY */}
      <div className="relative z-10 w-full lg:w-[566px] p-6 bg-neutral-800/90 rounded-2xl border border-zinc-600 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
        <span className="text-gray-400 text-xs font-semibold font-mono tracking-tight uppercase">
          MONITORING ANATOMY
        </span>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold font-mono">
          <div className="px-3 py-2 bg-zinc-800 rounded-lg border border-zinc-600 text-neutral-300">
            Stream
          </div>
          <span className="text-zinc-500">→</span>
          <div className="px-3 py-2 bg-zinc-800 rounded-lg border border-zinc-600 text-neutral-300">
            Lifecycle
          </div>
          <span className="text-zinc-500">→</span>
          <div className="px-3 py-2 bg-zinc-800 rounded-lg border border-zinc-600 text-neutral-300">
            Observations
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold font-mono">
          <div className="px-3 py-2 bg-zinc-800 rounded-lg border border-zinc-600 text-neutral-300">
            Health
          </div>
          <span className="text-zinc-500">→</span>
          <div className="px-3 py-2 bg-zinc-800 rounded-lg border border-zinc-600 text-neutral-300">
            Alert
          </div>
          <span className="text-zinc-500">→</span>
          <div className="px-3 py-2 bg-zinc-800 rounded-lg border border-zinc-600 text-neutral-300">
            Incident / Recovery
          </div>
        </div>

        <p className="text-gray-400 text-xs font-normal leading-5 border-t border-zinc-700 pt-4">
          Every node has a definition affordance. Health is always shown next to when it was last observed.
        </p>
      </div>
    </section>
  );
}

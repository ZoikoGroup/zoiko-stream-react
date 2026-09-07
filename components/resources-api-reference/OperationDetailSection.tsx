'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function OperationDetailSection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Operation detail representation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Every operation documentation page displays identity, request contracts, parameter schemas, responses, and real-time validation telemetry.
          </p>
        </div>

        {/* Operation Representation Card */}
        <div className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 sm:p-8 overflow-hidden">
          {/* Top Bar: Method + Path and Metadata Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <span className="bg-[#064e3b]/90 text-[#34d399] border border-[#059669]/60 px-2.5 py-1 rounded font-mono text-xs font-bold uppercase tracking-wider">
                POST
              </span>
              <span className="font-mono text-white text-base sm:text-lg font-semibold tracking-wide">
                /v1/streams
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] text-cyan-300 bg-cyan-950/60 border border-cyan-800/70 px-2.5 py-1 rounded">
                create-stream
              </span>
              <span className="font-mono text-[11px] text-emerald-300 bg-emerald-950/60 border border-emerald-800/70 px-2.5 py-1 rounded font-semibold uppercase">
                CURRENT
              </span>
              <span className="font-mono text-xs text-slate-400">
                Last Reviewed: Aug 2026
              </span>
            </div>
          </div>

          {/* Authentication Callout Banner */}
          <div className="bg-[#101b33]/80 border border-blue-900/50 rounded-xl px-4 py-3.5 my-6 flex items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-2.5 h-2.5 rounded-full border-2 border-cyan-400 shrink-0" />
              <span>
                Requires Bearer Token authentication.
              </span>
            </div>
            <Link
              href="/authentication"
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium whitespace-nowrap transition-colors"
            >
              View authentication guide
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Two-Column Grid: Request Parameters vs JSON Schema Payload */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 pt-2">
            {/* Left Column: Request Parameters */}
            <div>
              <h3 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider mb-5">
                REQUEST PARAMETERS
              </h3>

              <div className="space-y-6 divide-y divide-slate-800/70">
                {/* Parameter 1: title */}
                <div className="pt-2 first:pt-0">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="font-mono font-bold text-[#2dd4bf] text-sm">
                      title
                    </span>
                    <span className="font-mono text-[9px] font-bold tracking-wider text-rose-400 uppercase">
                      REQUIRED
                    </span>
                  </div>
                  <div className="font-mono text-xs text-slate-400 mb-1.5">
                    string
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                    Stream display name. This identifier appears inside your user dashboards.
                  </p>
                </div>

                {/* Parameter 2: latency_mode */}
                <div className="pt-6">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="font-mono font-bold text-[#38bdf8] text-sm">
                      latency_mode
                    </span>
                    <span className="font-mono text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                      OPTIONAL
                    </span>
                  </div>
                  <div className="font-mono text-xs text-slate-400 mb-1.5">
                    enum{' '}
                    <span className="text-teal-300">&quot;standard&quot;</span> |{' '}
                    <span className="text-teal-300">&quot;low&quot;</span> |{' '}
                    <span className="text-teal-300">&quot;real-time&quot;</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                    Configures streaming buffer thresholds at platform edge gates.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: JSON Schema Payload */}
            <div>
              <h3 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider mb-5">
                JSON SCHEMA PAYLOAD
              </h3>

              <div className="bg-[#070c18] border border-slate-800/90 rounded-xl p-5 overflow-x-auto scrollbar-none font-mono text-xs leading-relaxed text-slate-300 shadow-inner">
                <pre>
                  <code>
                    <span>{'{'}</span>
                    {'\n'}
                    <span className="text-slate-400">  &quot;type&quot;: </span>
                    <span className="text-[#2dd4bf]">&quot;object&quot;</span>
                    <span>,</span>
                    {'\n'}
                    <span className="text-slate-400">  &quot;properties&quot;: {'{'}</span>
                    {'\n'}
                    <span className="text-slate-400">    &quot;title&quot;: {'{ '}</span>
                    <span className="text-slate-400">&quot;type&quot;: </span>
                    <span className="text-[#2dd4bf]">&quot;string&quot;</span>
                    <span className="text-slate-400">{' }'},</span>
                    {'\n'}
                    <span className="text-slate-400">    &quot;latency_mode&quot;: {'{ '}</span>
                    <span className="text-slate-400">&quot;type&quot;: </span>
                    <span className="text-[#2dd4bf]">&quot;string&quot;</span>
                    <span>, </span>
                    <span className="text-slate-400">&quot;enum&quot;: [</span>
                    <span className="text-[#2dd4bf]">&quot;standard&quot;</span>
                    <span>, </span>
                    <span className="text-[#2dd4bf]">&quot;low&quot;</span>
                    <span>, </span>
                    <span className="text-[#2dd4bf]">&quot;real-time&quot;</span>
                    <span className="text-slate-400">] {'}'},</span>
                    {'\n'}
                    <span className="text-slate-400">    &quot;reconnect_window&quot;: {'{ '}</span>
                    <span className="text-slate-400">&quot;type&quot;: </span>
                    <span className="text-[#2dd4bf]">&quot;integer&quot;</span>
                    <span>, </span>
                    <span className="text-slate-400">&quot;minimum&quot;: </span>
                    <span className="text-[#60a5fa]">0</span>
                    <span>, </span>
                    <span className="text-slate-400">&quot;maximum&quot;: </span>
                    <span className="text-[#60a5fa]">1800</span>
                    <span className="text-slate-400">{' }'}</span>
                    {'\n'}
                    <span className="text-slate-400">  {'}'},</span>
                    {'\n'}
                    <span className="text-slate-400">  &quot;required&quot;: [</span>
                    <span className="text-[#2dd4bf]">&quot;title&quot;</span>
                    <span className="text-slate-400">]</span>
                    {'\n'}
                    <span>{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

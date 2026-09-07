'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Info } from 'lucide-react';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative w-full overflow-hidden bg-[#070b14] text-white pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 border-b border-slate-800/60">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0 opacity-70 mix-blend-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/api%20reference/hero-bg.png')`,
        }}
        aria-hidden="true"
      />

      {/* Subtle radial glow overlay */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-0" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/40 bg-teal-950/50 backdrop-blur-sm mb-7">
              <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-teal-300 uppercase">
                API Reference Hub
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.08] mb-6">
              Look up exact API contracts without guessing
            </h1>

            {/* Description */}
            <p className="text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Search approved ZoikoStream API resources, operations, schemas, events, errors, and identifiers. Exact technical behavior is shown only when current contract sources establish it.
            </p>

            {/* Search Bar */}
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="relative w-full max-w-xl mb-7 group"
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4.5 w-4.5 text-slate-400 group-focus-within:text-teal-400 transition-colors" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by operation, resource, schema, error, or ID..."
                className="w-full bg-[#111728]/85 text-white placeholder-slate-400 text-sm sm:text-[15px] rounded-xl pl-11 pr-4 py-3.5 border border-slate-700/70 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all"
              />
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-7">
              <Link
                href="/developer-api-reference"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#27c3a7] hover:bg-[#22b298] text-[#06181f] font-semibold text-sm transition-all duration-150 shadow-[0_4px_16px_rgba(39,195,167,0.25)] hover:shadow-[0_6px_22px_rgba(39,195,167,0.35)]"
              >
                Browse API reference
              </Link>
              <Link
                href="/developer-documentation"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0e1422] hover:bg-slate-800/80 text-white font-semibold text-sm border border-slate-300/80 transition-all duration-150 shadow-sm"
              >
                Developer documentation
              </Link>
            </div>

            {/* Contract Notice */}
            <div className="flex items-center gap-2 text-slate-400 text-xs leading-normal">
              <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>
                If a behavior is not established by the current public contract, the reference does not infer it.
              </span>
            </div>
          </div>

          {/* Right Column: Code Contract Preview Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#0d1424]/90 backdrop-blur-xl border border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-5 sm:p-6 overflow-hidden">
              {/* Window Controls Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#eab308]" />
                  <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
                <div className="font-mono text-xs text-slate-400 font-medium">
                  POST /v1/streams
                </div>
              </div>

              {/* Request Body Section */}
              <div className="space-y-2 mb-6">
                <div className="text-[11px] font-mono font-bold tracking-wider text-teal-400 uppercase">
                  REQUEST BODY
                </div>
                <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto p-1 scrollbar-none">
                  <code>
                    <span>{'{'}</span>
                    {'\n'}
                    <span className="text-slate-400">  &quot;title&quot;: </span>
                    <span className="text-[#38d9a9]">&quot;Live Stage Event&quot;</span>
                    <span>,</span>
                    {'\n'}
                    <span className="text-slate-400">  &quot;latency_mode&quot;: </span>
                    <span className="text-[#38d9a9]">&quot;real-time&quot;</span>
                    <span>,</span>
                    {'\n'}
                    <span className="text-slate-400">  &quot;reconnect_window&quot;: </span>
                    <span className="text-[#60a5fa]">60</span>
                    {'\n'}
                    <span>{'}'}</span>
                  </code>
                </pre>
              </div>

              {/* Section Divider */}
              <div className="border-t border-slate-800/80 my-4" />

              {/* Response Schema Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-teal-400 uppercase">
                    RESPONSE SCHEMA
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#064e3b]/80 border border-[#059669]/60 text-[#34d399] font-mono text-[10px] font-bold uppercase tracking-wider">
                    201 CREATED
                  </span>
                </div>
                <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto p-1 scrollbar-none">
                  <code>
                    <span>{'{ '}</span>
                    <span className="text-slate-400">&quot;id&quot;: </span>
                    <span className="text-[#38d9a9]">&quot;stream_9185a&quot;</span>
                    <span>, </span>
                    <span className="text-slate-400">&quot;status&quot;: </span>
                    <span className="text-[#38d9a9]">&quot;idle&quot;</span>
                    <span>{' }'}</span>
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

import React from 'react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/80 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-api-reference/bg.png"
          alt="API Reference Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 flex-1 max-w-[680px] flex flex-col justify-start items-start gap-8">
        <div className="px-3 py-1.5 rounded-full border border-teal-400 flex items-center gap-2">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-wide">
            API REFERENCE
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight lg:leading-[60px]">
          Build from exact, versioned API contracts
        </h1>

        <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
          Use the ZoikoStream API Reference to inspect approved operations, request and response schemas, authentication requirements, errors, reliability semantics, versions, and lifecycle state.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center gap-2 cursor-pointer shadow-md">
            <span className="text-gray-950 text-base font-bold">Search API Reference</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex justify-center items-center gap-2 cursor-pointer hover:border-white transition-colors">
            <span className="text-white text-base font-bold">Open Documentation</span>
          </div>
        </div>
      </div>

      {/* Right Explorer Box */}
      <div className="relative z-10 w-full lg:w-[480px] h-[384px] p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-5 shadow-2xl backdrop-blur-md">
        <div className="flex justify-between items-center">
          <span className="text-white text-xs font-bold tracking-wide">
            EXPLORER INTERACTIVE CONTEXT
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-red-400 rounded-full" />
            <div className="w-2 h-2 bg-amber-400 rounded-full" />
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3 font-mono">
          <div className="p-3 bg-slate-800 rounded-md flex items-center gap-2 border border-gray-700">
            <span className="text-teal-400 text-xs font-bold">GET</span>
            <span className="text-white text-xs font-normal">/v1/streams/{"{stream_id}"}/metrics</span>
          </div>

          <div className="flex-1 p-4 bg-slate-900 rounded-md border border-gray-800 flex flex-col gap-1.5 text-xs">
            <span className="text-indigo-400">{"{"}</span>
            <span className="text-pink-400 pl-4">&quot;id&quot;: &quot;str_09283f&quot;,</span>
            <span className="text-teal-400 pl-4">&quot;qos_status&quot;: &quot;optimal&quot;,</span>
            <span className="text-pink-400 pl-4">&quot;latency_ms&quot;: 110,</span>
            <span className="text-emerald-200 pl-4">&quot;active_viewers&quot;: 48209</span>
            <span className="text-indigo-400">{"}"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

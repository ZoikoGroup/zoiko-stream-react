import React from 'react';
import Image from 'next/image';

const curlSnippet = `curl -X POST https://api.zoikostream.com/v1/analytics \\
  -H "Authorization: Bearer zoiko_live_8a99b4" \\
  -H "Content-Type: application/json" \\
  -d '{
    "dataset": "viewership_qos_raw",
    "metrics": ["playback_failures", "active_concurrent_views"],
    "time_range": "last_24h",
    "breakdown": "device_category"
  }'`;

const jsonSnippet = `{
  "status": "success",
  "data": [
    { "device_category": "desktop", "playback_failures": 14, "views": 18450 },
    { "device_category": "mobile", "playback_failures": 42, "views": 31200 },
    { "device_category": "smart_tv", "playback_failures": 8, "views": 8900 }
  ],
  "latency_ms": 12
}`;

const steps = [
  { num: '01', title: 'Choose metric & dataset', desc: 'Select query inputs aligned to core system capabilities.' },
  { num: '02', title: 'Set time window & filters', desc: 'Filter down dimensions while protecting end-user anonymity.' },
  { num: '03', title: 'Send from server-side', desc: 'Keep token validation inside your managed server environment.' },
  { num: '04', title: 'Read response shape', desc: 'Parse predictable response contracts mapped directly to schemas.' },
];

export function MakeOneAnalyticsQuerySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-analytics-api/bg (15).png"
          alt="Make One Analytics Query Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Make one analytics query you can understand end to end.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Choose a metric, timeframe, and optional filters — send the request and read the response.
          </p>
        </div>

        {/* 2 Code Snippet Columns */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: cURL Request */}
          <div className="p-8 bg-zinc-900 rounded-xl border border-gray-800 flex flex-col gap-5 shadow-2xl">
            <div className="flex justify-between items-center">
              <span className="text-teal-400 text-sm font-bold font-mono">HTTP POST REQUEST (cURL)</span>
              <div className="px-3 py-1.5 rounded-md border border-gray-800 text-white text-xs font-bold font-mono cursor-pointer hover:border-white">
                Copy cURL
              </div>
            </div>
            <div className="p-5 bg-gray-950 rounded-lg font-mono text-xs text-slate-400 leading-relaxed overflow-x-auto">
              <pre className="whitespace-pre-wrap">{curlSnippet}</pre>
            </div>
          </div>

          {/* Column 2: JSON Response */}
          <div className="p-8 bg-zinc-900 rounded-xl border border-gray-800 flex flex-col gap-5 shadow-2xl">
            <div className="flex justify-between items-center">
              <span className="text-blue-500 text-sm font-bold font-mono">RESPONSE (JSON)</span>
              <div className="px-2.5 py-1 bg-emerald-500/10 rounded border border-emerald-500/30 text-emerald-500 text-xs font-bold font-mono">
                CONTRACT VERIFIED
              </div>
            </div>
            <div className="p-5 bg-gray-950 rounded-lg font-mono text-xs text-slate-400 leading-relaxed overflow-x-auto">
              <pre className="whitespace-pre-wrap">{jsonSnippet}</pre>
            </div>
          </div>
        </div>

        {/* 4 Steps Row */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-5 bg-gray-800/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start gap-3 shadow-md"
            >
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-teal-400 text-xs font-bold ">{st.num}</span>
              </div>
              <h3 className="text-white text-base font-bold">{st.title}</h3>
              <p className="text-slate-400 text-xs leading-4">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

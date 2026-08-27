'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const snippets = {
  cURL: `curl -X POST https://api.zoikostream.com/v1/analytics \\
  -H "Authorization: Bearer $ZOIKO_API_KEY" \\
  -d '{
    "dataset": "viewership_qos_raw",
    "metrics": ["playback_failures"],
    "time_range": "last_24h"
  }'`,
  JavaScript: `const response = await fetch('https://api.zoikostream.com/v1/analytics', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.ZOIKO_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    dataset: 'viewership_qos_raw',
    metrics: ['playback_failures'],
    time_range: 'last_24h'
  })
});
const data = await response.json();`,
  Python: `import requests
import os

url = "https://api.zoikostream.com/v1/analytics"
headers = {
    "Authorization": f"Bearer {os.environ.get('ZOIKO_API_KEY')}",
    "Content-Type": "application/json"
}
payload = {
    "dataset": "viewership_qos_raw",
    "metrics": ["playback_failures"],
    "time_range": "last_24h"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
};

export function ComposeValidQuerySection() {
  const [activeTab, setActiveTab] = useState<'cURL' | 'JavaScript' | 'Python'>('cURL');

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-analytics-api/bg (19).png"
          alt="Compose Valid Query Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Compose a valid query, then take it into your stack
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            The interactive builder uses the same source-of-truth contracts as the API reference. Choose a dataset, metric, time window, filters and breakdowns.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Form Controls */}
          <div className="p-8 bg-zinc-900 rounded-xl border border-gray-800 flex flex-col gap-5 shadow-xl">
            <h3 className="text-white text-lg font-bold font-mono">1. Select Query Dimensions</h3>

            <div className="flex flex-col gap-1.5 font-mono">
              <span className="text-slate-400 text-xs font-bold uppercase">Dataset</span>
              <div className="p-3.5 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center text-white text-sm">
                <span>viewership_qos_raw</span>
                <span className="text-slate-400 text-xs">▾</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 font-mono">
              <span className="text-slate-400 text-xs font-bold uppercase">Metric</span>
              <div className="p-3.5 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center text-white text-sm">
                <span>playback_failures, active_concurrent_views</span>
                <span className="text-slate-400 text-xs">▾</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 font-mono">
              <span className="text-slate-400 text-xs font-bold uppercase">Time Range</span>
              <div className="p-3.5 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center text-white text-sm">
                <span>Last 24 Hours</span>
                <span className="text-slate-400 text-xs">▾</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code Export Box */}
          <div className="p-8 bg-zinc-900 rounded-xl border border-gray-800 flex flex-col gap-5 shadow-xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                {(['cURL', 'JavaScript', 'Python'] as const).map((tab) => (
                  <span
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-bold font-mono cursor-pointer transition-colors ${
                      activeTab === tab ? 'text-teal-400' : 'text-slate-600 hover:text-slate-300'
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <div className="px-2 py-1 bg-emerald-500/10 rounded border border-emerald-500/30 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-emerald-500 text-[10px] font-bold font-mono uppercase">
                  SOURCED • V2.1
                </span>
              </div>
            </div>

            <div className="p-5 bg-gray-950 rounded-lg font-mono text-xs text-slate-400 leading-relaxed overflow-x-auto min-h-[160px]">
              <pre className="whitespace-pre-wrap">{snippets[activeTab]}</pre>
            </div>

            <div className="flex justify-between items-center">
              <div className="px-4 py-2.5 rounded-md border border-gray-800 text-white font-bold font-mono text-xs cursor-pointer hover:border-white transition-colors">
                Copy Generated Code
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

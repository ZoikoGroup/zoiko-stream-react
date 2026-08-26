'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const tabs = ['cURL', 'JavaScript', 'Python', 'Go'];

const codeSnippets: Record<string, string> = {
  cURL: `curl -X POST "https://api.zoiko.com/v2/streams" \\
  -H "Authorization: Bearer $ZOIKO_SECRET_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Live Event Stream",
    "latency_mode": "ultra_low",
    "redundant_ingest": true
  }'`,
  JavaScript: `const response = await fetch("https://api.zoiko.com/v2/streams", {
  method: "POST",
  headers: {
    "Authorization": \`Bearer \${process.env.ZOIKO_SECRET_TOKEN}\`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Live Event Stream",
    latency_mode: "ultra_low",
    redundant_ingest: true
  })
});
const data = await response.json();`,
  Python: `import requests, os

response = requests.post(
    "https://api.zoiko.com/v2/streams",
    headers={"Authorization": f"Bearer {os.getenv('ZOIKO_SECRET_TOKEN')}"},
    json={
        "name": "Live Event Stream",
        "latency_mode": "ultra_low",
        "redundant_ingest": True
    }
)`,
  Go: `req, _ := http.NewRequest("POST", "https://api.zoiko.com/v2/streams", body)
req.Header.Set("Authorization", "Bearer " + os.Getenv("ZOIKO_SECRET_TOKEN"))
client := &http.Client{}
resp, err := client.Do(req)`,
};

const mutationStates = [
  { title: 'Accepted / Created (201)', desc: 'Stream allocated & ingest URL generated', color: 'bg-emerald-500' },
  { title: 'Validation Error (422)', desc: 'Invalid payload parameters', color: 'bg-red-500' },
  { title: 'Permission Error (403)', desc: 'Missing scope credentials', color: 'bg-amber-500' },
  { title: 'Rate Limited (429)', desc: 'Too many concurrent requests', color: 'bg-blue-500' },
];

export function CreateStreamResourceSection() {
  const [activeTab, setActiveTab] = useState('cURL');

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Create the Stream Resource
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Submit an API call to instantiate a stream resource. Once accepted, the platform allocates live ingestion parameters.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Code Tabs */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-gray-950 text-teal-400 border border-gray-800'
                      : 'bg-slate-50 text-slate-600 border border-gray-200 hover:bg-slate-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-5 bg-gray-950 rounded-xl border border-gray-800 flex flex-col gap-3 shadow-lg">
              <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-xs font-normal">ZoikoStream API v2.0</span>
                </div>
              </div>
              <pre className="font-mono text-xs text-teal-400 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                {codeSnippets[activeTab]}
              </pre>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold text-blue-500 underline">
              <span className="cursor-pointer hover:text-blue-600">API Reference</span>
              <span className="cursor-pointer hover:text-blue-600">Live Streaming API</span>
            </div>
          </div>

          {/* Right Column: Mutation Outcome States */}
          <div className="p-8 bg-slate-50/90 rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="text-slate-600 text-sm font-bold tracking-wide uppercase">
                MUTATION OUTCOME STATES
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {mutationStates.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-lg border border-gray-200 flex justify-between items-center shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="text-slate-900 text-sm font-bold">{item.title}</span>
                        <span className="text-slate-600 text-xs font-normal">{item.desc}</span>
                      </div>
                    </div>
                    <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                  </div>
                );
              })}
            </div>

            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-sm w-fit mt-2">
              <span className="text-gray-900 text-base font-bold">Continue to Source Connection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

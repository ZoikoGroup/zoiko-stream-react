'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Code, Copy, ShieldCheck } from 'lucide-react';

const langTabs = ['cURL', 'Python', 'Node.js', 'Go'];

const examples: Record<string, string> = {
  cURL: `curl -X POST https://api.zoikostream.com/v1/streams \\
  -H "Authorization: Bearer zoiko_test_..." \\
  -d '{ "name": "Live Keynote" }'`,
  Python: `import requests

requests.post(
    "https://api.zoikostream.com/v1/streams",
    headers={"Authorization": "Bearer zoiko_test_..."},
    json={"name": "Live Keynote"}
)`,
  'Node.js': `const res = await fetch("https://api.zoikostream.com/v1/streams", {
  method: "POST",
  headers: { Authorization: "Bearer zoiko_test_..." },
  body: JSON.stringify({ name: "Live Keynote" })
});`,
  Go: `req, _ := http.NewRequest("POST", "https://api.zoikostream.com/v1/streams", body)
req.Header.Set("Authorization", "Bearer zoiko_test_...")`,
};

const exampleFeatures = [
  {
    title: 'Language Tabs',
    desc: 'Consistent copy-paste code signatures verified and native compiled across Node, Python, and Go developer SDKs.',
    img: '/images/developer-api-reference/card-image (38).png',
  },
  {
    title: 'Copy & Download',
    desc: 'Export production ready snippets containing secure token variables safely stripped into environment parameters.',
    img: '/images/developer-api-reference/card-image (39).png',
  },
  {
    title: 'Safe Console',
    desc: 'Execute real actions gated strictly to sandbox environments to protect production telemetry databases.',
    img: '/images/developer-api-reference/card-image (40).png',
  },
];

export function CopyValidatedExamplesSection() {
  const [activeTab, setActiveTab] = useState('cURL');

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-api-reference/bg (7).png"
          alt="Copy Validated Examples Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Copy validated examples. Execute only when safe
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Source-validated code patterns, responsive language selectors, synthetic mock responses, and a fully permission-gated execution console.
          </p>
        </div>

        {/* Code Box */}
        <div className="w-full p-6 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-4 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-2">
            {langTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-teal-400 text-gray-950'
                    : 'bg-black/0 text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-4 bg-slate-900 rounded-md border border-gray-800 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
            {examples[activeTab]}
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {exampleFeatures.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-lg hover:border-gray-700 transition-colors"
              >
                <div className="w-full h-40 relative bg-slate-900">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm font-normal leading-5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

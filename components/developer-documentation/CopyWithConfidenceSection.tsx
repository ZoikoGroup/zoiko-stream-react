'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const snippets: Record<string, string> = {
  cURL: `# Validated · v1 · tested 2026-08-18
curl https://api.zoikostream.com/v1/assets/asset_9J2kd \\
  -H "Authorization: Bearer $ZOIKO_API_KEY"`,
  Node: `// Validated · v1 · tested 2026-08-18
import { ZoikoStream } from '@zoikostream/sdk';

const zoiko = new ZoikoStream({ apiKey: process.env.ZOIKO_API_KEY });
const asset = await zoiko.assets.get('asset_9J2kd');
console.log(asset.status);`,
};

export function CopyWithConfidenceSection() {
  const [activeTab, setActiveTab] = useState<'cURL' | 'Node'>('cURL');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-zinc-950 text-slate-100 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span className="text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider">
              COPY WITH CONFIDENCE
            </span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
            Examples are only useful when you know what they apply to.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-[850px]">
            Every example shows language, source revision, validation state, applies-to version, and last-tested date.
          </p>
        </div>

        {/* 2 Column Grid: Code Sandbox Box + Right Image Feature Card */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Code Sandbox Box */}
          <div className="lg:col-span-6 bg-neutral-900 rounded-2xl border border-gray-800 flex flex-col overflow-hidden shadow-2xl">
            {/* Header Tabs Bar */}
            <div className="px-4 py-3 bg-zinc-950 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('cURL')}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                    activeTab === 'cURL'
                      ? 'bg-teal-400/10 text-teal-400 border border-teal-400/30 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  cURL
                </button>
                <button
                  onClick={() => setActiveTab('Node')}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                    activeTab === 'Node'
                      ? 'bg-teal-400/10 text-teal-400 border border-teal-400/30 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Node
                </button>
              </div>

              <button
                onClick={handleCopy}
                className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-slate-300 text-xs rounded-md border border-gray-700 transition-colors"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Snippet Output */}
            <div className="p-5 font-mono text-xs text-slate-300 bg-neutral-950 flex-1 overflow-x-auto">
              <pre className="whitespace-pre-wrap">{snippets[activeTab]}</pre>
            </div>
          </div>

          {/* Right Image Feature Card */}
          <div className="lg:col-span-6 relative min-h-[260px] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <Image
              src="/images/documentation/image (3).png"
              alt="Copy Code Feature"
              fill
              className="object-cover opacity-60"
            />
           
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <button className="px-6 py-3 bg-zinc-100 rounded-xl text-slate-900 font-bold text-base hover:bg-white transition-colors">
            Open Sample applications
          </button>
        </div>
      </div>
    </section>
  );
}

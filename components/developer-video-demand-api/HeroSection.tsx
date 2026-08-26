'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const codeSnippets: Record<string, string> = {
  cURL: `# POST /v1/assets
curl -X POST https://api.zoikostream.com/v1/assets \\
  -H "Authorization: Bearer $ZOIKO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "source": "direct_upload",
    "playback_policy": "public"
  }'

→ 201 Created
{
  "id": "asset_9J2kd...",
  "status": "waiting_for_upload",
  "upload_url": "https://upload.zoikostream.com/…"
}`,
  Node: `// Node.js SDK
import { ZoikoStream } from '@zoikostream/sdk';

const zoiko = new ZoikoStream({ apiKey: process.env.ZOIKO_API_KEY });

const asset = await zoiko.assets.create({
  source: 'direct_upload',
  playbackPolicy: 'public',
});

console.log(asset.id, asset.uploadUrl);`,
  Python: `# Python SDK
from zoikostream import ZoikoStream

client = ZoikoStream(api_key="ZOIKO_API_KEY")

asset = client.assets.create(
    source="direct_upload",
    playback_policy="public"
)

print(asset.id, asset.upload_url)`,
};

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<'cURL' | 'Node' | 'Python'>('cURL');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-zinc-950 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/video-api/bg (49).png"
          alt="Video-On-Demand API Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/90 to-zinc-950/95" />
      </div>

      <div className="relative z-10 flex-1 max-w-[680px] flex flex-col justify-start items-start gap-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          <span className="text-blue-500 text-xs font-bold font-mono tracking-wide uppercase">
            VIDEO-ON-DEMAND API
          </span>
        </div>

        <h1 className="text-slate-100 text-4xl lg:text-5xl font-bold leading-tight lg:leading-[52px]">
          Upload a video. Know when it is ready. Deliver it with confidence.
        </h1>

        <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
          Create or authorize an upload, move source media into ZoikoStream, track asynchronous processing, and hand playback to your application through a governed asset lifecycle.
        </p>

        <p className="text-teal-400 text-sm font-mono leading-5">
          Upload, encode, deliver — with explicit status, failure recovery, and production handoffs.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md">
            <span className="text-slate-950 text-base font-bold">Start building</span>
          </div>
          <div className="px-7 py-3.5 bg-zinc-100 rounded-lg border border-gray-800 flex justify-center items-center cursor-pointer hover:bg-white transition-colors">
            <span className="text-zinc-900 text-base font-semibold">Read API reference</span>
          </div>
        </div>

        <p className="text-slate-500 text-xs font-mono pt-2">
          Fields shown match the current API reference. Response redacts any account-specific values.
        </p>
      </div>

      {/* Right Code Explorer Card */}
      <div className="relative z-10 w-full lg:w-[586px] h-96 bg-neutral-900 rounded-2xl border border-gray-800 overflow-hidden flex flex-col shadow-2xl backdrop-blur-md">
        <div className="w-full h-14 px-4 border-b border-gray-800 flex items-center justify-between bg-zinc-900/60">
          <div className="flex items-center gap-2">
            {(['cURL', 'Node', 'Python'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-mono font-medium transition-colors cursor-pointer ${
                  activeTab === tab
                    ? 'text-white border-b-2 border-teal-400 font-bold'
                    : 'text-slate-400 hover:text-white border-b-2 border-transparent'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded border border-gray-700 text-xs font-normal text-slate-300 transition-colors cursor-pointer"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className="p-6 flex-1 overflow-auto font-mono text-xs text-slate-300 leading-relaxed bg-neutral-950">
          <pre className="whitespace-pre-wrap">{codeSnippets[activeTab]}</pre>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const reqContent = `POST /v1/assets
{
  "source": "direct_upload",
  "playback_policy": "public"
  // optional: metadata, external_id, poster — collapsed by default
}`;

const resContent = `HTTP/1.1 201 Created
{
  "id": "asset_9J2kd58xX02laK",
  "status": "waiting_for_upload",
  "playback_policy": "public",
  "upload_url": "https://upload.zoikostream.com/v1/uploads/up_9J2kd...",
  "created_at": "2026-08-26T14:30:00Z"
}`;

export function RequestResponseExplorerSection() {
  const [activeTab, setActiveTab] = useState<'Request' | 'Response'>('Request');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab === 'Request' ? reqContent : resContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-zinc-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/video-api/bg (50).png"
          alt="Explorer Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/90 to-zinc-950/95" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-mono font-bold uppercase tracking-wide">
              REQUEST / RESPONSE EXPLORER
            </span>
          </div>

          <h2 className="text-slate-100 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Create the resource. Receive only what the next step needs.
          </h2>

          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7 max-w-[760px]">
            Optional fields stay collapsed by default. The response returns the resource ID, status, and an upload authorization only when the contract returns one.
          </p>
        </div>

        {/* Code Box */}
        <div className="w-full bg-neutral-900 rounded-2xl border border-gray-800 overflow-hidden flex flex-col shadow-2xl backdrop-blur-md">
          <div className="w-full h-14 px-6 border-b border-gray-800 flex items-center justify-between bg-zinc-900/60">
            <div className="flex items-center gap-2">
              {(['Request', 'Response'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-mono font-medium transition-colors cursor-pointer ${
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
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded border border-gray-700 text-xs font-mono text-slate-300 transition-colors cursor-pointer"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="p-6 font-mono text-xs text-slate-300 leading-relaxed bg-neutral-950 overflow-x-auto min-h-[160px]">
            <pre className="whitespace-pre-wrap">
              {activeTab === 'Request' ? reqContent : resContent}
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-slate-500 text-xs font-mono">
            Persist <span className="text-teal-400">asset.id</span> for later retrieval. Do not persist the upload authorization longer than the transfer requires.
          </p>

          <div className="px-6 py-3 bg-zinc-100 rounded-lg border border-gray-700 w-fit cursor-pointer hover:bg-white transition-colors">
            <span className="text-gray-800 text-sm font-semibold">Open in API reference →</span>
          </div>
        </div>
      </div>
    </section>
  );
}

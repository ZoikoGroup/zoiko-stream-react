'use client';

import React, { useState } from 'react';

const transferMethods = [
  {
    id: 'server',
    title: 'Server upload',
    bestFor: 'media already on your backend',
    resumable: 'per documented protocol',
    authSurface: 'server API credential',
    snippet: `# Server upload: your backend transfers the file directly`,
    code:`
   "Authorization: Bearer $ZOIKO_API_KEY" 
   "file=@source.mp4" 
   "playback_policy=public"`,
  },
  {
    id: 'direct',
    title: 'Direct browser / mobile upload',
    bestFor: 'user-generated content',
    resumable: 'per documented protocol',
    authSurface: 'scoped upload authorization',
    snippet: `# Direct browser upload: client uses scoped upload URL directly`,
    code:`
  "Content-Type: video/mp4" 
  data-binary "@user_video.mp4"`,
  },
  {
    id: 'remote',
    title: 'Remote URL / import',
    bestFor: 'media hosted at a reachable URL',
    resumable: 'handled by the platform',
    authSurface: 'server API credential',
    snippet: `# Remote URL import: platform fetches media asynchronously`,
    code:`
  "Authorization: Bearer $ZOIKO_API_KEY" 
   '{ "url": "https://storage.example.com/videos/source.mp4" }'`,
  },
  {
    id: 'bulk',
    title: 'Migration / bulk ingest',
    bestFor: 'moving an existing catalog',
    resumable: 'batch-level tracking',
    authSurface: 'server API credential',
    snippet: `# Bulk ingest batch API request`,
    code:
   `"Authorization: Bearer $ZOIKO_API_KEY" 
   '{ "sources": ["https://.../1.mp4", "https://.../2.mp4"] }'`,
  },
];

export function PickYourTransferMethodSection() {
  const [selectedId, setSelectedId] = useState('server');
  const selectedMethod = transferMethods.find((m) => m.id === selectedId) || transferMethods[0];

  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-wide">
              PICK YOUR TRANSFER METHOD
            </span>
          </div>

          <h2 className="text-zinc-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Choose the ingest path that fits where your media starts.
          </h2>

          <p className="text-gray-500 text-base lg:text-lg font-normal leading-7">
            Selecting a path updates the example below. Each path is shown only because it&apos;s currently supported.
          </p>
        </div>

        {/* 4 Transfer Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transferMethods.map((m) => {
            const isSelected = selectedId === m.id;
            return (
              <div
                key={m.id}
                onClick={() => setSelectedId(m.id)}
                className={`p-5 bg-white rounded-2xl cursor-pointer transition-all flex flex-col gap-3 shadow-sm ${
                  isSelected
                    ? 'border-2 border-blue-500 shadow-md ring-2 ring-blue-500/10'
                    : 'border border-gray-200 hover:border-gray-400'
                }`}
              >
                <h3 className="text-zinc-900 text-sm font-bold">{m.title}</h3>
                <div className="flex flex-col gap-1.5 text-xs">
                  <p>
                    <strong className="text-zinc-900">Best for:</strong>{' '}
                    <span className="text-gray-500">{m.bestFor}</span>
                  </p>
                  <p>
                    <strong className="text-zinc-900">Resumable:</strong>{' '}
                    <span className="text-gray-500">{m.resumable}</span>
                  </p>
                  <p>
                    <strong className="text-zinc-900">Auth surface:</strong>{' '}
                    <span className="text-gray-500">{m.authSurface}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Code Snippet Box */}
        <div className="w-full bg-neutral-900 rounded-2xl border border-gray-800 overflow-hidden flex flex-col shadow-xl">
          <div className="px-6 py-3 border-b border-gray-800 flex justify-between items-center bg-zinc-900/60">
            <span className="text-slate-400 text-xs font-mono">{selectedMethod.title}</span>
            <span className="text-slate-500 text-xs font-mono cursor-pointer hover:text-white">Copy</span>
          </div>

          <div className="p-6 font-mono text-xs text-slate-300 leading-relaxed bg-neutral-950 overflow-x-auto">
            <pre className="whitespace-pre-wrap">{selectedMethod.snippet}</pre>
            <pre className='whitespace-pre-wrap text-teal-400'>{selectedMethod.code}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}

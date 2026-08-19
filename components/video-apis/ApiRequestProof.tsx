'use client';

import React from 'react';

export default function ApiRequestProof() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250 font-spaceGrotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left font-spaceGrotesk">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold tracking-tight">
            Request-to-Outcome Proof
          </h2>
          <p className="text-slate-655 dark:text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
            See what an implementation looks like with a verified, maintained example. Simple contracts, robust systems.
          </p>
        </div>

        {/* HTTP Console Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full font-mono text-xs">
          
          {/* Left panel: POST Request */}
          <div className="p-6 bg-neutral-900 rounded-xl flex flex-col gap-3 border border-neutral-800 shadow-lg">
            <div className="flex justify-between items-center w-full">
              <span className="text-teal-400 font-bold font-spaceGrotesk">HTTPS POST REQUEST</span>
              <span className="text-slate-500 font-medium font-spaceGrotesk">REST API v1.4</span>
            </div>
            <div className="h-px bg-zinc-800 w-full" />
            <pre className="text-white leading-relaxed overflow-x-auto whitespace-pre">
{`POST /v1/streams HTTP/1.1
Host: api.zoikostream.com
Authorization: Bearer zk_live_8372bf...
Content-Type: application/json

{
  "name": "Keynote Broadcast SF",
  "ingest_protocol": "SRT",
  "latency_mode": "low",
  "recording": {
    "enabled": true,
    "redundant": true
  }
}`}
            </pre>
          </div>

          {/* Right panel: Response Success */}
          <div className="p-6 bg-neutral-900 rounded-xl flex flex-col gap-3 border border-neutral-800 shadow-lg">
            <div className="flex justify-between items-center w-full">
              <span className="text-teal-500 font-bold font-spaceGrotesk">JSON RESPONSE SUCCESS</span>
              <span className="text-slate-500 font-medium font-spaceGrotesk">HTTP/1.1 201 Created</span>
            </div>
            <div className="h-px bg-zinc-800 w-full" />
            <pre className="text-blue-300 leading-relaxed overflow-x-auto whitespace-pre">
{`{
  "id": "str_938bf82a",
  "status": "initializing",
  "ingest_url": "srt://ingest.zoiko.com:10200",
  "playback_url": "https://cdn.zoiko.com/live/str_938b...",
  "created_at": "2026-03-20T13:00:00Z",
  "redundant_paths": 2
}`}
            </pre>
          </div>

        </div>

        {/* Sandbox Metrics Panel */}
        <div className="p-5 bg-slate-50 dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full text-xs font-spaceGrotesk">
          <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-zinc-400">
            <div>
              <span>API Version: </span>
              <span className="font-bold text-zinc-955 dark:text-white">v1.4.2</span>
            </div>
            <div>
              <span>Tested Date: </span>
              <span className="font-bold text-zinc-955 dark:text-white">2026-03-18</span>
            </div>
            <div>
              <span>Sandbox Environment: </span>
              <span className="font-bold text-zinc-955 dark:text-white">sandbox-us-west</span>
            </div>
          </div>
          
          <a 
            href="#handbooks" 
            className="text-blue-500 dark:text-blue-400 font-bold hover:underline"
          >
            View Error Code Handbooks →
          </a>
        </div>

      </div>
    </section>
  );
}

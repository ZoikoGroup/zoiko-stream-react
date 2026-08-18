'use client';

import React from 'react';
import { AlertCircle, CheckSquare } from 'lucide-react';

export default function A11yReadinessBoard() {
  const tableData = [
    {
      req: 'Keyboard navigation',
      scope: 'Global',
      method: 'WCAG Focus Flow',
      owner: 'Alex T.',
      state: { text: 'Verified', style: 'text-emerald-600 bg-emerald-600/10 outline-emerald-600/30' },
      time: '14:05',
      limit: 'None',
      alt: 'None',
      action: 'Log test'
    },
    {
      req: 'Sign language overlay',
      scope: 'Optional',
      method: 'PiP feed routing',
      owner: 'Sarah K.',
      state: { text: 'Planned', style: 'text-blue-500 bg-blue-500/10 outline-blue-500/30' },
      time: 'Pending',
      limit: 'Encoder delay',
      alt: 'En transcript',
      action: 'Deploy feed'
    },
    {
      req: 'Live Captions Stream',
      scope: 'Global',
      method: 'Endpoint V3 API',
      owner: 'John D.',
      state: { text: 'Changed', style: 'text-amber-600 bg-amber-500/10 outline-amber-600/30' },
      time: '14:02',
      limit: 'None',
      alt: 'VOD alternative',
      action: 'Reverify'
    },
    {
      req: 'Complex SVG Alts',
      scope: 'Visuals',
      method: 'Text alternatives',
      owner: 'Alex T.',
      state: { text: 'Limitation', style: 'text-red-500 bg-red-500/10 outline-red-500/30' },
      time: '13:58',
      limit: 'Complex charts',
      alt: 'SLA live desc',
      action: 'Edit alternative'
    },
    {
      req: 'Real-Time Braille',
      scope: 'Global',
      method: 'S-Tactile API',
      owner: 'John D.',
      state: { text: 'Unavailable', style: 'text-slate-500 bg-slate-100 dark:bg-zinc-800 outline-zinc-800' },
      time: 'Unsupported',
      limit: 'Hardware lack',
      alt: 'Full Transcript',
      action: 'Review API'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-950 dark:text-white text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Accessibility Readiness Board
          </h2>
          <p className="text-gray-605 dark:text-zinc-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Every requirement visible. Every state explicit. No composite scores hiding blockers.
          </p>
        </div>

        {/* Readiness Dashboard Container */}
        <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 dark:outline-zinc-850 flex flex-col overflow-hidden shadow-xl">
          
          {/* Header Bar */}
          <div className="p-5 bg-slate-50 dark:bg-zinc-950/40 border-b border-slate-200 dark:border-zinc-850 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="size-6 bg-teal-400 rounded-md flex justify-center items-center">
                <CheckSquare className="size-4 text-white" />
              </div>
              <span className="text-zinc-955 dark:text-white text-base font-bold font-spaceGrotesk">
                Global Keynote 2026 — Readiness
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold font-spaceGrotesk">
              <span className="text-gray-500 dark:text-zinc-400">PLAN VERSION: v3.1</span>
              <span className="text-teal-500 dark:text-teal-400">LAST VERIFIED: 3 MIN AGO</span>
            </div>
          </div>

          {/* Warning Message Bar */}
          <div className="px-6 py-3.5 bg-amber-50 dark:bg-amber-950/20 border-b border-amber-200 dark:border-amber-900/50 flex items-start gap-3 text-left">
            <AlertCircle className="size-4 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
            <p className="text-amber-800 dark:text-amber-400 text-xs font-medium font-spaceGrotesk leading-relaxed">
              Changed since verification: Caption provider endpoint updated — active revalidation required before live air.
            </p>
          </div>

          {/* Table Area with Horizontal scroll for columns */}
          <div className="w-full overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-teal-400">
            <div className="min-w-[1000px] flex flex-col w-full">
              
              {/* Table Head */}
              <div className="px-6 py-3.5 bg-slate-50/50 dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-850 flex items-center justify-start text-left">
                <span className="w-44 text-gray-700 dark:text-zinc-400 text-xs font-bold font-spaceGrotesk">Requirement</span>
                <span className="w-20 text-gray-700 dark:text-zinc-400 text-xs font-bold font-spaceGrotesk">Scope</span>
                <span className="w-44 text-gray-700 dark:text-zinc-400 text-xs font-bold font-spaceGrotesk">Method</span>
                <span className="w-24 text-gray-700 dark:text-zinc-400 text-xs font-bold font-spaceGrotesk">Owner</span>
                <span className="w-28 text-gray-700 dark:text-zinc-400 text-xs font-bold font-spaceGrotesk">State</span>
                <span className="w-28 text-gray-700 dark:text-zinc-400 text-xs font-bold font-spaceGrotesk">Last Verification</span>
                <span className="w-28 text-gray-700 dark:text-zinc-400 text-xs font-bold font-spaceGrotesk">Limitation</span>
                <span className="w-28 text-gray-700 dark:text-zinc-400 text-xs font-bold font-spaceGrotesk">Alternative</span>
                <span className="flex-1 text-gray-700 dark:text-zinc-400 text-xs font-bold font-spaceGrotesk text-right">Action</span>
              </div>

              {/* Table Body */}
              <div className="flex flex-col">
                {tableData.map((row, idx) => (
                  <div 
                    key={idx}
                    className="px-6 py-4 border-b border-slate-200 dark:border-zinc-850 flex items-center justify-start hover:bg-slate-50/30 dark:hover:bg-zinc-950/20 text-left transition-colors"
                  >
                    <span className="w-44 text-zinc-950 dark:text-white text-xs font-bold font-spaceGrotesk">{row.req}</span>
                    <span className="w-20 text-gray-500 dark:text-zinc-400 text-xs font-normal font-spaceGrotesk">{row.scope}</span>
                    <span className="w-44 text-zinc-950 dark:text-white text-xs font-normal font-spaceGrotesk">{row.method}</span>
                    <span className="w-24 text-gray-600 dark:text-zinc-400 text-xs font-normal font-spaceGrotesk">{row.owner}</span>
                    
                    <div className="w-28 flex justify-start">
                      <span className={`px-2.5 py-0.5 rounded-full outline outline-1 text-[10px] font-bold font-mono tracking-wider uppercase ${row.state.style}`}>
                        {row.state.text}
                      </span>
                    </div>

                    <span className="w-28 text-gray-500 dark:text-zinc-450 text-xs font-normal font-spaceGrotesk">{row.time}</span>
                    
                    <span className={`w-28 text-xs font-normal font-spaceGrotesk ${
                      row.limit !== 'None' ? 'text-red-500' : 'text-gray-500 dark:text-zinc-450'
                    }`}>
                      {row.limit}
                    </span>
                    
                    <span className="w-28 text-gray-500 dark:text-zinc-450 text-xs font-normal font-spaceGrotesk">{row.alt}</span>
                    
                    <span className="flex-1 text-right">
                      <button className="text-blue-500 hover:text-blue-400 text-xs font-bold font-spaceGrotesk bg-transparent border-none cursor-pointer">
                        {row.action}
                      </button>
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

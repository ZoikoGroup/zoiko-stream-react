'use client';

import React from 'react';

export default function ConferenceProgramMap() {
  const schedule = [
    {
      time: '09:00',
      duration: '45 min',
      slots: [
        {
          title: 'Scale with SRT Listener pipelines',
          speaker: 'Dave Holloway · Tech Lead',
          borderCol: 'border-teal-400/20',
          status: 'LIVE NOW',
          statusCol: 'text-emerald-500 bg-emerald-500/10',
          dotCol: 'bg-emerald-500'
        },
        {
          title: 'Designing high-integrity event briefs',
          speaker: 'Maya Webb · Product',
          borderCol: 'border-blue-500/20',
          status: 'LIVE NOW',
          statusCol: 'text-emerald-500 bg-emerald-500/10',
          dotCol: 'bg-emerald-500'
        },
        {
          title: 'Operator Readiness Workshop',
          speaker: 'Training Team · Workshop',
          borderCol: 'border-orange-300/20',
          status: 'STARTING SOON',
          statusCol: 'text-gray-500 bg-gray-500/10',
          dotCol: 'bg-gray-500'
        }
      ]
    },
    {
      time: '10:00',
      duration: '45 min',
      slots: [
        {
          title: 'Dynamic failover switch drill',
          speaker: 'Net Ops Lead · Technical',
          borderCol: 'border-teal-400/20',
          status: 'SCHEDULED',
          statusCol: 'text-blue-500 bg-blue-500/10',
          dotCol: 'bg-blue-500'
        },
        {
          title: 'Unpublishing: Deletion governance',
          speaker: 'Compliance Team · Policy',
          borderCol: 'border-orange-300/30',
          status: 'REVIEW GATE',
          statusCol: 'text-orange-400 bg-orange-500/10',
          dotCol: 'bg-orange-300'
        },
        {
          title: 'Accessibility deep-dive session',
          speaker: 'A11y Team · Workshop',
          borderCol: 'border-orange-300/20',
          status: 'SCHEDULED',
          statusCol: 'text-blue-500 bg-blue-500/10',
          dotCol: 'bg-blue-500'
        }
      ]
    },
    {
      time: '11:00',
      duration: '60 min',
      slots: [
        {
          title: 'SAML 2.0 integration deep-dive',
          speaker: 'Auth Eng · Security',
          borderCol: 'border-teal-400/20',
          status: 'CONFIRMED',
          statusCol: 'text-emerald-500 bg-emerald-500/10',
          dotCol: 'bg-emerald-500'
        },
        {
          title: 'Live event brief lifecycle review',
          speaker: 'Product Lead · Strategy',
          borderCol: 'border-blue-500/20',
          status: 'CONFIRMED',
          statusCol: 'text-emerald-500 bg-emerald-500/10',
          dotCol: 'bg-emerald-500'
        },
        {
          title: 'Hands-on: Build an event brief',
          speaker: 'Solutions Eng · Workshop',
          borderCol: 'border-orange-300/20',
          status: 'SCHEDULED',
          statusCol: 'text-blue-500 bg-blue-500/10',
          dotCol: 'bg-blue-500'
        }
      ]
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-b border-gray-200 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-gray-900 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Interactive Program Map
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Monitor all track sessions, current speakers, and signal paths from one visual interface.
          </p>
        </div>

        {/* Dashboard Frame Container */}
        <div className="self-stretch bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col overflow-hidden">
          
          {/* Header Panel */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="size-2.5 bg-red-500 rounded-full" />
                <div className="size-2.5 bg-orange-300 rounded-full" />
                <div className="size-2.5 bg-emerald-500 rounded-full" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold font-mono text-gray-500">
                <span>ZOIKOSTREAM</span>
                <span>/</span>
                <span>CONFERENCES</span>
                <span>/</span>
                <span className="text-teal-500">PROGRAM MAP</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-[10px] font-bold font-mono text-gray-500">
              <div className="px-2 py-1 bg-emerald-500/10 rounded-sm outline outline-1 outline-offset-[-1px] outline-emerald-500/30 flex items-center gap-1.5 text-emerald-500 shrink-0">
                <div className="size-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span>ALL SYSTEMS LIVE</span>
              </div>
              <span className="shrink-0 font-normal">SUN 14 JUL 2026 · 09:42 UTC</span>
            </div>
          </div>

          {/* Time & Tracks header (Grid headers) */}
          <div className="w-full overflow-x-auto scrollbar-none">
            <div className="min-w-[850px] px-6 py-3 bg-gray-100 border-b border-gray-200 flex items-center">
              <div className="w-28 shrink-0 text-gray-500 text-[10px] font-bold font-mono">
                TIME (UTC)
              </div>
              <div className="flex-1 flex items-center gap-2">
                <div className="size-2 bg-teal-400 rounded-xs" />
                <span className="text-teal-600 text-[10px] font-bold font-mono">TRACK A · TECHNICAL</span>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <div className="size-2 bg-blue-500 rounded-xs" />
                <span className="text-blue-500 text-[10px] font-bold font-mono">TRACK B · PRODUCT</span>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <div className="size-2 bg-orange-300 rounded-xs" />
                <span className="text-yellow-700 text-[10px] font-bold font-mono">TRACK C · WORKSHOP</span>
              </div>
            </div>
          </div>

          {/* Map Rows */}
          <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-teal-400">
            <div className="min-w-[850px] flex flex-col">
              {schedule.map((row, idx) => (
                <div 
                  key={idx}
                  className={`px-6 flex items-stretch border-b border-gray-200 ${
                    idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  {/* Time block */}
                  <div className="w-28 py-4 shrink-0 flex flex-col justify-center items-start gap-0.5 select-none">
                    <span className="text-gray-900 text-xs font-bold font-mono">{row.time}</span>
                    <span className="text-gray-500 text-[10px] font-normal font-mono">{row.duration}</span>
                  </div>

                  {/* Slots blocks */}
                  {row.slots.map((slot, sIdx) => (
                    <div key={sIdx} className="flex-1 pr-3 py-3 flex items-stretch">
                      <div className={`flex-1 p-3.5 bg-white rounded-md border-l-2 border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] inline-flex flex-col justify-between items-start gap-1.5 ${slot.borderCol} border-l-teal-400/40 hover:shadow-md transition-shadow`}>
                        <div className="inline-flex items-center gap-2">
                          <div className={`size-1.5 rounded-full ${slot.dotCol}`} />
                          <span className={`text-[9px] font-bold font-mono tracking-wider px-1.5 py-0.5 rounded-sm ${slot.statusCol}`}>
                            {slot.status}
                          </span>
                        </div>
                        <h4 className="text-gray-900 text-xs font-bold font-spaceGrotesk text-left">
                          {slot.title}
                        </h4>
                        <span className="text-gray-500 text-[10px] font-normal font-spaceGrotesk">
                          {slot.speaker}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Panel */}
          <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-gray-500 text-[9px] font-bold font-mono">
                <div className="size-1.5 bg-emerald-500 rounded-full" />
                <span>LIVE</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-[9px] font-bold font-mono">
                <div className="size-1.5 bg-blue-500 rounded-full" />
                <span>SCHEDULED</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-[9px] font-bold font-mono">
                <div className="size-1.5 bg-orange-300 rounded-full" />
                <span>NEEDS REVIEW</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-[9px] font-bold font-mono">
                <div className="size-1.5 bg-gray-500 rounded-full" />
                <span>PENDING</span>
              </div>
            </div>
            <div className="text-gray-500 text-[9px] font-bold font-mono tracking-wider">
              3 TRACKS · 9 SESSIONS · AUTO-REFRESH 30s
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

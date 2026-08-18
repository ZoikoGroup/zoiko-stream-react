'use client';

import React from 'react';

export default function ApiReadinessChecklist() {
  const items = [
    {
      title: 'API Authentication',
      desc: 'Obtain high-privilege Bearer keys and register webhook listener signing secrets.',
      badge: { text: 'Ready', style: 'text-emerald-500 bg-emerald-500/10' }
    },
    {
      title: 'Identity & secrets',
      desc: 'Sync SAML whitelists to manage restricted audience playback access tokens.',
      badge: { text: 'Needs Info', style: 'text-amber-600 bg-amber-600/10' }
    },
    {
      title: 'Workflow scope design',
      desc: 'Confirm stream resolution, low-latency limits, and DVR retention contracts.',
      badge: { text: 'Ready', style: 'text-teal-500 bg-teal-500/10' }
    },
    {
      title: 'Request contract rules',
      desc: 'Formulate stream payload parameters against target REST API versioning guidelines.',
      badge: { text: 'Requires Access', style: 'text-red-500 bg-red-500/10' }
    },
    {
      title: 'Events & webhooks async',
      desc: 'Prepare local receiving microservices for real-time live events alerts.',
      badge: { text: 'Ready', style: 'text-teal-500 bg-teal-500/10' }
    },
    {
      title: 'Playback & output CDN',
      desc: 'Determine HLS streaming presets, redundant routes, and adaptive bitrate configs.',
      badge: { text: 'Ready', style: 'text-teal-500 bg-teal-500/10' }
    },
    {
      title: 'Failure path handling',
      desc: 'Configure hot redundant ingestion failover switches for active encoders.',
      badge: { text: 'Needs Info', style: 'text-amber-600 bg-amber-600/10' }
    },
    {
      title: 'Change management policy',
      desc: 'Review API deprecation timelines and test-suite execution calendars.',
      badge: { text: 'Ready', style: 'text-teal-500 bg-teal-500/10' }
    },
    {
      title: 'Security & privacy audit',
      desc: 'Enforce federal-grade AES payload encryption configurations across target nodes.',
      badge: { text: 'Ready', style: 'text-teal-500 bg-teal-500/10' }
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900 font-spaceGrotesk">
      <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left font-spaceGrotesk">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-slate-101 text-3xl sm:text-4xl font-bold tracking-tight">
            Integration Readiness Checklist
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
            Verify your team is structurally ready to implement programmable media operations.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-3 hover:border-zinc-700/50 transition-all duration-300 min-h-[160px]"
            >
              <div className="flex justify-between items-center w-full">
                <h3 className="text-slate-101 text-base font-bold leading-snug">
                  {item.title}
                </h3>
                <span className={`px-2.5 py-0.5 rounded-sm text-[10px] font-bold shrink-0 ${item.badge.style}`}>
                  {item.badge.text}
                </span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed text-left">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

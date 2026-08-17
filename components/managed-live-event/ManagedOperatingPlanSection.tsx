'use client';

import React from 'react';

export default function ManagedOperatingPlanSection() {
  const rows = [
    {
      domain: 'Venue Source',
      resp: 'Sanctuary AV setup, physical hardware encoder output, local network stability.',
      owner: 'Customer/Venue',
      status: 'VERIFIED',
      statusType: 'verified', // emerald
      time: '2 hours ago'
    },
    {
      domain: 'Contribution Path',
      resp: 'SRT/RTMP link ingest endpoints, transcoder profiles configuration.',
      owner: 'ZoikoStream',
      status: 'VERIFIED',
      statusType: 'verified',
      time: '2 hours ago'
    },
    {
      domain: 'Production Mixer',
      resp: 'Multi-camera physical switching, slide triggers, on-stage talent timing.',
      owner: 'Customer AV Crew',
      status: 'VERIFIED',
      statusType: 'verified',
      time: '2 hours ago'
    },
    {
      domain: 'Graphics & Content',
      resp: 'Overlay lower-thirds culing, lyric rendering, pre-event roll videos.',
      owner: 'Customer Crew',
      status: 'PENDING',
      statusType: 'warning', // amber
      time: '2 hours ago'
    },
    {
      domain: 'Audience Access',
      resp: 'User portal directories authentication, SSO parameters validation.',
      owner: 'Shared IT Team',
      status: 'VERIFIED',
      statusType: 'verified',
      time: '2 hours ago'
    },
    {
      domain: 'Accessibility',
      resp: 'Real-time AI captions generation, sign language video overlay matrixing.',
      owner: 'ZoikoStream',
      status: 'VERIFIED',
      statusType: 'verified',
      time: '2 hours ago'
    },
    {
      domain: 'Safeguarding',
      resp: 'SSO enforcement, minors blurring overlay, secure link access protection.',
      owner: 'Shared IT Team',
      status: 'VERIFIED',
      statusType: 'verified',
      time: '2 hours ago'
    },
    {
      domain: 'Active Support',
      resp: 'Live operator assistance chat, direct phone link to monitoring center.',
      owner: 'ZoikoStream',
      status: 'ASSIGNED',
      statusType: 'assigned', // blue
      time: '2 hours ago'
    },
    {
      domain: 'Archive Lifecycle',
      resp: 'HD cloud recording trigger, compliant archive migration, automatic pruning.',
      owner: 'ZoikoStream',
      status: 'VERIFIED',
      statusType: 'verified',
      time: '2 hours ago'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/managed-live-event/bg (11).png')" }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Who does what — mapped, not assumed
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Production responsibilities are explicit. Nothing implies that ZoikoStream automatically manages local venue inputs.
          </p>
        </div>

        {/* Plan Matrix Box (No borders) */}
        <div className="p-6 sm:p-8 bg-gray-900/60 rounded-2xl flex flex-col gap-6 shadow-xl border border-slate-805/40 backdrop-blur-sm">
          <h3 className="text-white text-base font-bold font-sans">
            Comprehensive Operating Plan Matrix
          </h3>
          
          <div className="w-full overflow-x-auto">
            <div className="min-w-[850px] flex flex-col gap-2">
              
              {/* Header row */}
              <div className="flex items-center gap-4 px-4 py-3 bg-slate-800 rounded-xl text-slate-500 text-xs font-bold uppercase tracking-wider">
                <div className="w-1/5">DOMAIN</div>
                <div className="flex-1">RESPONSIBILITY</div>
                <div className="w-1/6">OWNER</div>
                <div className="w-1/8 text-center">STATUS</div>
                <div className="w-1/6 text-right">LAST VERIFIED</div>
              </div>

              {/* Rows */}
              {rows.map((row, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 px-4 py-4 bg-zinc-950/70 rounded-xl transition-colors hover:bg-zinc-950/40"
                >
                  <div className="w-1/5 text-teal-400 text-xs font-bold font-sans uppercase tracking-wider">{row.domain}</div>
                  <div className="flex-1 text-slate-400 text-xs font-sans leading-relaxed">{row.resp}</div>
                  <div className="w-1/6 text-slate-200 text-xs font-sans">{row.owner}</div>
                  
                  <div className="w-1/8 flex justify-center">
                    <span 
                      className={`px-3 py-1 text-[9px] font-bold rounded-sm border ${
                        row.statusType === 'verified'
                          ? 'bg-emerald-500/10 text-emerald-450 border-emerald-500/20'
                          : row.statusType === 'warning'
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      }`}
                    >
                      {row.status}
                    </span>
                  </div>

                  <div className="w-1/6 text-slate-500 text-xs font-sans text-right">{row.time}</div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

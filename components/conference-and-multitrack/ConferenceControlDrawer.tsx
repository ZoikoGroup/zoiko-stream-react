'use client';

import React from 'react';
import Image from 'next/image';

export default function ConferenceControlDrawer() {
  const auditItems = [
    {
      track: 'TRACK B · DEV OPS',
      title: 'Scaling SRT Listener Pipelines',
      owner: 'Dave Holloway (Tech Lead)',
      status: 'Ready',
      statusStyle: 'text-emerald-500 bg-emerald-500/10',
      img: '/images/conferences-and-multitrack/PreviewImage.png'
    },
    {
      track: 'TRACK D · AUDIENCES',
      title: 'Dynamic Failover Switch Drill',
      owner: 'Sarah Jenkins (Ops Director)',
      status: 'Changed Since Test',
      statusStyle: 'text-blue-500 bg-blue-500/10',
      img: '/images/conferences-and-multitrack/PreviewImage (1).png'
    },
    {
      track: 'TRACK F · ACCESSIBILITY',
      title: 'Simultaneous Japanese Caption Verification',
      owner: 'Kenji Sato (A11y Lead)',
      status: 'Blocked',
      statusStyle: 'text-red-500 bg-red-500/10',
      img: '/images/conferences-and-multitrack/PreviewImage (2).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/conferences-and-multitrack/bg (19).png')" }}
      />
      <div className="absolute -left-[100px] top-[-80px] w-[600px] h-[500px] bg-gradient-to-b from-blue-500/10 to-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Session-level planning and control
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Go beyond bulk event settings. Configure, audit, and authorize individual track sessions with dedicated control grids for security, accessibility, and high-consequence stream failover.
          </p>
        </div>

        {/* Content Columns */}
        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-10">
          
          {/* Left Column: Session Control Drawer Mock */}
          <div className="w-full lg:w-[760px] p-6 sm:p-8 bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex flex-col justify-start items-start gap-6 shadow-2xl">
            <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-col justify-start items-start gap-1">
                <h3 className="text-slate-100 text-xl font-bold font-spaceGrotesk leading-tight">Session Control Drawer</h3>
                <div className="text-slate-450 text-xs font-mono tracking-wider">SESSION_ID: ZS-2026-KEYNOTE-01</div>
              </div>
              <span className="px-3 py-1 bg-orange-300/10 rounded-sm text-orange-400 text-xs font-bold font-spaceGrotesk uppercase tracking-wider shrink-0 select-none">
                Needs Review
              </span>
            </div>

            {/* Tabs */}
            <div className="self-stretch pb-3 border-b border-zinc-800 overflow-x-auto flex items-center gap-2 select-none scrollbar-none">
              <span className="px-4 py-2 bg-teal-400/10 rounded-md text-teal-450 text-sm font-bold font-spaceGrotesk shrink-0">Overview</span>
              <span className="px-4 py-2 text-slate-400 text-sm font-normal font-spaceGrotesk shrink-0">Source &amp; Contribution</span>
              <span className="px-4 py-2 text-slate-400 text-sm font-normal font-spaceGrotesk shrink-0">Audience Access</span>
              <span className="px-4 py-2 text-slate-400 text-sm font-normal font-spaceGrotesk shrink-0">Accessibility</span>
              <span className="px-4 py-2 text-slate-400 text-sm font-normal font-spaceGrotesk shrink-0">Support &amp; Resilience</span>
            </div>

            {/* Field Details */}
            <div className="self-stretch flex flex-col gap-5 w-full">
              <div className="flex flex-col sm:flex-row gap-5 w-full">
                <div className="flex-1 flex flex-col gap-2">
                  <span className="text-slate-200 text-sm font-bold font-spaceGrotesk">Session Title</span>
                  <div className="w-full p-3 bg-zinc-950/60 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-800 text-slate-200 text-sm font-normal font-spaceGrotesk">
                    Opening Ceremony - Main Stage
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <span className="text-slate-200 text-sm font-bold font-spaceGrotesk">Assigned Track</span>
                  <div className="w-full p-3 bg-zinc-950/60 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-800 text-slate-200 text-sm font-normal font-spaceGrotesk">
                    Keynote &amp; Plenary
                  </div>
                </div>
              </div>

              {/* Sub-panel block config */}
              <div className="self-stretch p-5 bg-zinc-950/40 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-800/80 flex flex-col justify-start items-start gap-3">
                <h4 className="text-teal-400 text-base font-bold font-spaceGrotesk">Source &amp; Contribution Config</h4>
                <div className="self-stretch flex flex-col gap-2.5 w-full">
                  <div className="self-stretch flex justify-between items-center text-sm font-spaceGrotesk">
                    <span className="text-slate-400">Primary Stream Protocol</span>
                    <span className="text-slate-100 font-medium font-mono text-xs">SRT Listener Pipeline</span>
                  </div>
                  <div className="self-stretch flex justify-between items-center text-sm font-spaceGrotesk">
                    <span className="text-slate-400">Remote Contributors</span>
                    <span className="text-slate-100 font-medium">4 Active (London, Tokyo, SF, Munich)</span>
                  </div>
                  <div className="self-stretch flex justify-between items-center text-sm font-spaceGrotesk">
                    <span className="text-slate-400">SLA Priority Tier</span>
                    <span className="text-emerald-500 font-bold uppercase tracking-wider text-xs">Tier-1 Gold Operational SLA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Audits List */}
          <div className="flex-1 flex flex-col justify-start items-start gap-5 w-full">
            <h3 className="text-slate-100 text-base font-bold font-spaceGrotesk leading-6">
              Live Session Audits
            </h3>
            
            <div className="flex flex-col gap-4 w-full">
              {auditItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 hover:border-zinc-700/50 transition-colors"
                >
                  <div className="relative w-full sm:w-28 h-20 rounded-lg overflow-hidden bg-zinc-950 shrink-0">
                    <Image 
                      src={item.img} 
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-start items-start gap-1.5 w-full text-left">
                    <div className="self-stretch flex justify-between items-center gap-2">
                      <span className="text-slate-400 text-[10px] font-bold font-mono tracking-wider">{item.track}</span>
                      <span className={`px-2.5 py-0.5 rounded-sm text-[9px] font-bold font-spaceGrotesk uppercase tracking-wide shrink-0 ${item.statusStyle}`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <h4 className="text-slate-100 text-base font-bold font-spaceGrotesk leading-tight line-clamp-1">
                      {item.title}
                    </h4>
                    
                    <span className="text-slate-400 text-xs font-normal font-spaceGrotesk">
                      Owner: {item.owner}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

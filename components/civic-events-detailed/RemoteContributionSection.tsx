'use client';

import React from 'react';

export default function RemoteContributionSection() {
  const cards = [
    {
      title: 'Invited',
      desc: 'Minimum event metadata and secure stream key sent with verification token.',
      img: '/images/civic-events-detailed/Rectangle (12).png'
    },
    {
      title: 'Setup pending',
      desc: 'Device, browser, and network parameter verification checklist queued.',
      img: '/images/civic-events-detailed/Rectangle (13).png'
    },
    {
      title: 'Ready for check',
      desc: 'Self-test loops completed successfully. Waiting for operator dispatch.',
      img: '/images/civic-events-detailed/Rectangle (15).png'
    },
    {
      title: 'Verified',
      desc: 'Signed preflight checklist log verified by system operator.',
      img: '/images/civic-events-detailed/Rectangle (16).png'
    },
    {
      title: 'Waiting / backstage',
      desc: 'High-definition feed active, muted locally. Clean program monitor loop.',
      img: '/images/civic-events-detailed/Rectangle (17).png'
    },
    {
      title: 'Live / on program',
      desc: 'Unmuted feed active on primary switcher. Public indicators active.',
      img: '/images/civic-events-detailed/Rectangle (18).png'
    },
    {
      title: 'Connection degraded',
      desc: 'Triggering backup audio slate and low-bandwidth fallback pathway.',
      img: '/images/civic-events-detailed/Rectangle (19).png'
    },
    {
      title: 'Removed / revoked',
      desc: 'Instantly terminate stream state and revert public player to catalog.',
      img: '/images/civic-events-detailed/Rectangle (20).png'
    }
  ];

  const siteRows = [
    {
      site: 'Sanctuary / Main Hall',
      zone: 'EST (UTC-5)',
      owner: 'Clerk of Council',
      path: 'Primary Ingest RTMP-1',
      status: 'Verified',
      statusType: 'verified' // emerald
    },
    {
      site: 'Annex Chamber / Overflow',
      zone: 'EST (UTC-5)',
      owner: 'Chamber AV Lead',
      path: 'Secure Ingest SRT-2',
      status: 'Verified',
      statusType: 'verified' // emerald
    },
    {
      site: 'Regional Civic Center',
      zone: 'CST (UTC-6)',
      owner: 'Facilities Director',
      path: 'Hardware Box Encoder',
      status: 'Pending',
      statusType: 'warning' // amber
    },
    {
      site: 'Sign-Language Studio',
      zone: 'PST (UTC-8)',
      owner: 'Lead Interpreter',
      path: 'WebRTC Remote Feed',
      status: 'Verified',
      statusType: 'verified' // emerald
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-200 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Plan officials, speakers, interpreters, and remote sites
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-sans">
            Remote contribution is a separate path from public viewing. Each participant needs connection instructions, rehearsal, identity confirmation, and privacy treatment.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-start items-start gap-4 overflow-hidden hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <div className="w-full h-36 overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src={c.img} 
                  alt={c.title} 
                />
              </div>
              <div className="px-5 pb-5 flex flex-col gap-2">
                <h3 className="text-zinc-900 text-lg font-bold font-sans">
                  {c.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-sans leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Synchronized Multi-Site Matrix (No Borders) */}
        <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl flex flex-col gap-6 shadow-sm border border-slate-100">
          <h3 className="text-zinc-900 text-base font-bold font-sans">
            Synchronized Multi-Site Matrix
          </h3>
          
          <div className="w-full overflow-x-auto">
            <div className="min-w-[800px] flex flex-col gap-2">
              
              {/* Header row */}
              <div className="flex items-center gap-4 px-4 py-3 bg-slate-200/50 rounded-xl text-gray-500 text-xs font-bold uppercase tracking-wider">
                <div className="w-1/4">Location Site</div>
                <div className="w-1/6">Time Zone</div>
                <div className="w-1/5">Local Owner</div>
                <div className="w-1/4">Source Path</div>
                <div className="w-1/12 text-right">Status</div>
              </div>

              {/* Rows */}
              {siteRows.map((row, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 px-4 py-4 bg-white rounded-xl transition-colors hover:bg-slate-100/50"
                >
                  <div className="w-1/4 text-zinc-900 text-sm font-bold font-sans">{row.site}</div>
                  <div className="w-1/6 text-gray-500 text-sm font-sans">{row.zone}</div>
                  <div className="w-1/5 text-gray-500 text-sm font-sans">{row.owner}</div>
                  <div className="w-1/4 text-gray-500 text-sm font-sans">{row.path}</div>
                  <div className="w-1/12 flex justify-end">
                    <span 
                      className={`px-3 py-1 text-xs font-semibold rounded-md ${
                        row.stateType === 'verified'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {row.status}
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

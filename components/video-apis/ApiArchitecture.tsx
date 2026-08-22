'use client';

import React from 'react';

export default function ApiArchitecture() {
  const stages = [
    {
      num: 'STAGE 01',
      title: 'Customer / Product',
      desc: 'Authentication, key distribution, custom front-end player clients, and application logic.'
    },
    {
      num: 'STAGE 02',
      title: 'Programmable Control',
      desc: 'Programmable stream routers, security whitelist gates, and active transcoding switches.'
    },
    {
      num: 'STAGE 03',
      title: 'ZoikoStream Media',
      desc: 'Multi-region ingest matrix, live operational monitoring, video rendering, and packet distribution.'
    },
    {
      num: 'STAGE 04',
      title: 'Output / Continuity',
      desc: 'Low-latency adaptive CDN deliveries, secure metadata replay catalogs, and VOD recording retention.'
    },
    {
      num: 'STAGE 05',
      title: 'Front-End Autonomy',
      desc: 'Developers retain complete control over player customization, client state, and access key policies locally.'
    },
    {
      num: 'STAGE 06',
      title: 'Control Layer Integration',
      desc: 'API calls validate configurations, security contracts, and trigger automated transcode pathways instantly.'
    },
    {
      num: 'STAGE 07',
      title: 'Media Operation SLA',
      desc: 'ZoikoStream takes ownership of globally resilient SRT failovers, stream health, and live ingestion stability.'
    },
    {
      num: 'STAGE 08',
      title: 'Continuous Compliance',
      desc: 'Secure master storage, encrypted assets, and automated webhook reporting comply with strict trust regulations.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-955 text-white overflow-hidden border-b border-zinc-900 font-spaceGrotesk">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/video-api/bg (50).png')" }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
      <div className="absolute left-[-100px] top-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-teal-555/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left font-spaceGrotesk">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-slate-101 text-3xl sm:text-4xl font-bold tracking-tight">
            API Architecture and Responsibility Model
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            Understand where the programmable control surface sits in the broader media lifecycle. Secure, decoupled operations at scale.
          </p>
        </div>

        {/* Stages Grid (4 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {stages.map((s, idx) => (
            <div 
              key={idx}
              className="p-6 bg-slate-900/80 rounded-2xl border border-gray-800 flex flex-col gap-3 hover:border-teal-400 transition-colors duration-300 min-h-[190px]"
            >
              <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
                {s.num}
              </span>
              <h3 className="text-slate-101 text-base sm:text-lg font-bold">
                {s.title}
              </h3>
              <div className="h-px bg-gray-800 w-full" />
              <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

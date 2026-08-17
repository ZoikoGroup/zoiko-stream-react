'use client';

import React from 'react';

export default function CorpOperationalMatrixSection() {
  const items = [
    {
      title: 'Venue & Room Access',
      desc: 'Local boardroom or auditorium AV hookups matched with operators.',
      badge: 'Verified',
      badgeClass: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      title: 'Video Sources',
      desc: 'Redundant camera inputs and high-bitrate SDI encoding verified.',
      badge: 'Verified',
      badgeClass: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      title: 'Audio Processing',
      desc: 'Mixer output gain and microphone sync validated.',
      badge: 'Verified',
      badgeClass: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      title: 'Graphics & Overlays',
      desc: 'Lower-thirds and slide templates pre-uploaded to switcher.',
      badge: 'Verified',
      badgeClass: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      title: 'Network Path Optimization',
      desc: 'Dual WAN failover and mobile cellular bonding configured.',
      badge: 'Ready',
      badgeClass: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      title: 'On-Site Operator',
      desc: 'SLA compliance requires a dedicated engineer on hot-standby.',
      badge: 'Assigned',
      badgeClass: 'bg-emerald-500/10 text-emerald-500'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-white text-zinc-900 overflow-hidden border-t border-slate-105">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-slate-900 text-4xl font-bold font-['Space_Grotesk'] leading-[60.80px]">
            Production, source, and venue responsibility
          </h2>
          <p className="text-slate-650 text-lg font-normal font-['Inter'] leading-7">
            Verify every link in the production chain before going live. From venue AV hookups and camera sources to audio processing, graphics overlays, and network failover — each element is validated and assigned to a responsible operator.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-16">
          {/* Left Column (Grid of Cards) */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-1 gap-4 font-sans">
            {items.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 bg-slate-50 rounded-xl border border-gray-200 inline-flex flex-col justify-start items-start gap-3 hover:shadow-sm transition-all"
              >
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {item.title}
                  </h3>
                  <div className={`px-3 py-1 ${item.badgeClass} rounded-sm flex justify-center items-center`}>
                    <span className="text-xs font-bold font-['Space_Grotesk']">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <p className="self-stretch text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column (Image) */}
          <div className="w-full lg:w-[560px] h-[520px] overflow-hidden rounded-3xl bg-slate-100 shadow-md shrink-0">
            <img 
              className="w-full h-full object-cover select-none pointer-events-none" 
              src="/images/corporate-broadcast-detailed/responsibility-image.png" 
              alt="Production and Operator Responsibility Mapped" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

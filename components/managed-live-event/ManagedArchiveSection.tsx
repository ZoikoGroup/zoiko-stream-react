'use client';

import React from 'react';

export default function ManagedArchiveSection() {
  const dispositions = [
    {
      title: 'High-Definition Master Copy Storage',
      desc: 'Ingested directly into AWS S3 Glacier archive',
      status: 'VERIFIED'
    },
    {
      title: 'Public Replay Transcode Destination',
      desc: 'Federated player portal + CDN caching complete',
      status: 'VERIFIED'
    },
    {
      title: 'Retention Policy Enforced',
      desc: 'Auto-pruning active in 90 days matching compliance briefs',
      status: 'VERIFIED'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-955 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/managed-live-event/bg (15).png')" }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-start items-center gap-12 sm:gap-16 text-left">
        
        {/* Left dashboard card */}
        <div className="w-full lg:w-[560px] p-8 bg-gray-900/95 rounded-2xl border border-slate-800 flex flex-col justify-start items-start gap-5 backdrop-blur-sm shadow-xl font-sans text-left">
          <span className="text-slate-100 text-sm font-bold">
            Archive & Replay Disposition
          </span>
          
          <div className="w-full h-px bg-slate-800" />
          
          <div className="w-full flex flex-col gap-4">
            {dispositions.map((item, idx) => (
              <div 
                key={idx}
                className="w-full pb-3 border-b border-slate-850/50 flex justify-between items-center gap-4 last:border-none last:pb-0"
              >
                <div className="flex-1 flex flex-col gap-1 text-left">
                  <span className="text-slate-100 text-xs font-bold leading-tight">
                    {item.title}
                  </span>
                  <span className="text-slate-400 text-xs leading-relaxed">
                    {item.desc}
                  </span>
                </div>
                <span className="text-emerald-450 text-xs font-bold uppercase shrink-0">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right text column */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-sans leading-tight tracking-tight">
            Automated archive pathways with strict retention controls.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Your live broadcast transitions seamlessly into a secure digital asset. Configure retention parameters, automated high-definition cloud backups, transcoded public replays, and legal compliance metadata automatically from your original brief.
          </p>
        </div>

      </div>
    </section>
  );
}

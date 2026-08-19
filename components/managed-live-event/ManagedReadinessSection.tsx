'use client';

import React from 'react';

export default function ManagedReadinessSection() {
  const metrics = [
    { name: 'Main Sanctuary Camera Feed Ingest', status: 'VERIFIED', type: 'verified' },
    { name: 'Remote Presenters Latency Audit', status: 'VERIFIED', type: 'verified' },
    { name: 'Dual WAN Failover Path Ping Test', status: 'VERIFIED', type: 'verified' },
    { name: 'CCLI Streaming License Log', status: 'PENDING', type: 'pending' }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-50"
        style={{ backgroundImage: "url('/images/managed-live-event/bg (14).png')" }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-start items-center gap-12 sm:gap-16 text-left">
        
        {/* Left dashboard card */}
        <div className="w-full lg:w-[560px] p-8 bg-gray-900/95 rounded-2xl border border-slate-800 flex flex-col justify-start items-start gap-6 shadow-xl backdrop-blur-sm font-sans">
          
          <div className="w-full flex justify-between items-center">
            <span className="text-slate-100 text-sm font-bold">
              Preflight Technical Readiness
            </span>
            <span className="text-emerald-450 text-xs font-bold uppercase tracking-wider">
              8 / 9 COMPLETE
            </span>
          </div>

          <div className="w-full h-px bg-slate-800" />

          <div className="w-full flex flex-col gap-4">
            {metrics.map((m, idx) => (
              <div 
                key={idx}
                className="w-full flex justify-between items-center text-xs pb-3  last:border-none last:pb-0"
              >
                <span className="text-slate-400 font-medium">{m.name}</span>
                <span 
                  className={`font-bold text-[10px] uppercase ${
                    m.type === 'verified' ? 'text-emerald-450' : 'text-amber-400'
                  }`}
                >
                  {m.status}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right text column */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-sans leading-tight tracking-tight">
            Readiness derived from metrics — not guesswork.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            We never assume a stream is healthy. Our preflight engine audits network latency, codec profiles, ingest authorization state, and support assignments explicitly. If any metric falls out of SLA boundaries, the dashboard displays active corrective warnings.
          </p>
        </div>

      </div>
    </section>
  );
}

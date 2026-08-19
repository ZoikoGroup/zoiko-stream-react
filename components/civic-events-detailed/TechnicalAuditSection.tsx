'use client';

import React from 'react';

export default function TechnicalAuditSection() {
  const rows = [
    {
      domain: 'Event authority',
      state: 'Verified',
      stateType: 'verified', // emerald
      source: 'Clerk of Chamber Logged',
      sourceSub: 'System Automation',
      details: 'All municipal credentials match active Legistar session codes.'
    },
    {
      domain: 'Venue / source',
      state: 'Verified',
      stateType: 'verified',
      source: 'SAN-Chamber-RTMP-1',
      sourceSub: 'Tech Rehearsal Loop',
      details: '720p ingestion tested with balanced local dual desk microphones.'
    },
    {
      domain: 'Access security',
      state: 'Verified',
      stateType: 'verified',
      source: 'Controlled Stakeholder',
      sourceSub: 'Auth Database Sync',
      details: 'Tokenized invitation pathways distributed and validated.'
    },
    {
      domain: 'Accessibility',
      state: 'Pending',
      stateType: 'warning', // amber
      source: 'Auto-caption module-C',
      sourceSub: 'Manual advisor audit',
      details: 'WCAG contrast parameters validated; caption alignment awaiting technician check.'
    },
    {
      domain: 'Remote contributors',
      state: 'Verified',
      stateType: 'verified',
      source: '3 board members',
      sourceSub: 'Preflight network check',
      details: 'All virtual presenters checked with low-latency browser parameters.'
    },
    {
      domain: 'Recording / replay',
      state: 'Draft',
      stateType: 'draft', // grey
      source: 'Archival Vault Ingest',
      sourceSub: 'System Config',
      details: 'Pending local approval on permanent record storage specifications.'
    },
    {
      domain: 'Support coverage',
      state: 'Verified',
      stateType: 'verified',
      source: 'Tech Support Ring-2',
      sourceSub: 'Tech Assign Log',
      details: 'Dedicated operator assigned to assist Clerk during active session.'
    },
    {
      domain: 'Dependencies',
      state: 'Verified',
      stateType: 'verified',
      source: 'CCLI Music Registry',
      sourceSub: 'Legal Check Sync',
      details: 'No public-sector streaming license gaps identified.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/civic-events-detailed/bg.png')" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Preflight, change-since-test, and active-event help
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Readiness is derived from named dimensions — no hidden green status.
          </p>
        </div>

        {/* Ledger Table (No borders) */}
        <div className="p-6 sm:p-8 bg-gray-900/60 rounded-2xl flex flex-col gap-6 shadow-xl border border-slate-800/40 backdrop-blur-sm">
          <h3 className="text-white text-base font-bold font-sans">
            Technical Alignment Audit Ledger
          </h3>
          
          <div className="w-full overflow-x-auto">
            <div className="min-w-[800px] flex flex-col gap-2">
              
              {/* Header row */}
              <div className="flex items-center gap-4 px-4 py-3 bg-slate-800 rounded-xl text-slate-500 text-xs font-bold uppercase tracking-wider">
                <div className="w-1/4">Readiness Domain</div>
                <div className="w-1/8">Status</div>
                <div className="w-1/4">Verification Source</div>
                <div className="flex-1">Audit Details</div>
              </div>

              {/* Rows */}
              {rows.map((row, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 px-4 py-4 bg-zinc-950/80 rounded-xl transition-colors hover:bg-zinc-950/40"
                >
                  <div className="w-1/4 text-slate-100 text-sm font-bold font-sans">{row.domain}</div>
                  
                  <div className="w-1/8">
                    <span 
                      className={`px-3 py-1 text-xs font-semibold rounded-md ${
                        row.stateType === 'verified'
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : row.stateType === 'warning'
                          ? 'bg-amber-500/10 text-amber-400'
                          : 'bg-slate-500/10 text-slate-400'
                      }`}
                    >
                      {row.state}
                    </span>
                  </div>
                  
                  <div className="w-1/4 flex flex-col justify-start items-start gap-0.5">
                    <span className="text-slate-100 text-xs font-sans leading-tight">
                      {row.source}
                    </span>
                    <span className="text-slate-505 text-[10px] font-sans font-light">
                      {row.sourceSub}
                    </span>
                  </div>
                  
                  <div className="flex-1 text-slate-400 text-sm font-sans leading-relaxed">
                    {row.details}
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

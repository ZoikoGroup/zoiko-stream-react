'use client';

import React from 'react';

export default function InformationContextSection() {
  const rows = [
    {
      type: 'Agenda / packet',
      treatment: 'Inlined interactive document widget alongside active video player loop.',
      verification: 'Verified official source reference linking back to Legistar/MuniCode.'
    },
    {
      type: 'Public notice',
      treatment: 'Mandatory informational header persistent until acknowledged by viewer.',
      verification: 'Automatically timestamps viewer receipt logs in compliant database formats.'
    },
    {
      type: 'Minutes / decisions',
      treatment: 'Post-event publishing sync into the public media directory catalog.',
      verification: 'Attaches verified final transcript to official legislative vault archives.'
    },
    {
      type: 'Transcript / captions',
      treatment: 'Interactive transcript search with direct seek points inside the replay.',
      verification: 'Stores immutable sidecar logs for freedom of information act lookups.'
    },
    {
      type: 'Slides / presentations',
      treatment: 'Integrated presentation sync displaying presenter materials side-by-side.',
      verification: 'Requires content validation from presenting board lead prior to airtime.'
    },
    {
      type: 'Contact / help desk',
      treatment: 'Dedicated direct support chat module for accessibility inquiries.',
      verification: 'Funnels requests directly to appointed department clerk of record.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-200 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Informational context that knows its boundaries
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-sans">
            Help viewers reach agendas, packets, notices, and minutes without replacing authoritative government systems.
          </p>
        </div>

        {/* Ledger Table (No borders) */}
        <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl flex flex-col gap-6 shadow-sm border border-slate-100">
          <h3 className="text-zinc-900 text-base font-bold font-sans">
            Government Integration Metadata Ledger
          </h3>
          
          <div className="w-full overflow-x-auto">
            <div className="min-w-[800px] flex flex-col gap-2">
              
              {/* Header row */}
              <div className="flex items-center gap-4 px-4 py-3 bg-slate-200/50 rounded-xl text-gray-500 text-xs font-bold uppercase tracking-wider">
                <div className="w-1/4">Content Type</div>
                <div className="w-5/12">Public Treatment</div>
                <div className="w-1/3">Governance Verification</div>
              </div>

              {/* Rows */}
              {rows.map((row, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 px-4 py-4 bg-white rounded-xl transition-colors hover:bg-slate-100/50"
                >
                  <div className="w-1/4 text-zinc-900 text-sm font-bold font-sans">{row.type}</div>
                  <div className="w-5/12 text-gray-505 text-sm font-sans leading-relaxed">{row.treatment}</div>
                  <div className="w-1/3 text-gray-500 text-sm font-sans leading-relaxed">{row.verification}</div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

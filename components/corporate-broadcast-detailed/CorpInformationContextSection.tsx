'use client';

import React from 'react';

export default function CorpInformationContextSection() {
  const documents = [
    {
      name: 'Executive Keynote Packet.pdf',
      version: 'v2.4 - Approved',
      sync: 'Synced 12m ago'
    },
    {
      name: 'SLA Network Routing Protocol.json',
      version: 'v1.0 - Locked',
      sync: 'Verified'
    },
    {
      name: 'Run-of-Show Stage Directions.xls',
      version: 'v3.1 - Approved',
      sync: 'Synced 2h ago'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-zinc-950 text-white overflow-hidden border-t border-slate-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/corporate-broadcast-detailed/section-bg.png')" }}
      />
      <div className="absolute inset-0  pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-slate-100 text-4xl font-bold   leading-[60.80px]">
            Documents, run-of-show contexts, and records boundary
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-7">
            Deliver schedules, policy briefs, and supporting records directly to viewers without replacing your authoritative systems. ZoikoStream acts as a secure federated bridge to Microsoft 365, Google Workspace, and proprietary portals.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-12">
          {/* Left Column (Document Ledger Card) */}
          <div className="w-full lg:w-[640px] p-8 bg-gray-900/90 rounded-2xl border border-slate-800 backdrop-blur-[10px] flex flex-col justify-start items-start gap-6 font-sans shadow-xl">
            <div className="w-full flex justify-between items-center">
              <div className="text-white text-base font-bold  ">
                Active Document Verification Ledger
              </div>
              <div className="px-3 py-1 bg-emerald-500/10 rounded-sm flex justify-center items-center">
                <span className="text-emerald-500 text-xs font-bold  ">
                  SYNCED
                </span>
              </div>
            </div>
            
            <div className="w-full h-px bg-slate-800" />
            
            <div className="w-full flex flex-col gap-3">
              {documents.map((doc, idx) => (
                <div 
                  key={idx}
                  className="w-full p-4 bg-slate-900 rounded-lg border border-slate-800 inline-flex justify-between items-center gap-4"
                >
                  <div className="inline-flex justify-start items-center gap-3">
                    <span className="text-teal-400 text-base">📄</span>
                    <div className="text-white text-sm font-bold  ">
                      {doc.name}
                    </div>
                  </div>
                  <div className="inline-flex justify-start items-center gap-4 text-xs">
                    <div className="text-slate-400  ">
                      {doc.version}
                    </div>
                    <div className="text-teal-400  ">
                      {doc.sync}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full flex flex-col justify-start items-start gap-5 font-sans">
            <h3 className="text-teal-400 text-xl font-bold  ">
              Systemic document context without replacing government databases
            </h3>
            <p className="text-slate-400 text-lg font-normal   leading-7">
              Viewers need seamless access to schedules, slide decks, policy briefs, and records. ZoikoStream acts as the secure, federated delivery bridge—integrating directly with Microsoft 365, Google Workspace, and proprietary portals—leaving authoritative storage strictly in your governed systems.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

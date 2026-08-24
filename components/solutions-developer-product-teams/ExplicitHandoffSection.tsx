import React from 'react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import Image from 'next/image';

const responsibilityRows = [
  { domain: 'Product User Experience', team: '✓', zoiko: '-', shared: '-', focus: 'Custom UI wrapper layouts' },
  { domain: 'Application Identity', team: '✓', zoiko: '-', shared: '-', focus: 'SAML OIDC credentials' },
  { domain: 'Authorization & Entitlement', team: '-', zoiko: '-', shared: '✓', focus: 'Playback JWT token gating' },
  { domain: 'Key Secret Management', team: '✓', zoiko: '-', shared: '-', focus: 'Local server-side vaulting' },
  { domain: 'Media Source Ingestion', team: '-', zoiko: '✓', shared: '-', focus: 'Multi-CDN failover paths' },
  { domain: 'Playback UI Engine', team: '-', zoiko: '-', shared: '✓', focus: 'Web / Native client SDKs' },
  { domain: 'Incident Response', team: '-', zoiko: '-', shared: '✓', focus: 'Joint SLA escalation path' },
];

export default function ExplicitHandoffSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-24 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
       <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src={bg147}
                alt="Media Lifecycle Background"
                fill
                className="object-cover opacity-30"
                priority
              />
              <div className="absolute inset-0 " />
            </div>
<div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Make the handoff explicit before you write integration code.
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Inter'] leading-relaxed max-w-4xl">
            Product teams should be able to see which responsibilities stay in their application and organization, which belong to ZoikoStream, which are shared, and which depend on third parties or an architecture decision.
          </p>
        </div>

        {/* Responsibility Matrix Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-200 border-b border-gray-200 grid grid-cols-12 gap-3 text-slate-900 text-xs font-bold font-['Space_Grotesk']">
            <span className="col-span-4">RESPONSIBILITY DOMAIN</span>
            <span className="col-span-2 text-center">PRODUCT TEAM</span>
            <span className="col-span-2 text-center">ZOIKOSTREAM</span>
            <span className="col-span-2 text-center">SHARED</span>
            <span className="col-span-2">PRIMARY FOCUS AREA</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-200">
            {responsibilityRows.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 gap-3 items-center text-xs font-['Inter']">
                <span className="col-span-4 text-slate-900 font-semibold">{row.domain}</span>
                <span className="col-span-2 text-center text-teal-600 font-bold text-base font-['Space_Grotesk']">
                  {row.team}
                </span>
                <span className="col-span-2 text-center text-blue-500 font-bold text-base font-['Space_Grotesk']">
                  {row.zoiko}
                </span>
                <span className="col-span-2 text-center text-violet-500 font-bold text-base font-['Space_Grotesk']">
                  {row.shared}
                </span>
                <span className="col-span-2 text-slate-600 font-normal">{row.focus}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-start">
          <button
            type="button"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';
import bg167 from '@/public/images/Enterprises/bg (167).png';

const archRows = [
  {
    name: 'Ingress CDN Pipe',
    purpose: 'Global live video routing',
    owner: 'ZoikoStream',
    ownerCls: 'bg-slate-100 border-slate-300 text-slate-600',
    data: 'Encrypted HLS segments, transport stream maps',
    env: 'Production',
    impact: 'High - Automated fallback to secondary CDN active',
    review: 'SUPPORTED',
    reviewCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
  },
  {
    name: 'SAML Identity Gateway',
    purpose: 'Enterprise user authentication',
    owner: 'Shared',
    ownerCls: 'bg-sky-100 border-sky-400 text-sky-700',
    data: 'SAML assertions, claims, encrypted user IDs',
    env: 'Staging & Prod',
    impact: 'Critical - Temporary cached auth tokens, local lockout',
    review: 'SUPPORTED',
    reviewCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
  },
  {
    name: 'Cold Replay Storage',
    purpose: 'Archival video preservation',
    owner: 'Third party',
    ownerCls: 'bg-slate-100 border-slate-300 text-slate-600',
    data: 'Durable mp4 assets, metadata, sealed hashes',
    env: 'Production',
    impact: 'Medium - Delayed archiving, immediate queueing',
    review: 'WITH CONDITIONS',
    reviewCls: 'bg-blue-500/10 text-blue-500 border-blue-500/30',
  },
];

const reviewStates = [
  { text: 'Supported', color: 'bg-emerald-500' },
  { text: 'Supported with conditions', color: 'bg-blue-500' },
  { text: 'Requires review', color: 'bg-amber-500' },
  { text: 'Not supported', color: 'bg-red-500' },
  { text: 'Not evaluated', color: 'bg-slate-500' },
  { text: 'Deprecated / superseded', color: 'bg-gray-500' },
];

export function ArchitectureProofSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg167}
          alt="Architecture Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Enterprise architecture proof shows boundaries and ownership.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Every dependency has a name, purpose, owner, data exchanged, environment, version/currentness, failure impact, and security/privacy review status.
          </p>
        </div>

        {/* Table */}
        <div className="w-full bg-white/90 rounded-2xl border border-gray-200 overflow-hidden shadow-sm backdrop-blur-sm">
          <div className="p-4 bg-slate-50 border-b-2 border-gray-200 hidden lg:flex justify-between items-center text-xs font-bold font-['Space_Grotesk'] text-slate-900 gap-3">
            <span className="w-44">DEPENDENCY NAME</span>
            <span className="w-44">PURPOSE</span>
            <span className="w-36">OWNER</span>
            <span className="flex-1">DATA EXCHANGED</span>
            <span className="w-28">ENVIRONMENT</span>
            <span className="w-40">FAILURE IMPACT &amp; FALLBACK</span>
            <span className="w-36">SECURITY REVIEW</span>
          </div>

          <div className="divide-y divide-gray-200">
            {archRows.map((r, idx) => (
              <div key={idx} className="p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 hover:bg-slate-50 transition-colors text-xs">
                <span className="w-44 text-slate-900 text-sm font-bold font-['Space_Grotesk'] flex-shrink-0">
                  {r.name}
                </span>
                <span className="w-44 text-slate-600 font-normal font-['Inter'] flex-shrink-0">
                  {r.purpose}
                </span>
                <div className="w-36 flex justify-start items-center flex-shrink-0">
                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-semibold font-['Inter'] ${r.ownerCls}`}>
                    {r.owner}
                  </span>
                </div>
                <span className="flex-1 text-slate-600 font-normal font-['Inter'] leading-5">
                  {r.data}
                </span>
                <span className="w-28 text-slate-600 font-normal font-['Inter'] flex-shrink-0">
                  {r.env}
                </span>
                <span className="w-40 text-slate-600 font-normal font-['Inter'] leading-5 flex-shrink-0">
                  {r.impact}
                </span>
                <div className="w-36 flex justify-start items-center flex-shrink-0">
                  <span className={`px-2.5 py-1 rounded-sm border text-xs font-bold font-['Space_Grotesk'] uppercase ${r.reviewCls}`}>
                    {r.review}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* States Bar */}
        <div className="w-full p-5 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-4 shadow-sm backdrop-blur-sm">
          <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk'] uppercase">
            ARCHITECTURE REVIEW STATES
          </span>
          <div className="w-full flex flex-wrap justify-between items-center gap-4">
            {reviewStates.map((st, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${st.color}`} />
                <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk']">{st.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="inline-flex justify-start items-center gap-4 flex-wrap">
          <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
            <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
              Review Architecture
            </span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-gray-200 flex justify-center items-center cursor-pointer">
            <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
              Explore Integration Guides
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const checkRows = [
  {
    title: 'Identity Alignment',
    desc: 'Asset hash matches stable records perfectly.',
    status: 'Ready',
    badgeClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Rights & Provenance Clearance',
    desc: 'Internal use authorized. Global distribution rights approved.',
    status: 'Ready',
    badgeClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Metadata Completeness',
    desc: 'Captions and tags mapped. Transcripts verified successfully.',
    status: 'Ready',
    badgeClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Accessibility Track Validation',
    desc: 'Missing audio-description track for visually impaired audience.',
    status: 'Review Required',
    badgeClass: 'bg-amber-100 text-amber-600',
  },
  {
    title: 'Audience Access Policy Compliance',
    desc: 'Partner whitelist maps not validated by security stewardship.',
    status: 'Blocked',
    badgeClass: 'bg-red-100 text-red-600',
  },
  {
    title: 'Lifecycle Preservation Parameters',
    desc: 'No explicit disposition or archive timeline has been assigned.',
    status: 'Unknown',
    badgeClass: 'bg-gray-200 text-gray-600',
  },
  {
    title: 'Evidence Signature Cryptography',
    desc: 'Affirmative verification signed by system of record authority.',
    status: 'Ready',
    badgeClass: 'bg-emerald-100 text-emerald-600',
  },
];

export default function MediaReadinessReviewSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Media Readiness Review
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal   leading-relaxed max-w-3xl">
            Enforce affirmative checks prior to publishing. Prevent broken tracks, license expiries, or unauthorized audience leaks.
          </p>
        </div>

        {/* Readiness Review Board */}
        <div className="p-6 md:p-8 bg-white rounded-2xl border border-slate-200 shadow-xl flex flex-col gap-6">
          <div className="flex flex-wrap justify-between items-center gap-4 pb-4 border-b border-slate-200">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="text-slate-900 text-lg md:text-xl font-bold  ">
                  All-Hands-Q1-Broadcast_FINAL
                </h3>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-bold  ">
                  ILLUSTRATIVE PROOF
                </span>
              </div>
              <p className="text-slate-500 text-xs  ">
                ID: urn:zoiko:record:7a92bf3d-512c-46fe-88e1-e9db71eba30b
              </p>
            </div>
            <span className="px-4 py-2 bg-amber-100 text-amber-600 border border-amber-500 rounded-full text-xs font-bold  ">
              REVIEW REQUIRED
            </span>
          </div>

          {/* Info Strip */}
          <div className="p-4 bg-slate-50 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 text-xs uppercase  ">Intended Use</span>
              <span className="text-slate-900 text-sm font-semibold  ">Global VOD Playback</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 text-xs uppercase  ">Asset Version</span>
              <span className="text-slate-900 text-sm font-semibold  ">v2.4 (Active)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 text-xs uppercase  ">Record Steward</span>
              <span className="text-slate-900 text-sm font-semibold  ">Executive Ops (H. Smith)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 text-xs uppercase  ">Last Verified Run</span>
              <span className="text-slate-900 text-sm font-semibold  ">2026-03-24 10:14 UTC</span>
            </div>
          </div>

          {/* Rows */}
          <div className="bg-slate-200 rounded-lg overflow-hidden flex flex-col gap-px">
            {checkRows.map((row, idx) => (
              <div key={idx} className="p-4 bg-white flex flex-wrap justify-between items-center gap-4">
                <div className="flex flex-col gap-0.5 max-w-xl">
                  <span className="text-slate-900 text-sm font-semibold  ">
                    {row.title}
                  </span>
                  <span className="text-slate-600 text-xs font-normal  ">
                    {row.desc}
                  </span>
                </div>
                <span className={`px-2.5 py-1 rounded text-xs font-bold   ${row.badgeClass}`}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

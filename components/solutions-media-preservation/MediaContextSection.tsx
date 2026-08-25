import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const metadataCompleteness = [
  { title: 'Identity & Descriptive Metadata', desc: 'Stable identifiers, alternate names, creator metadata, and language tags.', state: 'COMPLETE', stateCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' },
  { title: 'Technical Metadata', desc: 'Bitrate profiles, exact container structure, frame accuracy indices, and validation states.', state: 'COMPLETE', stateCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' },
  { title: 'Administrative & Custody Metadata', desc: 'Accountable custodians, transfer schedules, residency controls, and audit pathways.', state: 'VERIFIED', stateCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' },
  { title: 'Rights & Access Reference Metadata', desc: 'Entitlement mappings, embargo timelines, geo-restrictions, and release rules.', state: 'PARTIAL', stateCls: 'bg-blue-500/10 text-blue-500 border-blue-500/30' },
  { title: 'Accessibility & Language Metadata', desc: 'WCAG transcripts, real-time closed captions, and multilingual alternative audio paths.', state: 'REVIEW DUE', stateCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30' },
  { title: 'Provenance & Lineage Metadata', desc: 'Source recording chain, capture devices, transcoding steps, and hash chains.', state: 'COMPLETE', stateCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' },
  { title: 'Retention & Disposition Metadata', desc: 'Durable retention schedules, active legal holds, and approved disposition policies.', state: 'MISSING', stateCls: 'bg-red-500/10 text-red-500 border-red-500/30' },
  { title: 'Preservation Evidence Metadata', desc: 'Cryptographic state receipts, periodic audit scores, and continuity telemetry.', state: 'UNKNOWN', stateCls: 'bg-slate-500/10 text-slate-500 border-slate-500/30' },
];

const actionLedger = [
  { time: '2026-03-08 14:32:10 UTC', event: 'Integrity Checked', by: 'by System Agent (Auto)', status: 'Verified (Match)', dotCls: 'bg-emerald-500' },
  { time: '2026-03-07 09:15:22 UTC', event: 'Hold Applied', by: 'by Compliance Officer', status: 'Active restriction set', dotCls: 'bg-blue-500' },
  { time: '2026-03-05 18:22:40 UTC', event: 'Access Policy Changed', by: 'by Principal Architect', status: 'Restrict external routes', dotCls: 'bg-amber-500' },
  { time: '2026-03-02 11:04:15 UTC', event: 'Derivative Created', by: 'by Transcode Pipeline', status: '720p H.264 master generated', dotCls: 'bg-slate-500' },
  { time: '2026-03-01 16:50:00 UTC', event: 'Metadata Corrected', by: 'by System Agent (Auto)', status: 'Technical profile backfilled', dotCls: 'bg-blue-500' },
  { time: '2026-02-28 08:30:12 UTC', event: 'Registered', by: 'by Ingest Endpoint', status: 'Durable record active', dotCls: 'bg-emerald-500' },
];

export function MediaContextSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Context Background"
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
          <h2 className="text-slate-900 text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[50px]">
            Keep context with the media, not just the bytes
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Preservation depends on information about the object and its history.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (7 cols): Metadata Completeness */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="text-slate-900 text-xl font-bold ">Metadata Completeness</h3>
            <div className="flex flex-col gap-3">
              {metadataCompleteness.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white/90 rounded-xl border border-gray-200 flex justify-between items-center shadow-xs backdrop-blur-sm"
                >
                  <div className="flex-1 max-w-96 flex flex-col gap-1">
                    <h4 className="text-slate-900 text-base font-bold ">{m.title}</h4>
                    <p className="text-slate-600 text-xs font-normal  leading-4">{m.desc}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full border text-xs font-bold  uppercase flex-shrink-0 ${m.stateCls}`}>
                    {m.state}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Preservation Action Ledger */}
          <div className="lg:col-span-5 p-8 bg-white/90 rounded-2xl border-[1.5px] border-gray-200 flex flex-col gap-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-slate-900 text-xl font-bold ">Preservation Action Ledger</h3>
            <div className="flex flex-col">
              {actionLedger.map((al, idx) => (
                <div key={idx} className="flex gap-4 pb-6 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-2.5 h-2.5 rounded-full ${al.dotCls} mt-1`} />
                    {idx < actionLedger.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-1" />}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-600 text-xs font-normal ">{al.time}</span>
                    <div className="flex items-center gap-2">
                      <h4 className="text-slate-900 text-sm font-bold ">{al.event}</h4>
                      <span className="text-slate-600 text-xs font-normal ">{al.by}</span>
                    </div>
                    <span className="text-slate-600 text-xs font-normal  leading-4">{al.status}</span>
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

import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const formatProfiles = [
  {
    title: 'High-Quality Video Master',
    codec: 'ProRes 422 HQ / QuickTime MOV',
    deps: 'Requires professional decoders',
    lastRev: '2026-03-01',
    nextRev: '2027-03-01',
    status: 'EVALUATED',
    statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
  },
  {
    title: 'Standard Web Delivery',
    codec: 'H.264 / MP4 (AAC Audio Profile)',
    deps: 'None (Ubiquitous hardware support)',
    lastRev: '2026-02-15',
    nextRev: '2027-02-15',
    status: 'EVALUATED',
    statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
  },
  {
    title: 'Archival Transcript Master',
    codec: 'WebVTT Text / JSON Metadata',
    deps: 'None (Raw UTF-8 parser compliant)',
    lastRev: '2026-01-20',
    nextRev: '2026-07-20',
    status: 'MONITOR',
    statusCls: 'bg-blue-500/10 text-blue-500 border-blue-500/30',
  },
  {
    title: 'Legacy Broadcast Stream',
    codec: 'MPEG-2 Transport Stream (MTS)',
    deps: 'Slowing software support',
    lastRev: '2025-11-10',
    nextRev: '2026-05-10',
    status: 'ACTION REQUIRED',
    statusCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
  },
  {
    title: 'Undetermined Legacy Audio',
    codec: 'RAW PCM / WAV Master',
    deps: 'Hardware sample-rate dependencies',
    lastRev: 'Unreviewed',
    nextRev: 'Immediate',
    status: 'UNKNOWN',
    statusCls: 'bg-slate-500/10 text-slate-500 border-slate-500/30',
  },
];

const sustainabilityStages = [
  { stage: 'Stage 01: Monitor Format', desc: 'No migration active. Track software libraries & decoder availability.', by: 'By: System Scheduler', doc: 'Library Index Docs' },
  { stage: 'Stage 02: Create Web Derivative', desc: 'Generate standards-compliant MP4 copies from high-quality sources.', by: 'By: Transcoding Lead', doc: 'Platform API Schema' },
  { stage: 'Stage 03: Normalize Container', desc: 'Migrate legacy files into resilient modern wrappers.', by: 'By: Compliance Officer', doc: 'Format Policy Guide' },
  { stage: 'Stage 04: Maintain Original Bytes', desc: 'Retain master copy untouched regardless of delivery formats.', by: 'By: Preservation Admin', doc: 'Retention Rules' },
];

export function FormatUsabilitySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Format Usability Background"
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
            Intact must still be usable
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Expose long-term usability risk without promising automatic migration.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (7 cols): Monitored format profiles */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="text-slate-900 text-xl font-bold ">Monitored format profiles</h3>
            <div className="flex flex-col gap-3">
              {formatProfiles.map((fp, idx) => (
                <div key={idx} className="p-6 bg-white/90 rounded-xl border border-gray-200 flex justify-between items-center shadow-xs backdrop-blur-sm">
                  <div className="flex-1 max-w-96 flex flex-col gap-2">
                    <h4 className="text-slate-900 text-base font-bold ">{fp.title}</h4>
                    <span className="text-slate-600 text-xs font-normal ">Codec/Container: {fp.codec}</span>
                    <span className="text-slate-600 text-xs font-normal ">Dependencies: {fp.deps}</span>
                  </div>
                  <div className="w-36 flex flex-col gap-1 text-xs text-slate-600 ">
                    <span>Last Rev: {fp.lastRev}</span>
                    <span>Next Rev: {fp.nextRev}</span>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full border text-xs font-bold  uppercase flex-shrink-0 ${fp.statusCls}`}>
                    {fp.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Sustainability Decisions */}
          <div className="lg:col-span-5 p-8 bg-white/90 rounded-2xl border-[1.5px] border-gray-200 flex flex-col gap-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-slate-900 text-lg font-bold ">Sustainability Decisions</h3>
            <div className="flex flex-col gap-4">
              {sustainabilityStages.map((st, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-gray-200 flex flex-col gap-2">
                  <h4 className="text-slate-900 text-xs font-bold ">{st.stage}</h4>
                  <p className="text-slate-600 text-xs font-normal  leading-4">{st.desc}</p>
                  <div className="w-full border-t border-gray-200 pt-2 flex justify-between items-center text-xs ">
                    <span className="text-slate-600">{st.by}</span>
                    <span className="text-blue-500 font-bold  underline cursor-pointer">{st.doc}</span>
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

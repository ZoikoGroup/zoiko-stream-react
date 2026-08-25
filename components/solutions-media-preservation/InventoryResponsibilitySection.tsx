import React from 'react';
import Image from 'next/image';

const catalogAssets = [
  {
    id: 'MP-98831-C',
    title: 'Corporate Board Q2 Transcript Archive',
    custodian: 'Compliance Office',
    preservation: 'Active',
    presCls: 'bg-emerald-500/10 text-teal-400 border-emerald-500/30',
    integrity: 'Verified',
    intCls: 'bg-emerald-500/10 text-teal-400 border-emerald-500/30',
    format: 'Standardized',
    fmtCls: 'bg-emerald-500/10 text-teal-400 border-emerald-500/30',
    retention: '10 Years',
    retCls: 'bg-emerald-500/10 text-teal-400 border-emerald-500/30',
  },
  {
    id: 'MP-55410-X',
    title: 'FY25 Customer Support Audio Master',
    custodian: 'Operations Lead',
    preservation: 'Suspended',
    presCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
    integrity: 'Mismatch',
    intCls: 'bg-red-500/10 text-red-500 border-red-500/30',
    format: 'Legacy MP3',
    fmtCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
    retention: '3 Years',
    retCls: 'bg-emerald-500/10 text-teal-400 border-emerald-500/30',
  },
  {
    id: 'MP-22314-H',
    title: 'Executive Compensation Negotiation Rec',
    custodian: 'Legal GC',
    preservation: 'Active',
    presCls: 'bg-emerald-500/10 text-teal-400 border-emerald-500/30',
    integrity: 'Verified',
    intCls: 'bg-emerald-500/10 text-teal-400 border-emerald-500/30',
    format: 'Raw MKV',
    fmtCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
    retention: 'Permanent',
    retCls: 'bg-emerald-500/10 text-teal-400 border-emerald-500/30',
  },
  {
    id: 'MP-09941-K',
    title: 'Undetermined Regional Event Stream',
    custodian: 'System Auto',
    preservation: 'Unknown',
    presCls: 'bg-gray-500/10 text-slate-400 border-gray-500/30',
    integrity: 'Unchecked',
    intCls: 'bg-gray-500/10 text-slate-400 border-gray-500/30',
    format: 'Unknown',
    fmtCls: 'bg-gray-500/10 text-slate-400 border-gray-500/30',
    retention: 'Unassigned',
    retCls: 'bg-gray-500/10 text-slate-400 border-gray-500/30',
  },
];

const tabs = ['Overview', 'Lineage', 'Metadata', 'Integrity', 'Access Rules', 'Preservation Actions', 'Audit Evidence'];

export function InventoryResponsibilitySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/70 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-media-preservation/bg (11).png"
          alt="Inventory Responsibility Background"
          fill
          className="object-cover "
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[48px]">
            Know what exists and who is responsible
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Make preservation objects findable, uniquely identified, and assigned to an accountable custodian.
          </p>
        </div>

        {/* Console Box */}
        <div className="w-full p-6 bg-zinc-900/80 rounded-2xl border-[1.5px] border-gray-800 flex flex-col gap-5 shadow-xl backdrop-blur-sm">
          {/* Filter dropdown bar */}
          <div className="w-full flex flex-wrap items-center gap-3 text-xs ">
            <div className="px-3 py-1.5 rounded-md border border-gray-800 text-slate-400">Preservation: All ▾</div>
            <div className="px-3 py-1.5 rounded-md border border-gray-800 text-slate-400">Integrity: All ▾</div>
            <div className="px-3 py-1.5 rounded-md border border-gray-800 text-slate-400">Provenance: All ▾</div>
            <div className="px-3 py-1.5 rounded-md border border-gray-800 text-slate-400">Format: All ▾</div>
            <div className="px-3 py-1.5 rounded-md border border-gray-800 text-slate-400">Access: All ▾</div>
            <div className="px-3 py-1.5 rounded-md border border-gray-800 text-slate-400">Retention: All ▾</div>
            <div className="px-3 py-1.5 rounded-md border border-gray-800 text-slate-400">Custodian: All ▾</div>
            <div className="px-3 py-1.5 bg-gray-800 rounded-md text-white font-medium">Search Catalog 🔍</div>
          </div>

          {/* Catalog Table */}
          <div className="w-full rounded-lg border border-gray-800 overflow-hidden flex flex-col">
            <div className="p-3 bg-slate-900 flex items-center gap-3 text-xs font-bold  text-white">
              <span className="w-32">Asset ID</span>
              <span className="flex-1">Title</span>
              <span className="w-32">Custodian</span>
              <span className="w-28 text-center">Preservation</span>
              <span className="w-28 text-center">Integrity</span>
              <span className="w-28 text-center">Format</span>
              <span className="w-28 text-center">Retention</span>
            </div>

            <div className="divide-y divide-gray-800">
              {catalogAssets.map((asset, idx) => (
                <div key={idx} className="p-4 flex items-center gap-3 text-xs  hover:bg-gray-800/50 transition-colors">
                  <span className="w-32 text-slate-400 font-normal">{asset.id}</span>
                  <span className="flex-1 text-white font-bold truncate">{asset.title}</span>
                  <span className="w-32 text-slate-400 font-normal ">{asset.custodian}</span>
                  <div className="w-28 flex justify-center">
                    <span className={`px-2.5 py-1 rounded-full border text-[10px] font-semibold  uppercase ${asset.presCls}`}>
                      {asset.preservation}
                    </span>
                  </div>
                  <div className="w-28 flex justify-center">
                    <span className={`px-2.5 py-1 rounded-full border text-[10px] font-semibold  uppercase ${asset.intCls}`}>
                      {asset.integrity}
                    </span>
                  </div>
                  <div className="w-28 flex justify-center">
                    <span className={`px-2.5 py-1 rounded-full border text-[10px] font-semibold  uppercase ${asset.fmtCls}`}>
                      {asset.format}
                    </span>
                  </div>
                  <div className="w-28 flex justify-center">
                    <span className={`px-2.5 py-1 rounded-full border text-[10px] font-semibold  uppercase ${asset.retCls}`}>
                      {asset.retention}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Tabs */}
          <div className="w-full pt-2 flex flex-wrap items-center gap-2">
            {tabs.map((tab, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 rounded-md border text-xs font-bold  cursor-pointer ${
                  idx === 0
                    ? 'bg-gray-800 border-gray-800 text-teal-400'
                    : 'bg-transparent border-gray-800 text-slate-400'
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

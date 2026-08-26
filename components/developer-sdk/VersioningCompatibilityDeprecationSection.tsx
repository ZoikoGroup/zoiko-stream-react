import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const versionRows = [
  {
    ver: 'v3.x.x',
    status: 'CURRENT (TEAL)',
    statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
    runtime: 'Node.js >= 18.0.0',
    compat: 'Compatible with REST v1.4+',
    date: 'Today',
    notes: 'Active support. Recommended for production.',
  },
  {
    ver: 'v2.x.x',
    status: 'MAINTENANCE',
    statusCls: 'bg-blue-500/10 text-blue-500 border-blue-500/30',
    runtime: 'Node.js >= 14.0.0',
    compat: 'Compatible with REST v1.2+',
    date: 'Yesterday',
    notes: 'Critical patches only. Migration to v3 suggested.',
  },
  {
    ver: 'v1.x.x',
    status: 'DEPRECATED',
    statusCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
    runtime: 'Node.js >= 10.0.0',
    compat: 'Compatible with REST v1.0+',
    date: 'Feb 2026',
    notes: 'Deprecated. Migrate immediately. No further patches.',
  },
  {
    ver: 'v0.x.x',
    status: 'END OF SUPPORT',
    statusCls: 'bg-red-500/10 text-red-500 border-red-500/30',
    runtime: 'Legacy runtimes',
    compat: 'REST pre-release',
    date: 'Dec 2025',
    notes: 'Unsupported. Security vulnerabilities possible.',
  },
];

export function VersioningCompatibilityDeprecationSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
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

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight">
            Versioning, compatibility, deprecation, and migration.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Deterministic lifecycle policies so your builds remain reproducible across years.
          </p>
        </div>

        {/* Version Table */}
        <div className="w-full p-6 bg-white rounded-2xl border border-gray-200 flex flex-col overflow-hidden shadow-sm">
          <div className="p-3 bg-slate-50 border-b-2 border-gray-200 grid grid-cols-12 text-xs font-bold font-mono text-slate-900">
            <div className="col-span-1">SDK Version</div>
            <div className="col-span-2">Lifecycle Status</div>
            <div className="col-span-2">Runtime Range</div>
            <div className="col-span-2">API Compatibility</div>
            <div className="col-span-1">Verified Date</div>
            <div className="col-span-4">Migration / Release Notes</div>
          </div>

          <div className="divide-y divide-gray-200">
            {versionRows.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center">
                <div className="col-span-1 font-mono font-bold text-slate-900">{row.ver}</div>
                <div className="col-span-2">
                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold font-mono ${row.statusCls}`}>
                    {row.status}
                  </span>
                </div>
                <div className="col-span-2 text-slate-600">{row.runtime}</div>
                <div className="col-span-2 text-slate-600">{row.compat}</div>
                <div className="col-span-1 text-slate-600">{row.date}</div>
                <div className="col-span-4 text-slate-600">{row.notes}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

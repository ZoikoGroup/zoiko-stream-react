import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

const assetRows = [
  {
    name: 'stream_record_9104.mp4',
    origin: 'live-event-prod-02',
    created: '2 hours ago',
    duration: '00:45:12',
    state: 'READY',
    stateCls: 'bg-teal-400/5 text-teal-400 border-teal-400',
    security: 'AES-128',
    retention: '30 Days',
  },
  {
    name: 'weekly_keynote_9103.mp4',
    origin: 'town-hall-ch-1',
    created: '1 day ago',
    duration: '01:05:00',
    state: 'READY',
    stateCls: 'bg-teal-400/5 text-teal-400 border-teal-400',
    security: 'SAML-Secure',
    retention: 'Infinite',
  },
  {
    name: 'quick_demo_backup_9088.mp4',
    origin: 'custom-sandbox-api',
    created: '3 days ago',
    duration: '00:10:15',
    state: 'PROCESSING',
    stateCls: 'bg-blue-500/5 text-blue-400 border-blue-500',
    security: 'Public',
    retention: '7 Days',
  },
  {
    name: 'regulatory_audit_8899.mp4',
    origin: 'audit-pipeline-a',
    created: '1 week ago',
    duration: '12:00:00',
    state: 'RETENTION_LOCKED',
    stateCls: 'bg-amber-500/5 text-amber-300 border-amber-500',
    security: 'DRM-Pro',
    retention: '7 Years',
  },
];

export function PrimaryOperationalSurfaceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Recording-assest/bg (10).png"
          alt="Primary Operational Surface Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Your primary operational surface for stored media.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Comprehensive controls for searching, filtering, and organizing your assets at absolute scale. Audit every recorded stream across historical pipeline limits.
          </p>
        </div>

        {/* Console Box */}
        <div className="w-full p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
          {/* Header Controls */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="w-full sm:w-96 px-4 py-2.5 bg-gray-800 rounded-lg border border-gray-800 flex items-center gap-3">
              <span className="text-slate-400 text-sm"><Search></Search></span>
              <input
                type="text"
                placeholder="Search assets by filename, origin, metadata..."
                className="bg-transparent text-slate-200 text-sm focus:outline-none w-full"
                readOnly
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 bg-teal-400/10 rounded-full border border-teal-400 text-teal-400 text-xs font-bold">
                All States
              </span>
              <span className="px-3.5 py-1.5 bg-gray-800 rounded-full border border-gray-800 text-slate-400 text-xs font-bold">
                Ready Only
              </span>
              <span className="px-3.5 py-1.5 bg-gray-800 rounded-full border border-gray-800 text-slate-400 text-xs font-bold">
                Secure Profile
              </span>
              <span className="px-3.5 py-1.5 bg-gray-800 rounded-full border border-gray-800 text-slate-400 text-xs font-bold">
                Archived
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="w-full rounded-lg border border-gray-800 overflow-hidden flex flex-col">
            <div className="p-4 bg-slate-900 border-b-2 border-gray-800 grid grid-cols-12 text-xs font-bold text-white">
              <div className="col-span-3">Asset</div>
              <div className="col-span-2">Origin Stream</div>
              <div className="col-span-2">Created</div>
              <div className="col-span-1">Duration</div>
              <div className="col-span-2">State</div>
              <div className="col-span-1">Security</div>
              <div className="col-span-1">Retention</div>
            </div>

            <div className="divide-y divide-gray-800">
              {assetRows.map((row, idx) => (
                <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center gap-2 bg-zinc-900">
                  <div className="col-span-3 text-white font-bold truncate">{row.name}</div>
                  <div className="col-span-2 text-slate-400 truncate">{row.origin}</div>
                  <div className="col-span-2 text-slate-500">{row.created}</div>
                  <div className="col-span-1 text-slate-500">{row.duration}</div>
                  <div className="col-span-2">
                    <span className={`px-2 py-0.5 rounded border text-[10px] font-bold ${row.stateCls}`}>
                      {row.state}
                    </span>
                  </div>
                  <div className="col-span-1 text-slate-400">{row.security}</div>
                  <div className="col-span-1 text-slate-500">{row.retention}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

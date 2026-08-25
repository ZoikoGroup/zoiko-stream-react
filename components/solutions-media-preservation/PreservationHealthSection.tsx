import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { AlertCircle, AlertTriangle } from 'lucide-react';

const metrics = [
  { label: 'Registered Preservation Objects', val: '348,291', valCls: 'text-slate-900', icon: null },
  { label: 'Review Due', val: '14', valCls: 'text-amber-500', icon: AlertCircle, iconCls: 'text-amber-500' },
  { label: 'Integrity Unknown/Mismatch', val: '2', valCls: 'text-red-500', icon: AlertTriangle, iconCls: 'text-red-500' },
  { label: 'Metadata Gaps Detected', val: '18', valCls: 'text-amber-500', icon: AlertCircle, iconCls: 'text-amber-500' },
  { label: 'Format Action Required', val: '3', valCls: 'text-amber-500', icon: AlertCircle, iconCls: 'text-amber-500' },
  { label: 'Access Exceptions Active', val: '1', valCls: 'text-red-500', icon: AlertTriangle, iconCls: 'text-red-500' },
  { label: 'Retention Review Due', val: '27', valCls: 'text-amber-500', icon: AlertCircle, iconCls: 'text-amber-500' },
  { label: 'Evidence Expired', val: '4', valCls: 'text-red-500', icon: AlertTriangle, iconCls: 'text-red-500' },
  { label: 'Open Preservation Incidents', val: '0', valCls: 'text-emerald-500', icon: null },
];

const ledgerRows = [
  { claim: 'Real-time cryptographically signed hashes', owner: 'Principal Auditor System', lastVer: '8 hours ago', status: 'VERIFIED', statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30', limit: 'SHA-256 legacy mappings', nextVer: 'Continuous monitoring sequence' },
  { claim: 'Cold-storage replication week-audit', owner: 'Storage Security GC', lastVer: '1 day ago', status: 'VERIFIED', statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30', limit: '48-hour recovery pipeline window', nextVer: 'Scheduled automatic March 15 audit' },
  { claim: 'SAML SSO strict access containment', owner: 'Sec Ops Administrator', lastVer: '2 hours ago', status: 'EXCEPTION', statusCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30', limit: 'Legacy API exception bounds', nextVer: 'Manual audit scheduled weekly' },
  { claim: 'WCAG multi-language alt sound layout', owner: 'Accessibility Officer', lastVer: '4 days ago', status: 'INCOMPLETE', statusCls: 'bg-red-500/10 text-red-500 border-red-500/30', limit: 'Requires human transcript signing', nextVer: 'On demand verification review' },
];

export function PreservationHealthSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Preservation Health Background"
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
            Make current truth visible
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Operational dashboards for preservation health, not decorative safety scores.
          </p>
        </div>

        {/* 9 Preservation Telemetry Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white/90 rounded-xl border-[1.5px] border-gray-200 flex flex-col gap-3 shadow-xs backdrop-blur-sm"
              >
                <div className="w-full flex justify-between items-center">
                  <span className="text-slate-600 text-xs font-bold  uppercase tracking-wide">
                    {m.label}
                  </span>
                  {Icon && <Icon className={`w-4 h-4 ${m.iconCls} shrink-0`} />}
                </div>
                <span className={`text-3xl font-bold  ${m.valCls}`}>
                  {m.val}
                </span>
              </div>
            );
          })}
        </div>

        {/* Filter Catalog Bar */}
        <div className="w-full p-4 bg-white/90 rounded-lg border border-gray-200 flex flex-wrap items-center gap-3 shadow-xs text-xs  text-slate-600">
          <span className="font-bold">FILTER CATALOG:</span>
          <div className="px-3 py-1.5 rounded-md border border-gray-200">Date Filter ▾</div>
          <div className="px-3 py-1.5 rounded-md border border-gray-200">State State ▾</div>
          <div className="px-3 py-1.5 rounded-md border border-gray-200">Custody Owner ▾</div>
          <div className="px-3 py-1.5 rounded-md border border-gray-200">Collection Category ▾</div>
          <div className="px-3 py-1.5 rounded-md border border-gray-200">Format State ▾</div>
          <div className="px-3 py-1.5 rounded-md border border-gray-200">Integrity State ▾</div>
          <div className="px-3 py-1.5 rounded-md border border-gray-200">Evidence Status ▾</div>
          <div className="px-3 py-1.5 rounded-md border border-gray-200">Retention State ▾</div>
        </div>

        {/* Attributable Verification Ledger Table */}
        <div className="w-full p-6 bg-white/90 rounded-2xl border-[1.5px] border-gray-200 flex flex-col gap-4 shadow-sm backdrop-blur-sm overflow-x-auto">
          <h3 className="text-slate-900 text-xl font-bold ">Attributable Verification Ledger</h3>

          <div className="w-full min-w-[900px] p-3 bg-slate-50 border-b border-gray-200 flex justify-start items-center gap-3 text-xs font-bold  text-slate-900">
            <span className="w-60">Claim / Requirement</span>
            <span className="w-44">Evidence Owner</span>
            <span className="w-28">Last Verified</span>
            <span className="w-28 text-center">Status</span>
            <span className="w-48">Known Limitation</span>
            <span className="flex-1">Next Scheduled Review</span>
          </div>

          <div className="w-full min-w-[900px] flex flex-col divide-y divide-gray-200">
            {ledgerRows.map((r, idx) => (
              <div key={idx} className="p-4 flex justify-start items-center gap-3 text-xs  hover:bg-slate-50 transition-colors">
                <span className="w-60 text-slate-900 font-bold ">{r.claim}</span>
                <span className="w-44 text-slate-600 font-normal">{r.owner}</span>
                <span className="w-28 text-slate-600 font-normal">{r.lastVer}</span>
                <div className="w-28 flex justify-center">
                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold  uppercase ${r.statusCls}`}>
                    {r.status}
                  </span>
                </div>
                <span className="w-48 text-slate-600 font-normal truncate">{r.limit}</span>
                <span className="flex-1 text-slate-600 font-normal">{r.nextVer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

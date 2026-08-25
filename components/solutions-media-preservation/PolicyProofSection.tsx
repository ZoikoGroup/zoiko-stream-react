import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const proofRows = [
  { req: 'Copy Strategy', evidence: 'Triple replicated storage nodes across 3 availability zones.', status: 'VERIFIED', statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30', owner: 'Infrastructure', lastVer: '2026-03-08', limit: 'No automated migration across geographic zones.' },
  { req: 'Separation/Location Policy', evidence: 'Regional partition guarantees zero data crossing to EU storage sites.', status: 'VERIFIED', statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30', owner: 'Compliance Team', lastVer: '2026-03-05', limit: 'US-only fallback restricted.' },
  { req: 'Recovery Capability', evidence: 'Durable replication testing with simulated disaster events.', status: 'REQUIRES REVIEW', statusCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30', owner: 'Operations Lead', lastVer: '2026-02-28', limit: 'Cold restore takes up to 48 hours.' },
  { req: 'Integrity-Review Coverage', evidence: 'Automated hourly SHA validation across active databases.', status: 'VERIFIED', statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30', owner: 'System Auditor', lastVer: '2026-03-08', limit: 'Archival tapes checked monthly.' },
  { req: 'Restore/Repair Process', evidence: 'Weekly automatic recovery testing with verified integrity receipts.', status: 'NOT VERIFIED', statusCls: 'bg-slate-500/10 text-slate-500 border-slate-500/30', owner: 'Site Reliability', lastVer: 'Pending', limit: 'Requires operator confirmation.' },
  { req: 'Storage Dependency', evidence: 'Multi-cloud backend prevents lock-in to single vendor systems.', status: 'RESTRICTED EVIDENCE', statusCls: 'bg-blue-500/10 text-blue-500 border-blue-500/30', owner: 'Platform Architect', lastVer: '2026-01-15', limit: 'Proprietary container profiles.' },
  { req: 'Continuity Procedure', evidence: 'Escrow backup agreements with verified third-party partners.', status: 'EXPIRED', statusCls: 'bg-red-500/10 text-red-500 border-red-500/30', owner: 'Legal GC', lastVer: '2025-12-31', limit: 'Renews on annual schedule.' },
];

export function PolicyProofSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Policy Proof Background"
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
            Show policy and proof, not decorative redundancy
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Evaluate preservation continuity without unsupported architecture claims.
          </p>
        </div>

        {/* Proof & Evidence Table */}
        <div className="w-full p-6 bg-white/90 rounded-2xl border-[1.5px] border-gray-200 flex flex-col gap-5 shadow-sm backdrop-blur-sm overflow-x-auto">
          <div className="w-full min-w-[900px] p-3 bg-gray-950 rounded-md flex justify-start items-center gap-3 text-xs font-bold  text-white">
            <span className="w-44">Requirement</span>
            <span className="flex-1">Current Evidence</span>
            <span className="w-36 text-center">Status</span>
            <span className="w-32">Owner</span>
            <span className="w-28 text-center">Last Verified</span>
            <span className="flex-1">Limitation</span>
          </div>

          <div className="w-full min-w-[900px] flex flex-col divide-y divide-gray-200">
            {proofRows.map((r, idx) => (
              <div key={idx} className="p-4 flex justify-start items-center gap-3 text-xs  hover:bg-slate-50 transition-colors">
                <span className="w-44 text-slate-900 font-bold">{r.req}</span>
                <span className="flex-1 text-slate-600 font-normal  leading-5">{r.evidence}</span>
                <div className="w-36 flex justify-center">
                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold  uppercase ${r.statusCls}`}>
                    {r.status}
                  </span>
                </div>
                <span className="w-32 text-slate-600 font-normal ">{r.owner}</span>
                <span className="w-28 text-center text-slate-600 font-normal ">{r.lastVer}</span>
                <span className="flex-1 text-slate-600 font-normal  leading-4">{r.limit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';
import bg167 from '@/public/images/Enterprises/bg (167).png';

const governanceRows = [
  {
    object: 'Scope Control',
    def: 'Organization / business unit / workspace / event / audience / asset mapping.',
    state: 'Administrative overrides and visibility limits',
    proof: { text: 'ACTIVE', cls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' },
  },
  {
    object: 'Policy Ledger',
    def: 'SOP name, structural purpose, owner, version control, and effective date.',
    state: 'Rigorous versioning and structural compliance',
    proof: { text: 'SCHEDULED', cls: 'bg-blue-500/10 text-blue-500 border-blue-500/30' },
  },
  {
    object: 'Approval Trail',
    def: 'Verifiable requested by, approver ID, final decision, and rationale.',
    state: 'Separation of duties and validation records',
    proof: { text: 'REQUIRES REVIEW', cls: 'bg-amber-500/10 text-amber-500 border-amber-500/30' },
  },
  {
    object: 'Exception Registry',
    def: 'Affected policy identifier, scope limits, reason, compensating action.',
    state: 'Time-bound validity windows and audits',
    proof: { text: 'DRAFT', cls: 'bg-slate-500/10 text-slate-500 border-slate-500/30' },
  },
  {
    object: 'Audit Log Event',
    def: 'System actor, direct action, targeted object, previous and current state.',
    state: 'Immutable ledger entry with timestamps',
    proof: { text: 'SUPERSEDED', cls: 'bg-red-500/10 text-red-500 border-red-500/30' },
  },
  {
    object: 'Governance Review',
    def: 'Next scheduled review date, operational owner, and evidence currency.',
    state: 'SLA validation and compliance scores',
    proof: { text: 'EXPIRED', cls: 'bg-red-500/10 text-red-500 border-red-500/30' },
  },
];

export function StatefulControlGovernanceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg167}
          alt="Governance Background"
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
            Governance as a stateful control system.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Maintain verifiable compliance ledger with explicit scoping, policies, approvals, exceptions, audits and scheduled reviews.
          </p>
        </div>

        <div className="w-full bg-white/90 rounded-2xl border border-gray-200 overflow-hidden shadow-sm backdrop-blur-sm">
          <div className="p-4 bg-slate-50 border-b-2 border-gray-200 hidden sm:flex justify-between items-center text-xs font-bold font-['Space_Grotesk'] text-slate-900 gap-4">
            <span className="w-56">GOVERNANCE OBJECT</span>
            <span className="flex-1">DEFINITION &amp; SCOPE</span>
            <span className="flex-1">STATE PARAMETERS</span>
            <span className="w-40">REQUIRED PROOF / STATE</span>
          </div>

          <div className="divide-y divide-gray-200">
            {governanceRows.map((r, idx) => (
              <div key={idx} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                <span className="w-56 text-slate-900 text-sm font-bold font-['Space_Grotesk'] flex-shrink-0">
                  {r.object}
                </span>
                <span className="flex-1 text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                  {r.def}
                </span>
                <span className="flex-1 text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                  {r.state}
                </span>
                <div className="w-40 flex justify-start items-center flex-shrink-0">
                  <span className={`px-2.5 py-1 rounded-sm border text-xs font-bold font-['Space_Grotesk'] uppercase ${r.proof.cls}`}>
                    {r.proof.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

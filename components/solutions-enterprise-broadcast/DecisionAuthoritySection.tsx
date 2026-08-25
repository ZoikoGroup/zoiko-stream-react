import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const roles = [
  { role: 'Broadcast Owner', desc: 'Defines overall purpose, core scope, signs off on final go/no-go, manages publication intent.' },
  { role: 'Broadcast Admin', desc: 'Coordinates technical configuration, structures the live source plan, designates secure endpoints.' },
  { role: 'Operator', desc: 'Drives live operational action, triggers standby streams, initiates emergency slate protocols.' },
  { role: 'Security / Identity Admin', desc: 'Configures SAML SSO mappings, issues revocation tokens, reviews administrative audit logging.' },
  { role: 'Accessibility Owner', desc: 'Validates WCAG player compliance, approves automated subtitle engines, oversees live transcription.' },
  { role: 'Compliance & Records', desc: 'Manages data retention limits, signs off on external media exports, implements legal holds.' },
  { role: 'SRE / Operations', desc: 'Monitors overall system health, manages incident mitigation pathways, authorizes high-level failover.' },
  { role: 'Auditor / Viewer', desc: 'Holds read-only verification rights, inspects architectural blueprints, downloads audit reports.' },
];

const behaviors = [
  { title: 'Default', dotCls: 'bg-slate-600', desc: 'System awaiting operator action. Routine telemetry broadcast active.' },
  { title: 'Permission Denied', dotCls: 'bg-red-500', desc: 'The selected operator role lacks authorization keys to execute the command.' },
  { title: 'Confirmation Required', dotCls: 'bg-amber-500', desc: 'High-impact task. Two-person integrity validation pending admin approval.' },
  { title: 'Success State', dotCls: 'bg-emerald-500', desc: 'Command verified, applied to edge, and permanently committed to ledger.' },
  { title: 'Conflict / Stale', dotCls: 'bg-slate-500', desc: 'Configuration out of sync. Please reload to sync active stream state.' },
];

export function DecisionAuthoritySection() {
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
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[52px]">
            Put authority at the decision point
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Make separation of duties visible in the workflow.
          </p>
        </div>

        {/* Role Definition Table */}
        <div className="w-full rounded-xl border border-gray-200 overflow-hidden shadow-sm backdrop-blur-sm bg-white/90">
          <div className="p-5 bg-slate-900 flex justify-start items-center gap-6 text-teal-400 text-sm font-bold  uppercase">
            <span className="w-64">ROLE DEFINITION</span>
            <span className="flex-1">WORKFLOW GOVERNANCE &amp; SOVEREIGN OUTCOMES</span>
          </div>

          <div className="divide-y divide-gray-200">
            {roles.map((r, idx) => (
              <div key={idx} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                <span className="w-64 text-slate-900 text-base font-bold  flex-shrink-0">{r.role}</span>
                <span className="flex-1 text-slate-600 text-sm font-normal  leading-5">{r.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive State Behaviors */}
        <div className="w-full p-7 bg-white rounded-xl border border-gray-200 flex flex-col gap-5 shadow-sm">
          <h3 className="text-slate-900 text-lg font-bold ">Interactive State Behaviors</h3>
          <div className="w-full flex flex-col gap-3">
            {behaviors.map((b, idx) => (
              <div key={idx} className="p-5 bg-slate-50 rounded-lg border border-slate-200 flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${b.dotCls}`} />
                  <span className="text-slate-900 text-sm font-bold ">{b.title}</span>
                </div>
                <p className="text-slate-600 text-xs font-normal  leading-4">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

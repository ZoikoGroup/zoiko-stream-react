import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const readinessRows = [
  { area: 'Product Job Alignment', outcome: 'Ready', style: 'text-emerald-500', state: 'Authoritative criteria validated' },
  { area: 'Logical Architecture', outcome: 'Ready with actions', style: 'text-amber-500', state: 'API endpoints structure matched' },
  { area: 'Credentials & Secret Store', outcome: 'Ready', style: 'text-emerald-500', state: 'SAML OIDC integrations verified' },
  { area: 'Playback Access Controls', outcome: 'Blocked', style: 'text-red-500', state: 'Requires security team signature' },
  { area: 'Failure & Retries Loop', outcome: 'Not evaluated', style: 'text-amber-500', state: 'Idempotency checklist outstanding' },
  { area: 'Observability Metrics', outcome: 'Ready', style: 'text-emerald-500', state: 'Runbook minimum standards defined' },
];

export default function ProductionReadinessReviewSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-24 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Self-service until a real requirement needs review
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Inter'] leading-relaxed max-w-4xl">
            Use an evidence-based Production Readiness Review to identify unresolved dependencies. Escalate only the requirements that genuinely need architecture, security, scale, support, procurement or commercial input.
          </p>
        </div>

        {/* Readiness Matrix Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-200 border-b border-gray-200 grid grid-cols-12 gap-3 text-slate-900 text-xs font-bold font-['Space_Grotesk']">
            <span className="col-span-5">REVIEW AREA</span>
            <span className="col-span-3">GATEWAY OUTCOME</span>
            <span className="col-span-4">CURRENT COMPLETION STATE</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-200">
            {readinessRows.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 gap-3 items-center text-xs font-['Inter']">
                <span className="col-span-5 text-slate-900 font-semibold">{row.area}</span>
                <span className={`col-span-3 font-bold ${row.style}`}>{row.outcome}</span>
                <span className="col-span-4 text-slate-600 font-normal">{row.state}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 p-8 bg-slate-50 rounded-xl border border-gray-200 shadow-xs flex flex-col gap-4">
            <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
              Deterministic Escalation Pathways
            </h3>
            <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
              Settle bespoke architecture questions, unverified capability maps, commercial scaling boundaries, support response models, and procurement evidence lists cleanly through self-service review loops.
            </p>
          </div>

          <div className="lg:col-span-5 p-8 bg-slate-50 rounded-xl border border-gray-200 shadow-xs flex flex-col gap-5 justify-center">
            <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
              Evidence-based gateway
            </h3>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
              The gateway is not a qualitative review. Unresolved dependencies are surfaced deterministically, allowing engineering teams to unblock launch schedules safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

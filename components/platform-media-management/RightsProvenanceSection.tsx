import React from 'react';
import { Route, UserCheck, ShieldCheck, AlertTriangle, Target, User2, LineChart } from 'lucide-react';

const rightsFeatures = [
  {
    title: 'Source & Origin Tracking',
    desc: 'Every asset traces back to its verified live stream route, manual upload source, or API ingestion payload.',
    icon: Target,
  },
  {
    title: 'Stewardship Assignment',
    desc: 'No asset floats unowned. Clear corporate directory entities own metadata, compliance reviews, and final deletion parameters.',
    icon: User2,
  },
  {
    title: 'Permitted Purpose Verification',
    desc: 'Enforce machine-readable permissions. Match intended channels against approved marketing or internal guidelines.',
    icon: ShieldCheck,
  },
  {
    title: 'Proactive Expiry Alerts',
    desc: 'System alerts flag assets approaching license expiry, automatic hold periods, or mandated regulatory storage ends.',
    icon: LineChart,
  },
];

export default function RightsProvenanceSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Rights, provenance, and controlled reuse
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Inter'] leading-relaxed max-w-3xl">
            Explicit ownership and legal bounds are surfaced before media enters downstream production pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Features List */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {rightsFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="size-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                      {feat.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Rights Operating Model Card */}
          <div className="lg:col-span-5">
            <div className="p-7 bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col gap-5">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk'] tracking-wide">
                  RIGHTS OPERATING MODEL
                </span>
                <span className="px-2 py-0.5 bg-emerald-600/10 text-emerald-600 text-xs font-bold font-['Inter'] rounded">
                  ACTIVE POLICY
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <div className="pb-2 border-b border-slate-200 flex flex-col gap-1">
                  <span className="text-slate-500 text-xs uppercase font-['Inter']">Origin Route</span>
                  <span className="text-slate-900 text-sm font-semibold font-['Inter']">Ingest-RTMP:HQ-Desk_02</span>
                </div>

                <div className="pb-2 border-b border-slate-200 flex flex-col gap-1">
                  <span className="text-slate-500 text-xs uppercase font-['Inter']">Accountable Steward</span>
                  <span className="text-slate-900 text-sm font-semibold font-['Inter']">Corporate Communications</span>
                </div>

                <div className="pb-2 border-b border-slate-200 flex flex-col gap-1">
                  <span className="text-slate-500 text-xs uppercase font-['Inter']">License Authority</span>
                  <span className="text-slate-900 text-sm font-semibold font-['Inter']">Master Agreement - SEC-2026</span>
                </div>

                <div className="pb-2 border-b border-slate-200 flex flex-col gap-1">
                  <span className="text-slate-500 text-xs uppercase font-['Inter']">Approved Purpose</span>
                  <span className="text-slate-900 text-sm font-semibold font-['Inter']">Global Internal Broadcast Only</span>
                </div>

                <div className="pb-2 border-b border-slate-200 flex flex-col gap-1">
                  <span className="text-slate-500 text-xs uppercase font-['Inter']">Expiry Policy</span>
                  <span className="text-slate-900 text-sm font-semibold font-['Inter']">2029-12-31 (Regulatory retention)</span>
                </div>
              </div>

              <div className="p-4 bg-amber-100 rounded-lg border border-amber-500 flex flex-col gap-1">
                <span className="text-amber-800 text-xs font-bold font-['Inter']">
                  ⚠ Used before is not permission to use again.
                </span>
                <span className="text-amber-700 text-xs font-normal font-['Inter'] leading-relaxed">
                  Every subsequent replay or VOD distribution run demands active readiness check validation against the OIDC master policy whitelist.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

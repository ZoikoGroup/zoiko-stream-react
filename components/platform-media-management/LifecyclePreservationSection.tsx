import React from 'react';
import {
  Activity,
  Clock,
  ShieldAlert,
  Lock,
  Archive,
  Trash2,
  FileCheck,
  RefreshCw,
} from 'lucide-react';

const lifecycleItems = [
  {
    title: 'Active / In Use',
    desc: 'Asset participates in approved active distributions. Block edit/delete flows.',
    icon: Activity,
  },
  {
    title: 'Review Due',
    desc: 'Flags records past their rights/ownership review dates to prevent stale usage.',
    icon: Clock,
  },
  {
    title: 'Retention Policy',
    desc: 'Rigid retention limits enforced automatically. Keeps records legal-compliant.',
    icon: ShieldAlert,
  },
  {
    title: 'Legal Hold',
    desc: 'Blocks all destructive workflows. Clear conflicts and active holds visible instantly.',
    icon: Lock,
  },
  {
    title: 'Preservation',
    desc: 'Durable preservation parameters prevent accidental decay of master recordings.',
    icon: Archive,
  },
  {
    title: 'Deletion / Removal',
    desc: 'Precise programmatic deletion protocols run cleanly according to company parameters.',
    icon: Trash2,
  },
  {
    title: 'Evidence Retention',
    desc: 'Audit lifecycle metrics are stored separately from bulk media assets for security.',
    icon: FileCheck,
  },
  {
    title: 'Downstream Cleanup',
    desc: 'Ensures cached copies, search indices, and CDN references clear cleanly.',
    icon: RefreshCw,
  },
];

export default function LifecyclePreservationSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-28 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Lifecycle, preservation, and disposition
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk']">
            Retention, holds, and removal under governed authority
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Items Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lifecycleItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-4"
                >
                  <div className="size-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Operational Criticality Box */}
          <div className="lg:col-span-5">
            <div className="p-7 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-5 shadow-sm">
              <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                OPERATIONAL CRITICALITY
              </h3>

              <div className="flex flex-col gap-3">
                <div className="p-4 bg-white rounded-lg border border-slate-200 flex flex-col gap-2">
                  <h4 className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                    Automated Expiry Checks
                  </h4>
                  <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                    Once expiration policies trigger, media is decoupled from CDN paths within 60 seconds.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-slate-200 flex flex-col gap-2">
                  <h4 className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                    Legal Freeze Protocols
                  </h4>
                  <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                    An active legal hold overrides automated deletion rules, keeping assets frozen until cleared.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-100 rounded-lg border border-amber-600 flex flex-col gap-1.5">
                <span className="text-amber-800 text-xs font-bold font-['Space_Grotesk']">
                  ⚠ SAFETY ENFORCEMENT
                </span>
                <span className="text-amber-700 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                  Before any destructive action, resolve authority, hold conflicts, scope, and recovery limitations. Non-reversible processes require secondary administrator token assertion.
                </span>
              </div>

              <div className="p-4 bg-white rounded-lg border border-slate-200 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                    Lifecycle Health
                  </span>
                  <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-600 rounded-full text-xs font-bold font-['Space_Grotesk']">
                    Governed
                  </span>
                </div>
                <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                  A balanced lifecycle ensures active assets remain accessible, while expired or held content is handled with audit-ready precision.
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <div className="size-20 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white shrink-0 shadow-inner">
                    <span className="text-xs font-normal font-['Space_Grotesk']">Coverage</span>
                    <span className="text-lg font-bold font-['Space_Grotesk']">75%</span>
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="size-2.5 bg-blue-600 rounded-xs" />
                      <span className="text-slate-600 font-['Space_Grotesk']">Governed states (8/10)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-2.5 bg-slate-300 rounded-xs" />
                      <span className="text-slate-600 font-['Space_Grotesk']">Review / exceptions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

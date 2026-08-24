import React from 'react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import Image from 'next/image';
const opsRows = [
  { surface: 'Stream & Media Health', metric: '99.98% SLA', status: 'Healthy/Normal', focus: 'Global adaptive pipelines active' },
  { surface: 'Playback Behavior', metric: '32ms Avg TTFB', status: 'Healthy/Normal', focus: 'Token validation edge resolved' },
  { surface: 'Access Activity', metric: '24k active tokens', status: 'Healthy/Normal', focus: 'SAML SSO session logs clean' },
  { surface: 'Operational Events', metric: '0 alerts triggered', status: 'Healthy/Normal', focus: 'Queue telemetry steady' },
  { surface: 'Analytics', metric: 'Live dashboards active', status: 'Healthy/Normal', focus: 'Real-time egress reporting' },
  { surface: 'System Status', metric: 'All nodes operating', status: 'Healthy/Normal', focus: 'Continuous telemetry check' },
  { surface: 'Support Routing', metric: 'No open tickets', status: 'Healthy/Normal', focus: 'Escalation pathways tested' },
];

const runbookFields = [
  'Symptom identification parameters',
  'Affected product components & workflows',
  'Environment scopes & identifiers',
  'Safe token identifiers & log trace keys',
  'Timestamps, reproduction steps, customer impact',
];

export default function OperatingLifecycleSection() {
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
            Shipping is the start of the operating lifecycle
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Inter'] leading-relaxed max-w-5xl">
            Give product and operations teams current-truth routes for stream/media state, playback behavior, analytics, service status, support and incident evidence.
          </p>
        </div>

        {/* Operational Surface Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-200 border-b border-gray-200 grid grid-cols-12 gap-3 text-slate-900 text-xs font-bold font-['Space_Grotesk']">
            <span className="col-span-4">OPERATIONAL SURFACE</span>
            <span className="col-span-3">CURRENT METRIC STATE</span>
            <span className="col-span-2">STATUS</span>
            <span className="col-span-3">PRIMARY FOCUS TELEMETRY</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-200">
            {opsRows.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 gap-3 items-center text-xs font-['Inter']">
                <span className="col-span-4 text-slate-900 font-semibold">{row.surface}</span>
                <span className="col-span-3 text-slate-900 font-semibold">{row.metric}</span>
                <div className="col-span-2 flex items-center gap-1.5">
                  <div className="size-2 bg-emerald-500 rounded-full" />
                  <span className="text-slate-600 font-normal">{row.status}</span>
                </div>
                <span className="col-span-3 text-slate-600 font-normal">{row.focus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 p-8 bg-slate-50 rounded-xl border border-gray-200 shadow-xs flex flex-col gap-4">
            <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
              Runbook Minimum Standard Fields
            </h3>
            <div className="flex flex-col gap-2.5">
              {runbookFields.map((f, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-['Inter']">
                  <div className="size-3.5 flex items-center justify-center text-emerald-500 font-bold shrink-0">
                    ✓
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-8 bg-slate-50 rounded-xl border border-gray-200 shadow-xs flex flex-col gap-5 justify-center">
            <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
              Escalation readiness
            </h3>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
              Connect systems cleanly with a joint SLA escalation pathway. Incident logs are fully queryable by unique developer tracking keys, removing guess-work during critical diagnostic recovery cycles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

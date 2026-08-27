import React from 'react';
import Image from 'next/image';
import { Activity, BarChart2, Link2, AlertTriangle, Gauge, FileText, Server, ShieldCheck } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const domains = [
  {
    title: 'Stream Monitoring',
    path: 'telemetry-portal',
    desc: 'Assess ingest health and verify active stream telemetry parameters.',
    icon: Activity,
  },
  {
    title: 'Analytics API',
    path: 'v1/analytics',
    desc: 'Fetch playback metrics, concurrency data, and egress statistics.',
    icon: BarChart2,
  },
  {
    title: 'Webhooks & Events',
    path: 'v1/webhooks',
    desc: 'Route automated state triggers into custom applications.',
    icon: Link2,
  },
  {
    title: 'Error Handling',
    path: 'fault-matrix',
    desc: 'Reconcile structural faults with exact recovery logic paths.',
    icon: AlertTriangle,
  },
  {
    title: 'Rate Limits',
    path: 'system-quotas',
    desc: 'Monitor concurrency, processing, and query bandwidth ceilings.',
    icon: Gauge,
  },
  {
    title: 'Changelog',
    path: 'releases-feed',
    desc: 'Review structural updates and engine platform improvements.',
    icon: FileText,
  },
  {
    title: 'System Status',
    path: 'heartbeat',
    desc: 'Verify live operational health across regional multi-CDNs.',
    icon: Server,
  },
  {
    title: 'Secure Playback',
    path: 'v1/protection',
    desc: 'Mount SSO-gated tokens and cryptographically verify sessions.',
    icon: ShieldCheck,
  },
];

export function ConnectAssetOperationsToPlatformSection() {
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
          <h2 className="text-slate-950 text-3xl lg:text-4xl font-bold leading-tight">
            Connect asset operations to the broader platform.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Recording storage is one module. Integrate with telemetry, analytics, and authentication domains to drive end-to-end performance.
          </p>
        </div>

        {/* 8 Cards Grid (4x2) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((d, idx) => {
            const IconComp = d.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col justify-between gap-4 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <IconComp className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-slate-900 text-base font-bold">{d.title}</h3>
                    <span className="text-slate-500 text-xs font-mono">{d.path}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs leading-5">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

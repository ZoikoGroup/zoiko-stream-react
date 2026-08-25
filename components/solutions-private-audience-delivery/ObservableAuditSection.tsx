import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Activity, Bell, Clipboard, GitCommitHorizontal, Globe, NotepadText, Zap } from 'lucide-react';

const auditCards = [
  { icon:Activity,  title: 'Active Sessions', desc: 'Real-time viewer telemetry tracking verified identity tokens, physical devices, local policy states, and geo positions.' },
  {icon:NotepadText, title: 'Authorization Log', desc: 'Attributable record of every evaluate, allow, deny, expire, and manual revoke action indexed by stream ID.' },
  { icon:GitCommitHorizontal ,title: 'Policy Change History', desc: 'Tamper-evident trail detailing who modified security boundaries, when, why, and the exact delta impact.' },
  { icon:Zap,title: 'Incident Response', desc: 'Centralized controls for system-wide stream termination, instant fallback routing, and forensic state isolation.' },
  { icon:Globe ,title: 'External Access Monitor', desc: 'Operational view of temporary partner/guest tokens, sponsor accountability roles, and precise timebox counts.' },
  { icon:Clipboard,title: 'Compliance Metrics', desc: 'Active audits of localized storage residency, video decay cycles, user consent states, and deletion queue logs.' },
  { icon:Bell,title: 'Anomalous Alerting', desc: 'Instant notifications for key-sharing behaviors, brute-force entry attempts, and stale policy evaluations.' },
];

export function ObservableAuditSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Observable Audit Background"
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
          <h2 className="text-slate-900 text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[52px]">
            Make every access decision observable and auditable
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Operational dashboards designed for streaming access governance, not just transport health.
          </p>
        </div>

        {/* 7 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {auditCards.map((card, idx) => {
            const Icon=card.icon;
            return(
            <div
              key={idx}
              className="p-6 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-4 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-lg border border-teal-400 flex items-center justify-center text-white">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-base font-bold ">{card.title}</h3>
                <p className="text-slate-600 text-xs font-normal  leading-5">{card.desc}</p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}

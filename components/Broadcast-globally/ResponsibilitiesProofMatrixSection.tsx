import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg112 from '@/public/images/Broadcast-globally/bg (112).png';

const operatingTasks = [
  { task: 'API Self-Service', builds: 'Your engineers', operates: 'Developer Ops', sla: 'Slack / Community', gov: 'API Keys / Tokens' },
  { task: 'Enterprise Assisted', builds: 'Zoiko Solutions', operates: 'Your IT Admins', sla: '99.99% Event SLA', gov: 'SSO / Audit Logs' },
  { task: 'Managed Live Events', builds: 'Zoiko Production', operates: 'Zoiko Producers', sla: 'Concierge Hot Standby', gov: 'Post-event Records' },
];

const proofsRow1 = [
  { name: 'Architecture Guide', cat: 'Integration Manuals', owner: 'Solutions Architect', time: 'Feb 2026' },
  { name: 'Security Evidence', cat: 'Compliance & SSO Specs', owner: 'Compliance Office', time: 'Weekly Auto-Update' },
  { name: 'System Status', cat: 'Real-time Telemetry SLA', owner: 'Reliability Engineering', time: 'Real-Time Logs' },
  { name: 'Accessibility (WCAG)', cat: 'VPAT / AA Statements', owner: 'Compliance Office', time: 'Jan 2026' },
];

const proofsRow2 = [
  { name: 'Analytics telemetry', cat: 'QoS Buffering metrics', owner: 'Edge Ops Team', time: 'Real-Time Stream' },
  { name: 'Recording Handoff', cat: 'Compliance storage specs', owner: 'Media Storage Team', time: 'Weekly Audit' },
  { name: 'Support model SLAs', cat: 'Operational escalation', owner: 'SLA Office', time: 'Feb 2026' },
  { name: 'Legal & GDPR policy', cat: 'Data residency borders', owner: 'Legal Office', time: 'Jan 2026' },
];

export default function ResponsibilitiesProofMatrixSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg112}
          alt="Responsibilities & Proof Matrix Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Make responsibilities and proof explicit before the broadcast is critical
          </h2>
        </div>

        {/* Task Responsibility Matrix */}
        <div className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-md flex flex-col">
          <div className="p-4 bg-gray-800 border-b-2 border-gray-800 grid grid-cols-12 gap-3 text-white text-xs font-bold  ">
            <span className="col-span-3">Operating Task</span>
            <span className="col-span-2 text-center">Who builds</span>
            <span className="col-span-2 text-center">Who operates</span>
            <span className="col-span-3 text-center">SLA Support</span>
            <span className="col-span-2 text-center">Governance</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-800">
            {operatingTasks.map((t, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 gap-3 items-center text-xs  ">
                <span className="col-span-3 text-white text-sm font-bold  ">
                  {t.task}
                </span>
                <span className="col-span-2 text-center text-slate-400 font-normal">
                  {t.builds}
                </span>
                <span className="col-span-2 text-center text-slate-400 font-normal">
                  {t.operates}
                </span>
                <span className="col-span-3 text-center text-slate-400 font-normal">
                  {t.sla}
                </span>
                <span className="col-span-2 text-center text-slate-400 font-normal">
                  {t.gov}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Inspectable Proof Matrix */}
        <div className="flex flex-col gap-6">
          <span className="text-teal-400 text-sm font-bold   uppercase tracking-wide">
            INSPECTABLE PROOF MATRIX
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {proofsRow1.map((p, idx) => (
              <div key={idx} className="p-5 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-sm flex flex-col gap-4">
                <span className="text-white text-base font-bold  ">
                  {p.name}
                </span>
                <div className="flex flex-col gap-1.5 text-xs text-slate-400  ">
                  <span>Category: {p.cat}</span>
                  <span>Owner: {p.owner}</span>
                  <span className="text-teal-400">● {p.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {proofsRow2.map((p, idx) => (
              <div key={idx} className="p-5 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-sm flex flex-col gap-4">
                <span className="text-white text-base font-bold  ">
                  {p.name}
                </span>
                <div className="flex flex-col gap-1.5 text-xs text-slate-400  ">
                  <span>Category: {p.cat}</span>
                  <span>Owner: {p.owner}</span>
                  <span className="text-teal-400">● {p.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="p-10 bg-zinc-900/60 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col items-center gap-8 text-center">
          <div className="max-w-2xl flex flex-col gap-4">
            <h3 className="text-white text-3xl font-bold   leading-tight">
              Ready to choose the right video path?
            </h3>
            <p className="text-slate-400 text-base font-normal   leading-relaxed">
              Start with the outcome, workflow, or operating model that fits your team. If your requirements cross multiple paths, talk to an expert.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/start-building"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
            >
              Start building
            </Link>
            <Link
              href="/talk-to-an-expert"
              className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold   hover:bg-white/10 transition-colors"
            >
              Talk to an expert
            </Link>
            <Link
              href="/live-events"
              className="px-7 py-3.5 rounded-lg border border-teal-400 text-white text-base font-bold   hover:bg-teal-400/10 transition-colors"
            >
              Plan a Live Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

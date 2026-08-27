import React from 'react';

const readinessItems = [
  'Monitoring access verified',
  'Stream identifiers documented',
  'Alert policy reviewed',
  'Owner / on-call defined',
  'Notification path tested (when supported)',
  'Maintenance / suppression plan defined',
  'System status & Changelog paths known',
  'Support bundle procedure known',
  'Recovery verification defined',
  'Privacy/security review complete',
];

export function OperationalReadinessSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-50 border-b border-zinc-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              OPERATIONAL READINESS
            </span>
          </div>

          <h2 className="text-neutral-700 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Make monitoring part of the runbook before the stream matters.
          </h2>
        </div>

        {/* Checklist Box */}
        <div className="w-full bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col divide-y divide-zinc-200 shadow-sm">
          {readinessItems.map((item, idx) => (
            <div key={idx} className="p-4 flex items-center gap-3">
              <div className="w-4 h-4 bg-white rounded border border-neutral-500 flex items-center justify-center flex-shrink-0">
              </div>
              <span className="text-neutral-700 text-sm font-normal">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-xs font-normal">
          Local checklist progress only — no persistence is implied unless your account provides it. A support bundle never includes tokens or secrets.
        </p>
      </div>
    </section>
  );
}

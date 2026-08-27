import React from 'react';

const troubleshootingRows = [
  {
    title: 'Upload fails or times out',
    symptom: 'Transfer never completes',
    scope: 'One asset or many?',
    evidence: 'Check request ID + status',
    action: 'Fresh authorization, retry',
    verify: 'Confirm asset reaches ready',
    escalate: 'Developer support',
  },
  {
    title: 'Playback won\'t start',
    symptom: 'Player shows an error',
    scope: 'One viewer or all?',
    evidence: 'Check readiness + access policy',
    action: 'Verify token not expired',
    verify: 'Reproduce in test environment',
    escalate: 'System status, then support',
  },
  {
    title: 'Webhook not received',
    symptom: 'No event delivered',
    scope: 'Endpoint-wide or one event?',
    evidence: 'Check endpoint status + delivery log',
    action: 'Fall back to status retrieval',
    verify: 'Confirm signature validation passes',
    escalate: 'Developer support',
  },
];

export function SymptomToSafeResolutionSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider">
              SYMPTOM TO SAFE RESOLUTION
            </span>
          </div>
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Diagnose from observed behavior and current evidence.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-[850px]">
            Every article follows the same reusable path: symptom → scope → evidence → safe action → verification → escalation.
          </p>
        </div>

        {/* 3 Troubleshooting Cards */}
        <div className="w-full flex flex-col gap-6">
          {troubleshootingRows.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white rounded-2xl border border-gray-200 flex flex-col gap-4 shadow-xs"
            >
              <h3 className="text-zinc-900 text-base font-bold">{item.title}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg flex flex-col gap-1">
                  <span className="text-zinc-900 text-[10px] font-mono font-semibold uppercase">SYMPTOM</span>
                  <span className="text-gray-600 text-xs">{item.symptom}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex flex-col gap-1">
                  <span className="text-zinc-900 text-[10px] font-mono font-semibold uppercase">SCOPE</span>
                  <span className="text-gray-600 text-xs">{item.scope}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex flex-col gap-1">
                  <span className="text-zinc-900 text-[10px] font-mono font-semibold uppercase">EVIDENCE</span>
                  <span className="text-gray-600 text-xs">{item.evidence}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex flex-col gap-1">
                  <span className="text-zinc-900 text-[10px] font-mono font-semibold uppercase">SAFE ACTION</span>
                  <span className="text-gray-600 text-xs">{item.action}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex flex-col gap-1">
                  <span className="text-zinc-900 text-[10px] font-mono font-semibold uppercase">VERIFY</span>
                  <span className="text-gray-600 text-xs">{item.verify}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex flex-col gap-1">
                  <span className="text-zinc-900 text-[10px] font-mono font-semibold uppercase">ESCALATE</span>
                  <span className="text-gray-600 text-xs">{item.escalate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button className="px-6 py-3 bg-zinc-100 rounded-xl border border-gray-800 text-zinc-900 font-semibold text-base hover:bg-zinc-200 transition-colors">
            Error handling
          </button>
          <button className="px-6 py-3 bg-zinc-100 rounded-xl border border-gray-800 text-zinc-900 font-semibold text-base hover:bg-zinc-200 transition-colors">
            Stream monitoring
          </button>
          <button className="px-6 py-3 bg-zinc-100 rounded-xl border border-gray-800 text-zinc-900 font-semibold text-base hover:bg-zinc-200 transition-colors">
            System status
          </button>
        </div>
      </div>
    </section>
  );
}

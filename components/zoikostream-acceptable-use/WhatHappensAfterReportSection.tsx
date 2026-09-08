import React from 'react';

const STATUS_ROWS = [
  {
    state: 'Received',
    meaning: 'Your report has been recorded. This does not mean a violation has been confirmed.',
  },
  {
    state: 'Under review',
    meaning: 'The concern is being evaluated. This does not indicate any account action or outcome.',
  },
  {
    state: 'Closed',
    meaning: "The review process has ended under ZoikoStream's internal process. Specific outcomes are not shared with reporters unless policy requires it.",
  },
];

export default function WhatHappensAfterReportSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
          What happens after you report
        </h2>

        {/* Table */}
        <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
          <div className="grid grid-cols-12 py-3 text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
            <div className="col-span-3 sm:col-span-2">STATE</div>
            <div className="col-span-9 sm:col-span-10">WHAT IT MEANS</div>
          </div>

          {STATUS_ROWS.map((row) => (
            <div
              key={row.state}
              className="grid grid-cols-12 py-4 text-xs sm:text-sm text-slate-700 items-start"
            >
              <div className="col-span-3 sm:col-span-2 font-semibold text-slate-900">
                {row.state}
              </div>
              <div className="col-span-9 sm:col-span-10 text-slate-600 leading-relaxed">
                {row.meaning}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-500 mt-4 leading-relaxed italic">
          ZoikoStream does not publish account-specific enforcement outcomes or confirm whether a specific action was taken against another user.
        </p>
      </div>
    </section>
  );
}

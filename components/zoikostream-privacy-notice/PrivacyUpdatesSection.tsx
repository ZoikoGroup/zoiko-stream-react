import React from 'react';

export default function PrivacyUpdatesSection() {
  return (
    <section id="updates" className="relative w-full bg-[#f0f4f8] py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-blue-600 text-xs">▸</span>
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            CURRENT-FIRST HISTORY
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
          Updates.
        </h2>

        {/* Entry Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm flex flex-row items-start gap-4 sm:gap-6 max-w-5xl">
          <span className="font-mono text-xs font-semibold text-slate-500 shrink-0 pt-0.5">
            2026-08-01
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Version 1.0 published — initial privacy notice with illustrative data-handling and rights disclosures.
          </p>
        </div>
      </div>
    </section>
  );
}

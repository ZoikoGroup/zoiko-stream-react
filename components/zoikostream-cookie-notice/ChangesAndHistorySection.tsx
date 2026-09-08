import React from 'react';

export default function ChangesAndHistorySection() {
  return (
    <section id="changes-history" className="relative w-full bg-[#f0f4f8] py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            LINEAGE, NOT SILENT EDITS
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
          Changes &amp; history.
        </h2>

        {/* Entry Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-5xl">
          <span className="font-mono text-xs font-bold text-slate-500 shrink-0">
            2026-08-01
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Version 1.0 published — initial illustrative technology inventory across four categories.
          </p>
        </div>
      </div>
    </section>
  );
}

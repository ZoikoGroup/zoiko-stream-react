import React from 'react';

const VERSIONS = [
  {
    version: 'v3.2',
    date: 'Aug 2026',
    summary: 'Added Live Events conduct category and clarified automated access rule.',
  },
  {
    version: 'v3.1',
    date: 'Feb 2026',
    summary: 'Clarified the security-research exception and added responsible-disclosure cross-link.',
  },
  {
    version: 'v3.0',
    date: 'Sep 2025',
    summary: 'Restructured policy into the current rule-category format.',
  },
];

export default function VersionHistorySection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Version history
        </h2>
        <p className="text-slate-600 text-sm mb-6">
          Change summaries are provided for orientation only — the operative text of the current version above always controls.
        </p>

        {/* Table */}
        <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
          {VERSIONS.map((item) => (
            <div
              key={item.version}
              className="grid grid-cols-12 py-4 text-xs sm:text-sm text-slate-700 items-start gap-2"
            >
              <div className="col-span-2 sm:col-span-1 font-bold text-slate-900 font-mono">
                {item.version}
              </div>
              <div className="col-span-3 sm:col-span-2 text-slate-500 font-mono text-xs">
                {item.date}
              </div>
              <div className="col-span-7 sm:col-span-9 text-slate-600 leading-relaxed">
                {item.summary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

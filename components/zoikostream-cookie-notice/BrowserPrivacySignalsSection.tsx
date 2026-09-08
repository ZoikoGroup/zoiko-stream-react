import React from 'react';

const SIGNALS = [
  {
    name: 'Global Privacy Control (GPC)',
    status: 'Not publicly established',
  },
  {
    name: 'Do Not Track (DNT)',
    status: 'Not publicly established',
  },
];

export default function BrowserPrivacySignalsSection() {
  return (
    <section id="browser-signals" className="relative w-full bg-[#080d19] text-white py-16 lg:py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          <span className="font-mono text-xs font-semibold tracking-wider text-teal-400 uppercase">
            NO UNSUPPORTED SIGNAL CLAIM
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          Browser &amp; device privacy signals.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed mb-8">
          We state only what is currently verified — an unconfirmed signal behavior is never claimed as supported.
        </p>

        {/* Signal Rows */}
        <div className="max-w-3xl space-y-2 mb-8">
          {SIGNALS.map((signal) => (
            <div
              key={signal.name}
              className="flex items-center justify-between py-3.5 border-b border-slate-800/80 text-sm font-medium"
            >
              <span className="text-slate-200">{signal.name}</span>
              <span className="font-mono text-[10px] bg-[#11192b] border border-slate-700/80 text-slate-400 px-3 py-1 rounded-full">
                {signal.status}
              </span>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="font-mono text-xs text-slate-500 leading-relaxed max-w-4xl">
          If signal recognition is implemented and verified, this section will state the exact effect — not a generic legal statement.
        </p>
      </div>
    </section>
  );
}

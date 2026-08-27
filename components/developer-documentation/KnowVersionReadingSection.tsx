import React from 'react';

const changelogEntries = [
  {
    date: '2026-08-18',
    badge: 'Added',
    badgeCls: 'bg-emerald-50 text-teal-600',
    desc: 'asset.errored webhook payload field retryable',
  },
  {
    date: '2026-08-05',
    badge: 'Changed',
    badgeCls: 'bg-indigo-50 text-blue-700',
    desc: 'Documented remote URL / import ingest path',
  },
  {
    date: '2026-07-22',
    badge: 'Deprecated',
    badgeCls: 'bg-orange-100 text-yellow-700',
    desc: 'Legacy polling-only status pattern',
  },
];

export function KnowVersionReadingSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider">
              KNOW WHAT VERSION YOU&apos;RE READING
            </span>
          </div>
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Technical documentation is only useful when you know what it describes.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-[850px]">
            Use dated, currentness-labeled language — not &quot;latest&quot; without a source.
          </p>
        </div>

        {/* Deprecation Notice Alert */}
        <div className="w-full p-4 bg-amber-500/10 rounded-xl border-l-4 border-amber-600 border-t border-r border-b border-amber-200 text-amber-900 text-xs leading-relaxed">
          <span className="font-bold">Deprecation notice (illustrative):</span> the legacy polling-only status pattern is deprecated in favor of webhook-first status handling. See the changelog below for the effective date.
        </div>

        {/* Dated Changelog List */}
        <div className="w-full bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 shadow-xs">
          <div className="divide-y divide-gray-100">
            {changelogEntries.map((entry, idx) => (
              <div key={idx} className="py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
                <span className="text-gray-500 font-mono w-24 shrink-0">{entry.date}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${entry.badgeCls}`}>
                  {entry.badge}
                </span>
                <span className="text-zinc-900 font-medium text-sm sm:text-base leading-6">{entry.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTA */}
        <div className="pt-2">
          <button className="px-6 py-3 bg-zinc-100 rounded-xl border border-gray-800 text-zinc-900 font-semibold text-base hover:bg-zinc-200 transition-colors">
            View full Changelog
          </button>
        </div>
      </div>
    </section>
  );
}

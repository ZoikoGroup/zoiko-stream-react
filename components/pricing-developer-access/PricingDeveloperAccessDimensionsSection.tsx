import React from 'react';

const DIMENSIONS = [
  {
    dimension: 'Streaming minutes',
    appliesTo: 'Live & on-demand delivery',
    rule: 'Illustrative — verify current rate before production use',
  },
  {
    dimension: 'Peak concurrent viewers',
    appliesTo: 'Live delivery',
    rule: 'Illustrative — verify current rate before production use',
  },
  {
    dimension: 'Storage (GB-month)',
    appliesTo: 'Recording & assets',
    rule: 'Illustrative — verify current rate before production use',
  },
  {
    dimension: 'Processing minutes',
    appliesTo: 'VOD ingest & encode',
    rule: 'Illustrative — verify current rate before production use',
  },
];

export default function PricingDeveloperAccessDimensionsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-100 flex flex-col justify-start items-start gap-10 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            APPROVED USAGE DIMENSIONS ONLY
          </span>
        </div>
        <h2 className="text-zinc-900 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-tight">
          What determines developer cost.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Only dimensions the current commercial registry actually defines appear here — no invented units.
        </p>
      </div>

      {/* Table Container */}
      <div className="w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-x-auto shadow-xs">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-100 border-b border-gray-200 text-zinc-900 text-xs font-semibold font-['IBM_Plex_Mono'] uppercase">
              <th className="py-3.5 px-5 w-1/4">Dimension</th>
              <th className="py-3.5 px-5 w-1/3">Applies to</th>
              <th className="py-3.5 px-5">Publication rule</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm font-['Inter']">
            {DIMENSIONS.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-5 text-zinc-900 font-semibold">
                  {row.dimension}
                </td>
                <td className="py-4 px-5 text-gray-500 font-normal">
                  {row.appliesTo}
                </td>
                <td className="py-4 px-5 text-gray-500 font-normal">
                  {row.rule}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnote Notice */}
      <p className="text-gray-500 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed max-w-4xl">
        Region/currency, minimum commitments, and volume bands are omitted — the current commercial registry does not publicly define them for this path.
      </p>
    </section>
  );
}

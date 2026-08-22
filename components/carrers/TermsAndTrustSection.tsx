import React from 'react';

const terms = [
  {
    title: 'Compensation',
    desc: 'Displayed on the job detail wherever required by law or approved as company policy, with currency, time basis, and whether the range is base pay only.',
  },
  {
    title: 'Variable pay',
    desc: 'Base, bonus/commission, equity, and total rewards are distinguished — never combined into one misleading range.',
  },
  {
    title: 'Benefits',
    desc: 'Summarized on the role/location page from verified information. No global checklist unless a benefit is truly global.',
  },
];

export default function TermsAndTrustSection() {
  return (
    <section className="w-full bg-slate-100 py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              TERMS AND TRUST
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-zinc-900 leading-tight">
            What applies to your role.
          </h2>

          <p className="text-gray-500 text-base font-normal     leading-relaxed max-w-3xl">
            Benefits, time off, compensation, equity or incentives, and other employment terms can vary by employing entity, location, employment type, and role. Each job posting states the applicable information or links to the authoritative market-specific summary.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {terms.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-100 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between gap-3 h-48"
            >
              <h3 className="text-zinc-900 text-sm font-bold    ">
                {t.title}
              </h3>
              <p className="text-gray-500 text-sm font-normal     leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const boundaries = [
  {
    category: 'Contracting',
    desc: "Zoiko Tech's role in building and operating ZoikoStream does not by itself identify the legal entity that contracts for every customer or service. Applicable agreements are authoritative.",
  },
  {
    category: 'Infrastructure',
    desc: 'Zoiko Tech is the technology company; Zoiko Cloud is shared technology/infrastructure supporting ZoikoStream. The names are not interchangeable.',
  },
  {
    category: 'Data handling',
    desc: 'Technical stewardship does not imply unrestricted access to or sharing of customer data. Data handling follows applicable notices, agreements, access controls, and service architecture.',
  },
  {
    category: 'Security',
    desc: 'A statement that Zoiko Tech secures the platform is not a promise of absolute security or an unstated certification. Route assurance questions to the Trust Center and applicable agreements.',
  },
  {
    category: 'Availability',
    desc: 'Operating the platform does not create an unstated uptime commitment. Service commitments, if any, must come from the applicable service documentation or agreement.',
  },
  {
    category: 'Roadmap',
    desc: 'Evolving the platform does not guarantee a particular feature, release date, integration, region, or future product capability.',
  },
];

export default function TrustBoundarySection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 border-b border-slate-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 text-xs font-bold     uppercase tracking-wider">
              Trust boundary
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold     text-slate-900">
            What the relationship does not imply.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {boundaries.map((b, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl border border-slate-200 flex flex-col gap-4 shadow-xs hover:border-slate-300 transition-colors"
            >
              <span className="text-indigo-600 text-base font-bold     uppercase tracking-wide">
                {b.category}
              </span>
              <p className="text-slate-600 text-sm font-normal     leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

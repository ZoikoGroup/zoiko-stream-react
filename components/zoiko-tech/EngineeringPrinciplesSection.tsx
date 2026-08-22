import React from 'react';

const principles = [
  {
    num: '01',
    title: 'Reliability is designed',
    desc: 'Architecture, operations, observability, and change practices are treated as product responsibilities rather than afterthoughts.',
  },
  {
    num: '02',
    title: 'Security is lifecycle work',
    desc: 'Security and privacy considerations are integrated into design, development, deployment, and operation.',
  },
  {
    num: '03',
    title: 'Evidence over assertion',
    desc: 'Status, trust, change, and compliance claims should resolve to governed evidence wherever public evidence is appropriate.',
  },
  {
    num: '04',
    title: 'Interfaces stay intentional',
    desc: 'APIs, product surfaces, and workflows are designed for understandable contracts, predictable states, and durable integration.',
  },
  {
    num: '05',
    title: 'Accessibility is product quality',
    desc: 'Public and authenticated experiences are designed to meet applicable accessibility standards rather than retrofitted at release.',
  },
  {
    num: '06',
    title: 'Change is controlled',
    desc: 'Product evolution uses defined release, validation, rollback, and communication practices appropriate to the affected capability.',
  },
];

export default function EngineeringPrinciplesSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 border-b border-slate-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 text-xs font-bold     uppercase tracking-wider">
              Operating principles
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold     text-slate-900">
            Engineering principles.
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal     leading-relaxed max-w-3xl">
            Not certifications, guarantees, or contractual promises — product-development and operating principles that translate company values into technology stewardship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="size-8 bg-slate-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold     text-xs shrink-0">
                {p.num}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-base font-bold    ">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal     leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-200">
          <p className="text-slate-400 text-sm font-normal     leading-relaxed">
            These are product-development and operating principles, not certifications, guarantees, SLAs, controls, or contractual promises unless an authoritative document states otherwise.
          </p>
        </div>
      </div>
    </section>
  );
}

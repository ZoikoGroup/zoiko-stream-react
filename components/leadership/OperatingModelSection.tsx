'use client';

interface Expectation {
  number: string;
  title: string;
  description: string;
}

const EXPECTATIONS: Expectation[] = [
  {
    number: '01',
    title: 'Clear owners',
    description:
      'Material decisions should have a clear accountable owner. Shared work does not mean shared ambiguity.',
  },
  {
    number: '02',
    title: 'Evidence before assertion',
    description:
      'Reliability, security, performance, and compliance claims should be supported by authoritative evidence before they become public promises.',
  },
  {
    number: '03',
    title: 'Customer impact stays visible',
    description:
      'Product and operational decisions should account for the people building with ZoikoStream, the teams operating it, and the audiences depending on the result.',
  },
  {
    number: '04',
    title: 'Escalation without ambiguity',
    description:
      'When risk, incidents, or high-stakes Live Events require escalation, ownership and communication paths should be clear enough to act without avoidable delay.',
  },
];

export default function OperatingModelSection() {
  return (
    <section id="operating-model" className="w-full scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Operating model
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-neutral-700 sm:text-4xl">
            How leadership operates.
          </h2>

          <p className="max-w-2xl text-base leading-6 text-gray-500">
            Four leadership-specific expectations that explain how accountability
            works when decisions carry product, customer, operational, or
            reputational consequences.
          </p>
        </div>

        {/* Expectations */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {EXPECTATIONS.map((item) => (
            <div key={item.number} className="flex flex-col items-start">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold leading-6 text-indigo-500">
                {item.number}
              </span>

              <h3 className="mt-5 text-base font-bold leading-7 text-neutral-700">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-base font-semibold leading-6 text-blue-400">
          Read ZoikoStream Purpose &amp; Principles →
        </p>
      </div>
    </section>
  );
}

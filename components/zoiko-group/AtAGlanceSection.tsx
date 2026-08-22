'use client';

interface Fact {
  label: string;
  value: string;
  isLink?: boolean;
}

const FACTS: Fact[] = [
  { label: 'Role', value: 'Parent organization behind ZoikoStream' },
  {
    label: 'Relationship',
    value: 'ZoikoStream is built within Zoiko Tech, within the wider Zoiko organization',
  },
  { label: 'Headquarters', value: 'Sacramento, California, United States' },
  { label: 'European headquarters', value: 'London, United Kingdom' },
  {
    label: 'Corporate information',
    value: 'Official Zoiko Group destination →',
    isLink: true,
  },
  {
    label: 'Customer contracts',
    value: 'Applicable service terms, order form, or agreement are authoritative',
  },
];

export default function AtAGlanceSection() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Verified facts
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            Zoiko Group at a glance.
          </h2>
        </div>

        <dl className="mt-10 border-t border-zinc-200">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col gap-1 border-b border-zinc-200 py-5 md:flex-row md:items-center md:gap-8 md:py-6"
            >
              <dt className="text-xs font-semibold uppercase leading-5 tracking-wide text-gray-400 md:w-56 md:shrink-0">
                {fact.label}
              </dt>

              <dd
                className={`text-base leading-7 ${
                  fact.isLink
                    ? 'font-semibold text-blue-400'
                    : 'font-normal text-neutral-700'
                }`}
              >
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

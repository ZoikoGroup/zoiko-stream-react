'use client';

interface RelationshipType {
  title: string;
  description: string;
  source: string;
  guardrail: string;
}

const TYPES: RelationshipType[] = [
  {
    title: 'Corporate & operating context',
    description:
      'Explains group relationship, technology-company context, governance, and — where approved — legal-provider information. Covers Zoiko Group, Zoiko Tech, and applicable legal/provider references.',
    source: 'Corporate/legal source of truth.',
    guardrail: 'never derived from product branding or domain names.',
  },
  {
    title: 'Product & technology context',
    description:
      'Explains the platform, shared technology, and capabilities customers interact with. Covers ZoikoStream, Zoiko Cloud, and Live Events.',
    source: 'Product taxonomy + approved architecture source.',
    guardrail: 'infrastructure is never represented as ownership.',
  },
];

export default function CategoryClaritySection() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Category clarity
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            Two relationship types.
          </h2>

          <p className="max-w-3xl text-base leading-6 text-gray-500">
            Corporate structure and product/technology structure answer different
            questions. Keeping them separate prevents category errors.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {TYPES.map((type) => (
            <article
              key={type.title}
              className="flex flex-col rounded-2xl bg-white p-7 outline-1 -outline-offset-1 outline-zinc-200 sm:p-8"
            >
              <h3 className="text-lg font-bold leading-7 text-neutral-700">
                {type.title}
              </h3>

              <p className="mt-5 flex-1 text-sm leading-6 text-gray-500">
                {type.description}
              </p>

              <div className="mt-6 border-t border-zinc-200 pt-4">
                <p className="text-xs leading-5 text-gray-400">
                  <span className="font-semibold text-neutral-700">
                    Authoritative source:
                  </span>{' '}
                  {type.source}{' '}
                  <span className="font-semibold text-neutral-700">Guardrail:</span>{' '}
                  {type.guardrail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-base font-medium leading-6 text-neutral-700">
          &quot;Corporate structure tells you which organizations sit behind the
          platform. Product and technology structure tells you how ZoikoStream, shared
          infrastructure, and capabilities fit together. They are related, but they are
          not the same thing.&quot;
        </p>
      </div>
    </section>
  );
}

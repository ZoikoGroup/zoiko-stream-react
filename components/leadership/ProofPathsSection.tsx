'use client';

interface ProofPath {
  title: string;
  description: string;
  ctaText: string;
}

const PROOF_PATHS: ProofPath[] = [
  {
    title: 'Purpose & Principles',
    description:
      'See the operating principles leadership is expected to apply across the platform.',
    ctaText: 'Read Purpose & Principles →',
  },
  {
    title: 'Operating Context',
    description:
      'Understand how ZoikoStream, Zoiko Tech, and Zoiko Group fit together.',
    ctaText: 'View Operating Context →',
  },
  {
    title: 'Trust Center',
    description:
      'Review security, privacy, resilience, and governance information.',
    ctaText: 'Visit the Trust Center →',
  },
  {
    title: 'Newsroom / Company Updates',
    description:
      'Check approved company announcements, leadership changes, and material updates.',
    ctaText: 'View company updates →',
  },
];

export default function ProofPathsSection() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Proof paths
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-neutral-700 sm:text-4xl">
            Leadership you can verify.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF_PATHS.map((path) => (
            <article
              key={path.title}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <div>
                <h3 className="text-base font-bold leading-6 text-neutral-700">
                  {path.title}
                </h3>

                <p className="mt-3 text-sm leading-5 text-gray-500">
                  {path.description}
                </p>
              </div>

              <span className="mt-8 text-sm font-semibold leading-5 text-blue-400">
                {path.ctaText}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

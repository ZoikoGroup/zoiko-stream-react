'use client';

import Link from 'next/link';

interface EvidencePath {
  title: string;
  description: string;
  ctaText: string;
  href?: string;
  icon: string;
}

const EVIDENCE_PATHS: EvidencePath[] = [
  {
    title: 'System Status',
    description:
      'See current production service health and incident communications.',
    ctaText: 'View System Status →',
    icon: '/images/purpose-principles/ic-pulse.svg',
  },
  {
    title: 'Trust Center',
    description: 'Review security, privacy, resilience, and trust information.',
    ctaText: 'Visit the Trust Center →',
    icon: '/images/purpose-principles/ic-shield.svg',
  },
  {
    title: 'Developer resources',
    description: 'Inspect the APIs, documentation, and implementation model.',
    ctaText: 'Go to Developers →',
    icon: '/images/purpose-principles/ic-code.svg',
  },
  {
    title: 'Live Events',
    description:
      'See how ZoikoStream supports planned and managed live broadcasts.',
    ctaText: 'Explore Live Events →',
    href: '/live-events-overview',
    icon: '/images/purpose-principles/ic-calendar.svg',
  },
];

export default function EvidencePathsSection() {
  return (
    <section className="w-full bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-500" />
            <span className="font-mono text-xs uppercase leading-5 tracking-wide text-blue-500">
              Evidence paths
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-9 text-zinc-900 sm:text-3xl">
            Proof, not promises.
          </h2>

          <p className="max-w-xl text-base leading-6 text-gray-500">
            No badges, no unverified superlatives — just direct routes to evidence
            you can inspect yourself.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EVIDENCE_PATHS.map((path) => (
            <article
              key={path.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-gray-200 bg-slate-100">
                <img src={path.icon} alt="" aria-hidden="true" className="size-5" />
              </span>

              <h3 className="mt-6 text-base font-bold leading-6 text-zinc-900">
                {path.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-5 text-gray-500">
                {path.description}
              </p>

              {path.href ? (
                <Link
                  href={path.href}
                  className="mt-8 text-sm font-semibold leading-5 text-blue-500 transition-colors hover:text-blue-600"
                >
                  {path.ctaText}
                </Link>
              ) : (
                <span className="mt-8 text-sm font-semibold leading-5 text-blue-500">
                  {path.ctaText}
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

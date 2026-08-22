'use client';

import Link from 'next/link';

interface EvidencePath {
  image: string;
  alt: string;
  title: string;
  description: string;
  ctaText: string;
  href?: string;
}

const PATHS: EvidencePath[] = [
  {
    image: '/images/operating-context/zoiko-group-reception.png',
    alt: 'Zoiko Group branding on an office reception desk',
    title: 'Zoiko Group',
    description: 'Parent-organization overview and group context.',
    ctaText: 'Explore Zoiko Group →',
    href: '/zoiko-group',
  },
  {
    image: '/images/operating-context/zoiko-tech-signage.png',
    alt: 'Zoiko Tech signage in an office corridor',
    title: 'Zoiko Tech',
    description: 'Technology-company context and public role.',
    ctaText: 'Explore Zoiko Tech →',
  },
  {
    image: '/images/operating-context/trust-center.png',
    alt: 'Illuminated circuit board representing platform security',
    title: 'Trust Center',
    description: 'Security, privacy, resilience, governance, and trust evidence.',
    ctaText: 'Visit Trust Center →',
  },
  {
    image: '/images/operating-context/system-status.png',
    alt: 'Engineers monitoring dashboards at their desks',
    title: 'System Status',
    description: 'Current and historical public service-health information.',
    ctaText: 'View System Status →',
  },
  {
    image: '/images/operating-context/company-updates-newsroom.png',
    alt: 'Person reading a newspaper on a bench',
    title: 'Company Updates / Newsroom',
    description: 'Approved material announcements and company changes.',
    ctaText: 'View company updates →',
  },
  {
    image: '/images/operating-context/legal-terms.png',
    alt: 'Person signing a printed agreement',
    title: 'Legal / Terms',
    description: 'Applicable terms, agreements, and provider information.',
    ctaText: 'View Legal →',
  },
];

export default function EvidencePathsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Evidence paths
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            Verify the context.
          </h2>

          <p className="max-w-3xl text-base leading-6 text-gray-500">
            A relationship page earns trust when visitors can verify the important
            claims somewhere authoritative.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PATHS.map((path) => (
            <article
              key={path.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-zinc-200"
            >
              <div className="aspect-16/10 w-full overflow-hidden bg-slate-100">
                <img
                  src={path.image}
                  alt={path.alt}
                  className="size-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-7 text-neutral-700">
                  {path.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-gray-500">
                  {path.description}
                </p>

                {path.href ? (
                  <Link
                    href={path.href}
                    className="mt-6 text-sm font-semibold leading-5 text-blue-400 transition-colors hover:text-blue-500"
                  >
                    {path.ctaText}
                  </Link>
                ) : (
                  <span className="mt-6 text-sm font-semibold leading-5 text-blue-400">
                    {path.ctaText}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

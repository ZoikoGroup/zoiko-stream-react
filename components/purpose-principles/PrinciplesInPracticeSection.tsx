'use client';

import Link from 'next/link';

interface Surface {
  eyebrow: string;
  description: string;
  ctaText: string;
  href?: string;
  image: string;
  alt: string;
  overlay: string;
}

const SURFACES: Surface[] = [
  {
    eyebrow: 'Platform',
    description:
      'Predictable workflows; explicit system states; clear permissions; controls at the right level; consistent terminology from dashboard to billing and support.',
    ctaText: 'Explore the platform →',
    href: '/platform-overview',
    image: '/images/purpose-principles/practice-platform.png',
    alt: 'Close-up of an illuminated circuit board',
    overlay: 'from-teal-600/60 to-blue-500/25',
  },
  {
    eyebrow: 'Developers',
    description:
      'Readable APIs and documentation; actionable errors; stable versioning discipline; clear separation of Test and Live modes; examples that answer real implementation questions.',
    ctaText: 'Go to Developers →',
    image: '/images/purpose-principles/practice-developers.png',
    alt: 'A desktop workstation displaying the words Do More',
    overlay: 'from-blue-500/50 to-violet-500/20',
  },
  {
    eyebrow: 'Live Events',
    description:
      'Role-aware controls; readiness checks; run-of-show clarity; clear operational ownership; monitoring and incident-aware workflows designed around the pressure of a live broadcast.',
    ctaText: 'Explore Live Events →',
    href: '/live-events-overview',
    image: '/images/purpose-principles/practice-live-events.png',
    alt: 'Concert stage lighting over a crowd at a live event',
    overlay: 'from-fuchsia-500/50 to-violet-500/25',
  },
  {
    eyebrow: 'Trust & service communications',
    description:
      'Governed public status rather than raw monitoring; evidence-led security and privacy information; clear incident states; post-incident learning that protects operational truth.',
    ctaText: 'Visit the Trust Center →',
    image: '/images/purpose-principles/practice-trust.png',
    alt: 'A hand pointing at information on a laptop screen',
    overlay: 'from-teal-600/50 to-blue-500/30',
  },
];

export default function PrinciplesInPracticeSection() {
  return (
    <section className="w-full bg-[#EEF1F6]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-500" />
            <span className="font-mono text-xs uppercase leading-5 tracking-wide text-blue-500">
              Proof translation
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-9 text-zinc-900 sm:text-3xl">
            Principles in practice.
          </h2>

          <p className="max-w-2xl text-base leading-6 text-gray-500">
            Each surface below shows how these principles change something real —
            not just how they read on a page.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {SURFACES.map((surface) => (
            <article
              key={surface.eyebrow}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              {/* Media */}
              <div className="relative aspect-[594/170] w-full overflow-hidden">
                <img
                  src={surface.image}
                  alt={surface.alt}
                  className="h-full w-full object-cover"
                />
                <span
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-r mix-blend-multiply ${surface.overlay}`}
                />
                <span className="absolute bottom-2 right-3 font-mono text-[9.5px] leading-4 text-white/75">
                  Photo: Unsplash
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-7">
                <span className="font-mono text-xs font-semibold uppercase leading-5 tracking-wide text-gray-500">
                  {surface.eyebrow}
                </span>

                <p className="mt-4 flex-1 text-base leading-6 text-gray-500">
                  {surface.description}
                </p>

                {surface.href ? (
                  <Link
                    href={surface.href}
                    className="mt-6 text-sm font-semibold leading-6 text-blue-500 transition-colors hover:text-blue-600"
                  >
                    {surface.ctaText}
                  </Link>
                ) : (
                  <span className="mt-6 text-sm font-semibold leading-6 text-blue-500">
                    {surface.ctaText}
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

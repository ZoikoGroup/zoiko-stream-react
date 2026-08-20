'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Tier {
  eyebrow: string;
  title: string;
  description: string;
  ctaText: string;
  href?: string;
}

const TIERS: Tier[] = [
  {
    eyebrow: 'Parent organization',
    title: 'Zoiko Group',
    description: 'Provides the wider organizational context.',
    ctaText: 'Official Zoiko Group destination →',
  },
  {
    eyebrow: 'Technology company',
    title: 'Zoiko Tech',
    description: 'The technology company within which ZoikoStream is built.',
    ctaText: '/company/zoiko-tech →',
  },
  {
    eyebrow: 'Streaming platform',
    title: 'ZoikoStream',
    description: 'The platform for video streaming and Live Events capabilities.',
    ctaText: 'Explore the platform →',
    href: '/platform-overview',
  },
  {
    eyebrow: 'Specialized capability',
    title: 'Live Events',
    description:
      'A ZoikoStream capability for managed and broadcast live-event experiences.',
    ctaText: 'Explore Live Events →',
    href: '/live-events-overview',
  },
];

export default function HowZoikoStreamFitsSection() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Relationship clarity
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            How ZoikoStream fits.
          </h2>
        </div>

        {/* Chain */}
        <div className="mt-10 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:gap-0">
          {TIERS.map((tier, index) => (
            <div key={tier.title} className="contents">
              <article className="flex flex-1 flex-col border border-zinc-200 bg-white p-6">
                <span className="text-xs font-bold uppercase leading-5 tracking-wide text-blue-400">
                  {tier.eyebrow}
                </span>

                <h3 className="mt-3 text-lg font-bold leading-7 text-neutral-700">
                  {tier.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-gray-500">
                  {tier.description}
                </p>

                {tier.href ? (
                  <Link
                    href={tier.href}
                    className="mt-6 text-xs font-semibold leading-5 text-blue-400 transition-colors hover:text-blue-500"
                  >
                    {tier.ctaText}
                  </Link>
                ) : (
                  <span className="mt-6 text-xs font-semibold leading-5 text-blue-400">
                    {tier.ctaText}
                  </span>
                )}
              </article>

              {index < TIERS.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="mx-auto size-5 shrink-0 rotate-90 text-gray-400 lg:mx-3 lg:rotate-0"
                  strokeWidth={1.5}
                />
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm font-semibold leading-6 text-blue-400 underline decoration-blue-400 underline-offset-4">
          See the full operating context →
        </p>
      </div>
    </section>
  );
}

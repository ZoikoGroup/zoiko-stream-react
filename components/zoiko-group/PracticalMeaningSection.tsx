'use client';

import Link from 'next/link';

interface Audience {
  role: string;
  meaning: string;
  ctaText: string;
  href?: string;
}

const AUDIENCES: Audience[] = [
  {
    role: 'Enterprise buyer',
    meaning:
      'You can understand the organizational context behind the platform while evaluating ZoikoStream on its own product, security, reliability, legal, and commercial evidence.',
    ctaText: 'Trust Center →',
  },
  {
    role: 'Procurement / Legal',
    meaning:
      'Group affiliation does not replace the customer-specific agreement. Use the applicable service terms, order form, and legal notices for provider and obligation details.',
    ctaText: 'Legal →',
  },
  {
    role: 'Developer',
    meaning:
      'The Group relationship does not change the ZoikoStream developer contract or API behavior. Use product documentation for technical truth.',
    ctaText: 'Developers →',
  },
  {
    role: 'Live Events organizer',
    meaning:
      'Live Events is a ZoikoStream capability; event-specific delivery and commercial scope come from the applicable engagement.',
    ctaText: 'Live Events →',
    href: '/live-events-overview',
  },
  {
    role: 'Press / Analyst',
    meaning:
      'Use this page for high-level relationship context and the official Zoiko Group / Press & Media surfaces for verified corporate information.',
    ctaText: 'Press & media →',
  },
];

export default function PracticalMeaningSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Practical meaning
            </span>
          </div>

          <h2 className="max-w-2xl text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            What the Group relationship means.
          </h2>
        </div>

        <div className="mt-10 border-t border-zinc-200">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.role}
              className="flex flex-col gap-3 border-b border-zinc-200 py-6 lg:flex-row lg:items-start lg:gap-8"
            >
              <span className="text-sm font-semibold leading-6 text-neutral-700 lg:w-48 lg:shrink-0">
                {audience.role}
              </span>

              <p className="flex-1 text-base leading-6 text-gray-500">
                {audience.meaning}
              </p>

              {audience.href ? (
                <Link
                  href={audience.href}
                  className="text-sm font-semibold leading-6 text-blue-400 transition-colors hover:text-blue-500 lg:w-36 lg:shrink-0"
                >
                  {audience.ctaText}
                </Link>
              ) : (
                <span className="text-sm font-semibold leading-6 text-blue-400 lg:w-36 lg:shrink-0">
                  {audience.ctaText}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

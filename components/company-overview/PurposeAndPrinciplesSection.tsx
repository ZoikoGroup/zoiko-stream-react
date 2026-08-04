'use client';

import Link from 'next/link';

interface PrincipleCard {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
}

const PRINCIPLES: PrincipleCard[] = [
  {
    id: 'understandable',
    title: 'Make the platform understandable',
    description:
      'Explain architecture, access, and operating responsibilities clearly, in plain language backed by real documentation.',
    ctaText: 'Read the documentation →',
    href: '/docs',
  },
  {
    id: 'destination-real',
    title: 'Make every destination real',
    description:
      'Publish only complete, authorized routes. No empty pages, false access, or unsupported claims.',
    ctaText: 'Explore the platform →',
    href: '/platform',
  },
  {
    id: 'unmistakable-action',
    title: 'Keep the next action unmistakable',
    description:
      'One dominant, contextual action per page, with a consistent hierarchy across the entire platform.',
    ctaText: 'See how it works →',
    href: '/how-it-works',
  },
  {
    id: 'sensitive-moments',
    title: 'Protect sensitive moments',
    description:
      'Apply respectful language, privacy, and consent controls to every Live Events broadcast, especially private and memorial events.',
    ctaText: 'Live Events sensitivity →',
    href: '/live-events/sensitivity',
  },
  {
    id: 'operational-truth',
    title: 'Report operational truth',
    description:
      'Show current state only from validated systems — status, release notes, and evidence, never estimates.',
    ctaText: 'View system status →',
    href: '/status',
  },
  {
    id: 'build-for-access',
    title: 'Build for access',
    description:
      'Support keyboard navigation, assistive technology, captions, language, and reflow across the platform.',
    ctaText: 'Accessibility overview →',
    href: '/accessibility',
  },
];

export default function PurposeAndPrinciplesSection() {
  return (
    <section className="w-full bg-slate-50 px-6 py-16 text-gray-900 sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex max-w-2xl flex-col items-start gap-3">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-0.5 w-5 bg-cyan-400" />
            <span className="  text-xs font-bold uppercase tracking-wider text-cyan-500">
              Purpose and principles
            </span>
          </div>

          {/* Main Title */}
          <h2 className="  text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            What guides the organization.
          </h2>

          {/* Subtitle Paragraph */}
          <p className="  text-base font-normal leading-relaxed text-slate-500">
            Principles specific to secure media infrastructure, global streaming, and
            professional live-event operations — not generic corporate values.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex flex-col gap-2">
                {/* Principle Title */}
                <h3 className="  text-base font-bold leading-snug text-gray-900">
                  {item.title}
                </h3>

                {/* Principle Description */}
                <p className="pb-4   text-sm font-normal leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>

              {/* Action Link with Cyan Underline */}
              <div>
                <Link
                  href={item.href}
                  className="inline-block border-b-2 border-cyan-400 pb-0.5   text-xs font-bold text-gray-900 transition-colors hover:border-cyan-600 hover:text-cyan-600 focus:outline-none"
                >
                  {item.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
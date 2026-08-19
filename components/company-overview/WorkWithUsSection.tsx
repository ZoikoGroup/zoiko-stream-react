'use client';

import Link from 'next/link';

interface EngagementPathway {
  number: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
}

const PATHWAYS: EngagementPathway[] = [
  {
    number: '01',
    title: 'Careers',
    description: 'Explore current, approved employment opportunities across Zoiko Tech.',
    ctaText: 'View open roles →',
    href: '/careers',
  },
  {
    number: '02',
    title: 'Partners',
    description: 'Discuss an authorized technology, commercial, or infrastructure partnership.',
    ctaText: 'Talk to partnerships →',
    href: '/partners',
  },
  {
    number: '03',
    title: 'Enterprise inquiries',
    description: 'Evaluate ZoikoStream for secure broadcasting and enterprise media operations.',
    ctaText: 'Talk to an expert →',
    href: '/enterprise',
  },
  {
    number: '04',
    title: 'Developer relations',
    description: 'Engage the developer community, documentation team, and API roadmap.',
    ctaText: 'Start building →',
    href: '/developers',
  },
  {
    number: '05',
    title: 'Live Events inquiries',
    description: 'Plan a professionally managed broadcast for your event or occasion.',
    ctaText: 'Plan a live event →',
    href: '/plan-a-live-event',
  },
  {
    number: '06',
    title: 'Accessibility contact',
    description: 'Request accessible information or report an access barrier.',
    ctaText: 'Contact accessibility →',
    href: '/accessibility/contact',
  },
];

export default function WorkWithUsSection() {
  return (
    <section className="w-full bg-slate-50 px-6 py-16 text-gray-900 sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10 flex max-w-2xl flex-col items-start gap-3">
          {/* Tagline / Subheading Badge */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-0.5 w-5 bg-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-500">
              Work with us
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            How you can engage.
          </h2>

          {/* Description Subtitle */}
          <p className="text-sm font-normal leading-relaxed text-slate-500 sm:text-base">
            Each pathway collects only the information needed for that purpose.
          </p>
        </div>

        {/* 6 Pathways Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PATHWAYS.map((item) => (
            <div
              key={item.number}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex flex-col items-start gap-4">
                {/* Number Badge */}
                <div className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-gray-950 border border-transparent px-2.5">
                  <span className="text-sm font-bold text-cyan-400">
                    {item.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-xs font-normal leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-1">
                <Link
                  href={item.href}
                  className="inline-flex items-center text-sm font-bold text-gray-900 transition-colors group-hover:text-cyan-600 focus:outline-none"
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
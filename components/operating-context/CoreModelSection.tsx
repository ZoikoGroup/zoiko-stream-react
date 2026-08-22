'use client';

import Link from 'next/link';

interface LaneCard {
  image: string;
  alt: string;
  badge: string;
  title: string;
  description: string;
  relationship: string;
  ctaText: string;
  href?: string;
}

interface Lane {
  eyebrow: string;
  accent: string;
  surface: string;
  cards: LaneCard[];
}

const LANES: Lane[] = [
  {
    eyebrow: 'Corporate & Operating Context',
    accent: 'text-teal-400',
    surface:
      'bg-gradient-to-b from-teal-400/10 to-teal-400/0 outline-1 -outline-offset-1 outline-teal-400/25',
    cards: [
      {
        image: '/images/operating-context/core-zoiko-group-dashboard.png',
        alt: 'Performance dashboard representing group-level oversight',
        badge: 'Parent organization',
        title: 'Zoiko Group',
        description: 'Provides group-level governance and portfolio context.',
        relationship: 'Parent organization of Zoiko Tech',
        ctaText: 'Explore Zoiko Group →',
        href: '/zoiko-group',
      },
      {
        image: '/images/operating-context/core-zoiko-tech-engineers.png',
        alt: 'Engineers collaborating on laptops, representing Zoiko Tech',
        badge: 'Technology company',
        title: 'Zoiko Tech',
        description:
          'Where ZoikoStream is built; approved operating-role copy only where verified.',
        relationship: 'Built within Zoiko Tech',
        ctaText: 'Explore Zoiko Tech →',
      },
    ],
  },
  {
    eyebrow: 'Product & Technology Context',
    accent: 'text-violet-500',
    surface:
      'bg-gradient-to-b from-violet-500/10 to-violet-500/0 outline-1 -outline-offset-1 outline-violet-500/25',
    cards: [
      {
        image: '/images/operating-context/core-zoiko-cloud-racks.png',
        alt: 'Data center server racks representing Zoiko Cloud infrastructure',
        badge: 'Shared technology / infrastructure',
        title: 'Zoiko Cloud',
        description:
          'Supports eligible platform services; not a legal-parent label.',
        relationship: 'Supports ZoikoStream',
        ctaText: 'Platform / infrastructure →',
        href: '/platform-delivery-and-trust-overview',
      },
      {
        image: '/images/operating-context/core-live-events-stage.png',
        alt: 'Audience hands raised under stage lighting at a live event',
        badge: 'Specialized capability',
        title: 'Live Events',
        description: 'Part of the ZoikoStream product experience.',
        relationship: 'Capability of ZoikoStream',
        ctaText: 'Explore Live Events →',
        href: '/live-events-overview',
      },
    ],
  },
];

export default function CoreModelSection() {
  return (
    <section id="operating-model" className="w-full scroll-mt-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Core model
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            Where accountability sits.
          </h2>

          <p className="max-w-3xl text-base leading-6 text-gray-500">
            A two-lane operating model, not a single org chart: Corporate &amp;
            Operating Context on one side, Product &amp; Technology Context on the
            other. ZoikoStream is the controlled intersection between the two.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {LANES.map((lane) => (
            <div key={lane.eyebrow} className={`rounded-2xl p-6 sm:p-7 ${lane.surface}`}>
              <span
                className={`text-xs font-bold uppercase leading-5 tracking-wide ${lane.accent}`}
              >
                {lane.eyebrow}
              </span>

              <div className="mt-5 flex flex-col gap-5">
                {lane.cards.map((card) => (
                  <article
                    key={card.title}
                    className="overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-zinc-200"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-slate-100">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="size-full object-cover"
                      />
                    </div>

                    <div className="p-5 sm:p-6">
                      <span className="inline-flex rounded-[100px] bg-slate-100 px-3 py-1.5 text-xs font-bold uppercase leading-4 tracking-wide text-gray-500">
                        {card.badge}
                      </span>

                      <h3 className="mt-4 text-lg font-bold leading-8 text-neutral-700">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {card.description}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                        <span className="text-xs font-semibold leading-5 text-indigo-500">
                          {card.relationship}
                        </span>
                        {card.href ? (
                          <Link
                            href={card.href}
                            className="text-sm font-semibold leading-5 text-blue-400 transition-colors hover:text-blue-500"
                          >
                            {card.ctaText}
                          </Link>
                        ) : (
                          <span className="text-sm font-semibold leading-5 text-blue-400">
                            {card.ctaText}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl items-start gap-3 rounded-[10px] border border-zinc-200 bg-white px-4 py-5">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-[3px] bg-teal-400" />
          <p className="text-sm leading-5 text-gray-400">
            The page may explain brand and operating context, but it must not
            substitute for the legal provider named in customer-specific terms, order
            forms, or agreements.
          </p>
        </div>
      </div>
    </section>
  );
}

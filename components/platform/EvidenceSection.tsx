'use client';

import Link from 'next/link';

interface EvidenceCard {
  category: string;
  items: string[];
  ctaText: string;
  ctaHref: string;
  isPrimary?: boolean;
}

const EVIDENCE_CARDS: EvidenceCard[] = [
  {
    category: 'Inspect',
    items: ['Architecture', 'Trust Center', 'System status', 'Documentation'],
    ctaText: 'Read the documentation',
    ctaHref: '/docs',
  },
  {
    category: 'Build',
    items: ['Developers overview', 'Quickstart', 'API reference'],
    ctaText: 'Start building',
    ctaHref: '/build',
    isPrimary: true,
  },
  {
    category: 'Operate / evaluate',
    items: ['Explore enterprise solutions', 'Solutions overview'],
    ctaText: 'Talk to an expert',
    ctaHref: '/contact',
  },
  {
    category: 'Plan',
    items: ['Live Events overview', 'Live Events FAQs'],
    ctaText: 'Plan a live event',
    ctaHref: '/plan-a-live-event',
  },
];

export default function EvidenceSection() {
  return (
    <section className="w-full bg-zinc-950 px-4 py-16 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            <span className="  text-xs font-medium uppercase tracking-wide text-teal-400">
              EVIDENCE, NOT DECORATION
            </span>
          </div>

          <h2 className="  text-3xl font-light leading-tight text-slate-100 sm:text-4xl md:text-5xl">
            What evidence can you inspect?
          </h2>

          <p className="  text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            Real documentation, architecture, status, and approved proof - organized by the job you&apos;re trying
            to do.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EVIDENCE_CARDS.map((card) => (
            <div
              key={card.category}
              className="flex flex-col justify-between rounded-2xl border border-gray-800 bg-zinc-900 p-6"
            >
              <div className="flex flex-col gap-4">
                <h3 className="  text-xs font-semibold uppercase tracking-wide text-slate-100">
                  {card.category}
                </h3>

                <ul className="flex flex-col divide-y divide-gray-800">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="py-2.5   text-sm font-normal text-slate-400 transition-colors hover:text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-2">
                <Link
                  href={card.ctaHref}
                  className={`flex min-h-[48px] w-full items-center justify-center rounded-[10px] px-6 py-3.5 text-center   text-base font-normal transition-all ${
                    card.isPrimary
                      ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-slate-950 hover:opacity-90'
                      : 'border border-gray-700 text-slate-100 hover:border-gray-500 hover:bg-zinc-800'
                  }`}
                >
                  {card.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

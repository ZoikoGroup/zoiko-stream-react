'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProofItem {
  code: string;
  title: string;
  description: string;
  href?: string;
  actionText?: string;
}

const PROOF_ITEMS: ProofItem[] = [
  {
    code: 'GA',
    title: 'Guides & architecture',
    description:
      'Reference architecture and implementation guides relevant to a selected path.',
    href: '/architecture',
    actionText: 'View guides',
  },
  {
    code: 'DP',
    title: 'Demos & product evidence',
    description:
      'Real, approved interface behavior — labeled illustrative or production.',
    href: '/demos',
    actionText: 'View demos',
  },
  {
    code: 'CE',
    title: 'Customer & operational evidence',
    description:
      'No customer evidence has been authorized for publication yet. This module renders only once named, attributable proof is approved.',
  },
];

export default function ProofSection() {
  return (
    <section className="w-full bg-zinc-950 px-4 py-16 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        
        {/* Header Block */}
        <div className="flex max-w-2xl flex-col gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            <span className="  text-xs font-normal uppercase tracking-wide text-teal-400">
              EVIDENCE, NOT DECORATION
            </span>
          </div>

          <h2 className="  text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
            What proof can you inspect?
          </h2>

          <p className="  text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            Only current, complete, and attributable evidence — omitted rather than faked where nothing verified exists yet.
          </p>
        </div>

        {/* Proof Items List */}
        <div className="divide-y divide-gray-800 border-y border-gray-800">
          {PROOF_ITEMS.map((item) => (
            <div
              key={item.code}
              className="flex flex-col items-start gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              {/* Badge & Info Container */}
              <div className="flex flex-1 items-start gap-4 sm:items-center">
                {/* Code Avatar Badge */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-800 bg-gray-900   text-xs font-normal text-teal-400">
                  {item.code}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="  text-base font-bold text-slate-100">
                    {item.title}
                  </h3>
                  <p className="  text-xs font-normal leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Conditional Action Link */}
              {item.href && item.actionText && (
                <Link
                  href={item.href}
                  className="group inline-flex shrink-0 items-center gap-1.5   text-xs font-semibold text-teal-400 transition-colors hover:text-teal-300 sm:self-center"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
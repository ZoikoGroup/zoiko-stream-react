'use client';

import { Scale } from 'lucide-react';

interface Tradeoff {
  label: string;
  title: string;
  description: string;
}

const TRADEOFFS: Tradeoff[] = [
  {
    label: 'TRADEOFF 01',
    title: 'Move fast. Not at the expense of operational truth.',
    description:
      'Speed is valuable when the underlying state is clear, evidence is preserved, and customers are not misled by optimistic UI.',
  },
  {
    label: 'TRADEOFF 02',
    title: 'Add power. Not at the expense of clarity.',
    description:
      'Advanced capability should not force every user to navigate advanced complexity. Progressive disclosure protects both expert control and everyday usability.',
  },
  {
    label: 'TRADEOFF 03',
    title: 'Scale globally. Not at the expense of customer control.',
    description:
      'Global infrastructure and broad capability should increase choice, not create unnecessary lock-in or obscure where responsibility sits.',
  },
];

export default function TradeoffsSection() {
  return (
    <section className="w-full bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-500" />
            <span className="font-mono text-xs uppercase leading-5 tracking-wide text-blue-500">
              Decision discipline
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-9 text-slate-100 sm:text-3xl">
            The tradeoffs we choose.
          </h2>

          <p className="max-w-2xl text-base leading-6 text-slate-400">
            Principles alone don&apos;t resolve hard calls. These are the judgment
            rules behind them.
          </p>
        </div>

        {/* Rows */}
        <div className="mt-10 flex flex-col gap-4">
          {TRADEOFFS.map((tradeoff) => (
            <article
              key={tradeoff.label}
              className="flex flex-col gap-4 rounded-2xl border border-gray-800 bg-zinc-900 p-7 sm:flex-row sm:gap-6"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-3xl border border-gray-800 bg-gray-900">
                <Scale className="size-5 text-teal-400" strokeWidth={1.33} />
              </span>

              <div className="flex flex-col">
                <span className="font-mono text-xs leading-4 text-slate-500">
                  {tradeoff.label}
                </span>

                <h3 className="mt-2 text-base font-bold leading-7 text-slate-100">
                  {tradeoff.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {tradeoff.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';

const BOUNDARIES = [
  {
    title: 'Error handling',
    description: 'Codes, retries, and recovery guidance owned by one authoritative source.',
    href: '/developers-overview',
  },
  {
    title: 'Rate limits',
    description: 'Published ceilings and throttling behavior for every endpoint category.',
    href: '/developers-rate-limits',
  },
  {
    title: 'Changelog',
    description: 'What changed, when, and whether it applies to your integration.',
    href: '/developers-changelog',
  },
];

export default function DevelopersBoundariesUpFrontSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-zinc-950 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-teal-400 rounded-[3px]" />
          <span className="text-teal-400 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            KNOW THE BOUNDARIES UP FRONT
          </span>
        </div>
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          Design for failure, ceilings, and change.
        </h2>
        <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Implementation constraints and change history, visible before production — not buried after an incident.
        </p>
      </div>

      {/* 3 Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {BOUNDARIES.map((b, idx) => (
          <div
            key={idx}
            className="p-6 bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-between gap-6 hover:outline-teal-400/50 transition-all"
          >
            <div className="flex flex-col gap-2.5">
              <h3 className="text-slate-100 text-base font-bold font-['Space_Grotesk']">
                {b.title}
              </h3>
              <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
                {b.description}
              </p>
            </div>

            <div>
              <Link
                href={b.href}
                className="px-5 py-2.5 bg-zinc-100 rounded-[10px] outline outline-1 outline-gray-700 text-sky-950 text-base font-semibold font-['Inter'] inline-flex hover:bg-zinc-200 transition-colors"
              >
                Review →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Deprecation Banner */}
      <div className="w-full p-4 bg-orange-100 rounded-[10px] border-l-[3px] border-yellow-600 shadow-sm">
        <p className="text-xs leading-relaxed font-['Inter']">
          <span className="text-yellow-800 font-bold">Deprecation notice (illustrative): </span>
          <span className="text-yellow-800 font-normal">
            the legacy polling-only status pattern is deprecated in favor of webhook-first status handling.
          </span>
        </p>
      </div>
    </section>
  );
}

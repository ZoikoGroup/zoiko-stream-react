import React from 'react';
import Link from 'next/link';

const TECH_STEPS = [
  {
    title: 'Documentation',
    desc: 'Concepts, guides, and troubleshooting.',
    linkText: 'Open Documentation →',
    href: '/developer-documentation',
  },
  {
    title: 'API Reference',
    desc: 'Exact endpoints, fields, and contracts.',
    linkText: 'Open API Reference →',
    href: '/developer-api-reference',
  },
  {
    title: 'Authentication',
    desc: 'Credential and token mechanics.',
    linkText: 'Read Authentication →',
    href: '/authentication',
  },
  {
    title: 'Quickstart',
    desc: 'The shortest path to a working stream.',
    linkText: 'Open Quickstart →',
    href: '/quick-start',
  },
];

export default function PricingDeveloperAccessTechNextStepsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-zinc-950 flex flex-col justify-start items-start gap-12 border-b border-gray-800 overflow-hidden z-10">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-teal-400 rounded-[3px]" />
          <span className="text-teal-400 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            NO DUPLICATE PORTAL
          </span>
        </div>
        <h2 className="text-slate-100 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-tight max-w-3xl">
          Technical next steps live in Developers — not repeated here.
        </h2>
        <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          This page owns access and commercial truth. Implementation detail stays in its authoritative home.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TECH_STEPS.map((step, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 p-6 flex flex-col justify-between gap-6 hover:border-gray-700 transition-colors group"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-100 text-base font-bold font-['Space_Grotesk']">
                {step.title}
              </h3>
              <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
                {step.desc}
              </p>
            </div>

            <Link
              href={step.href}
              className="text-teal-400 hover:text-teal-300 text-xs font-semibold font-['Inter'] transition-colors"
            >
              {step.linkText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

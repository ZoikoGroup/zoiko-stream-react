import React from 'react';
import Link from 'next/link';

const PATHS = [
  {
    title: 'Enterprise plans',
    desc: 'Broader organizational deployments beyond a single event.',
    cta: 'View Enterprise plans →',
    href: '/pricing-enterprise-plans',
  },
  {
    title: 'Developer access',
    desc: 'API and developer-focused commercial access.',
    cta: 'View Developer access →',
    href: '/pricing-developer-access',
  },
  {
    title: 'Usage and billing',
    desc: 'Existing customers checking current usage or invoices.',
    cta: 'View Usage and billing →',
    href: '/resources',
  },
];

export default function PricingRelatedPathsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-white flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-400 rounded-[3px]" />
          <span className="text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-wider">
            Related pricing paths
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl font-bold font-['Sora'] leading-tight">
          Not quite what you need?
        </h2>
      </div>

      {/* 3 Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {PATHS.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-200 p-7 flex flex-col justify-between gap-6 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-800 text-base font-bold font-['Sora']">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-relaxed">
                {item.desc}
              </p>
            </div>

            <Link
              href={item.href}
              className="text-blue-400 hover:text-blue-500 text-base font-semibold font-['Inter'] transition-colors"
            >
              {item.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

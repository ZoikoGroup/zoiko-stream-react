import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg147 from '@/public/images/Organization-overview/bg (147).png';

const HIGHLIGHTS = [
  {
    tag: 'ARCHITECTURE GUIDE',
    tagColor: 'text-blue-500',
    title: '5G Edge Streaming Architecture Guide',
    description: 'Deploy high-concurrency low-latency delivery paths with verified edge caching configurations, network slicing, and multi-CDN failovers.',
    borderActive: false,
    href: '/resource-architecture',
  },
  {
    tag: 'CUSTOMER CASE STUDY',
    tagColor: 'text-teal-400',
    title: 'How MediaCore Live Scaled to 10M+',
    description: 'Read how MediaCore managed dual active-active ingest paths with sub-second failover under massive load for their global championship webcast.',
    borderActive: true,
    href: '/resource-case-studies',
  },
  {
    tag: 'DEVELOPER QUICKSTART',
    tagColor: 'text-violet-500',
    title: 'Getting Started with ZoikoStream SDK',
    description: 'Step-by-step developer tutorials, library setups, and token-generation schemas for instant client-side WebRTC integration.',
    borderActive: false,
    href: '/quick-start',
  },
];

export default function ResourceOverviewHighlightsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
      {/* Background overlay snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-96 -left-44 -top-30 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] left-[1093px] -top-8 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-950 text-4xl font-bold font-['Space_Grotesk'] leading-[48px]">
          Resource Highlights
        </h2>
      </div>

      {/* 3 Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {HIGHLIGHTS.map((h, idx) => (
          <Link
            key={idx}
            href={h.href}
            className={`p-8 rounded-xl flex flex-col justify-start items-start gap-5 transition-all backdrop-blur-xs shadow-xs ${
              h.borderActive
                ? 'bg-slate-50 outline outline-[1.50px] outline-offset-[-1.50px] outline-blue-500 shadow-md'
                : 'bg-slate-50 outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 hover:outline-blue-400'
            }`}
          >
            <div className="px-2 py-1 bg-white rounded-sm outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex">
              <span className={`text-xs font-bold font-['Space_Grotesk'] ${h.tagColor}`}>
                {h.tag}
              </span>
            </div>

            <h3 className="text-slate-950 text-xl font-bold font-['Space_Grotesk']">
              {h.title}
            </h3>

            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
              {h.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

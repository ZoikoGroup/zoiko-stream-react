import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img58 from '@/public/images/resource-help-center/card-image (58).png';
import img59 from '@/public/images/resource-help-center/card-image (59).png';
import img60 from '@/public/images/resource-help-center/card-image (60).png';
import img61 from '@/public/images/resource-help-center/card-image (61).png';

const PRODUCTS = [
  { label: 'Video Ingest', active: true },
  { label: 'Live Streaming', active: false },
  { label: 'Player SDK', active: false },
  { label: 'API & Webhooks', active: false },
  { label: 'Admin Console', active: false },
  { label: 'Live Events', active: false },
];

const ARTICLES = [
  {
    tag: 'GETTING STARTED',
    date: 'Jan 12, 2026',
    title: 'Getting started with HLS/DASH ingest parameters',
    href: '#read-article',
    image: img58,
  },
  {
    tag: 'PLAYER SDK',
    date: 'Feb 03, 2026',
    title: 'Optimizing player buffer sizes for high latency connections',
    href: '#read-article',
    image: img59,
  },
  {
    tag: 'API & WEBHOOKS',
    date: 'Dec 18, 2025',
    title: 'Validating incoming webhook signature headers',
    href: '#read-article',
    image: img60,
  },
  {
    tag: 'AUTHENTICATION',
    date: 'Feb 22, 2026',
    title: 'Securing live streams with temporary secure tokens',
    href: '#read-article',
    image: img61,
  },
];

export default function HelpCenterBrowseProductSection() {
  return (
    <section id="top-articles" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
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
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Browse by product area
        </h2>
        <p className="text-slate-600 text-base font-normal font-['Inter'] leading-relaxed">
          Filter common support resources directly by the platform service boundaries or developer SDK component you are operating.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="relative z-10 w-full grid grid-cols-3 gap-3">
        {PRODUCTS.map((p, idx) => (
          <button
            key={idx}
            className={`max-w-2xl px-2 py-3 rounded-full text-sm font-bold font-['Space_Grotesk'] transition-colors ${
              p.active
                ? 'bg-slate-50 text-teal-600 outline outline-[1.50px] outline-offset-[-1.50px] outline-teal-500'
                : 'bg-white text-slate-600 outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 hover:bg-slate-50'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* 4 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ARTICLES.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50/90 backdrop-blur-xs rounded-xl shadow-[0px_4px_12px_0px_rgba(11,8,16,0.02)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-28 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-4 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between items-center">
                  <span className="text-blue-600 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <span className="text-slate-500 text-xs font-normal font-['Inter']">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-slate-900 text-sm font-bold font-['Space_Grotesk'] line-clamp-2">
                  {item.title}
                </h3>
              </div>

              <Link
                href={item.href}
                className="text-blue-600 hover:text-blue-700 text-xs font-bold font-['Space_Grotesk'] transition-colors"
              >
                Read Article →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

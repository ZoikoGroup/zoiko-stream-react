import React from 'react';
import Image from 'next/image';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img11 from '@/public/images/resources-changelog/Card-Image (2).png';
import img12 from '@/public/images/resources-changelog/Card-Image (3).png';
import img13 from '@/public/images/resources-changelog/Card-Image (4).png';

const MATRIX = [
  {
    surface: 'Webhooks Dispatcher',
    current: 'Active',
    legacy: 'Deprecated',
    status: 'Sunset Mar 2026',
    target: 'Migrate to SHA256',
  },
  {
    surface: 'Media Ingestion API',
    current: 'Active',
    legacy: 'Sunset',
    status: 'De-comissioned',
    target: 'Ingest v3 Endpoint',
  },
  {
    surface: 'Interactive Player Embed',
    current: 'Preview',
    legacy: 'Active',
    status: 'Under Review',
    target: 'Web Component SDK',
  },
];

const RETIRED_CARDS = [
  {
    title: 'Deprecated V1 REST API',
    meta: 'Sunset Scheduled: Nov 2026',
    image: img11,
  },
  {
    title: 'Sunset Legacy iOS SDK',
    meta: 'De-comissioned: Dec 2025',
    image: img12,
  },
  {
    title: 'Retired Analytics Core V1',
    meta: 'De-comissioned: Oct 2025',
    image: img13,
  },
];

export default function ChangelogDeprecationMapSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
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
          Lifecycle &amp; Deprecation Map
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          We operate under a rigid, governed version deprecation window. Standard APIs guarantee 12 months minimum availability inside Deprecated status before hard sunsets.
        </p>
      </div>

      {/* Table Container */}
      <div className="relative z-10 w-full bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-x-auto shadow-xs">
        <div className="min-w-[650px] w-full flex flex-col">
          {/* Header Row */}
          <div className="w-full p-4 bg-slate-100 border-b border-gray-200 flex justify-start items-center gap-3">
            <div className="w-56 text-slate-900 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
              Surface API
            </div>
            <div className="flex-1 text-slate-900 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
              Current (v3.4)
            </div>
            <div className="flex-1 text-slate-900 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
              Legacy (v2.8)
            </div>
            <div className="flex-1 text-slate-900 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
              Status
            </div>
            <div className="w-40 text-right text-slate-900 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
              Upgrade Target
            </div>
          </div>

          {/* Table Rows */}
          {MATRIX.map((row, idx) => (
            <div
              key={idx}
              className="w-full p-4 border-b border-gray-200 flex justify-start items-center gap-3 hover:bg-white/50 transition-colors"
            >
              <div className="w-56 text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                {row.surface}
              </div>
              <div className="flex-1 text-slate-600 text-xs font-normal font-['Inter']">
                {row.current}
              </div>
              <div className="flex-1 text-slate-600 text-xs font-normal font-['Inter']">
                {row.legacy}
              </div>
              <div className="flex-1 text-red-500 text-xs font-semibold font-['Inter']">
                {row.status}
              </div>
              <div className="w-40 text-right text-blue-600 text-xs font-bold font-['Space_Grotesk'] cursor-pointer hover:underline">
                {row.target}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Bottom Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {RETIRED_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden shadow-xs hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>
              <span className="text-red-500 text-xs font-normal font-['Inter'] shrink-0">
                {card.meta}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

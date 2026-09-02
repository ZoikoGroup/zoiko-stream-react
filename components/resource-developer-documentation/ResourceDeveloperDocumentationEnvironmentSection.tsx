'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import sdkImg17 from '@/public/images/resource-developer-documentation/cardImage (14).png';
import sdkImg18 from '@/public/images/resource-developer-documentation/cardImage (15).png';
import sdkImg19 from '@/public/images/resource-developer-documentation/cardImage (16).png';

const SDKS = [
  {
    title: 'JavaScript SDK',
    desc: 'Browser & Node.js client',
    version: 'v4.2.1',
    badge: 'PROSTABLE',
    badgeStyle: 'bg-emerald-100 text-emerald-800',
    image: sdkImg17,
  },
  {
    title: 'Python SDK',
    desc: 'Server-side pipelines & Django',
    version: 'v3.8.0',
    badge: 'PRODUCTION',
    badgeStyle: 'bg-emerald-100 text-emerald-800',
    image: sdkImg18,
  },
  {
    title: 'Swift SDK',
    desc: 'Native iOS & iPadOS apps',
    version: 'v2.5.3',
    badge: 'ACTIVE',
    badgeStyle: 'bg-emerald-100 text-emerald-800',
    image: sdkImg19,
  },
];

export default function ResourceDeveloperDocumentationEnvironmentSection() {
  const [filter, setFilter] = useState<string>('All SDKs');

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden z-10">
      {/* Background Snippet */}
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
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3 max-w-4xl">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Choose your environment
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Access native wrappers built to manage core signaling, network transit, and edge audio-video buffering.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {['All SDKs', 'Client-side', 'Server-side', 'Community'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-[20px] outline outline-1 outline-offset-[-1px] text-xs font-bold font-['Space_Grotesk'] transition-colors ${
                filter === cat
                  ? 'bg-sky-100 outline-blue-500 text-blue-700'
                  : 'bg-transparent outline-gray-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="w-full sm:w-80 px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-2 bg-white">
          <Search className="size-3.5 text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Filter runtime or platform..."
            className="w-full bg-transparent text-xs text-gray-800 placeholder-gray-400 font-normal font-['Space_Grotesk'] focus:outline-none"
          />
        </div>
      </div>

      {/* 3 SDK Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {SDKS.map((sdk, idx) => (
          <div
            key={idx}
            className="rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-shadow group bg-white"
          >
            <div className="relative w-full h-40 bg-gray-900 overflow-hidden">
              <Image
                src={sdk.image}
                alt={sdk.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-5 flex flex-col justify-start items-start gap-4">
              <div className="w-full flex justify-between items-center gap-2">
                <h3 className="text-zinc-950 text-lg font-bold font-['Space_Grotesk']">
                  {sdk.title}
                </h3>
                <span className={`px-2 py-0.5 rounded-sm text-[9px] font-bold font-['IBM_Plex_Mono'] ${sdk.badgeStyle}`}>
                  {sdk.badge}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-slate-600 text-sm font-normal font-['Space_Grotesk']">
                  {sdk.desc}
                </span>
                <span className="text-gray-400 text-xs font-normal font-['IBM_Plex_Mono']">
                  Latest stable: {sdk.version}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

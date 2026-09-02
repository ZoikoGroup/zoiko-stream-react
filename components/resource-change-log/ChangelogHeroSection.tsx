import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';

import bg1 from '@/public/images/resources-changelog/section-1bg.png';

const FILTERS = [
  { label: 'All Surfaces', isAction: false },
  { label: 'All Change Classes', isAction: false },
  { label: 'Product/API', isAction: false },
  { label: 'v3.4.0-release', isAction: false },
  { label: 'Action Required', isAction: true },
  { label: 'Last 90 Days', isAction: false },
];

export default function ChangelogHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg1}
          alt="Changelog Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col justify-start items-start gap-6">
        <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400 bg-teal-400/10 inline-flex justify-start items-start">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
            CHANGELOG
          </span>
        </div>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
          Track what changed across ZoikoStream
        </h1>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
          The ZoikoStream Changelog records released implementation-level changes, compatibility impact, deprecations, migrations, and required actions across supported developer and platform surfaces.
        </p>
      </div>

      {/* Search & Filter Card */}
      <div className="relative z-10 w-full p-6 sm:p-8 bg-zinc-900/95 backdrop-blur-xs rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-6 shadow-xl">
        {/* Search Input Box */}
        <div className="w-full p-4 bg-gray-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-teal-400 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search APIs, SDKs, webhooks, player, protocols, versions…"
            className="w-full bg-transparent text-slate-200 placeholder:text-slate-500 text-sm sm:text-base font-normal font-['Inter'] focus:outline-none"
          />
        </div>

        {/* Active Filters */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <span className="text-slate-500 text-xs font-bold font-['Space_Grotesk'] tracking-wide uppercase">
            ACTIVE FILTERS
          </span>
          <div className="w-full flex flex-wrap items-center gap-2">
            {FILTERS.map((filter, index) => (
              <div
                key={index}
                className={`px-3.5 py-2 rounded-full outline outline-1 outline-offset-[-1px] ${
                  filter.isAction
                    ? 'bg-red-400/10 outline-red-400 text-red-400'
                    : 'bg-gray-950 outline-gray-800 text-white'
                } flex justify-center items-center`}
              >
                <span className="text-xs font-normal font-['Inter']">
                  {filter.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="#latest-changes"
            className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
          >
            <span className="text-gray-950 text-base font-bold font-['Space_Grotesk']">
              Browse Changes
            </span>
          </Link>
          <Link
            href="#release-notes"
            className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 text-base font-bold font-['Space_Grotesk'] underline transition-colors"
          >
            <span>Release Notes — What the change means</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}

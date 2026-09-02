import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight, ChevronDown } from 'lucide-react';

import bg1 from '@/public/images/resource-release-notes/section-1bg.png';

const FILTERS = [
  { label: 'Audience' },
  { label: 'Release Class' },
  { label: 'Date Range' },
  { label: 'Action Required' },
];

export default function ReleaseNotesHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg1}
          alt="Release Notes Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col justify-start items-start gap-6">
        <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400 bg-teal-400/10 inline-flex justify-start items-start">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
            RELEASE NOTES
          </span>
        </div>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
          What changed, what it means, and what to do next.
        </h1>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
          Follow customer-facing updates across ZoikoStream products, platform capabilities, developer surfaces, Live Events, and media operations.
        </p>
      </div>

      {/* Search & Filter Card */}
      <div className="relative z-10 w-full p-6 sm:p-8 bg-zinc-900/80 backdrop-blur-xs rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-5 shadow-xl">
        {/* Search Input Box */}
        <div className="w-full px-4 py-3.5 bg-gray-800 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 flex items-center gap-3">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search release notes by title, product area, version..."
            className="w-full bg-transparent text-slate-200 placeholder:text-slate-500 text-sm font-normal font-['Inter'] focus:outline-none"
          />
        </div>

        {/* Filters */}
        <div className="w-full flex flex-wrap items-center gap-2 pt-1">
          <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider mr-1">
            FILTERS:
          </span>
          <div className="px-3 py-1.5 bg-teal-400 rounded-full flex items-center gap-1.5 cursor-pointer">
            <span className="text-slate-950 text-xs font-medium font-['Inter']">
              Product Area: All
            </span>
            <ChevronDown className="w-3 h-3 text-slate-950" />
          </div>

          {FILTERS.map((f, i) => (
            <div
              key={i}
              className="px-3 py-1.5 bg-gray-800 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-700 flex items-center gap-1.5 cursor-pointer hover:bg-gray-700/60 transition-colors"
            >
              <span className="text-white text-xs font-normal font-['Inter']">
                {f.label}
              </span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons & Subtext */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="#all-releases"
            className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
          >
            <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
              Browse All Releases
            </span>
          </Link>
          <Link
            href="/resource-change-log"
            className="flex items-center gap-1 text-blue-500 hover:text-blue-400 text-base font-bold font-['Space_Grotesk'] transition-colors"
          >
            <span>Changelog — Implementation-level detail</span>
            <ArrowRight className="w-4 h-4 text-blue-500" />
          </Link>
        </div>
        <span className="text-slate-500 text-xm font-normal font-['Inter']">
          Availability, compatibility, rollout, and action labels shown only when source-governed and approved.
        </span>
      </div>
    </section>
  );
}

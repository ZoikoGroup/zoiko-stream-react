'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import bg24 from '@/public/images/resources-case-studies/bg (24).png';

const PARAMETER_FILTERS = [
  'All work',
  'Live Events',
  'Developers API',
  'Enterprise TV',
  'E-Learning',
  'Secure Government',
];

export default function CaseStudiesHeroSection() {
  const [selectedFilter, setSelectedFilter] = useState('All work');

  return (
    <section className="relative w-full min-h-[600px] lg:h-[947px] px-4 sm:px-8 lg:px-28 pt-24 pb-16 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-center items-start gap-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg24}
          alt="Case Studies Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-14">
        {/* Left Column Content */}
        <div className="flex-1 flex flex-col justify-start items-start gap-8 max-w-3xl">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400 bg-teal-400/10 inline-flex justify-start items-start">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                CASE STUDIES &amp; PROOF
              </span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[50px]">
              See how global teams build and operate with ZoikoStream.
            </h1>
            <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              Explore approved examples of live, on-demand, media operations, developer, and enterprise video workflows — with the implementation context and evidence needed to evaluate fit.
            </p>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-5">
            {/* Search Input Box */}
            <div className="w-full p-2 bg-slate-800 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex justify-between items-center gap-3">
              <div className="flex items-center gap-3 flex-1 px-3">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search case studies by workflow, scale, or industry..."
                  className="w-full bg-transparent text-slate-200 placeholder-slate-400 text-base font-normal font-['Inter'] outline-none"
                />
              </div>
              <button className="px-5 py-2.5 bg-teal-400 rounded-lg text-slate-900 text-sm font-bold font-['Space_Grotesk'] hover:bg-teal-300 transition-colors shrink-0">
                Search
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#proof-library"
                className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
              >
                <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
                  Browse case studies
                </span>
              </Link>
              <Link
                href="/contact-us"
                className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 flex justify-center items-center hover:bg-white/5 transition-colors"
              >
                <span className="text-white text-base font-bold font-['Space_Grotesk']">
                  Talk to an expert
                </span>
              </Link>
            </div>
          </div>

          <p className="text-slate-400/70 text-xs font-normal font-['Inter']">
            Metrics, quotes, logos, and technical details appear only when approved for public use under strict enterprise governance.
          </p>
        </div>

        {/* Right Telemetry Card */}
        <div className="w-full lg:w-[480px] h-96 p-8 bg-zinc-900/80 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-center items-start gap-6 backdrop-blur-sm shrink-0">
          <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] tracking-wide">
            VERIFIED STREAMING ENGINE TELEMETRY
          </span>

          <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="w-full p-3.5 bg-gray-800 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 flex justify-between items-center">
              <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                Total Global Viewers
              </span>
              <span className="text-teal-400 text-base font-bold font-['Space_Grotesk']">
                1.2B+ Session Hours
              </span>
            </div>

            <div className="w-full p-3.5 bg-gray-800 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 flex justify-between items-center">
              <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                Max Peak Concurrency
              </span>
              <span className="text-blue-500 text-base font-bold font-['Space_Grotesk']">
                52.4M Concurrent
              </span>
            </div>

            <div className="w-full p-3.5 bg-gray-800 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 flex justify-between items-center">
              <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                SLA Target Achieved
              </span>
              <span className="text-teal-400 text-base font-bold font-['Space_Grotesk']">
                99.999% Availability
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Parameter Filter Bar */}
      <div className="relative z-10 w-full pt-6 border-t border-gray-800 flex flex-col justify-start items-start gap-4">
        <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk'] tracking-wide">
          FILTER PROOF BY PARAMETERS:
        </span>
        <div className="flex flex-wrap items-center gap-2.5">
          {PARAMETER_FILTERS.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full font-bold font-['Inter'] text-xs transition-colors ${
                  isSelected
                    ? 'bg-teal-400 text-slate-900'
                    : 'bg-slate-800 text-white hover:bg-slate-700'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

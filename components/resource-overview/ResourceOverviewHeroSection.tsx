import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ShieldCheck } from 'lucide-react';

import bg1 from '@/public/images/resources-overview/section-1bg.png';

export default function ResourceOverviewHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-gray-950 border-b border-gray-800 flex flex-col justify-start items-start gap-10 overflow-hidden min-h-[620px]">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg1}
          alt="Resources Overview Hero Background"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col justify-start items-start gap-7">
        <div className="px-3.5 py-1.5 bg-teal-400/10 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400/40 inline-flex">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
            RESOURCES
          </span>
        </div>

        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[64px]">
          Resources for building and operating better video
        </h1>

        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
          Find practical guidance, technical references, product updates, customer proof, support, and live-event planning resources for every stage of the ZoikoStream journey.
        </p>

        {/* Search Bar Input */}
        <div className="w-full max-w-2xl p-1.5 bg-gray-800 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex items-center gap-3 shadow-2xl">
          <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
          <input
            type="text"
            placeholder="Search guides, docs, updates, support, and more..."
            className="w-full bg-transparent text-white text-base font-normal font-['Inter'] placeholder-slate-400 focus:outline-none"
          />
          <button className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] shrink-0 hover:opacity-90 transition-opacity">
            Search resources
          </button>
        </div>

        {/* Links row below search bar */}
        <div className="w-full max-w-2xl flex flex-wrap items-center justify-between gap-4 pt-1">
          <Link
            href="#learn"
            className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] transition-colors flex items-center gap-1.5"
          >
            Browse all resources →
          </Link>
          <span className="text-slate-400 text-sm font-normal font-['Inter']">
            Need immediate help?{' '}
            <Link
              href="/contact-us"
              className="text-blue-500 hover:text-blue-400 underline font-normal transition-colors"
            >
              Talk to an expert
            </Link>
          </span>
        </div>

        {/* Bottom compliance bar */}
        <div className="pt-6 border-t border-gray-800 w-full flex items-center gap-3">
          <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
          <span className="text-gray-400 text-xs font-normal font-['Inter'] leading-relaxed">
            Fully integrated with Zoiko Cloud architecture. SOC2 Type II, HIPAA, and WCAG 2.1 Compliant.
          </span>
        </div>
      </div>
    </section>
  );
}

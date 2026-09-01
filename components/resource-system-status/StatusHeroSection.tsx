import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg1 from '@/public/images/resources-system-status/section-1bg.png';
import heroGraphic from '@/public/images/resources-system-status/Frame 137.png';

export default function StatusHeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:h-[948px] px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-center items-start gap-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg1}
          alt="System Status Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-12">
        {/* Left Column Content */}
        <div className="flex-1 flex flex-col justify-start items-start gap-8 max-w-3xl">
          <div className="flex flex-col justify-start items-start gap-6">
            {/* Badge */}
            <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400 bg-teal-400/10 inline-flex justify-start items-start">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                SYSTEM STATUS
              </span>
            </div>

            {/* Headline with Green Status Dot */}
            <div className="flex items-center gap-5">
              <div className="size-8 bg-emerald-500/10 rounded-full flex justify-center items-center shrink-0">
                <div className="size-4 bg-emerald-500 rounded-full animate-pulse" />
              </div>
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
                All systems operational
              </h1>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              Status reflects published ZoikoStream service components and public incidents. Local network, device, account, or integration-specific issues may require support.
            </p>

            {/* Timestamp */}
            <span className="text-teal-400 text-sm font-normal font-['Inter']">
              Last updated August 27, 2026 at 14:32 UTC
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#recent-history"
              className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
            >
              <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
                View recent history
              </span>
            </Link>
            <Link
              href="#subscribe"
              className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 flex justify-center items-center hover:bg-white/5 transition-colors"
            >
              <span className="text-white text-base font-bold font-['Space_Grotesk']">
                Subscribe to updates
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side Graphic Card */}
        <div className="w-full lg:w-[486px] h-80 sm:h-96 relative rounded-xl shadow-2xl border border-gray-800 overflow-hidden shrink-0">
          <Image
            src={heroGraphic}
            alt="Status Dashboard Graphic"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

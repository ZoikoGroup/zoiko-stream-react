import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PricingHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-linear-49 from-slate-900/90 via-violet-900/80 via 45% to-teal-400/50 overflow-hidden z-10 border-b border-gray-800">
      <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src="/images/pricing/Section.png"
                alt="Hero Background"
                fill
                className="object-cover "
                priority
              />
              <div className="absolute inset-0 " />
            </div>
      {/* Radial Glow Overlay */}
      <div className="absolute inset-0 bg-radial-[at_82%_12%] from-teal-300/30 to-teal-300/0 to 70% pointer-events-none z-0" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start gap-6">
          {/* Sub-badge */}
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-teal-200 rounded-[3px]" />
            <span className="text-teal-200 text-xs font-bold font-['Inter'] uppercase tracking-wider">
              Live Events Pricing
            </span>
          </div>

          {/* Title */}
          <h1 className="w-full text-white text-4xl sm:text-5xl lg:text-6xl font-bold font-['Sora'] leading-tight lg:leading-[64px]">
            Plan event pricing around the scope you actually need.
          </h1>

          {/* Description */}
          <p className="w-full text-slate-200 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed max-w-2xl">
            Understand the factors that may shape a ZoikoStream Live Events commercial configuration, what is publicly established, and when event-specific scoping is required.
          </p>

          {/* Action CTAs */}
          <div className="w-full flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#scope-builder"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-[10px] text-gray-800 text-base font-semibold font-['Inter'] hover:opacity-90 transition-opacity text-center"
            >
              Request event quote
            </Link>
            <Link
              href="/resource-guides"
              className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white/40 text-white text-base font-semibold font-['Inter'] hover:bg-white/10 transition-colors text-center"
            >
              Live Events planning guide
            </Link>
          </div>

          {/* Link */}
          <Link
            href="#scope-builder"
            className="text-teal-200 hover:text-teal-100 text-base font-semibold font-['Inter'] transition-colors pt-1 inline-block"
          >
            Build your event scope →
          </Link>

          {/* Footnote Disclaimer */}
          <p className="w-full text-slate-200 text-sm font-normal font-['Inter'] leading-relaxed max-w-xl">
            No amount, package, capacity, redundancy, support, or event-service commitment is implied unless explicitly published from an approved source.
          </p>
        </div>

        {/* Right Floating Commercial State Box */}
        <div className="lg:col-span-5 w-full bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-sm p-6 sm:p-7 flex flex-col gap-6 shadow-xl">
          {/* State Header Box */}
          <div className="w-full p-4 bg-gray-900/70 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 flex flex-col gap-2">
            <span className="text-teal-200 text-xs font-bold font-['Inter'] uppercase tracking-wide">
              Current commercial state
            </span>
            <span className="text-white text-xl sm:text-2xl font-bold font-['Sora']">
              Quote required
            </span>
          </div>

          {/* 6 Scope Pills Grid */}
          <div className="grid grid-cols-2 gap-3 text-center font-['Sora'] text-xs font-bold text-gray-800">
            <div className="py-3 px-2 bg-white/90 rounded-xl">Timing & schedule</div>
            <div className="py-3 px-2 bg-white/90 rounded-xl">Audience & scale</div>
            <div className="py-3 px-2 bg-white/90 rounded-xl">Contribution</div>
            <div className="py-3 px-2 bg-white/90 rounded-xl">Access & privacy</div>
            <div className="py-3 px-2 bg-white/90 rounded-xl">Resilience</div>
            <div className="py-3 px-2 bg-white/90 rounded-xl">Recording</div>
          </div>
        </div>
      </div>
    </section>
  );
}

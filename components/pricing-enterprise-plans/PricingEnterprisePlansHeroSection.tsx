import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PricingEnterprisePlansHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-linear-44 from-gray-800/95 via-indigo-800/90 to-teal-400/60 overflow-hidden z-10 border-b border-gray-800">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/enterprise-plans/Section - 01 HERO.png"
          alt="Hero Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      {/* Radial Glow Overlay */}
      <div className="absolute inset-0 bg-radial-[at_88%_15%] from-teal-300/30 to-teal-300/0 to 70% pointer-events-none z-0" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start gap-6">
          {/* Sub-badge */}
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-teal-200 rounded-[3px]" />
            <span className="text-teal-200 text-xs font-bold font-['Inter'] uppercase tracking-wider">
              Enterprise plans
            </span>
          </div>

          {/* Title */}
          <h1 className="w-full text-white text-4xl sm:text-5xl lg:text-6xl font-bold font-['Sora'] leading-tight lg:leading-[60px]">
            Enterprise pricing built around the scope you actually need.
          </h1>

          {/* Description */}
          <p className="w-full text-slate-200 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed max-w-2xl">
            Understand the approved commercial structure, pricing drivers, and next step for larger or more complex ZoikoStream deployments — without hiding public facts behind a form.
          </p>

          {/* Action CTAs */}
          <div className="w-full flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/request-enterprise-quote"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-[10px] text-gray-800 text-base font-semibold font-['Inter'] hover:opacity-90 transition-opacity text-center"
            >
              Request enterprise quote
            </Link>
            <Link
              href="/pricing"
              className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white/40 text-white text-base font-semibold font-['Inter'] hover:bg-white/10 transition-colors text-center"
            >
              See pricing overview
            </Link>
          </div>

          {/* Footnote Disclaimer */}
          <p className="w-full text-slate-200 text-sm font-normal font-['Inter'] leading-relaxed max-w-xl pt-2">
            Public pricing is informational unless an approved source explicitly makes it contractual. Account-specific contracts and invoices remain authoritative for existing customers.
          </p>
        </div>

        {/* Right Floating Commercial State Box */}
        <div className="lg:col-span-5 w-full bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[6px] p-6 sm:p-7 flex flex-col gap-4 shadow-xl">
          <span className="text-teal-200 text-xs font-bold font-['Inter'] uppercase tracking-wide">
            Current commercial state
          </span>
          <h2 className="text-white text-2xl font-bold font-['Sora']">
            Quote required
          </h2>
          <p className="text-gray-300 text-sm font-normal font-['Inter'] leading-relaxed">
            ZoikoStream enterprise configurations are scoped individually based on deployment scale, Live Events needs, security requirements, and integration complexity. No public enterprise price list is currently established.
          </p>
        </div>
      </div>
    </section>
  );
}

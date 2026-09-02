import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroBg from '@/public/images/pricing-developer-access/hero-bg.jpg';

export default function PricingDeveloperAccessHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-black overflow-hidden z-10 border-b border-gray-800">
      {/* Background Image Overlay */}
      {heroBg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
          <Image
            src={heroBg}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="absolute inset-0 bg-radial-[at_85%_20%] from-teal-400/25 to-teal-400/0 to 45% pointer-events-none z-0" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start gap-6">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-[3px]" />
            <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              DEVELOPER ACCESS
            </span>
          </div>

          {/* Title */}
          <h1 className="w-full text-slate-100 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[56px]">
            Understand the access and pricing path for building with ZoikoStream.
          </h1>

          {/* Description */}
          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed max-w-2xl">
            Developer access is governed by the current commercial and access registries. Public pricing, estimates, quote requirements, account-specific terms, and activation routes appear only when approved for public use.
          </p>

          {/* Subtext Notice */}
          <p className="w-full text-slate-500 text-xs font-normal font-['IBM_Plex_Mono'] leading-5 max-w-xl">
            No free tier, trial, credit, included allowance, rate, quota, or production access is implied unless current sources establish it.
          </p>
        </div>

        {/* Right Floating Control Card */}
        <div className="lg:col-span-5 w-full bg-zinc-900/60 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-sm p-6 sm:p-7 flex flex-col gap-5 shadow-[0px_30px_70px_-25px_rgba(0,0,0,0.60)]">
          {/* Access State Row */}
          <div className="w-full pb-4 border-b border-white/10 flex items-center justify-between gap-2">
            <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              ACCESS STATE
            </span>
            <div className="px-3 py-1 bg-teal-600/10 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-teal-800">
              <span className="text-teal-400 text-xs font-semibold font-['IBM_Plex_Mono']">
                Self-service eligible
              </span>
            </div>
          </div>

          {/* Commercial State Row */}
          <div className="w-full pb-4 border-b border-white/10 flex items-center justify-between gap-2">
            <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              COMMERCIAL STATE
            </span>
            <div className="px-3 py-1 bg-teal-600/10 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-teal-800">
              <span className="text-teal-400 text-xs font-semibold font-['IBM_Plex_Mono']">
                Estimate available
              </span>
            </div>
          </div>

          {/* Source Version Row */}
          <div className="w-full pb-4 border-b border-white/10 flex items-center justify-between gap-2">
            <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              SOURCE VERSION
            </span>
            <span className="text-slate-100 text-sm font-semibold font-['Inter']">
              v1 · reviewed Aug 2026
            </span>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-wrap sm:flex-nowrap items-center gap-4 pt-2">
            <Link
              href="/start-building"
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-semibold font-['Inter'] hover:opacity-90 transition-opacity text-center"
            >
              Start building
            </Link>
            <Link
              href="/developer-documentation"
              className="w-full sm:w-auto px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white text-white text-base font-semibold font-['Inter'] hover:bg-white/10 transition-colors text-center"
            >
              View documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

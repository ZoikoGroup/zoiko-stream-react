import React from 'react';
import Image from 'next/image';

export function PrivacyHeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-slate-100 flex flex-col lg:flex-row justify-between items-center gap-12 overflow-hidden border-b border-zinc-200">
      <div className="flex-1 flex flex-col justify-start items-start gap-6 z-10">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            PRIVACY CENTER
          </span>
        </div>

        <h1 className="text-neutral-700 text-4xl lg:text-5xl font-bold leading-tight lg:leading-[52px]">
          Privacy at ZoikoStream.
        </h1>

        <p className="max-w-[530px] text-gray-500 text-base font-normal leading-6">
          Understand how ZoikoStream handles personal data across our website, platform, APIs and Live Events, and use the privacy choices and request pathways available to you.
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-semibold text-blue-400">
          <span className="cursor-pointer hover:underline">Cookie Preferences</span>
          <span className="cursor-pointer hover:underline">Trust Center</span>
          <span className="cursor-pointer hover:underline">Enterprise privacy resources</span>
        </div>
      </div>

      {/* Right Diagram Box */}
      <div className="relative z-10 w-full lg:w-[564px] p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm flex flex-col items-center gap-6">
        <div className="w-full h-72 relative flex items-center justify-center bg-slate-50/50 rounded-xl p-4">
          <Image
            src="/images/privacy/SVG.png"
            alt="ZoikoStream Privacy Relationship Diagram"
            fill
            className="object-contain p-2"
          />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-normal text-gray-400">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-blue-400 rounded-xs" />
            <span>Person</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-teal-400 rounded-xs" />
            <span>ZoikoStream</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-violet-500 rounded-xs" />
            <span>Customer</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-orange-400 rounded-xs" />
            <span>Live Event</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-xs" />
            <span>Service Provider</span>
          </div>
        </div>
      </div>
    </section>
  );
}

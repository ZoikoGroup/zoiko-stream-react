import React from 'react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col lg:flex-row justify-start items-center gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-media-preservation/bg (9).png"
          alt="Media Preservation Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-start items-start gap-8">
        <div className="px-3 py-1.5 rounded-full border border-teal-400 inline-flex items-center">
          <span className="text-teal-400 text-xs font-bold  tracking-wide uppercase">
            MEDIA PRESERVATION
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-5xl font-bold  leading-tight lg:leading-[60px]">
          Keep the record intact — and keep the evidence around it understandable.
        </h1>

        <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
          Preserve media identity, metadata, provenance, access policy, accessibility artifacts, versions, lifecycle decisions, and integrity evidence so important recordings remain governed and usable over time.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
            <span className="text-gray-950 text-base font-bold ">
              Review Preservation Requirements
            </span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border-[1.5px] border-white flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-bold ">
              Talk to an Expert
            </span>
          </div>
        </div>
      </div>

      {/* Right Preservation Inventory Card */}
      <div className="relative z-10 w-full lg:w-[480px] p-8 bg-zinc-900/80 rounded-2xl border-[1.5px] border-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm shadow-xl overflow-hidden">
        <div className="w-full flex justify-between items-center">
          <span className="text-white text-sm font-bold  tracking-wide uppercase">
            PRESERVATION INVENTORY
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-teal-400 text-xs font-semibold ">SECURE</span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          {/* Item 1 */}
          <div className="p-3.5 bg-gray-800 rounded-lg border border-gray-800 flex flex-col gap-2.5">
            <div className="w-full flex justify-between items-center">
              <span className="text-slate-400 text-xs font-normal ">MP-2026-09A</span>
              <div className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30 flex items-center">
                <span className="text-teal-400 text-xs font-semibold  uppercase">Verified</span>
              </div>
            </div>
            <h3 className="text-white text-base font-bold  truncate">
              Q3 Townhall Official Rec
            </h3>
            <div className="flex items-center gap-2 text-xs ">
              <span className="text-slate-400">Retention: 7 Years</span>
              <div className="w-1 h-1 bg-gray-600 rounded-full" />
              <span className="text-teal-400">AES-256</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="p-3.5 bg-gray-800 rounded-lg border border-gray-800 flex flex-col gap-2.5">
            <div className="w-full flex justify-between items-center">
              <span className="text-slate-400 text-xs font-normal ">MP-2026-11B</span>
              <div className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30 flex items-center">
                <span className="text-teal-400 text-xs font-semibold  uppercase">Verified</span>
              </div>
            </div>
            <h3 className="text-white text-base font-bold  truncate">
              Compliance Audit FY25
            </h3>
            <div className="flex items-center gap-2 text-xs ">
              <span className="text-slate-400">Retention: 7 Years</span>
              <div className="w-1 h-1 bg-gray-600 rounded-full" />
              <span className="text-teal-400">AES-256</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="p-3.5 bg-gray-800 rounded-lg border border-gray-800 flex flex-col gap-2.5">
            <div className="w-full flex justify-between items-center">
              <span className="text-slate-400 text-xs font-normal ">MP-2026-14F</span>
              <div className="px-2.5 py-1 bg-amber-500/10 rounded-full border border-amber-500/30 flex items-center">
                <span className="text-amber-500 text-xs font-semibold  uppercase">Checking</span>
              </div>
            </div>
            <h3 className="text-white text-base font-bold  truncate">
              Clinical Trial Review Session
            </h3>
            <div className="flex items-center gap-2 text-xs ">
              <span className="text-slate-400">Retention: 7 Years</span>
              <div className="w-1 h-1 bg-gray-600 rounded-full" />
              <span className="text-teal-400">AES-256</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

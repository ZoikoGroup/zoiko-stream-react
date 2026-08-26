import React from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-sdk/bg (1).png"
          alt="Developer SDK Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 flex-1 max-w-[680px] flex flex-col justify-start items-start gap-8">
        <div className="px-3 py-1.5 rounded-full border border-teal-400 w-fit">
          <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wide">
            DEVELOPERS / BUILD / SDKs
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight lg:leading-[60px]">
          SDKs for building with ZoikoStream.
        </h1>

        <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
          Use approved libraries to call published ZoikoStream APIs from supported runtimes. Package identity, version, maintenance status and examples are shown only from verified sources.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-gray-950 text-base font-bold">Browse SDKs</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
            <span className="text-white text-base font-bold">Read API Reference</span>
          </div>
        </div>
      </div>

      {/* Right Box: CATALOG AVAILABILITY STATUS */}
      <div className="relative z-10 w-full lg:w-[480px] h-96 p-10 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-center items-center gap-6 shadow-2xl backdrop-blur-md">
        <span className="text-white text-sm font-bold font-mono tracking-wide uppercase text-center">
          CATALOG AVAILABILITY STATUS
        </span>

        <div className="w-full flex flex-col gap-3">
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-white text-base font-bold">Published SDKs</span>
            </div>
            <span className="text-teal-400 text-base font-bold">12 Active</span>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-white text-base font-bold">Last Verified</span>
            </div>
            <span className="text-blue-500 text-xs font-bold font-mono">TODAY, 04:00 UTC</span>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-white text-base font-bold">Catalog Integrity</span>
            </div>
            <span className="text-teal-400 text-xs font-bold font-mono">100% SIGNED</span>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <ShieldCheck className="w-5 h-5  text-teal-400" />
          <span className="text-teal-400 text-xs font-bold">
            Package &amp; version details are source-governed
          </span>
        </div>
      </div>
    </section>
  );
}

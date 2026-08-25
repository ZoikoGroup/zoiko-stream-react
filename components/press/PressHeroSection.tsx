import React from 'react';
import Image from 'next/image';

export function PressHeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gradient-to-r from-zinc-800 via-indigo-900 via-40% to-teal-600 flex flex-col lg:flex-row justify-between items-center gap-12 overflow-hidden">
      <div className="flex-1 flex flex-col justify-start items-start gap-6 z-10">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-teal-200 rounded-full" />
          <span className="text-teal-200 text-xs font-bold   uppercase tracking-wider">
            PRESS & MEDIA
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-4xl font-bold   leading-tight lg:leading-[56px]">
          Press and media <br /> resources for ZoikoStream
        </h1>

        <p className="max-w-[600px] text-slate-200 text-base font-normal   leading-7">
          Official company facts, logos, leadership materials, product imagery and media contacts to help journalists cover ZoikoStream accurately.
        </p>

        <p className="text-slate-200 text-sm font-normal  ">
          Official ZoikoStream resources · Maintained by Communications.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg flex justify-center items-center cursor-pointer">
            <span className="text-gray-900 text-base font-semibold  ">
              Explore media kit
            </span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-white/40 flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-semibold  ">
              Contact media team
            </span>
          </div>
        </div>
      </div>

      {/* Right Hero Image */}
      <div className="relative z-10 w-full lg:w-[538px] h-[380px] rounded-xl overflow-hidden shadow-2xl flex-shrink-0 border border-white/20">
        <Image
          src="/images/press/Rectangle 15.png"
          alt="Press and media resources"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';

export function CtaSection() {
  return (
    <section className="w-full relative py-24 bg-black/60 border-t border-gray-800 flex flex-col justify-start items-center gap-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-analytics-api/bg (21).png"
          alt="CTA Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col items-center gap-8 text-center px-6">
        <h2 className="text-white text-3xl lg:text-4xl font-bold ">
          Start building with ZoikoStream Analytics
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-slate-950 text-base font-bold   ">Start building</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 text-white font-bold    text-center cursor-pointer hover:border-white transition-colors">
            Talk to an expert
          </div>
        </div>
      </div>
    </section>
  );
}

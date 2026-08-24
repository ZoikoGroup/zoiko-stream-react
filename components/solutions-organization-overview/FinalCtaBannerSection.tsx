import React from 'react';
import Image from 'next/image';

import bg155 from '@/public/images/Organization-overview/bg (155).png';

export default function FinalCtaBannerSection() {
  return (
    <section className="relative w-full bg-slate-900/80 text-white py-20 md:py-24 overflow-hidden text-center">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg155}
          alt="Final CTA Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
          Ready to route your stream path?
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
          >
            Choose an organization path
          </button>
          <button
            type="button"
            className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors"
          >
            Talk to an expert
          </button>
        </div>
      </div>
    </section>
  );
}

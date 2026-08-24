import React from 'react';
import Image from 'next/image';

import bg164 from '@/public/images/Developers-product-teams/bg (156).png';

export default function FinalCtaBannerSection() {
  return (
    <section className="relative w-full bg-gray-950/90 text-white py-24 md:py-36 border-b border-gray-800 text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg164}
          alt="Final CTA Banner Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] text-white leading-tight">
          Ready to build next-generation video features?
        </h2>

        <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed max-w-2xl">
          Start integrating today with self-service API keys, or connect with our solutions team to plan complex security governance mappings.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
          <button
            type="button"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
          >
            Start Building Now
          </button>
          <button
            type="button"
            className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors"
          >
            Talk to a Solutions Architect
          </button>
        </div>
      </div>
    </section>
  );
}

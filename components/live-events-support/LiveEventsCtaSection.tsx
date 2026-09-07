import React from 'react';
import Image from 'next/image';

export default function LiveEventsCtaSection() {
  return (
    <section className="relative w-full bg-[#040813] text-white py-20 lg:py-28 overflow-hidden">
      {/* 3D Hexagonal Floor Perspective Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/Live Events Support Page/les-bg-6.png"
          alt="Hexagonal grid perspective backdrop"
          fill
          priority
          className="object-cover object-bottom opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040813] via-[#040813]/40 to-[#040813]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight mb-4">
          Ready to get help for your event?
        </h2>

        {/* Subtitle Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-inter">
          Start with your event phase. ZoikoStream handles the rest. Our active-event fast-lane guarantees your urgent telemetry reports reach on-shift engineers instantly.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="bg-[#00c2ff] hover:bg-[#00aff0] active:scale-[0.98] text-[#04111d] font-semibold text-sm sm:text-base px-7 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] cursor-pointer"
          >
            Choose Event Phase
          </button>

          <button
            type="button"
            className="bg-[#09111e]/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 text-slate-100 font-medium text-sm sm:text-base px-6 py-3 rounded-lg transition-all duration-200 cursor-pointer"
          >
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
}

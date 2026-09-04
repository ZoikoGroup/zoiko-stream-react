import React from 'react';
import Image from 'next/image';

export default function ReportIssueCtaSection() {
  return (
    <section className="relative w-full bg-[#030611] text-white py-20 lg:py-28 overflow-hidden text-center">
      {/* Background Auditorium Stage Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/Report Issue Page/sri3.png"
          alt="Amphitheater auditorium backdrop"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030611]/85 via-[#030611]/45 to-[#030611]" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#030611]/25 to-[#030611]/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Main Headline */}
        <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight mb-4">
          Ready to report an issue?
        </h2>

        {/* Subtitle Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-sans opacity-95">
          Start your report now. We will validate your context and route the details to the appropriate engineering specialist team immediately.
        </p>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="bg-[#00c5ff] hover:bg-[#00b2e8] active:scale-[0.98] text-[#021324] font-semibold text-sm sm:text-base px-7 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(0,197,255,0.45)] cursor-pointer"
          >
            Report an Issue
          </button>

          <button
            type="button"
            className="bg-[#080f1d]/85 hover:bg-slate-800 border border-slate-700/90 hover:border-slate-500 text-slate-200 font-medium text-sm sm:text-base px-7 py-3 rounded-lg transition-all duration-200 cursor-pointer"
          >
            Check System Status
          </button>
        </div>
      </div>
    </section>
  );
}

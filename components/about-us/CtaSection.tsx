import React from 'react';

export default function CtaSection() {
  return (
    <section className="w-full bg-neutral-900 py-16 sm:py-24 px-6 sm:px-10 lg:px-20   relative overflow-hidden">
      
      {/* Ambient Gradient Glow Backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[600px] sm:w-[800px] h-[350px] sm:h-[500px] bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center text-center gap-6">
        
        {/* Main Heading */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-4xl  leading-tight tracking-tight   max-w-[900px]">
          Let&apos;s build something extraordinary together.
        </h2>

        {/* Subtitle / Description */}
        <p className="text-neutral-300 text-base sm:text-lg font-normal leading-relaxed max-w-[672px]">
          From live events to global on-demand streaming, we&apos;re here to help you deliver impactful experiences—securely and at any scale.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-10 py-5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-90 transition-opacity rounded-xl text-white text-base font-normal   leading-6"
          >
            Talk to an Expert
          </a>

          <a
            href="#explore"
            className="px-10 py-5 rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-white text-base font-normal   leading-6"
          >
            Explore the Platform
          </a>
        </div>

        {/* Tagline Footer */}
        <p className="pt-2 text-neutral-300/60 text-xs font-normal uppercase tracking-wider  ">
          NO COMMITMENT. JUST ANSWERS.
        </p>

      </div>
    </section>
  );
}
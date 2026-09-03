'use client';

import React from 'react';
import Link from 'next/link';

export default function EnterpriseCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070b14] text-white py-24 lg:py-36">
      {/* Background 3D Circuit Ribbons Graphic */}
      <div
        className="absolute inset-0 pointer-events-none -z-0 opacity-50 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/Enterprise Page/se-bg4.png')`,
        }}
        aria-hidden="true"
      />

      {/* Radial Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/75 to-[#070b14] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight mb-4 leading-tight">
          Ready to get the right support for your organization?
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl">
          Start with your organization and support need.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#access-matrix"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#06181f] font-semibold text-sm shadow-[0_4px_16px_rgba(56,189,248,0.3)] transition-all duration-150"
          >
            Start Enterprise Support
          </Link>
          <Link
            href="/faqs-and-support"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0e1422]/90 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-600/80 transition-all duration-150 shadow-sm"
          >
            Visit Help Center
          </Link>
        </div>
      </div>
    </section>
  );
}

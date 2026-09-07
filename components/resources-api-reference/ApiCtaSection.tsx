'use client';

import React from 'react';
import Link from 'next/link';

export default function ApiCtaSection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-20 lg:py-28 overflow-hidden">
      {/* Subtle background glow overlay */}
      <div
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight mb-4">
          Your API contracts, verified and ready
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-9">
          Every operation, schema, error, and example in the ZoikoStream API Reference is source-governed, lifecycle-aware, and machine-validated. Start building with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/developer-api-reference"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#27c3a7] hover:bg-[#22b298] text-[#06181f] font-semibold text-sm transition-all duration-150 shadow-[0_4px_16px_rgba(39,195,167,0.25)] hover:shadow-[0_6px_22px_rgba(39,195,167,0.35)]"
          >
            Browse API Reference
          </Link>
          <Link
            href="/developer-documentation"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0e1422] hover:bg-slate-800/80 text-white font-semibold text-sm border border-slate-300/80 transition-all duration-150 shadow-sm"
          >
            Developer Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}

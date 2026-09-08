'use client';

import React from 'react';
import Link from 'next/link';

export default function RelatedUtilitiesSection() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <section id="related" className="block md:hidden relative w-full bg-[#f0f4f8] py-14 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-blue-600 text-xs">▸</span>
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            PRINT / DOWNLOAD / CITATION
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
          Related &amp; utilities.
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-sm sm:max-w-none">
          <button
            type="button"
            onClick={handlePrint}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-300 shadow-sm transition-all text-center cursor-pointer active:bg-slate-100"
          >
            Download PDF
          </button>
          <Link
            href="/legal"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-300 shadow-sm transition-all text-center"
          >
            All Legal documents
          </Link>
        </div>
      </div>
    </section>
  );
}

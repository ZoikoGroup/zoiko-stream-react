import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CookiesSimilarTechnologiesSection() {
  return (
    <section id="cookies" className="relative w-full bg-white py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            SEPARATE CONTROL, NOT ONE FORM
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Cookies &amp; similar technologies.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-8">
          Cookie choices and privacy rights are handled separately — this notice doesn&apos;t collapse them into one confusing control.
        </p>

        {/* Banner Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 max-w-5xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1.5">
              Manage cookies separately
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
              Cookie categories, technology inventory, and your preference controls live on the Cookie notice — not duplicated here.
            </p>
          </div>

          <Link
            href="/zoikostream-cookie-notice"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2dd4bf] to-[#3b82f6] hover:opacity-95 text-[#06181f] font-semibold text-sm shadow-sm transition-all shrink-0"
          >
            <span>Open Cookie notice</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

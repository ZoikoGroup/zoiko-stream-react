import React from 'react';
import Link from 'next/link';

export default function DistinctAuthoritiesSection() {
  return (
    <section className="w-full bg-[#F8FAFC] px-6 sm:px-12 lg:px-20 py-12 lg:py-16 border-b border-slate-200">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              THREE DISTINCT AUTHORITIES
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Privacy, cookies &amp; data processing.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Each covers a different question — reviewing one is not a substitute for the others.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Privacy Notice */}
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-normal text-slate-400 uppercase">
                PRIVACY
              </span>
              <h3 className="text-slate-900 text-base font-semibold font-['Space_Grotesk'] leading-6">
                Privacy notice
              </h3>
              <span className="text-[11px] font-mono uppercase text-slate-500">
                Notice
              </span>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                How ZoikoStream collects, uses, and protects personal data generally.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="#"
                className="text-xs font-semibold font-['Inter'] text-[#0D6EFD] hover:underline"
              >
                Read Privacy notice →
              </Link>
            </div>
          </div>

          {/* Cookie Notice */}
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-normal text-slate-400 uppercase">
                COOKIES
              </span>
              <h3 className="text-slate-900 text-base font-semibold font-['Space_Grotesk'] leading-6">
                Cookie notice
              </h3>
              <span className="text-[11px] font-mono uppercase text-slate-500">
                Notice
              </span>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                Cookies and similar technologies, plus your preference controls.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="#"
                className="text-xs font-semibold font-['Inter'] text-[#0D6EFD] hover:underline"
              >
                Read Cookie notice →
              </Link>
            </div>
          </div>

          {/* Data Processing Addendum */}
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-normal text-slate-400 uppercase">
                PROCESSING
              </span>
              <h3 className="text-slate-900 text-base font-semibold font-['Space_Grotesk'] leading-6">
                Data processing addendum
              </h3>
              <span className="text-[11px] font-mono uppercase text-slate-500">
                Addendum
              </span>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                How ZoikoStream processes data on a customer&apos;s behalf under contract.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/data-processing-addendum"
                className="text-xs font-semibold font-['Inter'] text-[#0D6EFD] hover:underline"
              >
                Read DPA →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

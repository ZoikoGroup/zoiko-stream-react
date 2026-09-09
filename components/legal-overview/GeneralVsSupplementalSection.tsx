import React from 'react';
import Link from 'next/link';

export default function GeneralVsSupplementalSection() {
  return (
    <section className="w-full bg-[#FAFAFC] px-6 sm:px-12 lg:px-20 py-12 lg:py-16 border-b border-slate-200">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              GENERAL VS. SUPPLEMENTAL
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Terms of service &amp; service-specific terms.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            These are explicitly distinct. Which one governs a specific feature or account depends on what you&apos;re using — not assumed here.
          </p>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 text-base font-semibold font-['Space_Grotesk'] leading-6">
                Terms of service
              </h3>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                The general operative terms for using ZoikoStream, applicable across the platform unless a service-specific term states otherwise.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="#"
                className="text-xs font-semibold font-['Inter'] text-[#0D6EFD] hover:underline"
              >
                Read Terms of service →
              </Link>
            </div>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 text-base font-semibold font-['Space_Grotesk'] leading-6">
                Service-specific terms
              </h3>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                Supplemental terms that apply only to an explicitly identified service (for example, Live Events), published only where the registry backs a current record.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="#"
                className="text-xs font-semibold font-['Inter'] text-[#0D6EFD] hover:underline"
              >
                Review Service-specific terms →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

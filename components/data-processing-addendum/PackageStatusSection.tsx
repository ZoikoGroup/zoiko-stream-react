import React from 'react';

export default function PackageStatusSection() {
  return (
    <section id="package-status" className="w-full bg-[#F8FAFC] border-b border-slate-200 py-12 lg:py-16 px-6 sm:px-12 lg:px-20 scroll-mt-20">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              LINEAGE AND INTEGRITY
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            DPA package status.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
            <span className="text-xs font-semibold font-mono uppercase text-slate-500 tracking-wide">
              Package state
            </span>
            <span className="text-slate-900 text-base font-normal">
              Current
            </span>
            <p className="text-slate-600 text-xs leading-relaxed">
              This is the active standard package for new and existing standard-terms customers.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
            <span className="text-xs font-semibold font-mono uppercase text-slate-500 tracking-wide">
              Artifact
            </span>
            <span className="text-slate-900 text-base font-normal">
              PDF, version 1.0
            </span>
            <p className="text-slate-600 text-xs leading-relaxed">
              The downloadable artifact is the immutable, package-bound reference copy.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
            <span className="text-xs font-semibold font-mono uppercase text-slate-500 tracking-wide">
              Review cycle
            </span>
            <span className="text-slate-900 text-base font-normal">
              Reviewed Aug 20, 2026
            </span>
            <p className="text-slate-600 text-xs leading-relaxed">
              Next scheduled legal review recorded internally; this page updates on republication, not on a fixed public clock.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';

export default function DeletionRetentionSection() {
  return (
    <section id="deletion-retention" className="w-full bg-[#FAFAFC] border-b border-slate-200 py-12 lg:py-16 px-6 sm:px-12 lg:px-20 scroll-mt-20">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              TRIGGERS, EXCEPTIONS, EVIDENCE
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Return, deletion &amp; end-of-service treatment.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            What happens to customer data when the services agreement ends, per the operative clause.
          </p>
        </div>

        {/* Rows */}
        <div className="flex flex-col divide-y divide-slate-200 border-t border-b border-slate-200">
          <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-slate-800 text-sm font-normal">
              Return or deletion of customer data after service ends
            </span>
            <div className="flex flex-col sm:items-end gap-0.5">
              <span className="text-slate-900 text-xs font-mono font-medium">
                Per current DPA end-of-service clause
              </span>
              <span className="text-slate-500 text-[11px] font-mono">
                Illustrative example — exact timing in operative text
              </span>
            </div>
          </div>

          <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-slate-800 text-sm font-normal">
              Exceptions (e.g., legal retention obligations)
            </span>
            <div className="flex flex-col sm:items-end gap-0.5">
              <span className="text-slate-900 text-xs font-mono font-medium">
                As stated in the operative clause
              </span>
              <span className="text-slate-500 text-[11px] font-mono">
                Illustrative example
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

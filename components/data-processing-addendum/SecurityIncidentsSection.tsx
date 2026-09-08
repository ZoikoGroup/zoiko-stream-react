import React from 'react';

export default function SecurityIncidentsSection() {
  return (
    <section className="w-full bg-[#F8FAFC] border-b border-slate-200 py-12 lg:py-16 px-6 sm:px-12 lg:px-20">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              DPA TERMINOLOGY, NOT STATUTORY DEADLINES
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Security incident assistance.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Notice obligations and timelines are exact operative DPA terms — not a restatement of any particular law&apos;s deadline.
          </p>
        </div>

        {/* Rows */}
        <div className="flex flex-col divide-y divide-slate-200 border-t border-b border-slate-200">
          <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-slate-800 text-sm font-normal">
              Notice of a confirmed personal data breach affecting customer data
            </span>
            <div className="flex flex-col sm:items-end gap-0.5">
              <span className="text-slate-900 text-xs font-mono font-medium">
                Without undue delay, per current DPA
              </span>
              <span className="text-slate-500 text-[11px] font-mono">
                Illustrative example — see operative clause for exact terms
              </span>
            </div>
          </div>

          <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-slate-800 text-sm font-normal">
              Information provided with notice
            </span>
            <div className="flex flex-col sm:items-end gap-0.5">
              <span className="text-slate-900 text-xs font-mono font-medium">
                Nature, scope, and remediation status
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

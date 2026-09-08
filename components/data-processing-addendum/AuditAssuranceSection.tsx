import React from 'react';

export default function AuditAssuranceSection() {
  return (
    <section id="audit" className="w-full bg-[#F8FAFC] border-b border-slate-200 py-12 lg:py-16 px-6 sm:px-12 lg:px-20 scroll-mt-20">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              EXACT CLAUSE, NOT A SUMMARY SHORTCUT
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Audit, records &amp; assurance evidence.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Audit rights, process, and approved evidence alternatives — exactly as the operative clause defines them.
          </p>
        </div>

        {/* 2 White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2.5">
            <h3 className="text-slate-900 text-sm font-semibold font-['Space_Grotesk']">
              Audit right
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Subject to the conditions, notice, and frequency stated in the operative DPA clause.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2.5">
            <h3 className="text-slate-900 text-sm font-semibold font-['Space_Grotesk']">
              Evidence alternatives
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Approved reports or certifications may satisfy audit requirements in place of an on-site audit, where the clause permits.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

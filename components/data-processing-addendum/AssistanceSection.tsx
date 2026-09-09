import React from 'react';

export default function AssistanceSection() {
  return (
    <section id="assistance" className="w-full bg-[#FAFAFC] border-b border-slate-200 py-12 lg:py-16 px-6 sm:px-12 lg:px-20 scroll-mt-20">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              SUPPORT, NOT SELF-SERVICE PROMISES
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Operational assistance.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Data-subject rights support, DPIA assistance, and regulatory cooperation as defined in the current DPA.
          </p>
        </div>

        {/* 3 White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2.5">
            <h3 className="text-slate-900 text-sm font-semibold font-['Space_Grotesk']">
              Data subject rights
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Reasonable assistance responding to verified data subject requests, per the operative clause.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2.5">
            <h3 className="text-slate-900 text-sm font-semibold font-['Space_Grotesk']">
              DPIA / prior consultation
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Reasonable assistance with data protection impact assessments where required.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2.5">
            <h3 className="text-slate-900 text-sm font-semibold font-['Space_Grotesk']">
              Regulatory cooperation
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Cooperation with supervisory authority inquiries relevant to the processing, per the operative clause.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

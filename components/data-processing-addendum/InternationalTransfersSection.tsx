import React from 'react';

export default function InternationalTransfersSection() {
  return (
    <section id="international-transfers" className="w-full bg-[#0B132B] border-b border-slate-800 py-14 lg:py-18 px-6 sm:px-12 lg:px-20 text-white scroll-mt-20">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#40C4AA] text-xs font-mono uppercase tracking-wide font-medium">
              TRANSFERS ARE NOT RESIDENCY
            </span>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            International transfers.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Transfer mechanism and roles come only from the approved transfer annex — this is never inferred from where a data center happens to be.
          </p>
        </div>

        {/* 3 Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1C2541]/70 border border-slate-700/60 rounded-2xl p-6 flex flex-col gap-2.5 backdrop-blur-sm">
            <h3 className="text-white text-sm font-semibold font-['Space_Grotesk']">
              Mechanism
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Standard contractual clauses or an equivalent approved mechanism, per the transfer annex.
            </p>
          </div>

          <div className="bg-[#1C2541]/70 border border-slate-700/60 rounded-2xl p-6 flex flex-col gap-2.5 backdrop-blur-sm">
            <h3 className="text-white text-sm font-semibold font-['Space_Grotesk']">
              Roles
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Exporter and importer roles are defined in the transfer annex, not assumed.
            </p>
          </div>

          <div className="bg-[#1C2541]/70 border border-slate-700/60 rounded-2xl p-6 flex flex-col gap-2.5 backdrop-blur-sm">
            <h3 className="text-white text-sm font-semibold font-['Space_Grotesk']">
              Data residency
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Residency, if offered, is a separate, independently documented commitment — not inferred from the transfer mechanism.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

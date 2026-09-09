'use client';

import React, { useState } from 'react';

const CLAUSES = [
  {
    id: 'clause1',
    title: 'Scope of processing instructions',
    summary: 'ZoikoStream processes personal data only on documented instructions from the customer, including instructions related to service delivery, unless required otherwise by law.',
    note: 'Illustrative example clause language',
  },
  {
    id: 'clause2',
    title: 'Confidentiality of personnel',
    summary: 'ZoikoStream ensures that personnel authorized to process customer personal data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.',
    note: 'Illustrative example clause language',
  },
  {
    id: 'clause3',
    title: 'Subject matter and duration',
    summary: 'The subject matter, nature, purpose, and duration of processing are set forth in the underlying agreement and applicable annexes.',
    note: 'Illustrative example clause language',
  },
  {
    id: 'clause4',
    title: 'Customer obligations',
    summary: 'Customer represents and warrants that it has complied with all applicable privacy laws in providing personal data to ZoikoStream and issuing processing instructions.',
    note: 'Illustrative example clause language',
  },
];

export default function ProcessingInstructionsSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ clause1: true });

  const toggleClause = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="processing-instructions" className="w-full bg-[#0B132B] border-b border-slate-800 py-14 lg:py-18 px-6 sm:px-12 lg:px-20 text-white scroll-mt-20">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#40C4AA] text-xs font-mono uppercase tracking-wide font-medium">
              CLAUSE NAVIGATION
            </span>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Processing instructions & subject matter.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Expand a clause for a plain-language summary. Operative legal text always lives in the current downloadable artifact.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col border-t border-slate-800 divide-y divide-slate-800">
          {CLAUSES.map((c) => {
            const isOpen = openIds[c.id];
            return (
              <div key={c.id} className="py-4">
                <button
                  onClick={() => toggleClause(c.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none py-1"
                >
                  <span className="text-white text-sm sm:text-base font-semibold font-['Inter']">
                    {c.title}
                  </span>
                  <span className="text-[#40C4AA] text-xl font-bold ml-4">
                    {isOpen ? '−' : '＋'}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 flex flex-col gap-2 pl-1 text-slate-300 text-sm leading-relaxed">
                    <p>{c.summary}</p>
                    <span className="text-slate-400 text-xs font-mono">
                      {c.note}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

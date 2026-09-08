import React from 'react';

interface StateItem {
  title: string;
  description: string;
}

const STATES: StateItem[] = [
  { title: 'Current', description: 'The active, operative version.' },
  { title: 'Scheduled', description: 'Approved but not yet effective.' },
  { title: 'Superseded', description: 'Replaced by a newer current version.' },
  { title: 'Corrected', description: 'Current with a documented correction.' },
  { title: 'Withdrawn', description: 'No longer operative; no live action shown.' },
  { title: 'Archived', description: 'Historical reference only.' },
  { title: 'Review required', description: 'No operative claim made.' },
  { title: 'Unavailable', description: 'No fabricated document shown.' },
];

export default function CurrentnessStatesSection() {
  return (
    <section className="w-full bg-[#F8FAFC] px-6 sm:px-12 lg:px-20 py-12 lg:py-16 border-b border-slate-200">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              KNOW WHAT VERSION YOU&apos;RE READING
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Currentness &amp; document states.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Every legal document carries an explicit lifecycle state — never assumed from the fact that a page loads.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {STATES.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1"
            >
              <span className="text-slate-900 text-xs font-bold font-['Inter'] leading-5">
                {item.title}
              </span>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <p className="text-slate-500 font-mono text-xs leading-relaxed">
            Published date, effective date, and last-reviewed date are distinct fields — a document can be published before it takes effect, and reviewed without changing.
          </p>
        </div>

      </div>
    </section>
  );
}

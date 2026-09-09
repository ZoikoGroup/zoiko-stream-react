import React from 'react';

interface DataHandlingRow {
  category: string;
  purpose: string;
  legalBasis: string;
  source: string;
}

const ROWS: DataHandlingRow[] = [
  {
    category: 'Account identifiers (name, email)',
    purpose: 'Create and manage your account',
    legalBasis: 'Contract necessity',
    source: 'Provided by you',
  },
  {
    category: 'Usage & technical logs',
    purpose: 'Operate, secure, and improve the service',
    legalBasis: 'Legitimate interest',
    source: 'Collected automatically',
  },
  {
    category: 'Payment & billing information',
    purpose: 'Process payment for paid services',
    legalBasis: 'Contract necessity',
    source: 'Provided by you / payment processor',
  },
  {
    category: 'Support communications',
    purpose: 'Respond to your support requests',
    legalBasis: 'Legitimate interest',
    source: 'Provided by you',
  },
  {
    category: 'Marketing preferences',
    purpose: "Send product updates you've opted into",
    legalBasis: 'Consent',
    source: 'Provided by you',
  },
];

export default function HowPersonalDataIsHandledSection() {
  return (
    <section id="data-handling" className="relative w-full bg-white py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            CATEGORY ➔ PURPOSE ➔ BASIS
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          How personal data is handled.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-6">
          Each row states an explicit relationship — we don&apos;t let categories, purposes, and legal bases imply connections beyond what&apos;s shown.
        </p>

        {/* Table Container */}
        <div className="border border-slate-200/90 rounded-2xl overflow-x-auto bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200/90 bg-slate-50/70 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">DATA CATEGORY</th>
                <th className="py-3 px-5">PURPOSE</th>
                <th className="py-3 px-5">LEGAL BASIS</th>
                <th className="py-3 px-5">SOURCE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {ROWS.map((row) => (
                <tr key={row.category} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    {row.category}
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    {row.purpose}
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    {row.legalBasis}
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    {row.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <p className="font-mono text-xs text-slate-400 mt-4 leading-relaxed">
          Illustrative example relationships — the current approved notice text is the authoritative source.
        </p>
      </div>
    </section>
  );
}

import React from 'react';

const QUESTIONS = [
  {
    q: 'Does this policy replace the Terms of Service?',
    a: 'No. This policy works alongside the Terms of Service. Where the two conflict, the Terms of Service governs unless this policy states otherwise.',
  },
  {
    q: 'Will I be told what happened to a user I reported?',
    a: 'No. ZoikoStream does not share account-specific enforcement outcomes with reporters.',
  },
  {
    q: 'Is security research against this policy?',
    a: "No, provided it's conducted consistent with the Vulnerability Disclosure Policy. See the security boundary section above.",
  },
  {
    q: 'Can this page give me legal advice about my specific situation?',
    a: 'No. This page explains ZoikoStream’s policy; it is not legal advice. Consult your own legal counsel for advice specific to your situation.',
  },
];

export default function QuickAnswersSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-8">
          Quick answers
        </h2>

        <div className="space-y-6 max-w-4xl divide-y divide-slate-100">
          {QUESTIONS.map((item, idx) => (
            <div key={item.q} className={idx === 0 ? '' : 'pt-6'}>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {item.q}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

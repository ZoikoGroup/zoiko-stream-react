import React from 'react';

interface RightCard {
  title: string;
  description: string;
  footnote: string;
}

const RIGHTS: RightCard[] = [
  {
    title: 'Access',
    description: 'Request a copy of the personal data we hold about you.',
    footnote: 'Subject to jurisdiction & verification',
  },
  {
    title: 'Correction',
    description: 'Ask us to correct inaccurate personal data.',
    footnote: 'Subject to jurisdiction & verification',
  },
  {
    title: 'Deletion',
    description: 'Ask us to delete your personal data, subject to legal exceptions.',
    footnote: 'Subject to jurisdiction & verification',
  },
  {
    title: 'Portability',
    description: 'Receive your data in a portable format, where applicable.',
    footnote: 'Subject to jurisdiction & verification',
  },
  {
    title: 'Objection / restriction',
    description: 'Object to or restrict certain processing activities.',
    footnote: 'Subject to jurisdiction & verification',
  },
  {
    title: 'Withdraw consent',
    description: 'Withdraw consent at any time for processing based on consent.',
    footnote: 'Does not affect prior lawful processing',
  },
];

export default function PrivacyRightsChoicesSection() {
  return (
    <section id="privacy-rights" className="relative w-full bg-white py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            QUALIFIED, NOT UNIVERSAL
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Your privacy rights &amp; choices.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-8">
          Availability depends on your jurisdiction and relationship with us — a right listed here is not automatically guaranteed for every visitor.
        </p>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RIGHTS.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <span className="font-mono text-[11px] text-slate-400 block">
                  {item.footnote}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

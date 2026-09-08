import React from 'react';

const COVERAGE_CARDS = [
  {
    eyebrow: 'PUBLISHED CONTEXT',
    title: 'zoikostream.com (website)',
    description:
      'Does not extend to the ZoikoStream mobile app, Cowork, or Claude Code unless a separate notice states otherwise.',
  },
  {
    eyebrow: 'TECHNOLOGY TYPES',
    title: 'Cookies, local storage, pixels',
    description:
      'Covers browser-based tracking mechanisms used on the published website context.',
  },
  {
    eyebrow: 'COMPLETENESS',
    title: 'Illustrative example set',
    description:
      'This demonstration does not claim to be an exhaustive, technically verified inventory. Do not treat it as "all cookies used."',
  },
];

export default function WhatThisNoticeCoversSection() {
  return (
    <section id="what-this-covers" className="relative w-full bg-[#f0f4f8] py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            SCOPE, NOT ASSUMPTION
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
          What this notice covers.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-8">
          This notice covers the published context and technology types listed below only — it does not claim to describe embedded products, mobile apps, or third-party sites unless explicitly stated.
        </p>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COVERAGE_CARDS.map((card) => (
            <div
              key={card.eyebrow}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-start"
            >
              <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                {card.eyebrow}
              </span>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

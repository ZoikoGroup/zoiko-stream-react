import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg114 from '@/public/images/accessible-multilingual/bg (114).png';

const steps = [
  { step: 'STEP 1', title: 'Media Mode', desc: 'Live / Prerecorded / Mixed', active: true },
  { step: 'STEP 2', title: 'Audience Access Needs', desc: 'Captions / Translated tracks', active: false },
  { step: 'STEP 3', title: 'Language Scope', desc: 'Source language / Target languages', active: false },
  { step: 'STEP 4', title: 'Quality & Review', desc: 'Human review / Post-live correction', active: false },
  { step: 'STEP 5', title: 'Operating Model', desc: 'Developer / Enterprise / Managed', active: false },
];

export default function RequirementsBuilderSection() {
  return (
    <section className="relative w-full bg-slate-900 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg114}
          alt="Requirements Builder Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Accessibility &amp; Language Requirements Builder
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-relaxed max-w-3xl">
            Explainable, not scored.
          </p>
        </div>

        {/* 5-Step Stepper Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className={`p-5 bg-zinc-900/80 rounded-xl border backdrop-blur-sm flex flex-col justify-between gap-3 ${
                st.active ? 'border-teal-400' : 'border-gray-800'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className={`text-xs font-bold   ${st.active ? 'text-teal-400' : 'text-slate-400'}`}>
                  {st.step}
                </span>
                {st.active && <div className="size-2 bg-teal-400 rounded-sm" />}
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-white text-base font-bold  ">
                  {st.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal  ">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendation Summary Box */}
        <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-teal-400 text-sm font-bold   tracking-wide">
              DETERMINISTIC RECOMMENDATION SUMMARY
            </span>
            <h3 className="text-white text-2xl font-bold  ">
              WCAG 2.2 Compliant Ingest Pathway
            </h3>
            <p className="text-slate-400 text-sm font-normal   leading-relaxed">
              Based on active choices, we recommend the{' '}
              <strong className="text-white">Developer SDK configuration</strong> with automated multi-track STUN/TURN fallback. This ensures sub-second sync capabilities on native players.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
            <Link
              href="/talk-to-an-expert"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
            >
              Configure Solutions
            </Link>
            <span className="text-slate-400 text-xs font-normal  ">
              Matches 4 key platform-qualified standards.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

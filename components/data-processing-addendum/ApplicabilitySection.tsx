'use client';

import React, { useState } from 'react';

const QUESTIONS = [
  {
    id: 'q1',
    text: 'Are you a ZoikoStream customer processing personal data through our services?',
  },
  {
    id: 'q2',
    text: 'Do you already have a separately executed or negotiated DPA with ZoikoStream?',
  },
  {
    id: 'q3',
    text: 'Are you using standard ZoikoStream services under our standard commercial terms?',
  },
];

export default function ApplicabilitySection() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (qId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  return (
    <section id="applicability" className="w-full bg-[#FAFAFC] border-b border-slate-200 py-12 lg:py-16 px-6 sm:px-12 lg:px-20 scroll-mt-20">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              NOT A DETERMINATION, A STARTING POINT
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Does this standard DPA apply to you?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            This self-check helps you assess relevance — it does not decide your account&apos;s actual applicability. Your executed agreement, if any, always controls.
          </p>
        </div>

        {/* Self-check Card */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
          {QUESTIONS.map((q) => (
            <div
              key={q.id}
              className="py-3.5 border-b last:border-b-0 border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <p className="text-slate-800 text-sm font-normal max-w-[520px]">
                {q.text}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                {['Yes', 'No', 'Not sure'].map((option) => {
                  const isSelected = answers[q.id] === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelect(q.id, option)}
                      className={`px-4 py-2 rounded-lg border text-xs font-medium transition-colors ${
                        isSelected
                          ? 'bg-[#0D6EFD]/10 border-[#0D6EFD] text-[#0D6EFD]'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

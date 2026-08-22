import React from 'react';
import Image from 'next/image';

import bg117 from '@/public/images/accessible-multilingual/bg (118).png';

const steps = [
  { name: 'Requested', num: '✓', done: true },
  { name: 'Processing', num: '✓', done: true },
  { name: 'Draft', num: '✓', done: true },
  { name: 'Needs Review', num: '04', active: true },
  { name: 'Approved', num: '05', done: false },
  { name: 'Published', num: '06', done: false },
  { name: 'Superseded', num: '07', done: false },
];

const checklist = [
  { title: 'Timing & Sync Accuracy', desc: 'Offsets mapped strictly to the target word bounds within 100ms', pass: true },
  { title: 'Speech Completeness', desc: 'No omissions or un-transcribed background speech tracks', pass: true },
  { title: 'Speaker Identification', desc: 'Speakers clearly labeled on dialogue transitions', pass: true },
  { title: 'Non-Speech Audio Captions', desc: 'Atmospheric and contextual noises parsed accurately', pass: false },
  { title: 'Translation Faithfulness', desc: 'Localized terms keep the exact semantic meaning of original', pass: false },
];

const issueTags = [
  { text: 'Missing Track', style: 'bg-red-500/10 text-red-500 border-red-500/30' },
  { text: 'Wrong Language Target', style: 'bg-red-500/10 text-red-500 border-red-500/30' },
  { text: 'Timing / Sync Offset Overflow', style: 'bg-amber-500/10 text-amber-500 border-amber-500/30' },
  { text: 'Speaker Omission Error', style: 'bg-amber-500/10 text-amber-500 border-amber-500/30' },
  { text: 'Translation Mismatch State', style: 'bg-amber-500/10 text-amber-500 border-amber-500/30' },
  { text: 'Replay Mismatch State', style: 'bg-red-500/10 text-red-500 border-red-500/30' },
];

export default function HumanReviewCorrectionsSection() {
  return (
    <section className="relative w-full bg-slate-900 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg117}
          alt="Human Review Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Quality, Human Review &amp; Corrections
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-relaxed max-w-3xl">
            Version history and issue resolution
          </p>
        </div>

        {/* Track Accessibility Quality Lifecycle */}
        <div className="p-8 bg-zinc-900 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-6">
          <span className="text-white text-sm font-bold   tracking-wide">
            TRACK ACCESSIBILITY QUALITY LIFECYCLE
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-start">
            {steps.map((st, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-2">
                <div
                  className={`size-12 rounded-full flex items-center justify-center text-xs font-bold   border-2 ${
                    st.done
                      ? 'bg-gray-800 border-gray-800 text-slate-400'
                      : st.active
                      ? 'border-teal-400 text-teal-400'
                      : 'border-gray-800 text-slate-400'
                  }`}
                >
                  {st.num}
                </div>
                <span className={`text-xs font-bold   ${st.active ? 'text-teal-400' : 'text-white'}`}>
                  {st.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Columns: Active Track Review & Qualifications Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Active Track Review */}
          <div className="lg:col-span-6 p-8 bg-zinc-900 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-5">
            <h3 className="text-white text-base font-bold  ">
              ACTIVE TRACK TO REVIEW
            </h3>

            <div className="flex flex-col divide-y divide-gray-800 text-xs  ">
              <div className="py-3 flex justify-between">
                <span className="text-slate-400">Method / Source</span>
                <span className="text-white font-semibold">Automatic Speech Recog (ASR) + Human Revision</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-slate-400">Source Language</span>
                <span className="text-white font-semibold">English (US-EN)</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-slate-400">Target Language</span>
                <span className="text-white font-semibold">French (EU-FR)</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-slate-400">Version Index</span>
                <span className="text-white font-semibold">v2.4-draft (Revision 4)</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-slate-400">Owner Reviewer</span>
                <span className="text-white font-semibold">S. Vance (Compliance Operations)</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-slate-400">Last Change</span>
                <span className="text-white font-semibold">4 minutes ago via API</span>
              </div>
            </div>
          </div>

          {/* Qualifications Checklist */}
          <div className="lg:col-span-6 p-8 bg-zinc-900 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-4">
            <h3 className="text-white text-base font-bold  ">
              QUALIFICATIONS CHECKLIST
            </h3>

            <div className="flex flex-col gap-2.5">
              {checklist.map((chk, idx) => (
                <div key={idx} className="p-3 bg-gray-950 rounded-lg border border-gray-800 flex items-center gap-3">
                  <div
                    className={`size-5 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                      chk.pass
                        ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500'
                        : 'bg-red-500/10 text-red-500 border border-red-500'
                    }`}
                  >
                    {chk.pass ? '✓' : '!'}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-white text-sm font-bold  ">
                      {chk.title}
                    </h4>
                    <p className="text-slate-400 text-xs font-normal  ">
                      {chk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Known Compliance Issue Classification */}
        <div className="p-8 bg-zinc-900 rounded-2xl border border-gray-800 flex flex-col gap-5">
          <span className="text-white text-sm font-bold   tracking-wide">
            KNOWN COMPLIANCE ISSUE CLASSIFICATION
          </span>

          <div className="flex flex-wrap gap-3">
            {issueTags.map((tag, idx) => (
              <span
                key={idx}
                className={`px-3 py-1.5 rounded-full text-xs font-bold   uppercase border ${tag.style}`}
              >
                {tag.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

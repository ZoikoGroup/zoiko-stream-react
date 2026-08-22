import React from 'react';
import Image from 'next/image';

import card54 from '@/public/images/accessible-multilingual/card-image (54).png';
import card55 from '@/public/images/accessible-multilingual/card-image (55).png';
import card56 from '@/public/images/accessible-multilingual/card-image (56).png';

const privacyCards = [
  {
    title: 'Artifact Sensitivity',
    desc: 'Captions and transcripts can inadvertently expose high-value proprietary IP or sensitive PII. Every output is protected by role-based limits and customizable retention policies.',
    image: card54,
  },
  {
    title: 'Viewer Privacy First',
    desc: 'Disability metadata and personal configuration profiles are never inferred, collected, or monetized. Accessibility options are saved locally and fully resettable by design.',
    image: card55,
  },
  {
    title: 'Zero Language Profiling',
    desc: 'Language selection and dialect targeting are strictly transactional. We enforce absolute isolation between language streams, geographical locations, and billing data.',
    image: card56,
  },
];

const denylist = [
  'No storage of plain-text transcripts in unauthorized buffers',
  'No user profile generation based on assistive tech usage',
  'No identification of medical, cognitive, or physical status',
  'No metadata leakage across private enterprise borders',
];

export default function PrivacySensitiveContentSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Privacy, Sensitive Content &amp; Support
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed max-w-3xl">
            How we safeguard automated transcripts, viewer profiles, and inclusive telemetry.
          </p>
        </div>

        {/* 3 Privacy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {privacyCards.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group"
            >
              <div className="relative w-full h-40 bg-slate-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-slate-900 text-xl font-bold  ">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal   leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 Columns: Report Barrier Form & Datapoint Denylist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Report Barrier Form */}
          <div className="lg:col-span-7 p-7 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col gap-5">
            <h3 className="text-slate-900 text-lg font-bold  ">
              Report an Accessibility Barrier
            </h3>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-600 text-xs font-bold  ">
                  CONTACT METHOD (EMAIL OR PHONE)
                </label>
                <input
                  type="text"
                  placeholder="operator@company.com"
                  className="w-full p-3 bg-stone-50 rounded-md border border-gray-200 text-slate-900 text-sm   focus:outline-hidden"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-slate-600 text-xs font-bold  ">
                  BARRIER CATEGORY
                </label>
                <select className="w-full p-3 bg-stone-50 rounded-md border border-gray-200 text-slate-900 text-sm   focus:outline-hidden">
                  <option>Captions out of sync or missing</option>
                  <option>Screen reader incompatibility</option>
                  <option>Audio track missing or distorted</option>
                  <option>Keyboard navigation issue</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
              >
                Submit Support Request
              </button>
              <span className="text-slate-600 text-xs font-normal  ">
                Typically answered in &lt;15m
              </span>
            </div>
          </div>

          {/* Datapoint Denylist */}
          <div className="lg:col-span-5 p-7 bg-white rounded-xl border border-blue-500 shadow-sm flex flex-col gap-5">
            <span className="text-blue-600 text-base font-bold   tracking-wide">
              DATAPOINT DENYLIST
            </span>
            <h3 className="text-slate-900 text-xl font-bold  ">
              What we never track
            </h3>

            <div className="flex flex-col gap-3">
              {denylist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="size-5 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 text-xs font-bold shrink-0">
                    ✕
                  </div>
                  <span className="text-slate-600 text-sm font-normal  ">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

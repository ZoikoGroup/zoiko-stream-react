'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is a ZoikoStream partner?',
    a: 'A ZoikoStream partner is an independent organization with an approved relationship to provide or integrate complementary technology, implementation, production, operational, or ecosystem capabilities around ZoikoStream.',
  },
  {
    q: 'What types of partners can I find?',
    a: 'The directory can include Technology & Integration, Solutions & Implementation, Live Events & Production, Strategic Infrastructure & Alliances, and approved Commercial/Channel partners where that program is available.',
  },
  {
    q: 'Does a listing mean ZoikoStream certifies or guarantees the partner?',
    a: 'No. A public listing confirms the approved relationship/status shown on the profile. Certification, validation, or specialization applies only when that exact badge is displayed and defined. Partners remain responsible for their own services and terms.',
  },
  {
    q: 'How do I find a partner for Live Events?',
    a: 'Use the Live Events filter or choose capabilities such as live production, contribution, encoding, accessibility, event operations, delivery, or audience experience.',
  },
  {
    q: 'How are partner capabilities kept current?',
    a: 'Partner data is managed through a governed partner record, reviewed by ZoikoStream, and subject to revalidation or removal when the relationship, integration, evidence, or public information changes.',
  },
  {
    q: 'Can ZoikoStream introduce me to a partner?',
    a: 'Where the introduction feature is available, you can request an introduction from a partner profile. The form explains what business contact and request information will be shared before you submit it.',
  },
  {
    q: 'How can my company become a partner?',
    a: 'Choose the partner path that best fits your organization, submit the structured application, and complete the relevant fit, technical/operational, legal, and onboarding reviews. Applying does not create public partner status.',
  },
  {
    q: 'Do all partners receive the same benefits?',
    a: 'No. Resources and commercial or go-to-market opportunities can vary by partner type, market, eligibility, agreement, and program status.',
  },
  {
    q: 'Can an existing partner update its profile?',
    a: 'Where partner profile management is enabled, partners can propose updates through the partner workflow. Public changes remain subject to ZoikoStream approval.',
  },
  {
    q: 'What happens if a partnership ends?',
    a: 'ZoikoStream removes or updates active status and discovery according to the relationship lifecycle. Former partners are not presented as currently active.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-400 rounded-full" />
            <span className="text-blue-400 text-xs font-bold    uppercase tracking-wider">
              ANSWER ENGINE LAYER
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold    text-gray-800 leading-tight">
            Quick answers.
          </h2>
        </div>

        {/* 10 FAQ Items */}
        <div className="flex flex-col max-w-4xl divide-y divide-zinc-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-gray-800 text-base font-bold   ">
                    {faq.q}
                  </span>
                  <span className="text-blue-400 text-lg font-semibold    ml-4 shrink-0">
                    {isOpen ? '−' : '＋'}
                  </span>
                </button>

                {isOpen && (
                  <p className="text-gray-500 text-sm font-normal    leading-relaxed pt-1">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

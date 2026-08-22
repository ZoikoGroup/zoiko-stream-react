'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: 'Where can I find open ZoikoStream jobs?',
    a: 'Current roles are listed on the ZoikoStream Careers page. Each listing includes the job location or eligible geography, work arrangement, employment type, and a route to the full job description.',
  },
  {
    q: 'Does ZoikoStream hire remote employees?',
    a: 'Yes. Remote eligibility is specified directly on each job posting along with approved countries, states, or regions.',
  },
  {
    q: 'Who employs ZoikoStream team members?',
    a: 'Team members are employed by the specific Zoiko Group entity listed in the job description for their location and role.',
  },
  {
    q: 'What is the ZoikoStream hiring process?',
    a: 'Our hiring process typically involves Application, Initial Review, Discovery Conversation, Role Assessment, Structured Interviews, Decision & Offer, and Onboarding.',
  },
  {
    q: 'Can I request an accommodation during hiring?',
    a: 'Yes. We welcome accommodation requests at any point in the application or interview process via our dedicated recruiting accommodation request form.',
  },
  {
    q: 'How can I verify a Zoiko recruiter?',
    a: 'Zoiko recruiters reach out exclusively from official @zoikostream.com or approved corporate domains. You can verify contact via our candidate safety channel.',
  },
  {
    q: 'How is my application data handled?',
    a: 'Application data is collected strictly for recruitment purposes according to our Candidate Privacy Notice and local data retention laws.',
  },
  {
    q: 'Can I submit my resume if no role is open?',
    a: 'Yes. You can opt-in to our Talent Network to be notified when relevant future opportunities open.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full bg-slate-100 py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              ANSWER ENGINE LAYER
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-zinc-900 leading-tight">
            Quick answers.
          </h2>
        </div>

        {/* 8 Accordion Q&A Items */}
        <div className="flex flex-col max-w-4xl divide-y divide-zinc-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-zinc-900 text-base font-semibold    ">
                    {faq.q}
                  </span>
                  <span className="text-blue-500 text-lg font-semibold     ml-4 shrink-0">
                    {isOpen ? '−' : '＋'}
                  </span>
                </button>

                {isOpen && (
                  <p className="text-gray-500 text-base font-normal     leading-relaxed pt-1">
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

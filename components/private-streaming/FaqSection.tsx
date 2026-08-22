'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What does private mean on ZoikoStream?',
    answer:
      'Private on ZoikoStream means your stream is only accessible to viewers you explicitly invite. It won’t appear in public listings, search results, or recommendations. Only authenticated users with a valid invitation link or access code can join the room.',
  },
  {
    question: 'Can viewers share or record private content?',
    answer:
      'No. Private streams have built-in protections that disable screen recording, screenshot detection, and link sharing. Viewers cannot redistribute the stream URL, and any attempt to capture content triggers an automatic alert to the host.',
  },
  {
    question: 'What access methods are supported?',
    answer:
      'ZoikoStream supports multiple access methods including email-based invitations, unique access codes, SSO integration for enterprise teams, and password-protected room links. You can combine methods for layered security depending on your event requirements.',
  },
  {
    question: 'How does replay work for private events?',
    answer:
      'Replays for private events follow the same access rules as the live stream. Only originally invited viewers can access the recording, and the replay link expires after the period you set. You can also choose to disable replays entirely for maximum confidentiality.',
  },
  {
    question: 'What if a viewer cannot access the room?',
    answer:
      'If a viewer has trouble accessing a private room, they can request entry through the waiting room feature. The host receives a real-time notification and can approve or deny access instantly. Viewers can also contact the host directly through the built-in support chat.',
  },
  {
    question: 'How is participant data handled?',
    answer:
      'All participant data is encrypted end-to-end and stored in compliance with GDPR and SOC 2 standards. Viewer information is never shared with third parties, and you can request full data deletion at any time. Activity logs are retained only for the duration you specify.',
  },
  {
    question: 'Can I reuse a private room setup?',
    answer:
      'Yes. You can save any private room configuration as a template, including access rules, branding, and security settings. Templates can be duplicated and modified for future events, saving you setup time while maintaining consistent privacy controls.',
  },
  {
    question: 'What is the difference between Private streaming and Assured Event?',
    answer:
      'Private streaming provides access-controlled rooms with standard encryption and viewer management. Assured Event adds enterprise-grade features like dedicated infrastructure, custom SLAs, real-time compliance monitoring, and priority support for mission-critical broadcasts.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight">
          Questions about private streaming.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Everything you need to know about secure, closed event broadcasting.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="w-full bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left"
              >
                <span className="text-slate-900 text-sm sm:text-base font-bold">{faq.question}</span>
                <span
                  aria-hidden
                  className={`shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/private-streaming/plus.svg"
                    alt=""
                    aria-hidden
                    className="w-4 h-4"
                  />
                </span>
              </button>
              {isOpen && (
                <p className="px-6 pb-5 text-slate-600 text-xs sm:text-sm leading-6">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

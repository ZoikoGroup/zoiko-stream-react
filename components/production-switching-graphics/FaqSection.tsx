'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What does Production, switching & graphics cover?',
    answer:
      'It covers the planning of live camera inputs, visual cue coordination, transition management (preview to program), live recovery setups, and approved lower-third titles and legal disclosures.',
  },
  {
    question: 'Are cameras included in this platform?',
    answer:
      'No. Physical cameras, encoders, and onsite transmission gear are supplied by the customer or the partner production agency. We provide the cloud ingest, orchestration, and switching platform.',
  },
  {
    question: 'Do you provide a physical switcher or physical control room?',
    answer:
      'We provide virtual Cloud Mixer consoles accessible from standard browser environments. For critical high-consequence events, physical control room staffing is available as a managed service.',
  },
  {
    question: 'Can my venue or production partner operate the event?',
    answer:
      'Yes. ZoikoStream is designed around open collaboration. You can grant Technical Director, Graphics Operator, or Sponsor Approver access to external production agencies easily.',
  },
  {
    question: 'Can we update names or graphics during the event?',
    answer:
      'Yes. Our Graphics Governance module enables real-time edits to name spellings, titles, and legal disclosures. All changes must go through brief verification before transition to program.',
  },
  {
    question: 'How do you handle late cue or run-of-show changes?',
    answer:
      "Any modification triggers a visual 'CHANGED' indicator in the run-of-show list, prompting active operators to re-verify source feeds before go-live, preventing accidental on-air mistakes.",
  },
  {
    question: 'Does this include captions or translation?',
    answer:
      'Yes. The platform natively routes contribution feeds to live captioning providers and multi-lingual voiceover paths. Safe area indicators prevent visual overlaps.',
  },
  {
    question: 'How do I plan an event?',
    answer:
      'Start by planning an event brief. Our system maps your requirements (timing, camera count, remote presenters) to a versioned source plan with defined roles and ownerships.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className="w-full bg-zinc-950 bg-cover bg-top bg-no-repeat px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.2), rgba(9, 9, 11, 0.2)), url('/images/production-switching-graphics/faq-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold text-center leading-tight">
          Frequently asked questions
        </h2>
      </div>

      <div className="mx-auto w-full max-w-7xl flex flex-col">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} className="w-full border-b border-gray-700/60">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full py-5 flex justify-between items-center gap-4 text-left"
              >
                <span className="text-slate-100 text-sm sm:text-base font-bold">{faq.question}</span>
                <span
                  aria-hidden
                  className={`shrink-0 text-slate-300 text-lg font-normal leading-none transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="pb-5 text-slate-400 text-xs sm:text-sm leading-6">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Does ZoikoStream guarantee WCAG compliance?',
    answer:
      'We provide compliant platforms and viewer player controls, but overall compliance depends on active testing of your specific streams, slide contrasts, and live captions.',
  },
  {
    question: 'Are captions always available?',
    answer:
      'Yes, automated and manual caption engines can be mapped to active events depending on configuration and verified pre-air testing results.',
  },
  {
    question: 'Can viewers use screen readers and keyboards?',
    answer:
      'Absolutely. Standard focus rings, ARIA live structures, and strict sequential tab orders are integrated natively within the viewer player.',
  },
  {
    question: 'Can I request an accessibility accommodation?',
    answer:
      'Yes. Enterprise event setups allow organizers to provide private, simplified feedback portals for viewers to declare general requirements.',
  },
  {
    question: 'What happens if accessibility settings change after testing?',
    answer:
      'Our Material Change system flags updated parameters and prompts the on-duty L2 ops team for targeted re-verification before go-live.',
  },
  {
    question: 'Does replay preserve accessibility?',
    answer:
      'Yes. Video-on-demand packaging preserves live captions, secondary audio tracks, and descriptive transcripts in the permanent replay vault.',
  },
  {
    question: 'How are accessibility requests kept private?',
    answer:
      'We run data minimization routines. User requests are processed temporarily to serve player preferences and never stored in long-term databases.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className="w-full bg-neutral-900 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10"
      style={{
        backgroundImage: `linear-gradient(rgba(3, 7, 18, 0.2), rgba(3, 7, 18, 0.2)), url('/images/accessibility-inclusion/faq-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          Frequently asked questions
        </h2>
      </div>

      <div className="mx-auto w-full max-w-7xl flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="w-full bg-zinc-950/70 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full px-5 py-4 flex justify-between items-center gap-4 text-left"
              >
                <span className="text-slate-100 text-sm sm:text-base font-bold">{faq.question}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/accessibility-inclusion/plus.svg"
                  alt=""
                  aria-hidden
                  className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                />
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-slate-400 text-xs sm:text-sm leading-6">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

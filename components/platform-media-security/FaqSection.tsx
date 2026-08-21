'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What does media security mean at ZoikoStream?',
    subtitle: 'Scoped controls, shared responsibility, and qualified evidence for media workflows.',
    answer:
      'Media security focuses on the distinct path of video and audio streams rather than generic corporate asset monitoring. It guarantees least-privilege, encrypted pathways at each individual lifecycle stage.',
  },
  {
    question: 'Is ZoikoStream end-to-end encrypted?',
    subtitle: 'Protection claims require defined endpoints, key custody, and current evidence.',
    answer:
      'All distribution metadata and media payload fragments are encrypted. For workflows like active dynamic transcoding, we define the exact, isolated processing points where keys are securely used.',
  },
  {
    question: 'What certifications does ZoikoStream hold?',
    subtitle: 'Scoped certifications with entity, period, and current status from Trust Center.',
    answer:
      'We maintain SOC 2 Type II and ISO/IEC 27001 certifications. Certified entities, scope bounds, and audit periods are published directly inside the Trust Center for active user review.',
  },
  {
    question: 'How is my media protected during live streaming?',
    subtitle: 'Transport protection, access control, and credential safety for real-time workflows.',
    answer:
      'Ingest paths mandate authenticated TLS 1.3 tunnels. Playback is bounded by geographic and signed-token policies evaluated in real-time at the edge, mitigating hotlinking and brute-force playback scraping.',
  },
  {
    question: 'What is the shared responsibility model?',
    subtitle: 'Platform provides infrastructure security; customers manage application and access.',
    answer:
      'ZoikoStream secures physical infrastructure, stream isolation, and token decoders. Integrating customers retain control over user roles, key lifetimes, and playback authorization policies.',
  },
  {
    question: 'How are third-party dependencies secured?',
    subtitle: 'Explicit responsibility boundaries, assurance evidence, and change governance.',
    answer:
      'Upstream vendors undergo scheduled third-party risk evaluations. Upstream changes affecting encoding or key custody are held behind active governance reviews and staged release paths.',
  },
  {
    question: 'Where can I review security evidence?',
    subtitle: 'Trust Center, security documentation, and approved audit artifacts.',
    answer:
      'Registered accounts can retrieve current SOC reports, penetration test summaries, and platform configurations directly through our central engineering Trust Center.',
  },
  {
    question: 'How do I report a security vulnerability?',
    subtitle: 'Approved responsible disclosure route with defined scope and safe-harbor.',
    answer:
      'We run a coordinated vulnerability disclosure channel. Safe-harbor is legally guaranteed for researchers adhering to our published policies and testing constraints.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-28 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-3xl">
            Security answers backed by evidence, not marketing.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer flex flex-col gap-3 transition-colors hover:border-slate-300"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {faq.question}
                  </h3>
                  <div className="size-6 bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                <span className="text-blue-600 text-xs font-bold font-['Space_Grotesk']">
                  {faq.subtitle}
                </span>

                {isOpen && (
                  <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed pt-2 border-t border-slate-200">
                    {faq.answer}
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

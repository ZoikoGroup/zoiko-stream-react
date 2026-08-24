"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import bg154 from '@/public/images/Organization-overview/bg (154).png';

const faqs = [
  {
    q: 'How do I determine our primary context?',
    a: 'Self-selection is based on your workflow focus. Choose the Developer path if you are embedding player controls, or the Civic path if automatic accessibility translations take priority.',
  },
  {
    q: 'Can we mix and match developer APIs with enterprise governance?',
    a: 'Yes. All organizational configurations deploy on a single consolidated media engine. You retain absolute control over how resources cross paths.',
  },
  {
    q: 'Does the system automatically guess my path?',
    a: 'No. ZoikoStream respects strict data privacy. We never infer your operating requirements based on domain scraping, tracking, or location telemetry.',
  },
  {
    q: 'What security compliance evidence is instantly exportable?',
    a: 'SOC2 Type II verified specifications, VPAT accessibility audits, and attributable regional data ledger boundaries are available inside your dashboard.',
  },
  {
    q: 'How do standby event failovers work?',
    a: 'Managed broadcast paths maintain dual-active stream keys. Secondary transcoders stand by to route data automatically in the event of frame loss.',
  },
  {
    q: 'Is there a custom path for faith and local community broadcasters?',
    a: 'Yes. The Community path skips extensive performance analytics, allowing you to deploy secure, respectful streams with minimal telemetry scripts.',
  },
  {
    q: 'What does it mean to co-manage a live event stream?',
    a: 'Our dedicated engineers stand by in a secondary channel, continuously monitoring encoder handshakes and signal latencies in real time.',
  },
  {
    q: 'How do I upgrade our self-service setup to an enterprise SLA?',
    a: 'Simply initiate a request inside your administrative portal. We can map SAML pathways and transition support policies without stream disruption.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg154}
          alt="FAQ Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Not sure which organization path fits?
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col divide-y divide-gray-800 border-t border-b border-gray-800">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 flex flex-col gap-3 cursor-pointer" onClick={() => toggle(idx)}>
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {faq.q}
                  </h3>
                  <div className="size-5 flex items-center justify-center text-teal-400 font-bold shrink-0">
                    {isOpen ? '−' : '▾'}
                  </div>
                </div>

                {isOpen && (
                  <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed pt-1 max-w-4xl">
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

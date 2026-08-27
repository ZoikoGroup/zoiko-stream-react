'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const apiFaqs = [
  {
    q: 'Is retry execution safe during outages?',
    a: 'Yes, utilizing idempotency keys prevents redundant execution. When the client retries an operation with the same key, ZoikoStream returns the existing state safely instead of executing duplicated write events.',
  },
  {
    q: 'How do webhook deliverability retries execute?',
    a: 'Upon transaction processing completion, ZoikoStream pushes JSON event payloads instantly. If the client endpoint fails to respond, we execute exponential backoff retries for 48 hours.',
  },
  {
    q: 'Where do we verify API contract changes?',
    a: 'Every API contract update maps to our public changelog. Version tracking timelines highlight deprecated properties and publish active upgrade guides.',
  },
  {
    q: 'How are API rates and ceilings calculated?',
    a: 'Rates are computed hourly and bounded globally per subscription tenancy. Standard endpoints are restricted to 100,000 hourly requests.',
  },
  {
    q: 'Does the sandbox protect live production data?',
    a: 'Absolutely. Interactive playground execution operates inside isolated sandboxes utilizing synthetic databases. Production stream paths remain completely protected.',
  },
  {
    q: 'Can we export standard specifications?',
    a: 'Yes. Machine-readable spec formats are accessible via direct OpenAPI download. Easily integrate standard configurations straight into local gateways.',
  },
];

export function CommonIntegrationQuestionsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-api-reference/bg (8).png"
          alt="Common Integration Questions Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-16">
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <h2 className="text-white text-3xl font-bold">Common integration questions</h2>
          </div>

          {/* 6 FAQ Grid (2x3) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {apiFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="p-6 bg-gray-950/90 rounded-xl border border-gray-800 flex flex-col gap-3 cursor-pointer transition-colors hover:border-gray-700 backdrop-blur-sm"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-base font-bold">{faq.q}</h3>
                    <div className="w-7 h-7 rounded-full border border-gray-800 flex items-center justify-center text-teal-400 flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                  {isOpen && (
                    <p className="text-slate-400 text-sm font-normal leading-5 pt-2 border-t border-gray-800">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Card */}
        <div className="w-full p-8 lg:p-14 bg-zinc-900/40 rounded-2xl border border-gray-800 flex flex-col items-center justify-center text-center gap-8 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col gap-3 max-w-[640px]">
            <h3 className="text-white text-3xl font-bold">Ready to integrate ZoikoStream?</h3>
            <p className="text-slate-400 text-base font-normal leading-6">
              Deploy secure, globally distributed video infrastructure in minutes. Explore interactive developer specs or speak to an expert solutions architect.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md">
              <span className="text-slate-950 text-base font-bold">Start building</span>
            </div>
            <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex justify-center items-center cursor-pointer hover:border-white transition-colors">
              <span className="text-white text-base font-bold">Talk to an expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

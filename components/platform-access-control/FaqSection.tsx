'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What does Access Control mean in ZoikoStream?',
    answer:
      'ZoikoStream Access Control is the programmatic operates layer that validates Actor, Resource, and Action parameters against corporate tenant OIDC policies before generating playback or distribution keys.',
  },
  {
    question: 'Is signing in the same as being authorized?',
    answer:
      'No. Authentication proves identity; authorization establishes operational permissions. Users must satisfy explicit, unexpired entitlement rules to perform any actions on media.',
  },
  {
    question: 'Is Access Control the same as Secure Playback?',
    answer:
      'No. Access Control operates at the tenant policy layer mapping identities and entitlements. Secure Playback enforces those rules at the edge CDN via key verification and DRM key delivery.',
  },
  {
    question: 'Which identity providers do you support?',
    answer:
      'We support major enterprise OIDC providers including Okta, Microsoft Entra ID (Azure AD), Ping Identity, and Google Workspace out of the box.',
  },
  {
    question: 'Can access expire or be revoked?',
    answer:
      'Yes. Every grant contains mandatory expiration bounds. Playback can be instantly severed downstream by flagging the authorization as revoked.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-24 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-access-control/bg (88).png"
          alt="FAQ Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Frequently asked questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 cursor-pointer backdrop-blur-sm transition-colors"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {faq.question}
                  </h3>
                  <div className="size-7 bg-gray-800 rounded-full border border-gray-700 flex items-center justify-center text-slate-400 shrink-0">
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
                {isOpen && (
                  <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed mt-3 pt-3 border-t border-gray-800">
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

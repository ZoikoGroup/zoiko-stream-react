'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import section13Bg from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/section-13bg.png';

const FAQS = [
  {
    q: 'Does ZoikoStream support SSO?',
    a: 'Identity federation eligibility and SSO mechanism details are documented by the Identity & Authentication authority.',
  },
  {
    q: 'Can I restrict access to specific streams?',
    a: 'Resource-level access policies are supported. Exact granularity depends on the owning product and is documented in Protected Resources.',
  },
  {
    q: 'How are API keys rotated?',
    a: 'Credential rotation and revocation follow the lifecycle documented in the Authentication boundary section.',
  },
  {
    q: 'What happens when someone leaves the organization?',
    a: 'Offboarding is owned by your organization. ZoikoStream provides credential revocation and session termination APIs.',
  },
  {
    q: 'Is there an audit log?',
    a: 'Yes. Immutable, append-only audit trails capture access events, policy changes, and session records.',
  },
  {
    q: 'How does playback authorization differ from platform access?',
    a: 'Playback authorization is a media-security specialist contract, separate from platform and administrator authorization.',
  },
];

export default function PlatformSecurityAccessFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden z-10">
      {/* Background Image section-13bg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section13Bg}
          alt="FAQ Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-12">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="w-full text-slate-100 text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] leading-tight">
            Frequently asked questions
          </h2>
          <p className="w-full text-slate-400 text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Quick answers about the ZoikoStream security and access model.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="w-full p-6 bg-gray-900/90 rounded-[10px] border-b border-gray-800 backdrop-blur-xs flex flex-col justify-start items-start gap-3 transition-all cursor-pointer"
                onClick={() => toggleFaq(idx)}
              >
                <div className="w-full flex justify-between items-center gap-4">
                  <h3 className="flex-1 text-slate-100 text-base sm:text-lg font-bold font-['Space_Grotesk']">
                    {faq.q}
                  </h3>
                  <div className="size-6 flex items-center justify-center text-teal-400 shrink-0">
                    <ChevronDown
                      className={`size-5 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180 text-teal-400' : ''
                      }`}
                    />
                  </div>
                </div>

                {isOpen && (
                  <div className="w-full pt-2 border-t border-gray-800/60">
                    <p className="text-slate-400 text-xs sm:text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

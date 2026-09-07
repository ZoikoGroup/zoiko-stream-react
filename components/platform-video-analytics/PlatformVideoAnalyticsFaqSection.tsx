'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import section11Bg from '@/public/images/platform-video-analytics/section-11bg.png';

const FAQS = [
  {
    q: 'How is ZoikoStream video analytics different from stream monitoring?',
    a: 'Video analytics provides historical and decision-grade metric analysis of performance trends. Stream monitoring focuses strictly on active operational health, real-time diagnostic flags, and current encoder stream integrity.',
  },
  {
    q: 'Can I see exact metric values on this page?',
    a: 'No. This public documentation page outlines supported metric families, registry definitions, and security governance frameworks. Client-specific metric values require secure authentication into client dashboard environments.',
  },
  {
    q: 'What metrics does ZoikoStream track?',
    a: 'ZoikoStream only tracks performance indicators explicitly defined in the active Metric Registry. Standard industry claims are never assumed—each metrics family maps to clear, approved hardware or CDN telemetry structures.',
  },
  {
    q: 'Does ZoikoStream offer real-time analytics?',
    a: 'Video analytics operates on reporting-interval semantics (audited hourly or daily chunks). Immediate operational monitoring is handled via Stream Monitoring dashboards, though freshness thresholds can be configured.',
  },
  {
    q: 'How is viewer privacy protected?',
    a: 'Every metrics pipeline aggregates by default. Our systems suppress person-level monitoring, device fingerprinting, and tracking across third-party networks, ensuring absolute compliance with global privacy regulations.',
  },
  {
    q: 'Can I export analytics data?',
    a: 'Yes. Authorized operators can package and export analytics metrics in audited CSV or JSON formats. Export capabilities are heavily gate-restricted based on internal enterprise permission sets.',
  },
  {
    q: 'How do I access the Analytics API?',
    a: 'Developer access keys are available inside the developer portal. Query specifications, endpoint definitions, and rate limits are fully defined inside our Analytics API documentation.',
  },
  {
    q: 'How current is the analytics data?',
    a: 'Every metric within our catalog displays exact time-semantics, formula versioning, and quality state—ensuring you know exactly how complete and current your active data is.',
  },
];

export default function PlatformVideoAnalyticsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-zinc-900 flex flex-col justify-start items-start gap-12 overflow-hidden z-10">
      {/* Background Image section-11bg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section11Bg}
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
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="w-full p-6 bg-gray-900/90 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex flex-col justify-start items-start gap-3 transition-all cursor-pointer"
                onClick={() => toggleFaq(idx)}
              >
                <div className="w-full flex justify-between items-center gap-4">
                  <h3 className="flex-1 text-slate-100 text-base sm:text-lg font-bold font-['Space_Grotesk']">
                    {faq.q}
                  </h3>
                  <div className="size-6 flex items-center justify-center text-slate-400 shrink-0">
                    <ChevronDown
                      className={`size-5 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180 text-teal-400' : ''
                      }`}
                    />
                  </div>
                </div>

                {isOpen && (
                  <div className="w-full pt-2 border-t border-gray-800/60">
                    <p className="text-gray-400 text-xs sm:text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
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

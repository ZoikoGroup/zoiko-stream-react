import React from 'react';
import Image from 'next/image';
import { Minus } from 'lucide-react';

import bg11 from '@/public/images/resource-accessibility/section-11bg.png';

const FAQS = [
  {
    q: 'Is ZoikoStream WCAG 2.2 AA compliant?',
    a: 'Yes, our core web player and viewer portal are built to align with WCAG 2.2 Level AA guidelines. We publish detailed VPAT ACR documentation tracking exact compliance across all platform modules.',
  },
  {
    q: 'Which assistive technologies are supported?',
    a: 'We officially test and verify compatibility with NVDA + Chrome, JAWS + Edge, VoiceOver + Safari, and TalkBack + Chrome on Android.',
  },
  {
    q: 'How do I report an accessibility barrier?',
    a: 'You can utilize our direct Barrier Report Form above, or contact our dedicated Trust team at accessibility@studioclarity.com for direct support.',
  },
];

export default function AccessibilityFaqSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 pt-16 pb-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg11}
          alt="FAQ Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Straightforward answers about our accessibility guidelines, testing workflows, and client-first resources.
        </p>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="w-full p-6 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-3 shadow-md"
          >
            <div className="w-full flex justify-between items-center gap-4">
              <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                {faq.q}
              </h3>
              <div className="size-7 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex justify-center items-center shrink-0">
                <Minus className="w-3.5 h-3.5 text-teal-400" />
              </div>
            </div>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

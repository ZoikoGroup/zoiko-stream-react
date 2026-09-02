import React from 'react';
import Image from 'next/image';
import { Minus } from 'lucide-react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';

const FAQS = [
  {
    q: 'What is the difference between Changelog and Release Notes?',
    a: 'The Changelog records strict technical execution updates, endpoint deprecations, and code-level schema changes. Release Notes cover higher-level capability overviews and roadmap intentions designed for non-technical leadership.',
  },
  {
    q: 'How are changes classified?',
    a: 'Every change falls into one of our nine deterministic classifications (Added, Changed, Fixed, Performance, Security, Deprecated, Breaking, Retired, Documentation) to enable automated impact scans.',
  },
  {
    q: "What does 'action required' mean?",
    a: 'This tag marks breaking deprecations. Failure to adjust client application code, authentication headers, or target endpoints prior to the stated deadline will result in handshake or transaction failures.',
  },
  {
    q: 'How do I find changes for a specific API or SDK?',
    a: 'Utilize the active filtering bar in the Hero finder or leverage our intelligent search query tool to search specifically by endpoint prefixes, SDK version IDs, or component tags.',
  },
  {
    q: 'Are corrections visible?',
    a: "Yes. Every modification to an already released change record is logged as an immutable entry in the change record's Correction History block to maintain exact audit transparency.",
  },
  {
    q: 'Where do I report a missing or incorrect change?',
    a: 'Report compliance queries or missing change specifications directly to our Developer Support team via dev-support@zoiko.io or target the shared support Slack channel.',
  },
];

export default function ChangelogFaqSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
      {/* Background overlay snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="w-full p-6 bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3 shadow-xs"
          >
            <div className="w-full flex justify-between items-center">
              <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                {faq.q}
              </h3>
              <div className="size-7 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center shrink-0">
                <Minus className="w-3.5 h-3.5 text-slate-900" />
              </div>
            </div>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

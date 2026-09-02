import React from 'react';
import Image from 'next/image';
import { Minus } from 'lucide-react';

import bg13 from '@/public/images/resource-help-center/section-13bg.png';

const FAQS = [
  {
    q: 'What is the difference between Help Center and Developer Documentation?',
    a: 'Help Center focuses on general operations, account settings, billing, live planning, and step-by-step troubleshooting. Developer Documentation provides native API endpoints, raw SDK reference blocks, code samples, and parameters validation scripts.',
  },
  {
    q: 'How do I check if ZoikoStream is experiencing an outage?',
    a: 'The System Status portal provides real-time telemetry from edge distribution nodes and ingestion servers. It is updated automatically and serves as the single source of truth during live incidents.',
  },
  {
    q: 'How do I report an accessibility barrier?',
    a: 'Submit reports directly using our dedicated Accessibility conformance pathway. We audit all submissions to meet WCAG AA regulations and provide response feedback timelines.',
  },
  {
    q: 'Can I get support without creating an account?',
    a: 'Yes. General documentation, help search, and system status are fully public. Dedicated technical troubleshooting and account recovery require secure authenticated sessions.',
  },
  {
    q: 'What information should I include when contacting support?',
    a: 'To ensure fast resolution times, include your organization ID, specific stream ingest keys, client player logs, and any diagnostic codes from the troubleshooting flow.',
  },
  {
    q: 'How do I find help for Live Events?',
    a: 'Our Live Events guide details pre-event checks and hot-standby options. During active live events, prioritize using the direct concierge hotline or checking real-time System Status.',
  },
];

export default function HelpCenterFaqSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 pt-16 pb-28 bg-gray-950/60 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg13}
          alt="FAQ Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="w-full p-6 bg-zinc-900 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-3 shadow-md"
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

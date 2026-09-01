import React from 'react';
import Image from 'next/image';
import { Minus } from 'lucide-react';

import bg9 from '@/public/images/resources-security-trust-center/section-9bg.png';

const FAQS = [
  {
    q: 'Is ZoikoStream certified to SOC 2?',
    a: 'Yes, ZoikoStream undergoes annual SOC 2 Type II audits covering Security, Availability, and Confidentiality trust service criteria.',
  },
  {
    q: 'Is ZoikoStream GDPR compliant?',
    a: 'Yes, we provide standard Data Processing Agreements (DPAs) incorporating EU Standard Contractual Clauses (SCCs) and UK Addendums for international data transfers.',
  },
  {
    q: 'Can I download a compliance report?',
    a: 'Public bridge letters and executive summaries are available directly. Detailed SOC 2 Type II audit reports require a signed NDA or click-through agreement.',
  },
  {
    q: 'Is the service currently operational?',
    a: 'Real-time service availability, latency telemetry, and ongoing incident logs are continuously broadcast on our live System Status dashboard.',
  },
  {
    q: 'How do I report a vulnerability?',
    a: 'Security vulnerabilities can be reported directly to security@zoiko.io under our safe harbor Coordinated Vulnerability Disclosure Policy.',
  },
  {
    q: 'What evidence applies to my deployment?',
    a: 'Each trust evidence record lists its explicit scope, product version, and deployment domain (ZoikoStream-Managed vs. Customer-Controlled).',
  },
];

export default function TrustCenterFaqSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/95 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
     

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="w-full p-5 bg-zinc-900/90 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-3 shadow-md"
          >
            <div className="w-full flex justify-between items-center gap-4">
              <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                {faq.q}
              </h3>
              <div className="size-6 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-800 flex justify-center items-center shrink-0">
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

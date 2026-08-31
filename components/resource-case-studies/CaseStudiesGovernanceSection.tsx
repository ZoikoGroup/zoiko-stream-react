import React from 'react';
import Image from 'next/image';
import bg26 from '@/public/images/resources-case-studies/bg (26).png';

import modelImg0 from '@/public/images/resources-case-studies/Model Image.png';
import modelImg1 from '@/public/images/resources-case-studies/Model Image 1.png';
import modelImg2 from '@/public/images/resources-case-studies/Model Image 2.png';

const GOVERNANCE_CARDS = [
  {
    title: 'Claim Traceability',
    description:
      'Every performance claim or deployment detail is mapped to a unique claim_id linked to raw database logs, architect signatures, and a bi-annual audit review.',
    image: modelImg0,
  },
  {
    title: 'Metric Integrity',
    description:
      'All percentage or velocity metrics declare their specific measurement period, underlying system baselines, and precise calculation variables to avoid marketing bias.',
    image: modelImg1,
  },
  {
    title: 'Rights Governance',
    description:
      'Independent permission scopes govern customer naming rights. Logo, quote, and technical detail approvals are separated so a partner can approve architecture specs while keeping names anonymous.',
    image: modelImg2,
  },
];

const LIFECYCLE_STEPS = [
  { num: '1', title: 'Draft', desc: 'Internal logging & metrics collection' },
  { num: '2', title: 'Review', desc: 'Verified by lead system architect' },
  { num: '3', title: 'Approved', desc: 'Legal and client sponsor review' },
  { num: '4', title: 'Current', desc: 'Published with real-time telemetry' },
  { num: '5', title: 'Expiry Check', desc: '6-month validity audit check' },
];

export default function CaseStudiesGovernanceSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-800/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg26}
          alt="Governance Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          How evidence is governed
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Every claim is traceable. Every metric is explainable. Every customer asset is permission-scoped under our strict compliance guidelines.
        </p>
      </div>

      {/* 3 Governance Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {GOVERNANCE_CARDS.map((card, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-700 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all"
          >
            <div className="relative w-full h-40 bg-gray-900 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bi-Annual Auditing Lifecycle Stepper */}
      <div className="relative z-10 w-full pt-6 flex flex-col justify-start items-start gap-6">
        <span className="text-teal-400 text-base font-bold font-['Space_Grotesk'] tracking-wide">
          STRICT BI-ANNUAL AUDITING LIFECYCLE:
        </span>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-2 items-center">
          {LIFECYCLE_STEPS.map((step, index) => (
            <div key={index} className="flex items-center w-full">
              <div className="flex-1 flex flex-col items-center gap-2 text-center">
                <div className="size-12 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full outline outline-2 outline-offset-[-2px] outline-gray-500 flex justify-center items-center shrink-0">
                  <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {step.num}
                  </span>
                </div>
                <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                  {step.title}
                </span>
                <span className="text-slate-400 text-xs font-normal font-['Inter'] leading-4">
                  {step.desc}
                </span>
              </div>
              {index < LIFECYCLE_STEPS.length - 1 && (
                <div className="hidden lg:block w-12 h-0.5 bg-gray-600 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

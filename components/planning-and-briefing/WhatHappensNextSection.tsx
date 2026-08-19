import React from 'react';

const steps = [
  {
    icon: '/images/planning-and-briefing/upload.svg',
    title: 'Submit Brief',
    description: 'Send your brief and we’ll route it to the right planning team for review.'
  },
  {
    icon: '/images/planning-and-briefing/search.svg',
    title: 'Planning Review',
    description: 'We validate scope, identify missing details, and flag potential blockers early.'
  },
  {
    icon: '/images/planning-and-briefing/file-text.svg',
    title: 'Scope Proposal',
    description: 'We return a proposal outlining scope, assumptions, and any required next steps.'
  },
  {
    icon: '/images/planning-and-briefing/check.svg',
    title: 'Next Steps',
    description: 'We confirm booking, staffing, pricing, and technical commitment once scope is aligned.'
  }
];

export default function WhatHappensNextSection() {
  return (
    <section className="relative w-full py-[100px] px-6 md:px-[112px] bg-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <img 
          src="/images/planning-and-briefing/what-happens-next-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-[48px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-space-grotesk font-bold text-[#0a0d13] text-3xl md:text-[40px]">
            What happens after you submit
          </h2>
          <p className="font-space-grotesk font-normal text-[#6b7484] text-[16px] w-full leading-[normal]">
            Your brief enters a structured review process. Every step is transparent — no hidden decisions, no assumed commitments.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-[24px] w-full">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-[16px] w-full">
              <div className="w-[40px] h-[40px] rounded-[20px] bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                <img src={step.icon} alt="" className="w-[20px] h-[20px]" />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-space-grotesk font-bold text-[#0a0d13] text-[16px] whitespace-nowrap">
                  {step.title}
                </h3>
                <p className="font-space-grotesk font-normal text-[#6b7484] text-[14px] leading-[normal]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="flex flex-col gap-[8px] p-[16px] bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] w-full">
          <h4 className="font-space-grotesk font-bold text-[#6b7484] text-[13px] w-full">
            Important
          </h4>
          <p className="font-space-grotesk font-normal text-[#6b7484] text-[13px] leading-[normal] w-full">
            Submitting a brief is a request for review. It does not confirm booking, staffing, pricing, availability, or technical commitment.
          </p>
        </div>

      </div>
    </section>
  );
}

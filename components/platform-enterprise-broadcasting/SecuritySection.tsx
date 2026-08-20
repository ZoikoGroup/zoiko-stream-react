import React from 'react';
import Image from 'next/image';

const leftFeatures = [
  {
    title: 'Data minimization',
    desc: 'We ingest and retain only the telemetry required to prove governance. No unnecessary tracking.'
  },
  {
    title: 'Privacy-safe analytics',
    desc: 'Audience measurement uses aggregate, authenticated counts that never track individual behaviors.'
  },
  {
    title: 'No hidden profiling',
    desc: 'Our platform processes streams strictly for delivery and governance. No user profiling is performed.'
  },
  {
    title: 'Abuse resistance',
    desc: 'Automated rate limiting and cryptographic token gates block coordinate attacks without system drag.'
  }
];

const rightSteps = [
  {
    num: '01',
    title: 'Technical Review',
    desc: 'System capabilities and stream routes evaluation.'
  },
  {
    num: '02',
    title: 'Architecture Review',
    desc: 'Tenant modeling and infrastructure mapping.'
  },
  {
    num: '03',
    title: 'Security Review',
    desc: 'Compliance checks, SOC2 audit packages, and penetration results.'
  },
  {
    num: '04',
    title: 'Commercial Integration',
    desc: 'SLA confirmation, licensing parameters, and contractual agreement.'
  }
];

export default function SecuritySection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] border-t border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start bg-[#0a0f1a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/security-bg.png" 
          alt="Security Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.8)]" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[16px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-white text-[38px] leading-[61px] tracking-[-0.38px]">
          Evidence-backed enterprise evaluation
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[18px] leading-[29px] w-full">
          Capabilities, regions, service levels, and commercial terms are confirmed from current authority during qualification.
        </p>
      </div>

      {/* Trust Split Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-[48px] items-start w-full">
        {/* Left Side: Commitments */}
        <div className="flex flex-col gap-[24px] items-start flex-1 w-full">
          <h3 className="font-spaceGrotesk font-bold text-white text-[20px]">
            Durable enterprise commitments
          </h3>
          <div className="flex flex-col gap-[16px] items-start w-full">
            {leftFeatures.map((item, index) => (
              <div key={index} className="flex flex-col gap-[4px] items-start w-full">
                <h4 className="font-spaceGrotesk font-bold text-white text-[16px]">
                  {item.title}
                </h4>
                <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[14px] leading-[20px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-[#232b3a] self-stretch min-h-[420px]" />

        {/* Right Side: Procurement Path */}
        <div className="flex flex-col gap-[24px] items-start flex-1 w-full">
          <h3 className="font-spaceGrotesk font-bold text-white text-[20px]">
            Governance path to procurement
          </h3>
          <div className="flex flex-col gap-[12px] items-start w-full">
            {rightSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-[#141b2d] border border-[#232b3a] border-solid rounded-[8px] p-[16px] flex gap-[16px] items-start w-full transition-colors hover:bg-[#1a233a]"
              >
                <span className="font-spaceGrotesk font-bold text-[#4ecdc4] text-[18px]">
                  {step.num}
                </span>
                <div className="flex flex-col gap-[2px] items-start w-full">
                  <h4 className="font-spaceGrotesk font-bold text-white text-[15px]">
                    {step.title}
                  </h4>
                  <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

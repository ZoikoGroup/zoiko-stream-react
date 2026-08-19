import React from 'react';
import Image from 'next/image';

const domains = [
  {
    domain: 'Purpose & audience',
    owner: 'Owner: James Holloway',
    status: 'Satisfied ✓',
    statusBg: 'bg-[#064e3b]',
    statusText: 'text-[#4ecdc4]'
  },
  {
    domain: 'Authority & roles',
    owner: 'Owner: Maya Webb',
    status: 'Satisfied ✓',
    statusBg: 'bg-[#064e3b]',
    statusText: 'text-[#4ecdc4]'
  },
  {
    domain: 'Sources & rights',
    owner: 'Owner: Legal Team',
    status: 'Needs review ⚠',
    statusBg: 'bg-[#78350f]',
    statusText: 'text-[#f59e0b]'
  },
  {
    domain: 'Audience/access',
    owner: 'Owner: IT Sec Group',
    status: 'Satisfied ✓',
    statusBg: 'bg-[#064e3b]',
    statusText: 'text-[#4ecdc4]'
  },
  {
    domain: 'Accessibility',
    owner: 'Owner: Ops Desk',
    status: 'Pending ⏳',
    statusBg: 'bg-[#1e3a8a]',
    statusText: 'text-[#60a5fa]'
  },
  {
    domain: 'Monitoring',
    owner: 'Owner: Infrastructure Team',
    status: 'Satisfied ✓',
    statusBg: 'bg-[#064e3b]',
    statusText: 'text-[#4ecdc4]'
  },
  {
    domain: 'Recording',
    owner: 'Owner: Archivist Team',
    status: 'Not applicable',
    statusBg: 'bg-[#1e293b]',
    statusText: 'text-[#94a3b8]'
  },
  {
    domain: 'Fallback',
    owner: 'Owner: Engineering Control',
    status: 'Satisfied ✓',
    statusBg: 'bg-[#064e3b]',
    statusText: 'text-[#4ecdc4]'
  }
];

export default function ReadinessSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] flex flex-col gap-[56px] items-start bg-white overflow-hidden border-b border-[#e2e8f0] border-solid">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/readiness-bg.png" 
          alt="Readiness Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[12px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[38px] leading-[61px] tracking-[-0.38px]">
          Evidence-backed readiness before activation
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[29px] w-full">
          Every prerequisite has an owner, evidence, and blocker visibility. No single unexplained green badge.
        </p>
      </div>

      {/* Readiness Content */}
      <div className="relative z-10 flex flex-col xl:flex-row gap-[48px] items-center w-full">
        {/* Left Side: Readiness Mockup */}
        <div className="bg-[#0f172a] border-[1.5px] border-[#e2e8f0] border-solid rounded-[16px] shadow-[0px_8px_12px_rgba(0,0,0,0.13)] flex flex-col gap-[16px] items-start p-[24px] w-full lg:w-[720px] shrink-0">
          <div className="flex items-center justify-between w-full">
            <h3 className="font-spaceGrotesk font-bold text-white text-[16px]">
              Readiness Domain Checklist
            </h3>
            <p className="font-spaceGrotesk font-normal text-[#94a3b8] text-[13px]">
              Ref: BROADCAST-READY-2026
            </p>
          </div>

          <div className="flex flex-col gap-[8px] items-start w-full">
            {domains.map((item, index) => (
              <div 
                key={index} 
                className="border-b border-[#1e293b] border-solid flex items-center justify-between pb-[6px] w-full"
              >
                <div className="flex flex-col gap-[2px] items-start">
                  <p className="font-spaceGrotesk font-normal text-[#94a3b8] text-[13px]">
                    {item.domain}
                  </p>
                  <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[11px]">
                    {item.owner}
                  </p>
                </div>
                <div className={`${item.statusBg} rounded-[4px] px-[10px] py-[4px] flex items-center justify-center shrink-0`}>
                  <p className={`font-spaceGrotesk font-bold ${item.statusText} text-[11px]`}>
                    {item.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Readiness Context */}
        <div className="flex flex-col gap-[32px] items-start w-full xl:flex-1">
          <h3 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[24px]">
            Enforce auditable readiness workflows
          </h3>
          <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[16px] leading-[26px]">
            Ensure that no production goes live until all stakeholders submit affirmative evidence. Block accidental stream triggers with automated, cryptographic rule assertion.
          </p>
        </div>
      </div>
    </section>
  );
}

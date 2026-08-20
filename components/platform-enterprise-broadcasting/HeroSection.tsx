import React from 'react';
import Image from 'next/image';

const steps = [
  { number: '01', title: 'Program', desc: 'Governance definition' },
  { number: '02', title: 'Readiness', desc: 'Verification check' },
  { number: '03', title: 'Source', desc: 'Input qualification' },
  { number: '04', title: 'Audience', desc: 'Secure entitlement' },
  { number: '05', title: 'Broadcast', desc: 'Active transit' },
  { number: '06', title: 'Evidence', desc: 'Durable capture' },
  { number: '07', title: 'Continuity', desc: 'Replay published' }
];

export default function HeroSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[120px] border-b border-[#232b3a] border-solid flex flex-col items-start bg-[#0a0f1a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/hero-bg.png" 
          alt="Hero Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.67)]" />
      </div>

      <div className="relative z-10 flex flex-col xl:flex-row gap-[48px] items-center w-full">
        {/* Left Side: Hero Content */}
        <div className="flex flex-col gap-[32px] items-start w-full xl:flex-1">
          {/* Eyebrow Badge */}
          <div className="border border-[#4ecdc4] border-solid rounded-[46px] px-[16px] py-[8px]">
            <p className="font-spaceGrotesk font-bold text-[#4ecdc4] text-[13px] tracking-[1px] uppercase">
              PLATFORM / ENTERPRISE BROADCASTING
            </p>
          </div>
          
          {/* Main Title */}
          <h1 className="font-spaceGrotesk font-bold text-white text-[56px] leading-[68px] tracking-[-1px] w-full">
            Run repeatable <br className="hidden lg:block" /> broadcasts with <br className="hidden lg:block" /> accountability
          </h1>
          
          {/* Description */}
          <p className="font-spaceGrotesk font-normal text-[#c5cddc] text-[18px] leading-[29px] w-full max-w-2xl">
            Enterprise broadcasting is the governed operating path for organizations that need repeatable live video workflows with explicit ownership, readiness, and evidence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-[16px] items-center mt-[4px]">
            <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] rounded-[10px] px-[28px] py-[14px] hover:opacity-90 transition-opacity">
              <span className="font-spaceGrotesk font-bold text-[#0a0f1a] text-[15px]">
                Talk to an expert
              </span>
            </button>
            <button className="bg-transparent border border-[#aab3c4] border-solid rounded-[10px] px-[28px] py-[14px] hover:bg-[#aab3c4]/10 transition-colors">
              <span className="font-spaceGrotesk font-bold text-white text-[15px]">
                Explore media operations
              </span>
            </button>
          </div>
        </div>

        {/* Right Side: Broadcast Pathway Panel */}
        <div className="bg-[rgba(16,21,30,0.8)] backdrop-blur-md border-[1.5px] border-[#232b3a] border-solid rounded-[16px] shadow-[0px_16px_32px_0px_rgba(0,0,0,0.5)] flex flex-col gap-[20px] items-start p-[28px] w-full lg:w-[500px] shrink-0">
          {/* Panel Header */}
          <div className="flex items-center justify-between w-full">
            <h3 className="font-spaceGrotesk font-bold text-white text-[16px]">
              BROADCAST PATHWAY
            </h3>
            <div className="bg-[rgba(78,205,196,0.13)] rounded-[4px] px-[8px] py-[2px]">
              <p className="font-spaceGrotesk font-bold text-[#4ecdc4] text-[11px] uppercase">
                ACTIVE FLOW
              </p>
            </div>
          </div>
          
          {/* Pathway Map */}
          <div className="flex flex-col gap-[8px] items-start w-full">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-[rgba(30,41,59,0.38)] border border-[#232b3a] border-solid rounded-[8px] flex items-center justify-between px-[12px] py-[8px] w-full transition-colors hover:border-[#4ecdc4]"
              >
                <div className="flex gap-[12px] items-center">
                  <p className="font-spaceGrotesk font-bold text-[#4ecdc4] text-[12px]">
                    {step.number}
                  </p>
                  <p className="font-spaceGrotesk font-bold text-white text-[14px]">
                    {step.title}
                  </p>
                </div>
                <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[12px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';

const points = [
  {
    title: 'No hidden grading',
    description: <>No ambiguous score determines deployment. Each component is explicitly passed or <br className="hidden xl:block" /> blocked by policy.</>
  },
  {
    title: 'Clear ownership',
    description: <>Assign specific translation and compliance ownership directly to validated SAML <br className="hidden xl:block" /> corporate roles.</>
  },
  {
    title: 'Deterministic readiness',
    description: <>Check audio quality profiles, terminology whitelists, and translation fallback paths <br className="hidden xl:block" /> before stream initialization.</>
  }
];

const formData = [
  { label: 'NEED CONTEXT', value: 'Global Corporate Townhall Q1' },
  { label: 'SOURCE READINESS', value: 'Audio Track Stereo 48kHz, validated clear' },
  { label: 'TARGET MODALITY', value: 'Synchronized Captions + French, Japanese Subtitles' },
  { label: 'ALLOCATED METHOD & OWNER', value: 'Human Editor Pool [A-Group]' },
  { label: 'BLOCKING ITEMS', value: '0 Blocks detected' },
];

export default function ReadinessSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#e2e8f0] border-solid flex flex-col gap-[56px] items-start bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/readiness-bg.png" 
          alt="Readiness Section Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      <div className="relative z-10 flex flex-col gap-[12px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#0a0d13] text-[38px] leading-[61px] tracking-[-0.38px]">
          Language Readiness Review
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[29px]">
          Verify source, capability, and ownership before activation — without a hidden readiness score.
        </p>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-[48px] items-center w-full">
        {/* Left Side: Content & Points */}
        <div className="flex flex-col gap-[24px] items-start w-full lg:flex-1">
          <p className="font-spaceGrotesk font-medium text-[#4f5e74] text-[18px] leading-[normal]">
            Before live signals propagate to public CDN nodes, ZoikoStream <br className="hidden xl:block" /> runs an explicit verification sequence mapping actual <br className="hidden xl:block" /> organizational assets.
          </p>
          
          <div className="flex flex-col gap-[16px] w-full">
            {points.map((point, index) => (
              <div key={index} className="flex gap-[12px] items-start w-full group">
                <div className="w-[8px] h-[8px] shrink-0 bg-[#4a8cfb] rounded-full mt-[7px] transition-transform group-hover:scale-125 shadow-[0_0_8px_rgba(74,140,251,0.4)]" />
                <div className="flex flex-col gap-[4px] items-start w-full">
                  <h3 className="font-spaceGrotesk font-bold text-[#0a0d13] text-[15px] leading-tight">
                    {point.title}
                  </h3>
                  <p className="font-spaceGrotesk font-normal text-[#707a8c] text-[13px] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Mockup Form */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid rounded-[16px] flex flex-col overflow-hidden w-full lg:w-[600px] shrink-0 shadow-xl shadow-blue-900/5">
          <div className="bg-[#0a0f1a] flex items-center justify-between px-[20px] py-[12px] w-full">
            <p className="font-spaceGrotesk font-bold text-[#34d4ca] text-[13px]">
              ZOIKOMED CONSOLE — LANGUAGE READINESS
            </p>
            <div className="bg-[rgba(0,212,170,0.13)] px-[8px] py-[2px] rounded-[4px] flex items-center justify-center">
              <p className="font-spaceGrotesk font-bold text-[#00d4aa] text-[10px]">
                COMPLIANT
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-[16px] p-[24px] w-full">
            {formData.map((item, index) => (
              <div key={index} className="flex flex-col gap-[6px] w-full">
                <label className="font-spaceGrotesk font-bold text-[#707a8c] text-[12px]">
                  {item.label}
                </label>
                <div className="bg-white border border-[#e2e8f0] border-solid p-[12px] rounded-[6px] w-full transition-colors hover:border-[#4a8cfb]">
                  <p className="font-spaceGrotesk font-normal text-[#0a0d13] text-[13px]">
                    {item.value}
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

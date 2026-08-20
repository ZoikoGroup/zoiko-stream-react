import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const cards = [
  {
    title: 'Broad Language Support',
    description: 'Native phoneme recognition models optimized for over 72 global dialect variants.'
  },
  {
    title: 'Explicit Quality Review',
    description: 'No default pass. Human operators can modify accuracy thresholds dynamically before publication.'
  },
  {
    title: 'Zero-Trace Privacy',
    description: 'Audience choice metadata isolated under strict SOC 2 compliance frameworks.'
  }
];

export default function EnterpriseSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start bg-[#0a0f1a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/enterprise-bg.png" 
          alt="Enterprise Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.4)]" />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full">
        <h2 className="font-spaceGrotesk font-bold text-[#eef1f6] text-[38px] leading-[61px] tracking-[-0.38px]">
          Enterprise evaluation
        </h2>
      </div>

      <div className="relative z-10 flex flex-col xl:flex-row gap-[48px] items-center w-full">
        {/* Left Side: Cards */}
        <div className="flex flex-col gap-[16px] items-start w-full xl:flex-1">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#141b2d] border border-[#232b3a] border-solid rounded-[12px] flex flex-col gap-[8px] items-start p-[20px] w-full transition-colors hover:border-[#34d4ca] group"
            >
              <h3 className="font-spaceGrotesk font-bold text-[#eef1f6] text-[15px] leading-tight">
                {card.title}
              </h3>
              <p className="font-spaceGrotesk font-normal text-[#707a8c] text-[13px] leading-[20px] w-full">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side: Form CTA */}
        <div className="bg-[#10151e]/80 backdrop-blur-[8px] border border-[#232b3a] border-solid rounded-[16px] flex flex-col gap-[20px] items-start p-[32px] w-full lg:w-[540px] shrink-0 shadow-2xl">
          <p className="font-spaceGrotesk font-bold text-[#eef1f6] text-[18px]">
            Request evaluation scope
          </p>
          
          <div className="flex flex-col gap-[12px] items-start w-full">
            {/* Field: Work Email */}
            <div className="flex flex-col gap-[6px] items-start w-full">
              <p className="font-spaceGrotesk font-bold text-[#707a8c] text-[12px] uppercase">
                WORK EMAIL
              </p>
              <div className="bg-[#141b2d] border border-[#232b3a] border-solid rounded-[6px] flex items-center p-[12px] w-full">
                <p className="font-spaceGrotesk font-normal text-[#707a8c] text-[13px]">
                  name@organization.com
                </p>
              </div>
            </div>

            {/* Field: Organization */}
            <div className="flex flex-col gap-[6px] items-start w-full">
              <p className="font-spaceGrotesk font-bold text-[#707a8c] text-[12px] uppercase">
                ORGANIZATION
              </p>
              <div className="bg-[#141b2d] border border-[#232b3a] border-solid rounded-[6px] flex items-center p-[12px] w-full">
                <p className="font-spaceGrotesk font-normal text-[#707a8c] text-[13px]">
                  Enterprise Corp
                </p>
              </div>
            </div>

            {/* Field: Modality Select */}
            <div className="flex flex-col gap-[6px] items-start w-full mt-[4px]">
              <p className="font-spaceGrotesk font-bold text-[#707a8c] text-[12px] uppercase">
                TARGET MODALITY
              </p>
              <div className="flex flex-col gap-[8px] items-start w-full max-w-[444px]">
                <div className="flex gap-[4px] items-center">
                  <p className="font-spaceGrotesk font-bold text-[#d9dee5] text-[16px] leading-[24px]">
                    Select Modality Option
                  </p>
                  <span className="font-sans font-semibold text-[#ef4444] text-[14px]">
                    *
                  </span>
                </div>
                <button className="bg-white border border-[#e5e7eb] border-solid rounded-[6px] flex items-center justify-between px-[16px] py-[12px] w-full hover:border-[#4a8cfb] transition-colors group">
                  <span className="font-sans font-normal text-[#6b7280] text-[15px]">
                    Captions + Subtitle translation
                  </span>
                  <ChevronDown className="w-[16px] h-[16px] text-[#6b7280] group-hover:text-[#4a8cfb] transition-colors" />
                </button>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] rounded-[8px] w-full px-[24px] py-[14px] flex items-center justify-center hover:opacity-90 transition-opacity mt-[4px]">
            <span className="font-spaceGrotesk font-bold text-[#0a0f1a] text-[14px]">
              Talk to an expert
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

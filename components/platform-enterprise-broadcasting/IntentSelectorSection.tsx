import React from 'react';
import Image from 'next/image';
import { Target } from 'lucide-react';

const intents = [
  {
    title: 'Recurring internal communications',
    desc: 'Town halls, all-hands, and corporate update models.'
  },
  {
    title: 'External stakeholder broadcasts',
    desc: 'Earnings calls, public keynotes, and announcements.'
  },
  {
    title: 'Executive leadership communications',
    desc: 'Board alignments, key messages, and press briefings.'
  },
  {
    title: 'Training and program delivery',
    desc: 'Durable workshops, compliance streams, and scale education.'
  },
  {
    title: 'Multiple teams or locations',
    desc: 'Multi-jurisdictional stream handoffs and localized paths.'
  },
  {
    title: 'Uncertain fit - help me decide',
    desc: 'Let our platform architects map your governance workflow.'
  }
];

export default function IntentSelectorSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[96px] flex flex-col gap-[40px] items-start bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/intent-bg.png" 
          alt="Intent Selector Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[12px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[44px] leading-[56px] tracking-[-0.4px]">
          What does your organization need?
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[16px] leading-[26px]">
          Select your broadcasting intent to see the most relevant governance model, readiness requirements, and operational pathways.
        </p>
      </div>

      {/* Intent Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
        {intents.map((intent, index) => (
          <div 
            key={index} 
            className="bg-white border-[1.5px] border-[#e2e8f0] border-solid rounded-[16px] shadow-[0px_14px_14px_rgba(15,27,45,0.06),0px_2px_3px_rgba(15,27,45,0.04)] flex flex-col gap-[16px] items-start p-[24px] w-full transition-transform hover:-translate-y-1 cursor-pointer hover:border-[#4ecdc4]"
          >
            <div className="bg-[rgba(78,205,196,0.08)] rounded-[10px] w-[40px] h-[40px] flex items-center justify-center shrink-0">
              <Target className="w-[18px] h-[18px] text-[#4ecdc4]" />
            </div>
            <div className="flex flex-col gap-[6px] items-start w-full">
              <h3 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[18px] leading-[28px]">
                {intent.title}
              </h3>
              <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[14px] leading-[22px]">
                {intent.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Named ownership',
    desc: 'Explicit coordinators assigned to caption workflows.'
  },
  {
    title: 'Scoped coverage',
    desc: 'Define languages, subtitle target depth up front.'
  },
  {
    title: 'Caption/language state',
    desc: 'Real-time state models track WebVTT ingestion.'
  },
  {
    title: 'Alternative access routes',
    desc: 'SLA fallback pipelines for unexpected drops.'
  },
  {
    title: 'Player controls (WCAG 2.2 AA)',
    desc: 'Compliant media players with scalable typography.'
  },
  {
    title: 'Fallback and escalation',
    desc: 'Automated alert triggers if secondary language drops.'
  }
];

export default function AccessibilityLanguagesSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] border-y border-[#232b3a] border-solid flex flex-col gap-[56px] items-start bg-[#0a0f1a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/accessibility-bg.png" 
          alt="Accessibility Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.7)]" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[12px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-white text-[38px] leading-[61px] tracking-[-0.38px]">
          Accessibility is readiness, not decoration
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[18px] leading-[29px] w-full">
          Captions, languages, and alternative access are owned responsibilities with scope, review, fallback, and evidence.
        </p>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-[rgba(16,21,30,0.8)] backdrop-blur-sm border-[1.5px] border-[#232b3a] border-solid rounded-[12px] flex flex-col gap-[16px] items-start p-[24px] w-full transition-colors hover:border-[#4ecdc4]"
          >
            <div className="bg-[rgba(59,130,246,0.08)] rounded-full w-[36px] h-[36px] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-[18px] h-[18px] text-[#4ecdc4]" />
            </div>
            
            <div className="flex flex-col gap-[4px] items-start w-full">
              <h3 className="font-spaceGrotesk font-bold text-white text-[16px]">
                {feature.title}
              </h3>
              <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px]">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

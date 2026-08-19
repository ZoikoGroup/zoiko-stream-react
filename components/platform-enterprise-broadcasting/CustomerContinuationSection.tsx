import React from 'react';
import Image from 'next/image';
import { LogIn, BookOpen, Activity, HelpCircle, Compass } from 'lucide-react';

const continuationItems = [
  {
    icon: LogIn,
    title: 'Sign in',
    desc: 'Corporate credentials entry point.'
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    desc: 'Full developer & operations guides.'
  },
  {
    icon: Activity,
    title: 'System Status',
    desc: 'Unbiased real-time platform metrics.'
  },
  {
    icon: HelpCircle,
    title: 'Support',
    desc: 'Direct engineering contact routes.'
  },
  {
    icon: Compass,
    title: 'Specialist Routes',
    desc: 'Reach custom configuration desks.'
  }
];

export default function CustomerContinuationSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] flex flex-col gap-[56px] items-start bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/observation-bg.png" 
          alt="Continuation Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[16px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[38px] leading-[61px] tracking-[-0.38px]">
          Continue your operation without interruption
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[29px] w-full">
          Sign in, access documentation, check system status, reach support, or explore specialist capabilities directly.
        </p>
      </div>

      {/* Continuation Row */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-[16px] items-stretch w-full">
        {continuationItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              className="bg-[#f8fafc] border-[1.5px] border-[#e2e8f0] border-solid rounded-[12px] p-[20px] flex-1 flex flex-col gap-[12px] items-start transition-shadow hover:shadow-lg cursor-pointer group"
            >
              <div className="bg-[rgba(78,205,196,0.08)] rounded-[8px] w-[36px] h-[36px] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[rgba(78,205,196,0.15)]">
                <Icon className="w-[16px] h-[16px] text-[#0f1b2d]" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-[2px] items-start w-full">
                <h3 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[15px]">
                  {item.title}
                </h3>
                <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[12px] leading-[16px] w-full">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

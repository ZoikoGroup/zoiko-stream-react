import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const steps = [
  { number: '01', title: 'Define' },
  { number: '02', title: 'Qualify' },
  { number: '03', title: 'Prepare' },
  { number: '04', title: 'Review' },
  { number: '05', title: 'Authorize' },
  { number: '06', title: 'Activate' },
  { number: '07', title: 'Observe' },
  { number: '08', title: 'Decide' },
  { number: '09', title: 'Conclude' },
  { number: '10', title: 'Preserve' }
];

export default function OperatingModelSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] border-y border-[#232b3a] border-solid flex flex-col gap-[56px] items-start bg-[#0a0f1a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/operating-model-bg.png" 
          alt="Operating Model Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.57)]" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[12px] items-start w-full">
        <h2 className="font-spaceGrotesk font-bold text-white text-[38px] leading-[61px] tracking-[-0.38px]">
          A repeatable governance framework for every broadcast
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#c1c9da] text-[18px] leading-[29px] w-full">
          Distinguish broadcast programs from individual instances. Governance travels with the program while each instance c<br className="hidden md:block" />arries its own readiness.
        </p>
      </div>

      {/* Horizontal Flow */}
      <div className="relative z-10 flex flex-wrap gap-y-[16px] gap-x-[4px] items-center justify-start w-full">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="bg-[#141b2d] border border-[#232b3a] border-solid rounded-[8px] p-[12px] w-[102px] shrink-0 flex flex-col gap-[6px] items-start transition-colors hover:border-[#4ecdc4]">
              <p className="font-spaceGrotesk font-bold text-[#4ecdc4] text-[10px]">
                {step.number}
              </p>
              <p className="font-spaceGrotesk font-bold text-white text-[10px] w-full truncate">
                {step.title}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="w-[10px] h-[10px] flex items-center justify-center shrink-0 opacity-50">
                <ChevronRight className="w-[10px] h-[10px] text-white shrink-0" strokeWidth={3} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

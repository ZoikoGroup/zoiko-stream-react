import React from 'react';
import Image from 'next/image';

const steps = [
  { step: '01', title: 'Define Need', description: 'Identify target language contexts' },
  { step: '02', title: 'Qualify', description: 'Check capabilities & licensing' },
  { step: '03', title: 'Prepare Source', description: 'Validate input audio profile' },
  { step: '04', title: 'Authorize', description: 'SAML tenant permission gate' },
  { step: '05', title: 'Produce', description: 'Live ingestion & processing' },
  { step: '06', title: 'Observe', description: 'Live telemetry monitoring' },
  { step: '07', title: 'Review', description: 'Human operator correction review' },
  { step: '08', title: 'Approve', description: 'Sign cryptographically and publish' },
  { step: '09', title: 'Correct', description: 'Modify errors post-live' },
  { step: '10', title: 'Preserve', description: 'Lifecycle archiving or purge' },
];

export default function LifecycleSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-[#0a0f1a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/lifecycle-bg.png" 
          alt="Lifecycle workflow background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.66)]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#eef1f6] text-[38px] leading-[61px] tracking-[-0.38px]">
          How the workflow fits the media lifecycle
        </h2>
      </div>

      {/* Flex layout for steps to match exact 226px width */}
      <div className="relative z-10 flex flex-wrap gap-[8px] items-start w-full content-start">
        {steps.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#141b2d] border border-[#232b3a] border-solid rounded-[8px] flex flex-col gap-[8px] items-start p-[16px] w-full md:w-[226px] shrink-0 transition-colors hover:border-[#34d4ca] group"
          >
            <span className="font-spaceGrotesk font-bold text-[#34d4ca] text-[11px] leading-none transition-transform group-hover:scale-110 group-hover:origin-left">
              {item.step}
            </span>
            <h3 className="font-spaceGrotesk font-bold text-[#eef1f6] text-[14px] leading-none mt-1">
              {item.title}
            </h3>
            <p className="font-spaceGrotesk font-normal text-[#707a8c] text-[12px] leading-[16px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

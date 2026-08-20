import React from 'react';
import Image from 'next/image';

export default function FinalCtaSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] pt-[120px] pb-[100px] border-b border-[#232b3a] border-solid flex flex-col items-center justify-center bg-[#0a0f1a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/final-cta-bg.png" 
          alt="Final CTA Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.63)]" />
      </div>

      <div className="relative z-10 flex flex-col gap-[24px] items-center w-full max-w-[800px]">
        <h2 className="font-spaceGrotesk font-bold text-[#eef1f6] text-[36px] leading-[48px] tracking-[-0.8px] text-center w-full">
          Ready to explore governed language <br className="hidden md:block" /> pathways?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-[16px] items-center justify-center mt-[4px]">
          <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] rounded-[8px] px-[28px] py-[14px] hover:opacity-90 transition-opacity">
            <span className="font-spaceGrotesk font-bold text-[#0a0f1a] text-[15px]">
              Talk to an expert
            </span>
          </button>
          
          <button className="bg-transparent border border-solid border-[#aab3c4] rounded-[8px] px-[28px] py-[14px] hover:bg-[#aab3c4]/10 transition-colors">
            <span className="font-spaceGrotesk font-medium text-[#eef1f6] text-[15px]">
              Plan a live event
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

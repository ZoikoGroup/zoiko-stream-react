import React from 'react';
import Image from 'next/image';

export default function CtaBandSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] flex flex-col gap-[56px] items-center text-center bg-[#0a0f1a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/cta-band-bg.png" 
          alt="CTA Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.36)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-[16px] items-center w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-white text-[32px] leading-normal">
          Ready to explore enterprise broadcasting?
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#ecf4ff] text-[18px] leading-normal">
          Start a qualified conversation about your organization&apos;s broadcasting requirements, governance needs, and operational accountability.
        </p>
      </div>

      {/* Action Button */}
      <div className="relative z-10 flex flex-col items-center">
        <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] rounded-[10px] px-[28px] py-[14px] font-spaceGrotesk font-bold text-[#0a0f1a] text-[15px] transition-transform hover:scale-105 active:scale-95 shadow-lg">
          Talk to an expert
        </button>
      </div>
    </section>
  );
}

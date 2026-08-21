import React from 'react';

export default function CtaSection() {
  return (
    <section className="relative w-full py-[80px] md:py-[120px] px-6 md:px-[112px] bg-[#0a0d13] overflow-hidden border-t border-b border-[#232b3a] flex flex-col items-center">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/faqs-and-support/cta-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,19,0.55)]" />
      </div>

      <div className="relative z-10 w-full max-w-[800px] mx-auto flex flex-col gap-[30px] md:gap-[40px] items-center text-center">
        
        {/* Header Content */}
        <div className="flex flex-col gap-[16px] items-center w-full">
          <h2 className="font-space-grotesk font-bold text-[#eef1f6] text-3xl md:text-[44px] leading-tight md:leading-[56px]">
            Build better, safer, more controlled live events.
          </h2>
          <p className="font-space-grotesk font-normal text-[#aab3c4] text-[16px] md:text-[18px] leading-[28.8px] w-full">
            Start with a production-aware event brief. Scope, compliance policies, and technical staffing are confirmed during planning - not assumed.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-[16px] items-center justify-center">
          <a href="/plan-a-live-event" className="flex items-center justify-center px-[26px] py-[14px] bg-gradient-to-r from-[#34d4ca] to-[#4a8cfb] rounded-[10px] shadow-[0px_4px_8px_rgba(51,217,199,0.2)] hover:opacity-90 transition-opacity w-full sm:w-auto">
            <span className="font-space-grotesk font-bold text-[#04141a] text-[15px] whitespace-nowrap">
              Start your event brief
            </span>
          </a>
          
          <a href="/talk-to-an-expert" className="flex items-center justify-center px-[28px] py-[14px] border border-[#aab3c4] bg-transparent rounded-[10px] hover:bg-white/5 transition-colors w-full sm:w-auto">
            <span className="font-space-grotesk font-medium text-[#eef1f6] text-[15px] whitespace-nowrap">
              Talk to an event expert
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}

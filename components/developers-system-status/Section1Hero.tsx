import React from 'react';

export default function Section1Hero() {
  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col items-start justify-center px-4 md:px-[112px] py-24 md:py-[200px] relative w-full min-h-[918px] bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-system-status/sec1-bg.png" />
        <div className="absolute bg-[rgba(10,13,20,0.8)] inset-0" />
      </div>
      <div className="flex flex-col gap-[32px] items-start justify-between relative z-10 w-full max-w-[1440px] mx-auto text-center md:text-left h-full">
        <div className="border border-[#34d4ca] border-solid flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0 mx-auto md:mx-0">
          <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
            SYSTEM STATUS
          </p>
        </div>
        <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[60px] relative w-full text-[40px] md:text-[52px] text-white tracking-[-1.5px] max-w-[800px] mx-auto md:mx-0">
          Live platform health.
        </h1>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#aab3c4] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
          Real-time infrastructure telemetry, globally distributed network states, and service metrics across the entire ZoikoStream platform. Managed deterministically around your streaming outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-[16px] items-center justify-center md:justify-start relative w-full sm:w-auto mt-4 mx-auto md:mx-0">
          <a href="#active-incidents" className="bg-gradient-to-b flex from-[#34d4ca] to-[#4a8cfb] items-center justify-center px-[28px] py-[14px] relative rounded-[8px] transition-transform duration-200 hover:scale-[1.02] w-full sm:w-auto">
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#0a0f1a] text-[15px] whitespace-nowrap">
              View active incidents
            </span>
          </a>
          <a href="#subscriptions" className="border-[#aab3c4] border-[1.5px] border-solid flex items-center justify-center px-[28px] py-[14px] relative rounded-[8px] transition-colors hover:bg-white/10 w-full sm:w-auto">
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-white text-[15px] whitespace-nowrap">
              Subscribe to updates
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

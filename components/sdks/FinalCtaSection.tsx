import React from 'react';

export default function FinalCtaSection() {
  return (
    <section className="relative w-full flex flex-col gap-6 items-center overflow-hidden px-6 py-12 md:p-[48px]">

      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/sdks/final-cta-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.63)]" />
      </div>

      <p className="relative z-10 font-bold text-[#eef1f6] text-2xl md:text-[32px] whitespace-nowrap">
        Ready to build?
      </p>
      <p className="relative z-10 text-[#aab3c4] text-base text-center max-w-[600px]">
        Access our developers repository to fetch templates, read guides, or talk to L1 infrastructure engineers today.
      </p>

      <div className="relative z-10 flex flex-wrap gap-4 items-center justify-center">
        <a
          href="/start-building"
          className="flex items-center justify-center px-[26px] py-3.5 rounded-[10px] hover:brightness-110 transition-[filter]"
          style={{ background: 'linear-gradient(180deg, #34d4ca 0%, #4a8cfb 100%)' }}
        >
          <span className="font-bold text-[#04141a] text-[15px] whitespace-nowrap">
            Start building
          </span>
        </a>
        <a
          href="/talk-to-an-expert"
          className="flex items-center justify-center px-7 py-3.5 rounded-[10px] border border-[#aab3c4] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
        >
          <span className="font-medium text-[#eef1f6] text-[15px] whitespace-nowrap">
            Talk to an expert
          </span>
        </a>
      </div>

    </section>
  );
}

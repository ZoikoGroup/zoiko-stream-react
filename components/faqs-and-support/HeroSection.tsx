import React from 'react';


export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-start gap-10 px-6 pt-[100px] md:pt-[150px] pb-[100px] md:px-28 w-full min-h-[724px]">
      {/* Background Image & Overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/faqs-and-support/hero-bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,13,19,0.51)] via-[rgba(10,13,19,0.56)] via-70% to-[rgba(10,13,19,0.57)]" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-start gap-6 w-full max-w-[800px] z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 px-3 py-1.5 border border-[#00d4aa] rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00d4aa]" />
          <p className="font-space-grotesk font-bold text-[#00d4aa] text-[11px] uppercase tracking-[1.13px]">
            RESILIENCE & HELP
          </p>
        </div>

        {/* Heading */}
        <h1 className="font-space-grotesk font-bold text-[#eef1f6] text-4xl md:text-[60px] leading-tight md:leading-[74.16px] tracking-[-0.72px]">
          Answers before you book.
        </h1>

        {/* Subtitle */}
        <p className="font-space-grotesk font-normal text-[#aab3c4] text-base md:text-[18px] leading-relaxed md:leading-[28.8px] max-w-[700px]">
          Find concrete platform guidelines, compliance limits, pricing models, and event delivery standards without scheduling a sales call.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-3 w-full max-w-[648px] p-3 bg-[#10151e] border border-[#232b3a] rounded-xl mt-4">
        <div className="flex-1 flex items-center h-12 pl-4 w-full">
          <input
            type="text"
            placeholder="What are you looking for? (e.g., SAML integration, capture redundancy)"
            className="w-full bg-transparent border-none outline-none font-space-grotesk font-normal text-[#707a8c] text-[16px] placeholder:text-[#707a8c]"
          />
        </div>
        <button className="flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-[#33d9c7] to-[#4c86ff] rounded-[10px] shadow-[0px_4px_8px_rgba(51,217,199,0.2)] hover:opacity-90 transition-opacity w-full md:w-auto">
          <span className="font-space-grotesk font-bold text-[#04141a] text-[14px] whitespace-nowrap">
            Find an answer
          </span>
        </button>
      </div>

      {/* Trust Badges */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 w-full mt-4">
        <div className="flex items-center gap-2 px-3 py-2 bg-[#10151e] border border-[#232b3a] rounded-lg">
          <img src="/images/faqs-and-support/languages.svg" alt="Languages" className="w-4 h-4" />
          <span className="font-space-grotesk font-bold text-[#eef1f6] text-[13px]">
            40+ Languages
          </span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-[#10151e] border border-[#232b3a] rounded-lg">
          <img src="/images/faqs-and-support/zap.svg" alt="Latency" className="w-4 h-4" />
          <span className="font-space-grotesk font-bold text-[#eef1f6] text-[13px]">
            Sub-2s Latency
          </span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-[#10151e] border border-[#232b3a] rounded-lg">
          <img src="/images/faqs-and-support/shield-check.svg" alt="WCAG 2.2 AA" className="w-4 h-4" />
          <span className="font-space-grotesk font-bold text-[#eef1f6] text-[13px]">
            WCAG 2.2 AA
          </span>
        </div>
      </div>
    </section>
  );
}

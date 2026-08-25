import Image from 'next/image';

export default function CtaBannerSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 pb-10 pt-24 md:px-12 xl:px-[112px] xl:pb-[40px] xl:pt-[140px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/developers-overview/cta-banner/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.79)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-center gap-[32px]">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-[24px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.5px] text-white md:text-[44px] md:leading-[56px]">
            Start Your Developer Journey Today
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Documentation and operational evidence are always available. No sales form required to begin.
          </p>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-[16px]">
          <button
            type="button"
            className="flex items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
          >
            Start Building
          </button>
          <button
            type="button"
            className="flex items-center justify-center whitespace-nowrap rounded-[8px] border-[1.5px] border-solid border-white px-[28px] py-[14px] text-[15px] font-bold text-white transition-colors hover:bg-white/10"
          >
            Read Documentation
          </button>
        </div>
      </div>
    </section>
  );
}

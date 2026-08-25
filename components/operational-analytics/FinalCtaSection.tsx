import Image from 'next/image';

export default function FinalCtaSection() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay + gradient scrim */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/operational-analytics/final-cta/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.23)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,13,20,0.8)] to-[rgba(10,13,20,0.95)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[40px] xl:flex-row xl:items-center xl:justify-between">
        <div className="flex w-full flex-col items-start gap-[16px] xl:w-[560px]">
          <h2 className="text-[32px] font-bold leading-[1.1] text-white md:text-[44px]">
            Ready to find your starting path?
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[1.5] text-[#d1d5db]">
            Experience sub-second latency with verifiable telemetry outcomes today.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-[16px] sm:flex-row sm:items-center xl:w-auto">
          <button
            type="button"
            className="flex items-center justify-center whitespace-nowrap rounded-[10px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[16px] text-[16px] font-bold text-[#0a0d14] drop-shadow-[0px_10px_12px_rgba(0,0,0,0.4)] transition-opacity hover:opacity-90"
          >
            Explore analytics
          </button>
          <button
            type="button"
            className="flex items-center justify-center whitespace-nowrap rounded-[10px] border-2 border-solid border-[#aab3c4] bg-[#0a0d14] px-[28px] py-[16px] text-[16px] font-bold text-white drop-shadow-[0px_10px_12px_rgba(0,0,0,0.4)] transition-colors hover:bg-[#162235]"
          >
            Talk to expert
          </button>
        </div>
      </div>
    </section>
  );
}

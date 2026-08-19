import Image from 'next/image';
import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="bg-[#0a0f1a] flex flex-col gap-8 xl:gap-[56px] items-center justify-center px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/final-cta-bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute bg-[rgba(10,15,26,0.45)] inset-0" />
      </div>

      {/* Section Header */}
      <div className="flex flex-col gap-3 xl:gap-[12px] items-center relative shrink-0 text-center w-full xl:w-[833px] z-10">
        <h2 className="font-spaceGrotesk font-bold leading-[1.3] xl:leading-[60.8px] relative shrink-0 text-[28px] xl:text-[37.9px] text-white tracking-[-0.38px] w-full">
          Ready to understand media performance with governed analytics?
        </h2>
        <p className="font-spaceGrotesk font-normal leading-relaxed xl:leading-[28.8px] relative shrink-0 text-[#aab3c4] text-base xl:text-[18px] w-full">
          Start with a question. See the evidence. Make a reviewable decision.
        </p>
      </div>

      {/* CTA Group */}
      <div className="flex flex-wrap gap-4 xl:gap-[16px] items-center justify-center relative shrink-0 z-10">
        <Link
          href="/talk-to-an-expert"
          className="bg-gradient-to-b flex from-[#34d4ca] items-center justify-center px-[28px] py-[14px] relative rounded-[10px] shrink-0 to-[#4a8cfb] hover:opacity-90 transition-opacity"
        >
          <span className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#0a0f1a] text-[15px] whitespace-nowrap">
            Talk to an expert
          </span>
        </Link>
        <Link
          href="/start-building"
          className="border border-[#aab3c4] border-solid flex items-center justify-center px-[24px] py-[14px] relative rounded-[10px] shrink-0 hover:bg-white/5 transition-colors"
        >
          <span className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap">
            Start building
          </span>
        </Link>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function ConversionBandSection() {
  return (
    <section className="bg-white border-[#e2e8f0] border-b border-solid flex flex-col gap-6 xl:gap-[32px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/conversion-band-bg.png"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="flex flex-col gap-6 xl:gap-[32px] items-start max-w-[1216px] mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-3 xl:gap-[12px] items-start relative shrink-0 w-full">
          <h2 className="font-spaceGrotesk font-bold leading-[1.3] xl:leading-[60.8px] relative shrink-0 text-[28px] xl:text-[37.9px] text-[#0a0d13] tracking-[-0.38px] w-full">
            Turn media signals into reviewable understanding
          </h2>
          <p className="font-spaceGrotesk font-normal leading-relaxed xl:leading-[28.8px] relative shrink-0 text-[#4f5e74] text-base xl:text-[18px] w-full">
            Use approved analytics to understand performance in context, inspect definitions and quality, and continue to the right implementation or expert path.
          </p>
        </div>

        {/* CTA Group */}
        <div className="flex flex-wrap gap-4 xl:gap-[16px] items-center relative shrink-0">
          <Link
            href="/talk-to-an-expert"
            className="bg-gradient-to-b flex from-[#34d4ca] items-center justify-center px-[28px] py-[14px] relative rounded-[10px] shrink-0 to-[#4a8cfb] hover:opacity-90 transition-opacity"
          >
            <span className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#0a0f1a] text-[15px] whitespace-nowrap">
              Talk to an expert
            </span>
          </Link>
          <Link
            href="/resources/documentation"
            className="border border-[#aab3c4] border-solid flex items-center justify-center px-[24px] py-[14px] relative rounded-[10px] shrink-0 hover:bg-[#aab3c4]/10 transition-colors"
          >
            <span className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#232b3a] text-[15px] whitespace-nowrap">
              Explore analytics documentation
            </span>
          </Link>
        </div>

        <p className="font-spaceGrotesk font-normal leading-[normal] relative shrink-0 text-[#707a8c] text-[13px] whitespace-nowrap">
          Definitions, quality, permissions and evidence stay attached to the result.
        </p>

        <p className="font-spaceGrotesk font-normal leading-[normal] relative shrink-0 text-[#4f5e74] text-[13px] whitespace-nowrap">
          Already using ZoikoStream?{' '}
          <a
            href="https://zoikostream-git-454227754507.europe-west1.run.app"
            className="text-[#34d4ca] underline decoration-solid hover:opacity-80"
          >
            Sign in
          </a>{' '}
          ·{' '}
          <a href="#" className="text-[#34d4ca] underline decoration-solid hover:opacity-80">
            System status
          </a>{' '}
          ·{' '}
          <a href="#" className="text-[#34d4ca] underline decoration-solid hover:opacity-80">
            Support
          </a>
        </p>
      </div>
    </section>
  );
}

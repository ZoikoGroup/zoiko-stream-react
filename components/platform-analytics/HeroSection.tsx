import Image from 'next/image';
import Link from 'next/link';
import { Activity, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-[#0a0f1a] border-[#1e293b] border-b border-solid px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] xl:h-[740px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/hero-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bg-[rgba(10,15,26,0.6)] inset-0" />
      </div>

      <div className="content-stretch flex flex-col xl:flex-row gap-8 xl:gap-[56px] items-center max-w-[1216px] mx-auto relative z-10 w-full h-full">
      {/* Left Content */}
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-6 xl:gap-[28px] items-start min-w-px relative">
        <div className="border border-[#34d4ca] border-solid content-stretch flex items-start px-[14px] py-[6px] relative rounded-[40px] shrink-0">
          <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[12px] whitespace-nowrap">
            PLATFORM / ANALYTICS
          </p>
        </div>
        <h1 className="font-spaceGrotesk font-bold leading-[1.2] md:leading-[58px] min-w-full relative shrink-0 text-[32px] md:text-[48px] text-white tracking-[-1px]">
          Understand media performance with context, evidence, and control
        </h1>
        <p className="font-spaceGrotesk font-normal leading-relaxed md:leading-[28.8px] min-w-full relative shrink-0 text-[#aab3c4] text-base md:text-[18px]">
          ZoikoStream Analytics is the governed measurement layer connecting media workflows to clear questions with full source visibility.
        </p>
        <div className="content-stretch flex flex-wrap gap-4 items-center relative shrink-0">
          <Link
            href="/talk-to-an-expert"
            className="bg-gradient-to-b content-stretch flex from-[#34d4ca] items-center justify-center px-[28px] py-[14px] relative rounded-[10px] shrink-0 to-[#4a8cfb] hover:opacity-90 transition-opacity"
          >
            <span className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#0a0f1a] text-[15px] whitespace-nowrap">
              Talk to an expert
            </span>
          </Link>
          <Link
            href="/resources/documentation"
            className="border border-[#aab3c4] border-solid content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[10px] shrink-0 hover:bg-white/5 transition-colors"
          >
            <span className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap">
              Explore documentation
            </span>
          </Link>
        </div>
      </div>

      {/* Right Mockup */}
      <div className="bg-[rgba(16,22,38,0.8)] backdrop-blur-[8px] border-[#1e293b] border-[1.5px] border-solid content-stretch flex flex-col gap-[20px] items-start p-6 xl:p-[28px] relative rounded-[16px] shadow-[0px_16px_32px_0px_rgba(0,0,0,0.5)] shrink-0 w-full xl:w-[520px] z-10">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <Activity className="text-[#34d4ca] size-[18px]" />
            <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">
              Active Sessions (VOD)
            </p>
          </div>
          <div className="bg-[#064e3b] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0">
            <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[11px] whitespace-nowrap">
              VERIFIED
            </p>
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
          <p className="font-spaceGrotesk font-bold relative shrink-0 text-[40px] text-white">
            1,429,840
          </p>
          <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#aab3c4] text-[13px]">
            Target: All Registered Enterprise Tenants
          </p>
        </div>

        <div className="bg-[#1e293b] h-px relative shrink-0 w-full" />

        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative text-[13px] w-full">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#707a8c]">
              Data Freshness
            </p>
            <p className="font-spaceGrotesk font-bold relative shrink-0 text-[#34d4ca]">
              Updated 2m ago (Real-time)
            </p>
          </div>
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#707a8c]">
              Completeness
            </p>
            <p className="font-spaceGrotesk font-bold relative shrink-0 text-[#34d4ca]">
              99.98% valid packets
            </p>
          </div>
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#707a8c]">
              Audience Governance
            </p>
            <p className="font-spaceGrotesk font-bold relative shrink-0 text-[#4a8cfb]">
              Tier-1 restricted access
            </p>
          </div>
        </div>

        <div className="bg-[#141f32] content-stretch flex gap-[8px] items-center p-[12px] relative rounded-[8px] shrink-0 w-full">
          <FileText className="text-[#34d4ca] size-[14px] shrink-0" />
          <p className="flex-[1_0_0] font-spaceGrotesk font-normal leading-[normal] min-w-px relative text-[#aab3c4] text-[12px]">
            Evidence: cryptographic consensus achieved across 14 edge CDN nodes.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}

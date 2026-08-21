import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ClosingCtaSection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-20 lg:py-[140px] border-b border-[#232b3a] border-solid flex flex-col gap-[40px] items-center justify-center overflow-hidden bg-[#0a0f1a]">
      <Image
        src="/images/build-video-into-product/cta-band-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute inset-0 bg-[rgba(15,27,45,0.54)] -z-10 pointer-events-none" />

      <div className="relative flex flex-col gap-[16px] items-center text-center w-full max-w-[800px]">
        <h2 className="font-spaceGrotesk font-bold text-white text-[32px] sm:text-[44px] leading-[1.2] sm:leading-[56px] tracking-[-0.5px] w-full">
          Ready to put video inside your product?
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[18px] leading-[28px] w-full">
          Start with the current developer path when your workflow fits the documented self-service model. If your requirements involve complex governance, migration, or commercial review, bring that context to a ZoikoStream expert.
        </p>
      </div>

      <div className="relative flex flex-col sm:flex-row gap-[16px] items-center justify-center w-full">
        <Link
          href="/start-building"
          className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center px-[28px] py-[14px] rounded-[8px] hover:opacity-90 transition-opacity"
        >
          <span className="font-spaceGrotesk font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">
            Start building
          </span>
        </Link>
        <Link
          href="#"
          className="border-[#aab3c4] border-[1.5px] border-solid flex items-center justify-center px-[24px] py-[14px] rounded-[8px] hover:bg-white/5 transition-colors"
        >
          <span className="font-spaceGrotesk font-bold text-white text-[15px] whitespace-nowrap">
            Read the documentation
          </span>
        </Link>
      </div>
    </section>
  );
}

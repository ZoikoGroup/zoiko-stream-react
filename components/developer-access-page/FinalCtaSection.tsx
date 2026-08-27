import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden px-6 py-[80px] md:py-[120px]">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#0a0d14]" />
        <Image
          src="/images/developer-access-page/final-cta/section-bg.png"
          alt=""
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[720px] flex-col items-center gap-[32px] text-center">
        <div className="flex flex-col items-center gap-[16px]">
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-1px] text-white md:text-[44px] md:leading-[52px] md:tracking-[-1.5px]">
            Ready to understand your access?
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[26px] text-[#aab3c4] md:text-[18px] md:leading-[28px]">
            Know your access state, set up your development workspace, and start building secure streaming pipelines today.
          </p>
        </div>

        <div className="flex flex-col items-center gap-[16px] sm:flex-row">
          <Link
            href="#"
            className="flex items-center justify-center rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] text-[15px] font-bold text-[#0a0d14] transition-opacity hover:opacity-90"
          >
            Check access state
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center rounded-[8px] border-[1.5px] border-solid border-[#aab3c4] bg-transparent px-[28px] py-[14px] text-[15px] font-bold text-white transition-colors hover:bg-white/10"
          >
            Open documentation
          </Link>
        </div>
      </div>
    </section>
  );
}

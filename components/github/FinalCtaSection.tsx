import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ExternalIcon, ShieldIcon } from './icons';

const imgBg = "/images/github/final-cta-background.webp";

export default function FinalCtaSection() {
  return (
    <section className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-12 xl:px-[112px] py-16 sm:py-20 lg:py-[84px] relative w-full overflow-hidden" data-name="Final-CTA-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.3]" src={imgBg} />
        <div className="absolute bg-[rgba(3,7,18,0.3)] inset-0" />
      </div>

      <div className="flex flex-col gap-[24px] items-center text-center w-full max-w-[820px] relative z-10">
        <h2 className="[word-break:break-word] font-sans font-bold text-white text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.1] lg:leading-[52px]">
          Ready to make Developers the trusted GitHub destination?
        </h2>
        <p className="font-inter font-normal text-[#cbd5e1] text-[16px] sm:text-[18px] leading-[28px] max-w-[700px]">
          Publish only when ownership, repository state, external handoff, and invalidation behavior are explicit. No
          guessed links. No invented claims.
        </p>

        <div className="flex flex-wrap gap-[16px] items-center justify-center mt-[8px]">
          <Link
            href="/developers"
            className="bg-gradient-to-r from-[#00d4aa] to-[#4c86ff] flex gap-[10px] items-center px-[28px] py-[14px] rounded-[8px] transition-opacity hover:opacity-90"
          >
            <span className="font-sans font-bold text-[#030712] text-[15px]">Start with Developers</span>
            <ArrowRightIcon className="size-[16px] text-[#030712]" />
          </Link>
          <Link
            href="#trust-safety"
            className="border-[1.5px] border-white border-solid flex gap-[10px] items-center px-[28px] py-[14px] rounded-[8px] transition-colors hover:bg-white/10"
          >
            <span className="font-sans font-bold text-white text-[15px]">Review governance</span>
            <ExternalIcon className="size-[16px] text-white" />
          </Link>
        </div>

        <div className="bg-[rgba(17,24,39,0.85)] border border-[#1f2937] border-solid flex flex-col sm:flex-row gap-4 items-start sm:items-center p-[20px] sm:p-[24px] rounded-[12px] text-left w-full mt-[16px]">
          <span className="bg-[rgba(45,212,191,0.12)] flex items-center justify-center rounded-full size-[40px] shrink-0">
            <ShieldIcon className="size-[18px] text-[#2dd4bf]" />
          </span>
          <div className="flex flex-col gap-[4px] flex-1">
            <span className="font-sans font-bold text-white text-[16px]">Final approval gate</span>
            <span className="font-inter font-normal text-[#94a3b8] text-[14px] leading-[22px]">
              Release requires accountable owner sign-off and all 60 release-blocking checks to pass; this page does not
              claim approval.
            </span>
          </div>
          <span className="border border-[#fbbf24] border-solid font-sans font-bold text-[#fbbf24] text-[13px] px-[12px] py-[6px] rounded-[999px] shrink-0">
            Approval required
          </span>
        </div>
      </div>
    </section>
  );
}

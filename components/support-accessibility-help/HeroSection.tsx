"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="border-b border-[#232b3a] flex flex-col items-start justify-center overflow-hidden px-6 lg:px-[112px] py-[80px] lg:py-[120px] relative w-full min-h-[600px] lg:h-[822px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/support-accessibility-help/hero-bg.png"
          alt=""
          className="absolute max-w-none object-cover size-full"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/85" />
      </div>

      <div className="flex flex-col gap-[32px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <div className="border border-[#34d4ca] flex items-center px-[12px] py-[6px] rounded-[100px]">
          <p className="font-['IBM_Plex_Mono',monospace] font-bold text-[#34d4ca] text-[11px] tracking-[1px] uppercase">
            ACCESSIBILITY HELP
          </p>
        </div>

        <div className="flex flex-col gap-[24px] items-start w-full">
          <h1 className="font-['Space_Grotesk',sans-serif] font-bold leading-[1.1] lg:leading-[66px] text-[#eef1f6] text-[40px] lg:text-[56px] tracking-[-1.5px] max-w-[1000px]">
            Get help with an accessibility barrier in ZoikoStream.
          </h1>
          <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] text-[#aab3c4] text-[16px] lg:text-[18px] max-w-[880px]">
            Tell us what is blocking you, find an accessible alternative where one is approved, or report a barrier without needing to disclose a disability or diagnosis.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-[16px] items-start sm:items-center w-full sm:w-auto">
          <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto transition-transform hover:scale-105">
            <span className="font-['Space_Grotesk',sans-serif] font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">
              Continue my task
            </span>
          </button>
          <button className="border-[1.5px] border-[#eef1f6] flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto transition-colors hover:bg-white/5">
            <span className="font-['Space_Grotesk',sans-serif] font-medium text-[#eef1f6] text-[15px] whitespace-nowrap">
              Report a barrier
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-[16px] items-start pt-[12px] w-full">
          <Link
            href="/accessibility"
            className="group flex items-center font-['Space_Grotesk',sans-serif] font-bold text-[#34d4ca] text-[14px]"
          >
            <span className="underline decoration-[#34d4ca] underline-offset-4">
              Review accessibility information
            </span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="font-['Space_Grotesk',sans-serif] font-normal text-[#707a8c] text-[13px]">
            You do not need to disclose a disability or diagnosis to ask for accessibility help.
          </p>
        </div>
      </div>
    </section>
  );
}

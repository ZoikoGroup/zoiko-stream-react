"use client";

import React from "react";
import Image from "next/image";

export default function ReviewSubmitSection() {
  const summaryItems = [
    { label: "Help intent", value: "Continue my task" },
    { label: "Affected area", value: "Playback Player" },
    { label: "What are you trying to do?", value: "Watch a live stream with captions" },
    { label: "What is blocking you?", value: "Captions are not appearing on the live stream player" },
    { label: "Preferred outcome", value: "Accessible alternative" },
    { label: "Contact preference", value: "Email — user@example.com" },
    { label: "Environment details", value: "Optional — not provided" },
    { label: "Attachments", value: "Screenshot (1 file attached)" },
  ];

  return (
    <section className="border-b border-[#232b3a] flex flex-col items-center px-6 lg:px-[112px] py-[80px] lg:py-[100px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/support-accessibility-help/sec3-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/90" />
      </div>

      <div className="flex flex-col gap-[48px] relative z-10 w-full max-w-[1216px]">
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold leading-[1.2] lg:leading-[60.8px] text-[#eef1f6] text-[32px] lg:text-[37.9px] tracking-[-0.38px]">
            Review your accessibility help request.
          </h2>
          <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] text-[#aab3c4] text-[16px] lg:text-[18px]">
            Check everything before submitting. You can edit or remove any information. Do not include passwords, security credentials, private keys, or unnecessary sensitive data.
          </p>
        </div>

        <div className="bg-[#10151e]/80 border-[1.5px] border-[#232b3a] flex flex-col gap-[20px] p-[32px] rounded-[16px] w-full">
          <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-[#eef1f6] text-[18px]">
            Help Request Summary
          </h3>

          <div className="flex flex-col gap-[8px] w-full">
            {summaryItems.map((item, idx) => (
              <div
                key={idx}
                className="border-b border-[#232b3a] flex flex-col sm:flex-row items-start sm:items-center justify-between py-[12px] w-full gap-[8px]"
              >
                <div className="flex flex-col gap-[4px] w-full max-w-[500px]">
                  <p className="font-['Space_Grotesk',sans-serif] font-bold text-[#aab3c4] text-[13px] uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="font-['Space_Grotesk',sans-serif] font-normal text-white text-[15px]">
                    {item.value}
                  </p>
                </div>
                <button className="font-['Space_Grotesk',sans-serif] font-bold text-[#34d4ca] text-[13px] hover:underline underline-offset-4">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[24px] w-full">
          <p className="font-['Space_Grotesk',sans-serif] font-normal text-[#707a8c] text-[13px]">
            Your information is used only for accessibility support. It will not be shared with marketing, sales, or used for disability profiling.
          </p>

          <div className="flex flex-col sm:flex-row gap-[16px] items-center">
            <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto transition-transform hover:scale-105">
              <span className="font-['Space_Grotesk',sans-serif] font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">
                Submit request
              </span>
            </button>
            <button className="border-[1.5px] border-[#eef1f6] flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto transition-colors hover:bg-white/5">
              <span className="font-['Space_Grotesk',sans-serif] font-medium text-[#eef1f6] text-[15px] whitespace-nowrap">
                Save draft
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

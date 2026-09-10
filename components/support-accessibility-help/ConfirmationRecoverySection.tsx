"use client";

import React from "react";
import Image from "next/image";
import { Check, AlertTriangle, HelpCircle, Clock } from "lucide-react";

export default function ConfirmationRecoverySection() {
  const recoveryCards = [
    {
      title: "Submission failed",
      desc: "Your information is preserved. Try again or use an alternate support path.",
      linkText: "Retry →",
      icon: <AlertTriangle className="w-6 h-6 text-[#0f1b2d]" />,
    },
    {
      title: "Unknown outcome",
      desc: "We cannot confirm whether your request was received. Use your reference to check status.",
      linkText: "Check status →",
      icon: <HelpCircle className="w-6 h-6 text-[#0f1b2d]" />,
    },
    {
      title: "Session recovery",
      desc: "Your draft was preserved. Continue where you left off without re-entering information.",
      linkText: "Resume draft →",
      icon: <Clock className="w-6 h-6 text-[#0f1b2d]" />,
    },
  ];

  return (
    <section className="bg-white border-b border-[#e2e8f0] flex flex-col items-center px-6 lg:px-[112px] py-[80px] lg:py-[100px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/support-accessibility-help/sec8-bg.png"
          alt=""
          className="absolute max-w-none object-cover size-full"
        />
      </div>

      <div className="flex flex-col gap-[48px] relative z-10 w-full max-w-[1216px]">
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold leading-[1.2] lg:leading-[60.8px] text-[#0f1b2d] text-[32px] lg:text-[37.9px] tracking-[-0.38px]">
            Your request has been received.
          </h2>
          <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] text-[#4f5e74] text-[16px] lg:text-[18px]">
            We have recorded your accessibility help request. Here is what to expect.
          </p>
        </div>

        <div className="bg-[#f8fafc] border-[1.5px] border-[#10b981] flex flex-col sm:flex-row gap-[24px] items-start sm:items-center p-[24px] lg:p-[32px] rounded-[16px] w-full">
          <div className="bg-[#d1fae5] flex items-center justify-center rounded-[24px] w-[48px] h-[48px] shrink-0">
            <Check className="w-6 h-6 text-[#10b981]" strokeWidth={3} />
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <div className="flex flex-wrap gap-[8px] sm:gap-[16px] items-baseline">
              <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-[#0f1b2d] text-[20px]">
                Submission Successful
              </h3>
              <p className="font-['IBM_Plex_Mono',monospace] font-bold text-[#4a8cfb] text-[14px]">
                ID: ACC-2024-04821
              </p>
            </div>
            <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[22px] text-[#4f5e74] text-[15px]">
              We will respond using your selected communication method. We do not promise a specific response time unless our current support policy establishes one.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] w-full">
          <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-[#0f1b2d] text-[14px] uppercase tracking-wider">
            System Failures & Session Recovery Paths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full">
            {recoveryCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-[#e2e8f0] flex flex-col gap-[16px] items-start p-[24px] rounded-[16px] transition-shadow hover:shadow-md cursor-pointer group"
              >
                <div className="flex items-center gap-[12px]">
                  <div className="w-6 h-6 flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-[#0f1b2d] text-[18px]">
                    {card.title}
                  </h4>
                </div>
                <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[22px] text-[#4f5e74] text-[14px] flex-1">
                  {card.desc}
                </p>
                <button className="font-['Space_Grotesk',sans-serif] font-bold text-[#4a8cfb] text-[14px] group-hover:translate-x-1 transition-transform">
                  {card.linkText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { Code, Building2, MonitorPlay, Activity } from "lucide-react";

export default function SpecialistSupportSection() {
  const cards = [
    {
      title: "Developer Support",
      desc: "API, SDK, player, or integration accessibility issues. Safe technical context transfers with your approval.",
      icon: <Code className="w-8 h-8 text-[#0a0f1a]" />,
    },
    {
      title: "Enterprise Support",
      desc: "Organization-specific accessibility support. Fully authenticated account context only when authorized.",
      icon: <Building2 className="w-8 h-8 text-[#0a0f1a]" />,
    },
    {
      title: "Live Events Support",
      desc: "Active event accessibility barriers. Event phase and timing parameters preserved during support handoff.",
      icon: <MonitorPlay className="w-8 h-8 text-[#0a0f1a]" />,
    },
    {
      title: "System Status",
      desc: "Check if there is a known platform-wide accessibility degradation and subscribe to updates.",
      icon: <Activity className="w-8 h-8 text-[#0a0f1a]" />,
    },
  ];

  return (
    <section className="bg-white flex flex-col items-center px-6 lg:px-[112px] py-[80px] lg:py-[100px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/support-accessibility-help/sec6-bg.png"
          alt=""
          className="absolute max-w-none object-cover size-full"
        />
      </div>

      <div className="flex flex-col gap-[48px] relative z-10 w-full max-w-[1216px]">
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold leading-[1.2] lg:leading-[60.8px] text-[#0f1b2d] text-[32px] lg:text-[37.9px] tracking-[-0.38px]">
            Need specialist help?
          </h2>
          <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] text-[#4f5e74] text-[16px] lg:text-[18px]">
            Some issues are best handled by a specialist team. Your accessibility context travels with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] border border-[#e2e8f0] flex flex-col sm:flex-row gap-[20px] items-start sm:items-center p-[24px] rounded-[16px] transition-shadow hover:shadow-md cursor-pointer group"
            >
              <div className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center rounded-[12px] w-[64px] h-[64px] shrink-0">
                {card.icon}
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-['Space_Grotesk',sans-serif] font-bold leading-[28px] text-[#0f1b2d] text-[20px] group-hover:text-[#4a8cfb] transition-colors">
                  {card.title}
                </h3>
                <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[22.75px] text-[#4f5e74] text-[14px]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

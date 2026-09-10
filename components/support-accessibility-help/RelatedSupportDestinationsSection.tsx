"use client";

import React from "react";
import { Shield, BookOpen, PhoneCall, Bug, Activity, ArrowRight } from "lucide-react";

export default function RelatedSupportDestinationsSection() {
  const destinations = [
    {
      title: "Accessibility Information",
      desc: "Public conformance evidence, testing scope, and known limitations.",
      icon: <Shield className="w-6 h-6 text-[#4a8cfb]" />,
    },
    {
      title: "Help Center",
      desc: "Self-service guidance and documentation.",
      icon: <BookOpen className="w-6 h-6 text-[#4a8cfb]" />,
    },
    {
      title: "Contact Support",
      desc: "General human support intake.",
      icon: <PhoneCall className="w-6 h-6 text-[#4a8cfb]" />,
    },
    {
      title: "Report an Issue",
      desc: "Generic product defect reporting.",
      icon: <Bug className="w-6 h-6 text-[#4a8cfb]" />,
    },
    {
      title: "System Status",
      desc: "Live service health and current incidents.",
      icon: <Activity className="w-6 h-6 text-[#4a8cfb]" />,
    },
  ];

  return (
    <section className="bg-white flex flex-col items-center px-6 lg:px-[112px] py-[80px] lg:py-[100px] w-full relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/support-accessibility-help/sec2-bg.png"
          alt=""
          className="absolute max-w-none object-cover size-full"
        />
      </div>
      <div className="flex flex-col gap-[48px] w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold leading-[1.2] lg:leading-[60.8px] text-[#0f1b2d] text-[32px] lg:text-[37.9px] tracking-[-0.38px]">
            Other ways to get help.
          </h2>
          <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] text-[#4f5e74] text-[16px] lg:text-[18px]">
            Explore related support destinations. Your accessibility context is always preserved during handoff.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20px] w-full">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] border border-[#e2e8f0] flex flex-col gap-[16px] p-[24px] rounded-[16px] transition-shadow hover:shadow-md cursor-pointer group h-full"
            >
              <div className="bg-[#4a8cfb]/[0.08] flex items-center justify-center rounded-[12px] w-[48px] h-[48px] shrink-0">
                {dest.icon}
              </div>
              <div className="flex flex-col flex-1 gap-[8px]">
                <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-[#0f1b2d] text-[18px]">
                  {dest.title}
                </h3>
                <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[20px] text-[#4f5e74] text-[13px]">
                  {dest.desc}
                </p>
              </div>
              <button className="group/btn flex items-center gap-[4px] mt-auto w-fit">
                <span className="font-['Space_Grotesk',sans-serif] font-bold text-[#4a8cfb] text-[14px]">
                  Visit page
                </span>
                <ArrowRight className="w-4 h-4 text-[#4a8cfb] transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import {
  ClipboardX,
  PlayCircle,
  Lock,
  Headphones,
  Flag,
  FileCheck,
  Compass,
} from "lucide-react";

export default function HelpIntentSelectorSection() {
  const cards = [
    {
      title: "I cannot complete a task",
      description:
        "Something is preventing you from finishing what you started. We will help you find a way forward.",
      icon: <ClipboardX className="w-8 h-8 text-[#4f5e74]" strokeWidth={1.5} />,
    },
    {
      title: "I cannot access content",
      description:
        "Video, audio, captions, transcript, or other media content is inaccessible to you.",
      icon: (
        <div className="relative w-7 h-7 flex items-center justify-center">
          <PlayCircle className="w-7 h-7 text-[#4a8cfb]" strokeWidth={1.5} />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[2px]">
            <Lock className="w-[14px] h-[14px] text-[#4a8cfb]" strokeWidth={2} />
          </div>
        </div>
      ),
      isCustomDiv: true,
    },
    {
      title: "I need accessible support",
      description:
        "You need a different communication method to get help from our team safely and quickly.",
      icon: <Headphones className="w-8 h-8 text-[#4f5e74]" strokeWidth={1.5} />,
    },
    {
      title: "I want to report a barrier",
      description:
        "You have found an accessibility problem and want to let us know about it for future fixes.",
      icon: <Flag className="w-8 h-8 text-[#4f5e74]" strokeWidth={1.5} />,
    },
    {
      title: "I need compliance docs",
      description:
        "You are looking for conformance evidence, VPAT testing scope, or accessibility certification.",
      icon: <FileCheck className="w-8 h-8 text-[#4f5e74]" strokeWidth={1.5} />,
    },
    {
      title: "Help me choose",
      description:
        "Not sure which option fits? Answer a couple of questions and we will guide you to a path.",
      icon: <Compass className="w-8 h-8 text-[#4f5e74]" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="bg-white border-b border-[#e2e8f0] flex flex-col items-center px-6 lg:px-[112px] py-[80px] lg:py-[100px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/support-accessibility-help/sec2-bg.png"
          alt=""
          className="absolute max-w-none object-cover size-full"
        />
      </div>

      <div className="flex flex-col gap-[48px] relative z-10 w-full max-w-[1216px]">
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold leading-[1.2] lg:leading-[60.8px] text-[#0f1b2d] text-[32px] lg:text-[37.9px] tracking-[-0.38px]">
            What kind of help do you need?
          </h2>
          <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] text-[#4f5e74] text-[16px] lg:text-[18px]">
            Choose the option that best describes your situation. You can always change your mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e2e8f0] flex flex-col gap-[16px] items-start p-[24px] rounded-[16px] transition-shadow hover:shadow-md cursor-pointer group"
            >
              <div className="flex items-center justify-start h-[32px] text-[#4a8cfb]">
                {card.isCustomDiv
                  ? card.icon
                  : React.cloneElement(card.icon as React.ReactElement, {
                      className: "w-7 h-7 text-[#4a8cfb]",
                      strokeWidth: 1.5,
                    } as any)}
              </div>
              <h3 className="font-['Space_Grotesk',sans-serif] font-bold leading-[28px] text-[#0f1b2d] text-[20px]">
                {card.title}
              </h3>
              <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[22.75px] text-[#4f5e74] text-[14px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

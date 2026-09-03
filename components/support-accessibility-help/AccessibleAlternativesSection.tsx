"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AccessibleAlternativesSection() {
  const cards = [
    {
      title: "Accessible HTML alternative",
      desc: "A verified HTML version is available for this content, designed with semantic tags for screen readers.",
      img: "/images/support-accessibility-help/alt-html.png",
      linkText: "Open alternative",
    },
    {
      title: "Transcript / Captions",
      desc: "Caption or transcript available for this specific media item, optimized for assistive software.",
      img: "/images/support-accessibility-help/alt-transcript.png",
      linkText: "View transcript",
    },
    {
      title: "Keyboard method",
      desc: "A verified keyboard-accessible method exists for this task. Simple sequence map guides you.",
      img: "/images/support-accessibility-help/alt-keyboard.png",
      linkText: "View instructions",
    },
    {
      title: "Text-only path",
      desc: "A stripped-down, light text option that omits video bandwidth and renders purely semantic layout.",
      img: "/images/support-accessibility-help/alt-text.png",
      linkText: "Open plain view",
    },
    {
      title: "Accessible document format",
      desc: "Download tagged PDFs, braille-ready output, or large-print variants of the event workbook.",
      img: "/images/support-accessibility-help/alt-doc.png",
      linkText: "Browse formats",
    },
    {
      title: "Alternate contact channel",
      desc: "Reach dedicated support operators directly over secure digital channels and bypass main workflows.",
      img: "/images/support-accessibility-help/alt-contact.png",
      linkText: "View contacts",
    },
  ];

  return (
    <section className="bg-white border-b border-[#e2e8f0] flex flex-col items-center px-6 lg:px-[112px] py-[80px] lg:py-[100px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/support-accessibility-help/sec4-bg.png"
          alt=""
          fill
          className="object-cover opacity-60"
        />
      </div>

      <div className="flex flex-col gap-[48px] relative z-10 w-full max-w-[1216px]">
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold leading-[1.2] lg:leading-[60.8px] text-[#0f1b2d] text-[32px] lg:text-[37.9px] tracking-[-0.38px]">
            Verified accessible alternatives.
          </h2>
          <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] text-[#4f5e74] text-[16px] lg:text-[18px]">
            When a source-backed alternative exists, we show it here. If none is verified, we move directly to accessible help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] border border-[#e2e8f0] flex flex-col gap-[16px] p-[24px] rounded-[16px] transition-shadow hover:shadow-md h-full"
            >
              <div className="relative w-full h-[140px] rounded-[8px] overflow-hidden bg-white border border-[#e2e8f0] flex items-center justify-center shrink-0">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover p-2"
                />
              </div>
              <div className="flex flex-col flex-1 gap-[8px]">
                <h3 className="font-['Space_Grotesk',sans-serif] font-bold leading-[28px] text-[#0f1b2d] text-[20px]">
                  {card.title}
                </h3>
                <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[22.75px] text-[#4f5e74] text-[14px]">
                  {card.desc}
                </p>
              </div>
              <button className="group flex items-center gap-[4px] mt-auto w-fit">
                <span className="font-['Space_Grotesk',sans-serif] font-bold text-[#4a8cfb] text-[14px]">
                  {card.linkText}
                </span>
                <ArrowRight className="w-4 h-4 text-[#4a8cfb] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

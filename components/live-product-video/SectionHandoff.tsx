import React from 'react';

const imgSectionBg = "/images/live-product-video/handoff-section-bg.png";
const imgBgBlob1 = "/images/live-product-video/handoff-bg-blob-1.svg";
const imgBgBlob2 = "/images/live-product-video/handoff-bg-blob-2.svg";

const HANDOFF_CARDS = [
  { image: "/images/live-product-video/handoff-card-api-reference.png", title: "API Reference", description: "Direct links from relevant labels.", governance: "Current API registry." },
  { image: "/images/live-product-video/handoff-card-sdks.png", title: "SDKs", description: "Approved names/versions only.", governance: "Developer Surface Registry." },
  { image: "/images/live-product-video/handoff-card-protocols.png", title: "Protocols", description: "Mention only if verified.", governance: "Protocol Capability Registry." },
  { image: "/images/live-product-video/handoff-card-code-examples.png", title: "Code Examples", description: "Syntax-highlighted, copyable, source-controlled.", governance: "Example Registry." },
  { image: "/images/live-product-video/handoff-card-architecture-guides.png", title: "Architecture Guides", description: "Link by problem.", governance: "Guide Registry + route status." },
  { image: "/images/live-product-video/handoff-card-security-trust.png", title: "Security/Trust", description: "Inspectable evidence before sales.", governance: "Evidence Registry." },
  { image: "/images/live-product-video/handoff-card-system-status.png", title: "System Status", description: "Direct route for incidents.", governance: "No estimated uptime." },
  { image: "/images/live-product-video/handoff-card-support.png", title: "Support", description: "Developer support for existing customers.", governance: "CTA Resolver." },
];

export default function SectionHandoff() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[35px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[42px] leading-[1.14] m-0 w-full">
            Give teams the next authoritative surface
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[1.56] m-0 w-full">
            The workflow page explains architecture; documentation owns implementation detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] w-full">
          {HANDOFF_CARDS.map((card) => (
            <div key={card.title} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[8px] overflow-hidden flex flex-col items-start">
              <div className="h-[130px] w-full">
                <img alt={card.title} className="w-full h-full object-cover" src={card.image} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[20px] w-full">
                <p className="font-sans font-bold text-[#0f1b2d] text-[16px] m-0 w-full">{card.title}</p>
                <p className="font-inter font-normal text-[#4f5e74] text-[13px] leading-[1.38] m-0 w-full">{card.description}</p>
                <div className="h-px w-full bg-[#e1e6eb]" />
                <div className="flex flex-col gap-[2px] items-start w-full">
                  <p className="font-sans font-bold text-[#4a8cfb] text-[10px] m-0 whitespace-nowrap">GOVERNANCE</p>
                  <p className="font-inter font-normal text-[#4f5e74] text-[12px] m-0 w-full">{card.governance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

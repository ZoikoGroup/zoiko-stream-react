import React from 'react';

const imgSectionBg = "/images/live-product-video/hero-section-bg.png";
const imgCheck = "/images/live-product-video/hero-icon-check.svg";
const imgActivity = "/images/live-product-video/hero-icon-activity.svg";

const FLOW_NODES = [
  { number: "01", title: "Product UI / App Frontend", subtitle: "Embedded Player SDK & Custom Controls" },
  { number: "02", title: "Backend Logic / Control plane", subtitle: "Dynamic Token Gating & Security Policies" },
  { number: "03", title: "ZoikoStream Control Engine", subtitle: "Active Ingestion & Transcoding Nodes" },
  { number: "04", title: "Durable Recording Storage", subtitle: "Immediate Archival & Replay Processing" },
];

export default function SectionHero() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.74)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-[56px] items-center w-full">
        <div className="flex flex-col gap-[32px] items-start flex-1 min-w-0 w-full">
          <div className="border border-[#34d4ca] border-solid rounded-full px-[12px] py-[6px]">
            <p className="font-sans font-bold text-[#34d4ca] text-[11px] tracking-[1px] uppercase m-0 whitespace-nowrap">Live Product Video</p>
          </div>
          <h1 className="font-sans font-bold text-white text-[32px] lg:text-[52px] leading-[1.2] lg:leading-[60px] tracking-[-1.5px] m-0 w-full">
            Build live video into the product experience.
          </h1>
          <p className="font-inter font-normal text-[#aab3c4] text-[16px] lg:text-[18px] leading-[1.5] lg:leading-[28px] m-0 w-full">
            Use ZoikoStream&apos;s programmable media infrastructure to connect a product-defined live experience to contribution, ingest, playback security, delivery, observability, and replay — while keeping application UX, audience decisions, and product policy explicit.
          </p>
          <div className="flex flex-col sm:flex-row gap-[16px] items-center w-full sm:w-auto">
            <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] rounded-[8px] border-none cursor-pointer hover:opacity-90 transition-opacity w-full sm:w-auto">
              <span className="font-sans font-bold text-[#0a0d14] text-[15px] whitespace-nowrap">Start Building</span>
            </button>
            <button className="border-[1.5px] border-[#aab3c4] border-solid px-[28px] py-[14px] rounded-[8px] bg-transparent cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors w-full sm:w-auto">
              <span className="font-sans font-bold text-white text-[15px] whitespace-nowrap">Read the Documentation</span>
            </button>
          </div>
        </div>

        <div className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[24px] lg:p-[32px] flex flex-col gap-[20px] items-start w-full lg:w-[500px] shrink-0">
          <p className="font-sans font-bold text-white text-[14px] tracking-[1.2px] m-0 w-full">LIVE PIPELINE SCHEMATIC</p>
          <div className="flex flex-col gap-[10px] items-start w-full">
            {FLOW_NODES.map((node) => (
              <div key={node.number} className="bg-[#0f1b2d] border border-[#232b3a] border-solid rounded-[8px] p-[14px] flex items-center justify-between gap-[12px] w-full">
                <div className="flex gap-[12px] items-center flex-1 min-w-0">
                  <div className="bg-[rgba(52,212,202,0.1)] rounded-[12px] flex items-center justify-center shrink-0 size-[24px]">
                    <p className="font-sans font-bold text-[#34d4ca] text-[11px] m-0">{node.number}</p>
                  </div>
                  <div className="flex flex-col gap-[2px] items-start flex-1 min-w-0">
                    <p className="font-sans font-bold text-white text-[14px] m-0">{node.title}</p>
                    <p className="font-inter font-normal text-[#aab3c4] text-[11px] m-0">{node.subtitle}</p>
                  </div>
                </div>
                <img alt="" className="size-[14px] shrink-0" src={imgCheck} />
              </div>
            ))}
          </div>
          <div className="flex gap-[8px] items-center w-full">
            <img alt="" className="size-[16px] shrink-0" src={imgActivity} />
            <p className="font-sans font-bold text-[#34d4ca] text-[13px] m-0">Continuous Analytics & Pipeline Telemetry Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

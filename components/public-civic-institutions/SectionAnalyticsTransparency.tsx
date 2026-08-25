import React from 'react';

const imgSectionBg = "/images/public-civic-institutions/analytics-transparency-section-bg.png";
const imgBgBlob1 = "/images/public-civic-institutions/analytics-transparency-bg-blob-1.svg";
const imgBgBlob2 = "/images/public-civic-institutions/analytics-transparency-bg-blob-2.svg";
const imgDotAuthorized = "/images/public-civic-institutions/analytics-transparency-dot-authorized.svg";
const imgDotProhibited = "/images/public-civic-institutions/analytics-transparency-dot-prohibited.svg";
const imgCheck = "/images/public-civic-institutions/analytics-transparency-icon-check.svg";
const imgXCircle = "/images/public-civic-institutions/analytics-transparency-icon-x-circle.svg";

const AUTHORIZED_ITEMS = [
  { title: "Aggregate stream starts / play count", description: "Simple volumetric metrics to verify public reach and SLA targets" },
  { title: "Playback quality (buffering, latency)", description: "Technical CDN diagnostics to optimize routing paths in real-time" },
  { title: "Caption track usage data", description: "Verification of accessibility compliance across client configurations" },
  { title: "Real-time incident detection", description: "Automated telemetry flags triggering fallback and alerting routines" },
];

const PROHIBITED_ITEMS = [
  { title: "Political and voting profiling", description: "Absolutely no recording or inference of citizen affiliation or views" },
  { title: "Disability status tracking", description: "Explicitly forbidden to log assistive device usage beyond generic web standard tags" },
  { title: "Audience sentiment analysis", description: "No facial expressions, voice inflection, or comment analysis performed" },
  { title: "Cross-site retargeting advertising cookies", description: "Zero advertising pixels, trackers, or commercial profiling scripts allowed" },
];

const ROUTES = [
  { image: "/images/public-civic-institutions/analytics-transparency-route-documentation.png", title: "Documentation", description: "Guides, API scopes & schemas" },
  { image: "/images/public-civic-institutions/analytics-transparency-route-support-center.png", title: "Support Center", description: "Civic SLAs & incident routing" },
  { image: "/images/public-civic-institutions/analytics-transparency-route-system-status.png", title: "System Status", description: "Uptime and service availability" },
  { image: "/images/public-civic-institutions/analytics-transparency-route-accessibility-help.png", title: "Accessibility Help", description: "Compliance reports & VPAT files" },
];

export default function SectionAnalyticsTransparency() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-100px] size-[420px] top-[-131px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-173px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[38px] leading-[1.6] tracking-[-0.38px] m-0 w-full">
            Aggregate operational evidence without profiling
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[18px] m-0 w-full">
            Analytics are strictly restricted to operational safety and delivery performance. We measure pipes, not citizens.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] w-full">
          <div className="bg-[rgba(16,185,129,0.04)] border-[1.5px] border-[rgba(16,185,129,0.2)] border-solid rounded-[12px] p-[28px] flex flex-col gap-[20px] items-start">
            <div className="flex gap-[8px] items-center">
              <img alt="" className="size-[12px]" src={imgDotAuthorized} />
              <p className="font-sans font-bold text-[#0f1b2d] text-[18px] m-0">Authorized Telemetry</p>
            </div>
            <div className="flex flex-col gap-[12px] items-start w-full">
              {AUTHORIZED_ITEMS.map((item) => (
                <div key={item.title} className="flex gap-[12px] items-start w-full">
                  <img alt="" className="size-[18px] shrink-0" src={imgCheck} />
                  <div className="flex flex-col gap-[2px] items-start flex-1 min-w-0">
                    <p className="font-sans font-bold text-[#0f1b2d] text-[15px] m-0">{item.title}</p>
                    <p className="font-inter font-normal text-[#4f5e74] text-[13px] m-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[rgba(239,68,68,0.04)] border-[1.5px] border-[rgba(239,68,68,0.2)] border-solid rounded-[12px] p-[28px] flex flex-col gap-[20px] items-start">
            <div className="flex gap-[8px] items-center">
              <img alt="" className="size-[12px]" src={imgDotProhibited} />
              <p className="font-sans font-bold text-[#0f1b2d] text-[18px] m-0">Strictly Prohibited Tracking</p>
            </div>
            <div className="flex flex-col gap-[12px] items-start w-full">
              {PROHIBITED_ITEMS.map((item) => (
                <div key={item.title} className="flex gap-[12px] items-start w-full">
                  <img alt="" className="size-[18px] shrink-0" src={imgXCircle} />
                  <div className="flex flex-col gap-[2px] items-start flex-1 min-w-0">
                    <p className="font-sans font-bold text-[#0f1b2d] text-[15px] m-0">{item.title}</p>
                    <p className="font-inter font-normal text-[#4f5e74] text-[13px] m-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] items-start w-full">
          <p className="font-sans font-bold text-[#0f1b2d] text-[16px] m-0 w-full">Active Customer Operations Channels</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full">
            {ROUTES.map((route) => (
              <div key={route.title} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[12px] p-[16px] flex gap-[16px] items-center">
                <div className="rounded-[8px] shrink-0 size-[64px] overflow-hidden">
                  <img alt={route.title} className="w-full h-full object-cover" src={route.image} />
                </div>
                <div className="flex flex-col gap-[2px] items-start flex-1 min-w-0">
                  <p className="font-sans font-bold text-[#0f1b2d] text-[15px] m-0 whitespace-nowrap">{route.title}</p>
                  <p className="font-inter font-normal text-[#4f5e74] text-[13px] m-0">{route.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

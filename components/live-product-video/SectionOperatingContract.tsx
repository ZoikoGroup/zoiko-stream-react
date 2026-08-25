import React from 'react';

const imgSectionBg = "/images/live-product-video/operating-contract-section-bg.png";

const COLUMNS = ["Contract Area", "Product / Customer", "ZoikoStream", "Shared / Decision Required"];

const ROWS = [
  {
    area: "Product Experience",
    product: "Owns player UI, dynamic logic, and application feedback loops",
    zoiko: "Exposes React/Native player SDKs and telemetry nodes",
    shared: "Verification of player compliance against WCAG rules",
  },
  {
    area: "Media Lifecycle",
    product: "Triggers start/stop times and defines ingestion schema limits",
    zoiko: "Manages live transcode pipeline and global output replication",
    shared: "Establish maximum stream latency boundaries",
  },
  {
    area: "Audience & Access",
    product: "Performs user auth and issues token credentials",
    zoiko: "Validates incoming tokens cryptographically at the edge",
    shared: "SAML SSO mapping and session duration policies",
  },
  {
    area: "Observability",
    product: "Consumes pipeline webhooks and integrates reporting widgets",
    zoiko: "Pipes real-time stream status logs and pipeline metrics",
    shared: "Threshold definitions for latency alert escalations",
  },
  {
    area: "Accessibility",
    product: "Selects target languages for real-time speech-to-text translation",
    zoiko: "Provides automated multi-lingual subtitle encoding",
    shared: "Accuracy audits on custom business vocabulary dictionaries",
  },
  {
    area: "Replay Continuity",
    product: "Defines recording intent policies (VOD duration, compression)",
    zoiko: "Coordinates cold-storage replication and manifest packaging",
    shared: "Durable asset retention duration and verification logging",
  },
  {
    area: "Support & Change",
    product: "Provides first-tier user support and platform integrations",
    zoiko: "Assures infrastructure availability and core API uptimes",
    shared: "99.99% critical event concierge setup and post-event audits",
  },
];

export default function SectionOperatingContract() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[42px] leading-[1.14] m-0 w-full">
            Live Product Video Operating Contract
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
            Make responsibilities inspectable before implementation.
          </p>
        </div>

        <div className="bg-[#0a0d14] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[24px] w-full overflow-x-auto">
          <div className="min-w-[900px]">
            <div className="bg-[#1f2b3e] border-b-2 border-[#34d4ca] border-solid flex gap-[12px] items-start p-[16px] w-full">
              {COLUMNS.map((col, i) => (
                <p key={col} className={`font-sans font-bold text-white text-[13px] m-0 ${i === 0 ? "w-[180px] shrink-0" : "flex-1 min-w-0"}`}>
                  {col}
                </p>
              ))}
            </div>
            {ROWS.map((row, index) => (
              <div
                key={row.area}
                className={`flex gap-[12px] items-center p-[16px] w-full ${index < ROWS.length - 1 ? "border-b border-[#232b3a] border-solid" : ""}`}
              >
                <p className="font-sans font-bold text-[#34d4ca] text-[14px] m-0 w-[180px] shrink-0">{row.area}</p>
                <p className="font-inter font-normal text-[#aab3c4] text-[13px] leading-[1.54] m-0 flex-1 min-w-0">{row.product}</p>
                <p className="font-inter font-normal text-[#aab3c4] text-[13px] leading-[1.54] m-0 flex-1 min-w-0">{row.zoiko}</p>
                <p className="font-inter font-normal text-[#aab3c4] text-[13px] leading-[1.54] m-0 flex-1 min-w-0">{row.shared}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const imgSectionBg = "/images/workflow-finder/workflow-bridge-section-bg.png";
const imgChevronRight = "/images/workflow-finder/workflow-bridge-icon-chevron-right.svg";

const WORKFLOWS = [
  { image: "/images/workflow-finder/workflow-bridge-card-live-product.png", title: "Live product video", description: "Embed video inside custom software features" },
  { image: "/images/workflow-finder/workflow-bridge-card-enterprise-broadcast.png", title: "Enterprise broadcast", description: "High security corporate town halls & events" },
  { image: "/images/workflow-finder/workflow-bridge-card-private-audience.png", title: "Private audience delivery", description: "Managed portal streaming for authenticated VIPs" },
  { image: "/images/workflow-finder/workflow-bridge-card-global-event.png", title: "Global event streaming", description: "Zero-latency live streams to millions globally" },
  { image: "/images/workflow-finder/workflow-bridge-card-media-preservation.png", title: "Media preservation", description: "Durable continuous archiving and records" },
  { image: "/images/workflow-finder/workflow-bridge-card-operational-analytics.png", title: "Operational analytics", description: "Continuous pipeline latency & performance telemetry" },
];

export default function SectionWorkflowBridge() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(15,27,45,0.77)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[38px] leading-[1.26] m-0 w-full">
            Connect to a known workflow
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
            Six featured workflows mapped to platform stages, trust requirements, and operating models.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
          {WORKFLOWS.map((workflow) => (
            <div key={workflow.title} className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid rounded-[12px] overflow-hidden flex flex-col items-start">
              <div className="h-[160px] w-full">
                <img alt={workflow.title} className="w-full h-full object-cover" src={workflow.image} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[24px] w-full">
                <div className="flex gap-[8px] items-center w-full">
                  <img alt="" className="size-[18px] shrink-0" src={imgChevronRight} />
                  <p className="font-sans font-bold text-white text-[18px] m-0">{workflow.title}</p>
                </div>
                <p className="font-inter font-normal text-[#aab3c4] text-[14px] leading-[1.57] m-0 w-full">{workflow.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

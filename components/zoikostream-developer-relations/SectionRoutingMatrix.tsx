import React from 'react';

const ROUTES = [
  { need: "I need technical help with a production issue", channel: "Existing-customer support", link: "Get Support →" },
  { need: "I found a security vulnerability", channel: "Responsible disclosure", link: "Vulnerability Disclosure →" },
  { need: "I want to check service health", channel: "Public status page", link: "System Status →" },
  { need: "My company wants a formal partnership", channel: "Commercial/technical partner path", link: "Partners →" },
  { need: "I need enterprise architecture or procurement", channel: "Enterprise buying conversation", link: "Enterprise Inquiries →" },
  { need: "I'm interested in a job at ZoikoStream", channel: "Employment opportunities", link: "Careers →" },
];

export default function SectionRoutingMatrix() {
  return (
    <div className="bg-white w-full px-6 lg:px-[132px] py-[48px] lg:py-[64px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#3fc9bd] rounded-full" />
        <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Escape routes
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[26px] lg:text-[29px] tracking-[-0.29px] m-0 leading-[1.2] mb-[40px] lg:mb-[48px]">
        Not sure this is the right place? Here&apos;s where to go.
      </h2>

      <div className="w-full border border-[#dde2ea] rounded-[18px] overflow-hidden">
        {ROUTES.map((route, index) => (
          <div
            key={route.need}
            className={`w-full px-[24px] py-[20px] flex flex-col lg:flex-row lg:items-center gap-[8px] lg:gap-[16px] ${
              index % 2 === 0 ? "bg-[#f7f9fb]" : "bg-white"
            } ${index < ROUTES.length - 1 ? "border-b border-[#dde2ea]" : ""}`}
          >
            <p className="font-inter font-semibold text-[#32353c] text-[14.5px] m-0 lg:flex-1">
              {route.need}
            </p>
            <p className="font-inter font-normal text-[#9aa1ae] text-[13.5px] m-0 lg:w-[240px] lg:shrink-0">
              {route.channel}
            </p>
            <span className="font-inter font-bold text-[#5b8def] text-[13px] whitespace-nowrap lg:w-[180px] lg:shrink-0 lg:text-right">
              {route.link}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

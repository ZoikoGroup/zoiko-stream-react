import React from 'react';

const imgInfoIcon = "/images/zoikostream-company-updates/upcoming-icon-info.svg";

const UPCOMING = [
  {
    image: "/images/zoikostream-company-updates/upcoming-starter-plan.png",
    title: "Legacy Starter plan retires — effective Sep 1, 2026",
    description: "Published Aug 20, 2026. Applies to: Starter plan customers. Action required — migration steps are documented.",
  },
  {
    image: "/images/zoikostream-company-updates/upcoming-singapore-region.png",
    title: "New supported region: Singapore — effective Oct 15, 2026",
    description: "Published Aug 18, 2026. Applies to: New and existing customers in Southeast Asia. No action required.",
  },
];

export default function SectionUpcomingChanges() {
  return (
    <div className="w-full px-6 lg:px-[132px] py-[48px] lg:py-[64px]">
      <div className="flex flex-col gap-[24px] items-start w-full">
        <div className="flex gap-[12px] items-center">
          <div className="bg-[#5b8def] rounded-full h-[6px] w-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase m-0 whitespace-nowrap">Upcoming changes</p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[24px] lg:text-[28px] leading-[1.6] tracking-[-0.28px] m-0 w-full">
          Approved changes with a defined effective date.
        </h2>

        <div className="bg-[#eef3ff] border border-[rgba(91,141,239,0.25)] border-solid rounded-[14px] p-[16px] flex gap-[16px] items-center w-full">
          <img alt="" className="size-[20px] shrink-0" src={imgInfoIcon} />
          <p className="font-inter font-normal text-[#32353c] text-[13.5px] leading-[1.6] m-0 flex-1 min-w-0">
            Upcoming does not represent a product roadmap. Only approved changes with defined timing appear here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
          {UPCOMING.map((item) => (
            <div
              key={item.title}
              className="border border-[rgba(93,221,214,0.3)] border-solid rounded-[14px] overflow-hidden flex flex-col"
              style={{ backgroundImage: "linear-gradient(160deg, rgba(93,221,214,0.07) 0%, rgba(109,166,250,0.05) 100%)" }}
            >
              <div className="bg-[#f1f4f8] w-full aspect-[576/324]">
                <img alt={item.title} className="w-full h-full object-cover" src={item.image} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[24px] w-full">
                <div className="bg-[#e9f9f7] rounded-full px-[10px] py-[5px]">
                  <p className="font-inter font-bold text-[#3fc9bd] text-[11px] tracking-[0.66px] uppercase m-0 whitespace-nowrap">Upcoming</p>
                </div>
                <p className="font-sora font-bold text-[#32353c] text-[16.5px] leading-[1.6] tracking-[-0.165px] m-0 w-full">{item.title}</p>
                <p className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[1.6] m-0 w-full">{item.description}</p>
                <p className="font-inter font-semibold text-[#5b8def] text-[14.5px] m-0 whitespace-nowrap cursor-pointer">Read update →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

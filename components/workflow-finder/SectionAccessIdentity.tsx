import React from 'react';

const imgSectionBg = "/images/workflow-finder/access-identity-section-bg.png";
const imgBgBlob1 = "/images/workflow-finder/access-identity-bg-blob-1.svg";
const imgBgBlob2 = "/images/workflow-finder/access-identity-bg-blob-2.svg";
const imgCheckCircle = "/images/workflow-finder/access-identity-icon-check-circle.svg";
const imgCpu = "/images/workflow-finder/access-identity-icon-cpu.svg";
const imgUsers = "/images/workflow-finder/access-identity-icon-users.svg";
const imgGlobe = "/images/workflow-finder/access-identity-icon-globe.svg";
const imgLock = "/images/workflow-finder/access-identity-icon-lock.svg";
const imgCalendar = "/images/workflow-finder/access-identity-icon-calendar.svg";
const imgHelpCircle = "/images/workflow-finder/access-identity-icon-help-circle.svg";

const AUDIENCE_CARDS = [
  { icon: imgCpu, title: "Application / product users", description: "Video is an embedded feature of an app, service, or product." },
  { icon: imgUsers, title: "Employees or partners", description: "Organizational audience: authenticated staff, stakeholders, partners." },
  { icon: imgGlobe, title: "Public or broad audience", description: "One-to-many scale for broad public, live streaming global scales." },
  { icon: imgLock, title: "Invited / private audience", description: "Limited access for specific credentialed or select guest viewer groups." },
  { icon: imgCalendar, title: "Event guests or community", description: "Attendees joining for a scheduled live event, ceremony, or program." },
  { icon: imgHelpCircle, title: "Mixed / unsure", description: "Requirements span multiple audience categories or access profiles." },
];

export default function SectionAccessIdentity() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-42px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0a0d14] text-[28px] lg:text-[38px] leading-[1.26] m-0 w-full">
            Who needs to watch or access it?
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[1.56] m-0 w-full">
            Describes intended access context only. We never ask demographics, religion, politics, or similar traits.
          </p>
        </div>

        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[8px] p-[16px] flex flex-wrap gap-[12px] items-center w-full">
          <img alt="" className="size-[20px] shrink-0" src={imgCheckCircle} />
          <p className="font-inter font-normal text-[#0a0d14] text-[14px] m-0 flex-1 min-w-0">
            Selected Outcome: <span className="font-inter font-bold">Build video into a product</span>
          </p>
          <p className="font-inter font-semibold text-[#4ecdc4] text-[14px] m-0 whitespace-nowrap cursor-pointer">Edit</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
          {AUDIENCE_CARDS.map((card) => (
            <div key={card.title} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[12px] p-[24px] flex gap-[20px] items-center">
              <div className="bg-[#e6f4f1] rounded-[20px] flex items-center justify-center shrink-0 size-[40px]">
                <img alt="" className="size-[20px]" src={card.icon} />
              </div>
              <div className="flex flex-col gap-[4px] items-start flex-1 min-w-0">
                <p className="font-sans font-bold text-[#0a0d14] text-[16px] m-0 w-full">{card.title}</p>
                <p className="font-inter font-normal text-[#4f5e74] text-[13px] m-0 w-full">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center w-full">
          <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] rounded-[8px] border-none cursor-pointer hover:opacity-90 transition-opacity">
            <span className="font-sans font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">Continue</span>
          </button>
        </div>
      </div>
    </div>
  );
}

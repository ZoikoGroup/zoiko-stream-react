import React from 'react';

const imgTechnicalSessions = "/images/developer-relations/community-technical-sessions.png";
const imgWorkshops = "/images/developer-relations/community-workshops.png";

export default function SectionCommunityEvents() {
  return (
    <div className="bg-[#f7f9fb] w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#3fc9bd] rounded-full" />
        <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Connect with the developer community
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[26px] lg:text-[29px] tracking-[-0.29px] m-0 leading-[1.2] mb-[40px] lg:mb-[48px]">
        Learn with the people building the platform.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
        <div className="bg-white border border-[#dde2ea] rounded-[18px] overflow-hidden flex flex-col">
          <div className="w-full aspect-[574/358.75] bg-[#f1f4f8]">
            <img alt="Developers attending a technical conference session." className="w-full h-full object-cover" src={imgTechnicalSessions} />
          </div>
          <div className="p-[26px] flex flex-col gap-[12px]">
            <h3 className="font-sora font-bold text-[#32353c] text-[18px] tracking-[-0.18px] m-0">
              Technical sessions & office hours
            </h3>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[1.6] m-0">
              Deep-dive sessions on APIs and architecture patterns, plus time-bounded access to the team for Q&A.
            </p>
            <span className="font-inter font-bold text-[#5b8def] text-[13.5px]">View developer events →</span>
          </div>
        </div>

        <div className="bg-white border border-[#dde2ea] rounded-[18px] overflow-hidden flex flex-col">
          <div className="w-full aspect-[574/358.75] bg-[#f1f4f8]">
            <img alt="Group workshop with people collaborating around a table." className="w-full h-full object-cover" src={imgWorkshops} />
          </div>
          <div className="p-[26px] flex flex-col gap-[12px]">
            <h3 className="font-sora font-bold text-[#32353c] text-[18px] tracking-[-0.18px] m-0">
              Workshops & hands-on labs
            </h3>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[1.6] m-0">
              Guided, hands-on sessions with real code and implementation exercises.
            </p>
            <span className="font-inter font-bold text-[#5b8def] text-[13.5px]">View workshop schedule →</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const imgPlatform = "/images/legal/icon-platform-terms.svg";
const imgPrivacy = "/images/legal/icon-privacy-data.svg";
const imgAcceptableUse = "/images/legal/icon-acceptable-use.svg";
const imgDeveloper = "/images/legal/icon-developer-api.svg";
const imgLiveEvents = "/images/legal/icon-live-events.svg";
const imgEnterprise = "/images/legal/icon-enterprise-commercial.svg";
const imgRegional = "/images/legal/icon-regional-corporate.svg";
const imgCopyright = "/images/legal/icon-copyright-legal.svg";

const CATEGORIES = [
  { icon: imgPlatform, title: "Platform Terms", description: "Website and self-service service terms." },
  { icon: imgPrivacy, title: "Privacy & Data", description: "Privacy Notice, Cookie Notice, DPA and transfer addenda." },
  { icon: imgAcceptableUse, title: "Acceptable Use & Content", description: "Prohibited content and behavior rules." },
  { icon: imgDeveloper, title: "Developer & API", description: "API and developer license conditions." },
  { icon: imgLiveEvents, title: "Live Events", description: "Live Events and production services addenda." },
  { icon: imgEnterprise, title: "Enterprise & Commercial", description: "Enterprise terms, SLA and order-form references." },
  { icon: imgRegional, title: "Regional & Corporate", description: "Regional legal notices and contracting-entity disclosures." },
  { icon: imgCopyright, title: "Copyright & Legal Notices", description: "Copyright/IP policy, takedown and trademark guidance." },
];

export default function SectionBrowseByCategory() {
  return (
    <div className="bg-white border-b border-[#dde2ea] w-full px-6 lg:px-[132px] py-[48px] lg:py-[64px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
        <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Browse
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[22px] lg:text-[25px] tracking-[-0.25px] m-0 mb-[24px]">
        Browse by category.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] w-full">
        {CATEGORIES.map((cat) => (
          <div key={cat.title} className="bg-white border border-[#dde2ea] rounded-[14px] p-[22px] flex flex-col gap-[16px]">
            <div className="bg-[#f1f4f8] rounded-[9px] size-[36px] flex items-center justify-center">
              <img alt="" className="size-[17px]" src={cat.icon} />
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-sora font-bold text-[#32353c] text-[14.5px] tracking-[-0.145px] m-0">{cat.title}</h3>
              <p className="font-inter font-normal text-[#6b7280] text-[12.5px] leading-[1.55] m-0">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

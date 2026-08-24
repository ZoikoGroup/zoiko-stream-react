import React from 'react';

const imgSectionBg = "/images/workflow-finder/recommendation-section-bg.png";
const imgBgBlob1 = "/images/workflow-finder/recommendation-bg-blob-1.svg";
const imgBgBlob2 = "/images/workflow-finder/recommendation-bg-blob-2.svg";
const imgCheck = "/images/workflow-finder/recommendation-icon-check.svg";

const CHECKLIST = [
  { title: "Security", description: "API token authorization & Webhook validation" },
  { title: "Accessibility", description: "Automated standard captions" },
  { title: "Resilience", description: "Edge redundancy & failover logic" },
  { title: "Governance", description: "Complete webhook and audit trail logging" },
  { title: "Operating model", description: "Developer self-service parameters" },
];

export default function SectionRecommendation() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-130px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[38px] leading-[1.26] m-0 w-full">
          Your custom-matched developer pipeline
        </h2>

        <div className="bg-[#f8fafc] border-2 border-[#4ecdc4] border-solid rounded-[20px] p-[24px] lg:p-[48px] flex flex-col lg:flex-row gap-[48px] items-start w-full">
          <div className="flex flex-col gap-[28px] items-start flex-1 min-w-0 w-full">
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="font-sans font-bold text-[#4ecdc4] text-[14px] tracking-[1px] m-0 whitespace-nowrap">RECOMMENDED DESTINATION</p>
              <p className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[36px] m-0 w-full">
                Interactive<br />Feature API
              </p>
              <p className="font-inter font-normal text-[#4f5e74] text-[16px] leading-[1.5] m-0 w-full">
                Best match for engineering<br />teams building custom<br />video features with full<br />programmatic API control<br />over live and VOD delivery.
              </p>
            </div>
            <div className="bg-[#e6f4f1] rounded-full px-[16px] py-[8px]">
              <p className="font-sans font-bold text-[#0a0d14] text-[14px] m-0 whitespace-nowrap">Primary Workflow: Live Product Video</p>
            </div>
            <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] rounded-[8px] border-none cursor-pointer hover:opacity-90 transition-opacity">
              <span className="font-sans font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">Explore this path</span>
            </button>
          </div>

          <div className="bg-white border border-[#e1e6eb] border-solid rounded-[12px] p-[24px] lg:p-[32px] flex flex-col gap-[20px] items-start w-full lg:w-[420px] shrink-0">
            <p className="font-sans font-bold text-[#0f1b2d] text-[16px] m-0 whitespace-nowrap">Requirements to Validate</p>
            <div className="flex flex-col gap-[12px] items-start w-full">
              {CHECKLIST.map((item) => (
                <div key={item.title} className="flex gap-[12px] items-start w-full">
                  <img alt="" className="size-[16px] shrink-0 mt-[2px]" src={imgCheck} />
                  <div className="flex flex-col gap-[2px] items-start flex-1 min-w-0">
                    <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0">{item.title}</p>
                    <p className="font-inter font-normal text-[#4f5e74] text-[12px] m-0 w-full">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

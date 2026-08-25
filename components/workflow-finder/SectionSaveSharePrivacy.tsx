import React from 'react';

const imgSectionBg = "/images/workflow-finder/save-share-section-bg.png";
const imgBgBlob1 = "/images/workflow-finder/save-share-bg-blob-1.svg";
const imgBgBlob2 = "/images/workflow-finder/save-share-bg-blob-2.svg";
const imgCheck = "/images/workflow-finder/save-share-icon-check.svg";
const imgX = "/images/workflow-finder/save-share-icon-x.svg";

export default function SectionSaveSharePrivacy() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-259px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[38px] leading-[1.26] tracking-[-0.8px] m-0 w-full">
            Save your progress or start fresh
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[1.56] m-0 w-full">
            Session-only by default. No account required.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[48px] items-start w-full">
          <div className="flex flex-col gap-[32px] items-start flex-1 min-w-0 w-full">
            <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[8px] p-[20px] flex flex-col gap-[12px] items-start w-full">
              <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 whitespace-nowrap">PRIVACY NOTE ON LINKS</p>
              <p className="font-inter font-normal text-[#4f5e74] text-[14px] leading-[1.57] m-0 w-full">
                Shared links contain a non-sensitive summary only. Your answers are never encoded directly in URLs or harvested for advertising profiles.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-[16px] items-start sm:items-center w-full">
              <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] rounded-[8px] border-none cursor-pointer hover:opacity-90 transition-opacity w-full sm:w-auto">
                <span className="font-sans font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">Copy result link</span>
              </button>
              <button className="border-[1.5px] border-[#0f1b2d] border-solid px-[28px] py-[14px] rounded-[8px] bg-transparent cursor-pointer hover:bg-[rgba(15,27,45,0.05)] transition-colors w-full sm:w-auto">
                <span className="font-sans font-bold text-[#0f1b2d] text-[15px] whitespace-nowrap">Download summary PDF</span>
              </button>
            </div>
          </div>

          <div className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid rounded-[12px] p-[24px] lg:p-[32px] flex flex-col gap-[24px] items-start flex-1 min-w-0 w-full">
            <p className="font-sans font-bold text-[#0f1b2d] text-[18px] m-0 whitespace-nowrap">Data Policy Overview</p>
            <div className="flex flex-col gap-[24px] items-start w-full">
              <div className="flex gap-[12px] items-start w-full">
                <img alt="" className="size-[18px] shrink-0 mt-[1px]" src={imgCheck} />
                <div className="flex flex-col gap-[8px] items-start flex-1 min-w-0">
                  <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 w-full">What is stored</p>
                  <p className="font-inter font-normal text-[#4f5e74] text-[13px] leading-[1.38] m-0 w-full">
                    Session-only selections in your local browser cache to preserve your matched path.
                  </p>
                </div>
              </div>
              <div className="flex gap-[12px] items-start w-full">
                <img alt="" className="size-[18px] shrink-0 mt-[1px]" src={imgX} />
                <div className="flex flex-col gap-[8px] items-start flex-1 min-w-0">
                  <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 w-full">What is never stored</p>
                  <p className="font-inter font-normal text-[#4f5e74] text-[13px] leading-[1.38] m-0 w-full">
                    Demographic traits, identity profiles, organization scale, or behavior scoring telemetry.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-[#e1e6eb]" />
            <div className="flex flex-wrap gap-[16px] items-center w-full">
              <p className="font-inter font-normal text-[#4f5e74] text-[13px] m-0 whitespace-nowrap">Need to start completely over?</p>
              <button className="font-sans font-bold text-[#ef4444] text-[13px] bg-transparent border-none cursor-pointer whitespace-nowrap">
                Clear all answers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

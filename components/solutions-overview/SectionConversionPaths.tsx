import React from 'react';

const imgSectionConversionPaths = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgPathImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgPathImage1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgPathImage2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgCode = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgLine = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgLock = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgLine1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgVideo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";

export default function SectionConversionPaths() {
  return (
    <div className="border-[#232b3a] border-b border-solid content-stretch flex flex-col gap-[56px] items-start px-6 lg:px-[112px] py-[60px] lg:py-[120px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgSectionConversionPaths} />
        <div className="absolute bg-[rgba(15,27,45,0.67)] inset-0" />
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-sans font-bold leading-[48px] relative shrink-0 text-[32px] lg:text-[38px] text-white tracking-[-0.8px] w-full m-0">
          Choose the path that matches where you are
        </h2>
        <p className="font-sans font-normal leading-[28px] relative shrink-0 text-[#aab3c4] text-[18px] w-full m-0">
          Divergent entrance models optimized directly for your operational workflow.
        </p>
      </div>
      <div className="content-stretch flex flex-col lg:flex-row gap-[24px] items-start relative shrink-0 w-full z-10">
        <div className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex flex-[1_0_0] flex-col items-start min-w-px overflow-hidden relative rounded-[12px] w-full h-auto self-stretch">
          <div className="h-[160px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPathImage} />
          </div>
          <div className="content-stretch flex flex-col p-[24px] relative w-full flex-1">
            <div className="content-stretch flex flex-col gap-[16px] w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="bg-[#232b3a] content-stretch flex items-start p-[6px] relative rounded-[6px] shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCode} />
                  </div>
                </div>
                <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white m-0">
                  Developer path
                </h3>
              </div>
              <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
                For builders needing API keys, SDK parameters,<br />custom player UI controls, and code integration<br />workflows.
              </p>
            </div>
            
            <div className="flex flex-col w-full mt-auto">
              <div className="h-0 relative shrink-0 w-full mb-[24px] mt-[16px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <button className="bg-gradient-to-r content-stretch flex from-[#34d4ca] items-center justify-center px-[28px] py-[14px] relative rounded-[8px] to-[#4a8cfb] border-none cursor-pointer hover:opacity-90 transition-opacity">
                  <span className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0a0f1a] text-[15px] whitespace-nowrap">
                    Start building
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex flex-[1_0_0] flex-col items-start min-w-px overflow-hidden relative rounded-[12px] w-full h-auto self-stretch">
          <div className="h-[160px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPathImage1} />
          </div>
          <div className="content-stretch flex flex-col p-[24px] relative w-full flex-1">
            <div className="content-stretch flex flex-col gap-[16px] w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="bg-[#232b3a] content-stretch flex items-start p-[6px] relative rounded-[6px] shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLock} />
                  </div>
                </div>
                <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white m-0">
                  Enterprise path
                </h3>
              </div>
              <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
                For organizations requiring custom SAML single<br />sign-on, administrative audit pathways, and<br />verified security.
              </p>
            </div>

            <div className="flex flex-col w-full mt-auto">
              <div className="h-0 relative shrink-0 w-full mb-[24px] mt-[16px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine1} />
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <button className="border-[#34d4ca] border-[1.5px] border-solid bg-transparent content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-[8px] cursor-pointer hover:bg-[rgba(52,212,202,0.1)] transition-colors">
                  <span className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap">
                    Talk to an expert
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex flex-[1_0_0] flex-col items-start min-w-px overflow-hidden relative rounded-[12px] w-full h-auto self-stretch">
          <div className="h-[160px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPathImage2} />
          </div>
          <div className="content-stretch flex flex-col p-[24px] relative w-full flex-1">
            <div className="content-stretch flex flex-col gap-[16px] w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="bg-[#232b3a] content-stretch flex items-start p-[6px] relative rounded-[6px] shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVideo} />
                  </div>
                </div>
                <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white m-0">
                  Live Events path
                </h3>
              </div>
              <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
                For broadcast planners desiring white-glove setup,<br />signal redundancy monitoring, and hot failover<br />protection.
              </p>
            </div>

            <div className="flex flex-col w-full mt-auto">
              <div className="h-0 relative shrink-0 w-full mb-[24px] mt-[16px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine1} />
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <button className="border-[#34d4ca] border-[1.5px] border-solid bg-transparent content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-[8px] cursor-pointer hover:bg-[rgba(52,212,202,0.1)] transition-colors">
                  <span className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap">
                    Plan a live event
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

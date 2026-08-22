import React from 'react';

const imgSectionFinder = "/images/solutions-overview/finder-section-bg.png";
const imgLine = "/images/solutions-overview/finder-line.svg";

export default function SectionFinder() {
  return (
    <div className="border-[#232b3a] border-b border-solid content-stretch flex flex-col gap-[56px] items-start px-6 lg:px-[112px] py-[60px] lg:py-[120px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgSectionFinder} />
        <div className="absolute bg-[rgba(15,27,45,0.72)] inset-0" />
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-sans font-bold leading-[48px] relative shrink-0 text-[32px] lg:text-[38px] text-white w-full m-0">
          Answer three questions. Get a starting path.
        </h2>
        <p className="font-inter font-normal leading-[28px] not-italic relative shrink-0 text-[#aab3c4] text-[18px] w-full m-0">
          Deterministic rule-based router. No AI scoring, no hidden ranking.
        </p>
      </div>
      <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-start relative shrink-0 w-full z-10">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative w-full">
          <div className="bg-[#0a0d14] border-[#34d4ca] border-[1.5px] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full">
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[15px] whitespace-nowrap m-0">
              QUESTION 1 OF 3
            </p>
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap m-0">
              What are you trying to do?
            </p>
            <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
              <div className="bg-[#34d4ca] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[#0a0d14] text-[13px] whitespace-nowrap m-0">
                  Embed Video feature
                </p>
              </div>
              <div className="bg-[#1b2330] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                  Broadcast live stream
                </p>
              </div>
              <div className="bg-[#1b2330] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                  Secure internal stream
                </p>
              </div>
              <div className="bg-[#1b2330] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                  Regulatory archiving
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#0a0d14] border border-[#232b3a] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full">
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#aab3c4] text-[15px] whitespace-nowrap m-0">
              QUESTION 2 OF 3
            </p>
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap m-0">
              Who needs to watch or access it?
            </p>
            <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
              <div className="bg-[#1b2330] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                  Authenticated Employees
                </p>
              </div>
              <div className="bg-[#4a8cfb] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                  Global Public Scale
                </p>
              </div>
              <div className="bg-[#1b2330] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                  Selected Partners Only
                </p>
              </div>
              <div className="bg-[#1b2330] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                  Internal Operators
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#0a0d14] border border-[#232b3a] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full">
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#aab3c4] text-[15px] whitespace-nowrap m-0">
              QUESTION 3 OF 3
            </p>
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap m-0">
              How do you want to operate it?
            </p>
            <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
              <div className="bg-[#1b2330] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                  In-house Developers
                </p>
              </div>
              <div className="bg-[#1b2330] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                  Outsourced Team
                </p>
              </div>
              <div className="bg-[#1b2330] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[20px] shrink-0">
                <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                  Fully Managed Service
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(16,21,30,0.8)] border-[#232b3a] border-[1.5px] border-solid content-stretch flex flex-col gap-[24px] items-start p-[32px] relative rounded-[16px] shrink-0 w-full lg:w-[440px]">
          <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[14px] tracking-[1px] whitespace-nowrap m-0">
            BEST STARTING PATH
          </p>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap m-0">
              Interactive Feature API
            </h3>
            <p className="font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
              Based on your preference for building product video directly with developer ownership at moderate internal scales.
            </p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <h4 className="font-sans font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap m-0">
              Why this matched:
            </h4>
            <div className="font-inter font-normal not-italic relative shrink-0 text-[#aab3c4] text-[13px] w-full flex flex-col gap-1">
              <p className="leading-[18px] mb-0 m-0">• Need for custom app integrations matches SDK/API path.</p>
              <p className="leading-[18px] m-0">• Developer operations select for raw video engine over managed player portals.</p>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[13px] w-full whitespace-nowrap">
            <p className="font-sans font-normal relative shrink-0 text-[#aab3c4] m-0">
              Alternatives considered:
            </p>
            <p className="cursor-pointer font-sans font-bold relative shrink-0 text-[#4a8cfb] hover:text-[#3273e3] m-0">
              Live Event Web Broadcast →
            </p>
          </div>
          <button className="bg-gradient-to-b cursor-pointer content-stretch flex from-[#34d4ca] items-center justify-center px-[28px] py-[14px] relative rounded-[8px] shrink-0 to-[#4a8cfb] border-none w-full hover:opacity-90 transition-opacity">
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0a0f1a] text-[15px] whitespace-nowrap m-0">
              Go to API solutions
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

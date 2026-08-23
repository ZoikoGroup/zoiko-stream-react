import React from 'react';

const imgSectionObjectives = "/images/solutions-overview/objectives-section-bg.png";
const imgCardImage = "/images/solutions-overview/objectives-card-1.png";
const imgCardImage1 = "/images/solutions-overview/objectives-card-2.png";
const imgCardImage2 = "/images/solutions-overview/objectives-card-3.png";
const imgCardImage3 = "/images/solutions-overview/objectives-card-4.png";
const imgCardImage4 = "/images/solutions-overview/objectives-card-5.png";
const imgCardImage5 = "/images/solutions-overview/objectives-card-6.png";

export default function SectionObjectives() {
  return (
    <div className="border-[#232b3a] border-b border-solid content-stretch flex flex-col gap-[56px] items-start px-[112px] py-[120px] relative w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgSectionObjectives} />
        <div className="absolute bg-[rgba(15,27,45,0.8)] inset-0" />
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-sans font-bold leading-[48px] relative shrink-0 text-[38px] text-white w-full m-0">
          Choose by objective.
        </h2>
        <p className="font-inter font-normal leading-[28px] not-italic relative shrink-0 text-[#aab3c4] text-[18px] w-full m-0">
          For visitors who can describe the result they need.
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full z-10">
        <div className="content-stretch flex gap-[24px] items-stretch relative shrink-0 w-full">
          <div className="bg-[#0a0d14] border border-[#232b3a] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px]">
            <div className="h-[160px] relative shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
              <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[12px] tracking-[1px] uppercase whitespace-nowrap m-0">
                Build video into a product
              </p>
              <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white w-full m-0">
                Embed streaming as a feature
              </h3>
              <p className="font-inter font-normal leading-[22px] relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
                Integrate continuous interactive streaming directly into web or native apps via developer APIs.
              </p>
            </div>
          </div>
          <div className="bg-[#0a0d14] border border-[#232b3a] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px]">
            <div className="h-[160px] relative shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage1} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
              <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[12px] tracking-[1px] uppercase whitespace-nowrap m-0">
                Broadcast globally
              </p>
              <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white w-full m-0">
                One-to-many at scale
              </h3>
              <p className="font-inter font-normal leading-[22px] relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
                Deliver ultra-low latency live media streams to millions of concurrent viewers with globally distributed edges.
              </p>
            </div>
          </div>
          <div className="bg-[#0a0d14] border border-[#232b3a] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px]">
            <div className="h-[160px] relative shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage2} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
              <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[12px] tracking-[1px] uppercase whitespace-nowrap m-0">
                Secure enterprise video
              </p>
              <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white w-full m-0">
                Governed internal and external video
              </h3>
              <p className="font-inter font-normal leading-[22px] relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
                Retain complete authority over access control, audit logging, and encryption workflows.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-stretch relative shrink-0 w-full">
          <div className="bg-[#0a0d14] border border-[#232b3a] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px]">
            <div className="h-[160px] relative shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage3} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
              <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[12px] tracking-[1px] uppercase whitespace-nowrap m-0">
                {`Accessible & multilingual video`}
              </p>
              <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white w-full m-0">
                Captioned, translated, inclusive delivery
              </h3>
              <p className="font-inter font-normal leading-[22px] relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
                Fully automated real-time captions and translations mapped directly onto standard operating schemas.
              </p>
            </div>
          </div>
          <div className="bg-[#0a0d14] border border-[#232b3a] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px]">
            <div className="h-[160px] relative shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage4} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
              <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[12px] tracking-[1px] uppercase whitespace-nowrap m-0">
                Record, replay and preserve
              </p>
              <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white w-full m-0">
                Durable long-term archives
              </h3>
              <p className="font-inter font-normal leading-[22px] relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
                Automated instant video recording, verification logging, and archival cold storage replication.
              </p>
            </div>
          </div>
          <div className="bg-[#0a0d14] border border-[#232b3a] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px]">
            <div className="h-[160px] relative shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage5} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
              <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[12px] tracking-[1px] uppercase whitespace-nowrap m-0">
                Run managed Live Events
              </p>
              <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white w-full m-0">
                Produced, one-time broadcasts
              </h3>
              <p className="font-inter font-normal leading-[22px] relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
                Full professional support, signal monitoring, fallback path protection, and verified outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

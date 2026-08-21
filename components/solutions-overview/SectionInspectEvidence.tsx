import React from 'react';

const imgSectionInspectEvidence = "/images/solutions-overview/inspect-evidence-section-bg.png";
const imgCardImage = "/images/solutions-overview/inspect-evidence-card-1.png";
const imgCardImage1 = "/images/solutions-overview/inspect-evidence-card-2.png";
const imgCardImage2 = "/images/solutions-overview/inspect-evidence-card-3.png";

export default function SectionInspectEvidence() {
  return (
    <div className="border-[#232b3a] border-b border-solid content-stretch flex flex-col gap-[56px] items-start px-6 lg:px-[112px] py-[60px] lg:py-[120px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgSectionInspectEvidence} />
        <div className="absolute bg-[rgba(10,13,20,0.44)] inset-0" />
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-sans font-bold leading-[48px] relative shrink-0 text-[32px] lg:text-[38px] text-white tracking-[-0.8px] w-full m-0">
          What proof can you inspect?
        </h2>
        <p className="font-sans font-normal leading-[28px] relative shrink-0 text-[#aab3c4] text-[18px] w-full m-0">
          Convert trust from abstract reassurance into attributable, current proof.
        </p>
      </div>
      <div className="content-stretch flex flex-col lg:flex-row gap-[24px] items-start relative shrink-0 w-full z-10">
        <div className="bg-[rgba(16,21,30,0.8)] border-[#232b3a] border-[1.5px] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-hidden relative rounded-[16px] w-full cursor-pointer hover:border-[#34d4ca] transition-colors">
          <div className="h-[200px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage} />
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-full">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[20px] text-white m-0">Guides & architecture</h3>
            <div className="[word-break:break-word] content-stretch flex flex-col font-inter font-normal gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#aab3c4] text-[13px] w-full whitespace-normal lg:whitespace-nowrap">
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-white">Category: </span>
                <span className="leading-[normal]">Whitepapers & Integration Manuals</span>
              </p>
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-white">Owner: </span>
                <span className="leading-[normal]">Principal Solutions Architect</span>
              </p>
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-white">Reviewed: </span>
                <span className="leading-[normal]">February 2026</span>
              </p>
            </div>
            <div className="bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)] border-solid content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0 mt-2">
              <p className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[#34d4ca] text-[11px] uppercase m-0">
                PUBLIC / INSPECTABLE
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(16,21,30,0.8)] border-[#232b3a] border-[1.5px] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-hidden relative rounded-[16px] w-full cursor-pointer hover:border-[#34d4ca] transition-colors">
          <div className="h-[200px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage1} />
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-full">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[20px] text-white m-0">Demos & product evidence</h3>
            <div className="[word-break:break-word] content-stretch flex flex-col font-inter font-normal gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#aab3c4] text-[13px] w-full whitespace-normal lg:whitespace-nowrap">
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-white">Category: </span>
                <span className="leading-[normal]">Interactive Sandboxes & Prototypes</span>
              </p>
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-white">Owner: </span>
                <span className="leading-[normal]">Developer Operations Team</span>
              </p>
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-white">Reviewed: </span>
                <span className="leading-[normal]">January 2026</span>
              </p>
            </div>
            <div className="bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)] border-solid content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0 mt-2">
              <p className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[#34d4ca] text-[11px] uppercase m-0">
                DEVELOPER ACCESS ONLY
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(16,21,30,0.8)] border-[#232b3a] border-[1.5px] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-hidden relative rounded-[16px] w-full cursor-pointer hover:border-[#34d4ca] transition-colors">
          <div className="h-[200px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage2} />
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-full">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[20px] text-white m-0">Current trust & operations</h3>
            <div className="[word-break:break-word] content-stretch flex flex-col font-inter font-normal gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#aab3c4] text-[13px] w-full whitespace-normal lg:whitespace-nowrap">
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-white">Category: </span>
                <span className="leading-[normal]">Audit Logs & SLA Reports</span>
              </p>
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-white">Owner: </span>
                <span className="leading-[normal]">Trust and Compliance Office</span>
              </p>
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-white">Reviewed: </span>
                <span className="leading-[normal]">Weekly Auto-Update</span>
              </p>
            </div>
            <div className="bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)] border-solid content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0 mt-2">
              <p className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[#34d4ca] text-[11px] uppercase m-0">
                REAL-TIME TELEMETRY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

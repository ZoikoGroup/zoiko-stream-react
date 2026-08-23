import React from 'react';

const imgSectionQualifier = "/images/solutions-overview/qualifier-section-bg.png";
const imgBgBlob1 = "/images/solutions-overview/qualifier-bg-blob-1.svg";
const imgBgBlob2 = "/images/solutions-overview/qualifier-bg-blob-2.svg";
const imgLine = "/images/solutions-overview/qualifier-line.svg";

export default function SectionQualifier() {
  return (
    <div className="border-[#e1e6eb] border-b border-solid content-stretch flex flex-col gap-[40px] items-start px-6 lg:px-[112px] py-[60px] lg:py-[100px] relative w-full overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionQualifier} />
      <div className="absolute left-[-180px] size-[420px] top-[-120px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-53px] right-[-160px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-10">
        <h2 className="[word-break:break-word] font-sans font-bold leading-[48px] relative shrink-0 text-[#0f1b2d] text-[32px] lg:text-[38px] w-full m-0">
          The right path depends on how you operate.
        </h2>
      </div>
      <div className="content-stretch flex flex-col lg:flex-row gap-[40px] items-start relative shrink-0 w-full z-10">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative w-full">
          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex gap-[20px] items-center p-[20px] relative rounded-[8px] shrink-0 w-full">
            <div className="bg-[#34d4ca] content-stretch flex items-center justify-center opacity-15 relative rounded-[16px] shrink-0 size-[32px]">
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[14px] whitespace-nowrap m-0">
                01
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
              <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-nowrap m-0">
                Implementation ownership
              </h3>
              <p className="font-inter font-normal leading-[20px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
                Choose between fully integrated developer SDKs or turn-key managed portal interfaces.
              </p>
            </div>
          </div>
          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex gap-[20px] items-center p-[20px] relative rounded-[8px] shrink-0 w-full">
            <div className="bg-[#34d4ca] content-stretch flex items-center justify-center opacity-15 relative rounded-[16px] shrink-0 size-[32px]">
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[14px] whitespace-nowrap m-0">
                02
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
              <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-nowrap m-0">
                Audience / access control
              </h3>
              <p className="font-inter font-normal leading-[20px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
                From zero-governance anonymous global public scale to highly restricted SAML-protected networks.
              </p>
            </div>
          </div>
          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex gap-[20px] items-center p-[20px] relative rounded-[8px] shrink-0 w-full">
            <div className="bg-[#34d4ca] content-stretch flex items-center justify-center opacity-15 relative rounded-[16px] shrink-0 size-[32px]">
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[14px] whitespace-nowrap m-0">
                03
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
              <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-nowrap m-0">
                Data governance
              </h3>
              <p className="font-inter font-normal leading-[20px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
                Satisfy rigorous logging, compliance records, residency limits, and encrypted security boundaries.
              </p>
            </div>
          </div>
          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex gap-[20px] items-center p-[20px] relative rounded-[8px] shrink-0 w-full">
            <div className="bg-[#34d4ca] content-stretch flex items-center justify-center opacity-15 relative rounded-[16px] shrink-0 size-[32px]">
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[14px] whitespace-nowrap m-0">
                04
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
              <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-nowrap m-0">
                Accessibility
              </h3>
              <p className="font-inter font-normal leading-[20px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
                Automate delivery with mandatory WCAG compliance, subtitles, real-time captioning, and multi-language feeds.
              </p>
            </div>
          </div>
          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex gap-[20px] items-center p-[20px] relative rounded-[8px] shrink-0 w-full">
            <div className="bg-[#34d4ca] content-stretch flex items-center justify-center opacity-15 relative rounded-[16px] shrink-0 size-[32px]">
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[14px] whitespace-nowrap m-0">
                05
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
              <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-nowrap m-0">
                Operational continuity
              </h3>
              <p className="font-inter font-normal leading-[20px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
                Establish explicit failover logic, alternate routes, redundant inputs, or concierge live monitoring.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f8fafc] border-[#e1e6eb] border-[1.5px] border-solid content-stretch flex flex-col gap-[24px] items-start p-[32px] relative rounded-[12px] shrink-0 w-full lg:w-[400px]">
          <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[18px] whitespace-nowrap m-0">
            Evaluation Framework
          </h3>
          <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">{`Our solutions team evaluates your projects on these five axis points. Instead of assuming your needs based on size, we tailor security, speed, and support directly to your team's existing operational capability.`}</p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine} />
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[#4f5e74] text-[12px] w-full m-0">
            These are evaluation dimensions, not assumptions about your organization.
          </p>
        </div>
      </div>
    </div>
  );
}

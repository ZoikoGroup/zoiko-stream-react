import React from 'react';

const imgSectionComparison = "/images/solutions-overview/comparison-section-bg.png";
const imgBgBlob1 = "/images/solutions-overview/comparison-bg-blob-1.svg";
const imgBgBlob2 = "/images/solutions-overview/comparison-bg-blob-2.svg";

export default function SectionComparison() {
  return (
    <div className="border-[#e1e6eb] border-b border-solid content-stretch flex flex-col gap-[40px] items-start px-[112px] py-[100px] relative w-full overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionComparison} />
      <div className="absolute left-[-180px] size-[420px] top-[-120px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-28px] right-[-160px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-10">
        <h2 className="[word-break:break-word] font-sans font-bold leading-[48px] relative shrink-0 text-[#0f1b2d] text-[38px] w-full m-0">
          Compare the paths before you commit.
        </h2>
      </div>
      <div className="bg-white border-[#e1e6eb] border-[1.5px] border-solid content-stretch flex flex-col items-start p-[24px] relative rounded-[16px] shrink-0 w-full z-10">
        <div className="[word-break:break-word] bg-[#f8fafc] border-[#e1e6eb] border-b-2 border-solid content-stretch flex font-sans font-bold gap-[12px] items-start leading-[normal] p-[16px] relative shrink-0 text-[#0f1b2d] text-[13px] w-full">
          <p className="relative shrink-0 w-[200px] m-0">
            Objective
          </p>
          <p className="flex-[1_0_0] min-w-px relative m-0">
            Best when
          </p>
          <p className="flex-[1_0_0] min-w-px relative m-0">
            Audience/access pattern
          </p>
          <p className="flex-[1_0_0] min-w-px relative m-0">
            Typical operating model
          </p>
          <p className="relative shrink-0 text-right w-[160px] m-0">
            Primary next action
          </p>
        </div>
        <div className="border-[#e1e6eb] border-b border-solid content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full">
          <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[14px] w-[200px] m-0">
            Embed streaming as a feature
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">
            Developing live features directly into custom applications
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">
            App users on web/mobile apps
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">{`Developer API keys & SDK integration`}</p>
          <div className="content-stretch flex items-start justify-end relative shrink-0 w-[160px]">
            <p className="cursor-pointer [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-sans font-bold leading-[normal] relative shrink-0 text-[#4a8cfb] text-[13px] underline whitespace-nowrap hover:text-[#3273e3] m-0">
              Read API Docs
            </p>
          </div>
        </div>
        <div className="border-[#e1e6eb] border-b border-solid content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full">
          <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[14px] w-[200px] m-0">
            Broadcast globally
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">
            Scaling high concurrency to anonymous global public
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">
            Millions of viewers on web/TV platforms
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">
            SLA-backed CDN multi-redundancy
          </p>
          <div className="content-stretch flex items-start justify-end relative shrink-0 w-[160px]">
            <p className="cursor-pointer [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-sans font-bold leading-[normal] relative shrink-0 text-[#4a8cfb] text-[13px] underline whitespace-nowrap hover:text-[#3273e3] m-0">
              Calculate Bandwidth
            </p>
          </div>
        </div>
        <div className="border-[#e1e6eb] border-b border-solid content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full">
          <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[14px] w-[200px] m-0">
            Secure enterprise video
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">{`Confidential corporate town halls & training`}</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">
            Authenticated employees, global regions
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">{`SAML SSO & secure internal stream routing`}</p>
          <div className="content-stretch flex items-start justify-end relative shrink-0 w-[160px]">
            <p className="cursor-pointer [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-sans font-bold leading-[normal] relative shrink-0 text-[#4a8cfb] text-[13px] underline whitespace-nowrap hover:text-[#3273e3] m-0">
              Review Security
            </p>
          </div>
        </div>
        <div className="border-[#e1e6eb] border-b border-solid content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full">
          <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[14px] w-[200px] m-0">{`Accessible & multilingual`}</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">
            Global events demanding real-time captions
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">
            Diverse international audiences
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">{`Auto AI & professional override tracks`}</p>
          <div className="content-stretch flex items-start justify-end relative shrink-0 w-[160px]">
            <p className="cursor-pointer [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-sans font-bold leading-[normal] relative shrink-0 text-[#4a8cfb] text-[13px] underline whitespace-nowrap hover:text-[#3273e3] m-0">
              View Demos
            </p>
          </div>
        </div>
        <div className="border-[#e1e6eb] border-b border-solid content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full">
          <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[14px] w-[200px] m-0">{`Record, replay & preserve`}</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">
            Durable regulatory media archives required
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">{`Archivists & on-demand video viewers`}</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">
            Cold replication storage system
          </p>
          <div className="content-stretch flex items-start justify-end relative shrink-0 w-[160px]">
            <p className="cursor-pointer [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-sans font-bold leading-[normal] relative shrink-0 text-[#4a8cfb] text-[13px] underline whitespace-nowrap hover:text-[#3273e3] m-0">
              Browse Specs
            </p>
          </div>
        </div>
        <div className="border-[#e1e6eb] border-b border-solid content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full">
          <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[14px] w-[200px] m-0">
            Run managed Live Events
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">
            Zero-fail high visibility produced live broadcasts
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">
            Registered VIP attendees, stakeholders
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[20px] min-w-px not-italic relative text-[#4f5e74] text-[13px] m-0">
            Concierge live monitoring, full redundancy
          </p>
          <div className="content-stretch flex items-start justify-end relative shrink-0 w-[160px]">
            <p className="cursor-pointer [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-sans font-bold leading-[normal] relative shrink-0 text-[#4a8cfb] text-[13px] underline whitespace-nowrap hover:text-[#3273e3] m-0">
              Reserve Date
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

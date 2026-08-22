import React from 'react';

const imgSectionOperatingModel = "/images/solutions-overview/operating-model-section-bg.png";
const imgBgBlob1 = "/images/solutions-overview/operating-model-bg-blob-1.svg";
const imgBgBlob2 = "/images/solutions-overview/operating-model-bg-blob-2.svg";
const imgLine = "/images/solutions-overview/operating-model-line.svg";

export default function SectionOperatingModel() {
  return (
    <div className="border-[#e1e6eb] border-b border-solid content-stretch flex flex-col gap-[56px] items-start px-6 lg:px-[112px] py-[60px] lg:py-[120px] relative w-full overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionOperatingModel} />
      <div className="absolute left-[-180px] size-[420px] top-[-120px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[8px] right-[-160px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-sans font-bold leading-[48px] relative shrink-0 text-[#0f1b2d] text-[32px] lg:text-[38px] tracking-[-0.8px] w-full m-0">
          Choose the operating model that fits your team
        </h2>
        <p className="font-sans font-normal leading-[28px] relative shrink-0 text-[#4f5e74] text-[18px] w-full m-0">
          Different structures to manage, support, and govern your video pipeline.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] relative shrink-0 w-full z-10">
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col items-start justify-between overflow-hidden p-[32px] relative rounded-[16px] w-full shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[22px] w-full m-0">
              Developer-led / self-service
            </h3>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
              Ideal for teams integrating video natively as a<br />custom software feature within web or native<br />applications.
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-inter font-normal gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#4f5e74] text-[13px] w-full whitespace-normal">
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-[#0f1b2d]">Who builds: </span>
                <span className="leading-[normal]">Your engineering / product team</span>
              </p>
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-[#0f1b2d]">Who operates: </span>
                <span className="leading-[normal]">Developer operations / platform<br />automated</span>
              </p>
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-[#0f1b2d]">Support SLA: </span>
                <span className="leading-[normal]">Community + developer Slack support<br />SLA</span>
              </p>
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-[#0f1b2d]">Governance: </span>
                <span className="leading-[normal]">API key boundaries and token<br />parameters</span>
              </p>
            </div>
          </div>
          <div className="flex items-start pt-[32px] relative shrink-0 w-full mt-auto">
            <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex w-full items-center justify-center px-[28px] py-[14px] relative rounded-[8px] hover:opacity-90 transition-opacity border-none cursor-pointer">
              <span className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0a0f1a] text-[15px] whitespace-nowrap">
                Start building
              </span>
            </button>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col items-start justify-between overflow-hidden p-[32px] relative rounded-[16px] w-full shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[22px] w-full m-0">
              Enterprise-operated
            </h3>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
              Best for secure internal messaging, high<br />governance town halls, and controlled audience<br />enterprise workflows.
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-inter font-normal gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#4f5e74] text-[13px] w-full whitespace-normal">
              <p className="relative shrink-0 w-full m-0">
                <span className="font-inter font-bold leading-[normal] text-[#0f1b2d]">Who builds: </span>
                <span className="leading-[normal]">Zoiko Solutions / platform engineering<br />integration</span>
              </p>
              <p className="relative shrink-0 w-full m-0">
                <span className="font-inter font-bold leading-[normal] text-[#0f1b2d]">Who operates: </span>
                <span className="leading-[normal]">Internal corporate communications /<br />IT admins</span>
              </p>
              <p className="relative shrink-0 w-full m-0">
                <span className="font-inter font-bold leading-[normal] text-[#0f1b2d]">Support SLA: </span>
                <span className="leading-[normal]">99.99% critical event concierge +<br />dedicated engineer</span>
              </p>
              <p className="relative shrink-0 w-full m-0">
                <span className="font-inter font-bold leading-[normal] text-[#0f1b2d]">Governance: </span>
                <span className="leading-[normal]">SSO enforcement, custom compliance<br />mapping, SSO logs</span>
              </p>
            </div>
          </div>
          <div className="flex items-start pt-[32px] relative shrink-0 w-full mt-auto">
            <button className="border-[#4a8cfb] border-[1.5px] border-solid bg-transparent flex w-full items-center justify-center px-[28px] py-[14px] relative rounded-[8px] hover:bg-slate-50 transition-colors cursor-pointer">
              <span className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[15px] whitespace-nowrap">
                Talk to an expert
              </span>
            </button>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col items-start justify-between overflow-hidden p-[32px] relative rounded-[16px] w-full shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[22px] w-full m-0">
              Professionally managed Live Events
            </h3>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
              Designed for zero-fail global broadcasts, high<br />visibility public keynotes, and managed<br />celebrations.
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-inter font-normal gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#4f5e74] text-[13px] w-full whitespace-normal">
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-[#0f1b2d]">Who builds: </span>
                <span className="leading-[normal]">Zoiko production team (concierge setup)</span>
              </p>
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-[#0f1b2d]">Who operates: </span>
                <span className="leading-[normal]">Zoiko live producers and signal<br />monitors</span>
              </p>
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-[#0f1b2d]">Support SLA: </span>
                <span className="leading-[normal]">Live broadcast monitoring and<br />absolute hot standby fallback</span>
              </p>
              <p className="relative shrink-0 m-0">
                <span className="font-inter font-bold leading-[normal] text-[#0f1b2d]">Governance: </span>
                <span className="leading-[normal]">Archival delivery logs and post-event<br />verification records</span>
              </p>
            </div>
          </div>
          <div className="flex items-start pt-[32px] relative shrink-0 w-full mt-auto">
            <button className="border-[#4a8cfb] border-[1.5px] border-solid bg-transparent flex w-full items-center justify-center px-[28px] py-[14px] relative rounded-[8px] hover:bg-slate-50 transition-colors cursor-pointer">
              <span className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[15px] whitespace-nowrap">
                Plan a live event
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

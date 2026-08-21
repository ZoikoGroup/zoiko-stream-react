import React from 'react';

const imgSectionTrustEvaluator = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgBgBlob1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgBgBlob2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgShield = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgLine = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgEye = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgGitBranch = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgLine1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgSliders = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgCpu = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";

export default function SectionTrustEvaluator() {
  return (
    <div className="border-[#e1e6eb] border-b border-solid content-stretch flex flex-col gap-[56px] items-start px-6 lg:px-[112px] py-[60px] lg:py-[120px] relative w-full overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionTrustEvaluator} />
      <div className="absolute left-[-181px] size-[420px] top-[-120px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-138px] right-[-159px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-sans font-bold leading-[48px] relative shrink-0 text-[#0f1b2d] text-[32px] lg:text-[38px] tracking-[-0.8px] w-full m-0">
          Can this meet your requirements?
        </h2>
        <p className="font-sans font-normal leading-[28px] relative shrink-0 text-[#4f5e74] text-[18px] w-full m-0">
          Five areas to evaluate before conversion—each routed to inspectable evidence, not marketing assurance.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[16px] relative shrink-0 w-full z-10">
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[20px] items-start p-[24px] relative rounded-[12px] w-full cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between relative w-full">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[18px] m-0">
              Security
            </h3>
            <div className="bg-[#e2e8f0] flex items-start p-[8px] relative rounded-[6px] shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShield} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[20px] not-italic relative shrink-0 text-[#4f5e74] text-[13px] w-full m-0">
            Cryptographic verification of workflow outcomes, full SSO audit pathways, and managed security boundaries.
          </p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[8px] items-start relative shrink-0 text-[12px] w-full">
            <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] uppercase m-0">
              What to verify:
            </p>
            <p className="font-inter font-normal leading-[18px] not-italic relative shrink-0 text-[#4f5e74] w-full m-0">
              Inspect compliance specs, encryption qualification guides, and SSO configurations.
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[20px] items-start p-[24px] relative rounded-[12px] w-full cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between relative w-full">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[18px] m-0">
              Accessibility
            </h3>
            <div className="bg-[#e2e8f0] flex items-start p-[8px] relative rounded-[6px] shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEye} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[20px] not-italic relative shrink-0 text-[#4f5e74] text-[13px] w-full m-0">
            Strict WCAG compliance, automated real-time captions, multi-language alternative audio layouts.
          </p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[8px] items-start relative shrink-0 text-[12px] w-full">
            <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] uppercase m-0">
              What to verify:
            </p>
            <p className="font-inter font-normal leading-[18px] not-italic relative shrink-0 text-[#4f5e74] w-full m-0">
              Review auto-generated transcript accuracy metrics and player compliance scores.
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[20px] items-start p-[24px] relative rounded-[12px] w-full cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between relative w-full">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[18px] m-0">
              Resilience
            </h3>
            <div className="bg-[#e2e8f0] flex items-start p-[8px] relative rounded-[6px] shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGitBranch} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[20px] not-italic relative shrink-0 text-[#4f5e74] text-[13px] w-full m-0">
            Deterministic failover options, operational logic matrices, and multiple active ingestion streams.
          </p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine1} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[8px] items-start relative shrink-0 text-[12px] w-full">
            <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] uppercase m-0">
              What to verify:
            </p>
            <p className="font-inter font-normal leading-[18px] not-italic relative shrink-0 text-[#4f5e74] w-full m-0">
              Verify active fallback pathways and review historical failover telemetry.
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[20px] items-start p-[24px] relative rounded-[12px] w-full cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between relative w-full">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[18px] m-0">
              Governance
            </h3>
            <div className="bg-[#e2e8f0] flex items-start p-[8px] relative rounded-[6px] shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSliders} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[20px] not-italic relative shrink-0 text-[#4f5e74] text-[13px] w-full m-0">
            Detailed administrative audit logs, regional residency controls, and deterministic workflow governance.
          </p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[8px] items-start relative shrink-0 text-[12px] w-full">
            <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] uppercase m-0">
              What to verify:
            </p>
            <p className="font-inter font-normal leading-[18px] not-italic relative shrink-0 text-[#4f5e74] w-full m-0">
              Access current audit records and regional boundary mapping rules.
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[20px] items-start p-[24px] relative rounded-[12px] w-full cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between relative w-full">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[18px] m-0">
              Operating model
            </h3>
            <div className="bg-[#e2e8f0] flex items-start p-[8px] relative rounded-[6px] shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCpu} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[20px] not-italic relative shrink-0 text-[#4f5e74] text-[13px] w-full m-0">
            From raw API-first infrastructure to fully white-glove produced and managed broadcasts.
          </p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[8px] items-start relative shrink-0 text-[12px] w-full">
            <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] uppercase m-0">
              What to verify:
            </p>
            <p className="font-inter font-normal leading-[18px] not-italic relative shrink-0 text-[#4f5e74] w-full m-0">
              Select developer documentation or review concierge managed service SLAs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

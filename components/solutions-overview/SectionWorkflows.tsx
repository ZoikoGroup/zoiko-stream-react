import React from 'react';

const imgSectionWorkflows = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgCardImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgCardImage1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgCardImage2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgCardImage3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgCardImage4 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgCardImage5 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgBgBlob1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgBgBlob2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgCpu = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgLock = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgKey = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgGlobe = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgDatabase = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
const imgActivity = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";

export default function SectionWorkflows() {
  return (
    <div className="border-[#e1e6eb] border-b border-solid content-stretch flex flex-col gap-[56px] items-start px-6 lg:px-[112px] py-[60px] lg:py-[120px] relative w-full overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionWorkflows} />
      <div className="absolute left-[-181px] size-[420px] top-[-120px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[113px] right-[-159px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-sans font-bold leading-[48px] relative shrink-0 text-[#0f1b2d] text-[32px] lg:text-[38px] w-full m-0">
          Start from a known workflow.
        </h2>
        <p className="font-inter font-normal leading-[28px] not-italic relative shrink-0 text-[#4f5e74] text-[18px] w-full m-0">
          Open a workflow to see the platform stages, trust requirements, and operating model relevant to that job.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] relative shrink-0 w-full z-10">
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full cursor-pointer hover:shadow-lg transition-shadow">
          <div className="aspect-[389/160] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage} />
          </div>
          <div className="flex flex-col gap-[12px] items-start p-[24px] relative w-full flex-1">
            <div className="flex gap-[8px] items-center relative w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden relative shrink-0 size-[18px]">
                <div className="relative shrink-0 size-[16.2px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCpu} />
                </div>
              </div>
              <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] m-0">
                Live product video
              </h3>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
              Embed video inside custom software features
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full cursor-pointer hover:shadow-lg transition-shadow">
          <div className="aspect-[389/160] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage1} />
          </div>
          <div className="flex flex-col gap-[12px] items-start p-[24px] relative w-full flex-1">
            <div className="flex gap-[8px] items-center relative w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden relative shrink-0 size-[18px]">
                <div className="relative shrink-0 size-[16.2px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLock} />
                </div>
              </div>
              <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] m-0">
                Enterprise broadcast
              </h3>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">{`High security corporate town halls & events`}</p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full cursor-pointer hover:shadow-lg transition-shadow">
          <div className="aspect-[389/160] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage2} />
          </div>
          <div className="flex flex-col gap-[12px] items-start p-[24px] relative w-full flex-1">
            <div className="flex gap-[8px] items-center relative w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden relative shrink-0 size-[18px]">
                <div className="relative shrink-0 size-[16.2px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgKey} />
                </div>
              </div>
              <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] m-0">
                Private audience delivery
              </h3>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
              Managed portal streaming for authenticated VIPs
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full cursor-pointer hover:shadow-lg transition-shadow">
          <div className="aspect-[389/160] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage3} />
          </div>
          <div className="flex flex-col gap-[12px] items-start p-[24px] relative w-full flex-1">
            <div className="flex gap-[8px] items-center relative w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden relative shrink-0 size-[18px]">
                <div className="relative shrink-0 size-[16.2px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlobe} />
                </div>
              </div>
              <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] m-0">
                Global event streaming
              </h3>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
              Zero-latency live streams to millions globally
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full cursor-pointer hover:shadow-lg transition-shadow">
          <div className="aspect-[389/160] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage4} />
          </div>
          <div className="flex flex-col gap-[12px] items-start p-[24px] relative w-full flex-1">
            <div className="flex gap-[8px] items-center relative w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden relative shrink-0 size-[18px]">
                <div className="relative shrink-0 size-[16.2px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDatabase} />
                </div>
              </div>
              <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] m-0">
                Media preservation
              </h3>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
              Durable continuous archiving and records
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full cursor-pointer hover:shadow-lg transition-shadow">
          <div className="aspect-[389/160] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage5} />
          </div>
          <div className="flex flex-col gap-[12px] items-start p-[24px] relative w-full flex-1">
            <div className="flex gap-[8px] items-center relative w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden relative shrink-0 size-[18px]">
                <div className="relative shrink-0 size-[16.2px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgActivity} />
                </div>
              </div>
              <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] m-0">
                Operational analytics
              </h3>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">{`Continuous pipeline latency & performance telemetry`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
const imgSectionWorkflows = "/images/solutions-overview/3d81f83a6e876dc82b4044752dfc579aaaef8682.png";
const imgCardImage = "/images/solutions-overview/b03148058f2d343032b3f35679e9b4953393afc2.png";
const imgCardImage1 = "/images/solutions-overview/43d31fd7fe85ad847de33369aa90178eba23cd17.png";
const imgCardImage2 = "/images/solutions-overview/b8313cfe20357c63badcb1346d68e48d0b734634.png";
const imgCardImage3 = "/images/solutions-overview/885261716c3cbc0ba8270bb0c596fe7ffb7c63ae.png";
const imgCardImage4 = "/images/solutions-overview/ff57bd07f0f8f705b0c08b812d866142173c0764.png";
const imgCardImage5 = "/images/solutions-overview/d3dffa70e7a6d2dca342db52eccf622348272579.png";
const imgBgBlob1 = "/images/solutions-overview/183fd2204044faeb6041b72b6cd04b31eff39a4f.svg";
const imgBgBlob2 = "/images/solutions-overview/aba9cb8a369d7a808afbc61598051eb334996590.svg";
const imgCpu = "/images/solutions-overview/4e2d4a3cf9b1705ef19b9fc17cea4d627a499769.svg";
const imgLock = "/images/solutions-overview/283ce21166b737cf8b8cbe43598b936394e31d40.svg";
const imgKey = "/images/solutions-overview/ae004529ad8f7cb3335d56d9a9a4fc33dd40cacc.svg";
const imgGlobe = "/images/solutions-overview/4a1390e8d5e2ae275303d6551d44f910e8f16a41.svg";
const imgDatabase = "/images/solutions-overview/db9f48f5b08400cd19b6b7f37881aa7f23418e49.svg";
const imgActivity = "/images/solutions-overview/86ffd6d44b62cc2bca10fba5877380fd49c23d7e.svg";

export default function SectionWorkflows() {
  return (
    <div className="border-[#e1e6eb] border-b border-solid content-stretch flex flex-col gap-[56px] items-start px-[112px] py-[120px] relative size-full">
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
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <p className="font-sans font-bold leading-[48px] relative shrink-0 text-[#0f1b2d] text-[38px] w-full">
          Start from a known workflow.
        </p>
        <p className="font-inter font-normal leading-[28px] not-italic relative shrink-0 text-[#4f5e74] text-[18px] w-full">
          Open a workflow to see the platform stages, trust requirements, and operating model relevant to that job.
        </p>
      </div>
      <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[389px]">
          <div className="h-[160px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage} />
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]">
                <div className="relative shrink-0 size-[16.2px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCpu} />
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-nowrap">
                Live product video
              </p>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full">
              Embed video inside custom software features
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[389px]">
          <div className="h-[160px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage1} />
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]">
                <div className="relative shrink-0 size-[16.2px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLock} />
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-nowrap">
                Enterprise broadcast
              </p>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full">{`High security corporate town halls & events`}</p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[389px]">
          <div className="h-[160px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage2} />
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]">
                <div className="relative shrink-0 size-[16.2px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgKey} />
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-nowrap">
                Private audience delivery
              </p>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full">
              Managed portal streaming for authenticated VIPs
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex flex-col h-[284px] items-start overflow-clip relative rounded-[12px] shrink-0 w-[389px]">
          <div className="h-[160px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage3} />
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]">
                <div className="relative shrink-0 size-[16.2px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlobe} />
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-nowrap">
                Global event streaming
              </p>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full">
              Zero-latency live streams to millions globally
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex flex-col h-[284px] items-start overflow-clip relative rounded-[12px] shrink-0 w-[389px]">
          <div className="h-[160px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage4} />
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]">
                <div className="relative shrink-0 size-[16.2px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDatabase} />
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-nowrap">
                Media preservation
              </p>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full">
              Durable continuous archiving and records
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[389px]">
          <div className="h-[160px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage5} />
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]">
                <div className="relative shrink-0 size-[16.2px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgActivity} />
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-nowrap">
                Operational analytics
              </p>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full">{`Continuous pipeline latency & performance telemetry`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
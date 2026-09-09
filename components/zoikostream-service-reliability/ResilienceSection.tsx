import React from 'react';
const imgResilienceSection = "/images/zoikostream-service-reliability/read-evidence-section-read-evidence-section.png";
const imgImgCol1 = "/images/zoikostream-service-reliability/resilience-section-img-col1.png";
const imgImgCol2 = "/images/zoikostream-service-reliability/resilience-section-img-col2.png";
const imgImgCol3 = "/images/zoikostream-service-reliability/resilience-section-img-col3.png";
const imgBgBlob2 = "/images/zoikostream-service-reliability/controlled-access-section-bg-blob2.svg";
const imgBgBlob1 = "/images/zoikostream-service-reliability/controlled-access-section-bg-blob1.svg";
const imgStatusDot = "/images/zoikostream-service-reliability/current-evidence-section-status-dot.svg";
const imgStatusDot1 = "/images/zoikostream-service-reliability/read-evidence-section-dot2.svg";
const imgStatusDot2 = "/images/zoikostream-service-reliability/read-evidence-section-dot1.svg";
const imgStatusDot3 = "/images/zoikostream-service-reliability/read-evidence-section-dot4.svg";

export default function ResilienceSection() {
  return (
    <div className="flex flex-col gap-[56px] items-center pb-[120px] pt-[100px] px-6 lg:px-[112px] relative w-full overflow-hidden" data-node-id="3842:3360" data-name="Resilience-Section">
      <img alt="" className="absolute inset-0 z-0 max-w-none object-cover pointer-events-none size-full" src={imgResilienceSection} />
      <div className="absolute bottom-[-42px] right-[-168px] size-[520px]" data-node-id="3842:3361" data-name="bg-blob-2">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>
      <div className="absolute left-[-125px] size-[420px] top-[-55px]" data-node-id="3842:3362" data-name="bg-blob-1">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="flex flex-col gap-[56px] items-start px-6 xl:px-0 w-full max-w-[1247px] relative z-10">
      <div className="[word-break:break-word] flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="3842:3363" data-name="Section-Header">
        <p className="font-sans font-bold font-bold leading-[48px] relative shrink-0 text-[#0a0d13] text-[38px] tracking-[-0.38px] w-full" data-node-id="3842:3364">
          Resilience and continuity assurance
        </p>
        <p className="font-sans font-normal font-normal leading-[28px] relative shrink-0 text-[#4f5e74] text-[18px] w-full" data-node-id="3842:3365">
          Public-safe evidence of resilience design, continuity governance, and recovery capability.
        </p>
      </div>
      <div className="gap-y-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-node-id="3842:3366" data-name="Resilience-Three-Col">
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-1 flex flex-col gap-[20px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-1 self-start shrink-0" data-node-id="3842:3367" data-name="Column-1">
          <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-node-id="3842:3368" data-name="img-col-1">
            <img alt="" className="absolute inset-0 z-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImgCol1} />
          </div>
          <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3369">
            Resilience Architecture
          </p>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] min-w-full relative shrink-0 text-[#4f5e74] text-[13px] w-[min-content]" data-node-id="3842:3370">
            Public-safe conceptual diagrams detailing fault isolation <br className="hidden lg:block" /> nodes, hardware redundancy, and external carrier <br className="hidden lg:block" /> boundaries.
          </p>
          <div className="flex gap-[8px] items-start relative shrink-0" data-node-id="3842:3371" data-name="badges">
            <div className="bg-[rgba(0,212,170,0.08)] flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="3842:3372" data-name="status-chip">
              <div className="relative shrink-0 size-[6px]" data-node-id="3842:3373" data-name="status-dot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStatusDot} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#00d4aa] text-[11px] uppercase whitespace-nowrap" data-node-id="3842:3374">
                Policy/Plan
              </p>
            </div>
            <div className="bg-[rgba(76,134,255,0.08)] flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="3842:3375" data-name="status-chip">
              <div className="relative shrink-0 size-[6px]" data-node-id="3842:3376" data-name="status-dot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStatusDot1} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#4c86ff] text-[11px] uppercase whitespace-nowrap" data-node-id="3842:3377">
                Audited
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-2 flex flex-col gap-[20px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-1 self-start shrink-0" data-node-id="3842:3378" data-name="Column-2">
          <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-node-id="3842:3379" data-name="img-col-2">
            <img alt="" className="absolute inset-0 z-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImgCol2} />
          </div>
          <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3380">
            Business Continuity
          </p>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] min-w-full relative shrink-0 text-[#4f5e74] text-[13px] w-[min-content]" data-node-id="3842:3381">
            Documented service continuity governance structures, <br className="hidden lg:block" /> certified exercise records, and third-party validation <br className="hidden lg:block" /> reports.
          </p>
          <div className="flex gap-[8px] items-start relative shrink-0" data-node-id="3842:3382" data-name="badges">
            <div className="bg-[rgba(245,158,11,0.08)] flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="3842:3383" data-name="status-chip">
              <div className="relative shrink-0 size-[6px]" data-node-id="3842:3384" data-name="status-dot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStatusDot2} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#f59e0b] text-[11px] uppercase whitespace-nowrap" data-node-id="3842:3385">
                Exercise/Test
              </p>
            </div>
            <div className="bg-[rgba(76,134,255,0.08)] flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="3842:3386" data-name="status-chip">
              <div className="relative shrink-0 size-[6px]" data-node-id="3842:3387" data-name="status-dot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStatusDot1} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#4c86ff] text-[11px] uppercase whitespace-nowrap" data-node-id="3842:3388">
                Verified
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-3 flex flex-col gap-[20px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-1 self-start shrink-0" data-node-id="3842:3389" data-name="Column-3">
          <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-node-id="3842:3390" data-name="img-col-3">
            <img alt="" className="absolute inset-0 z-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImgCol3} />
          </div>
          <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3391">
            Recovery Assurance
          </p>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] min-w-full relative shrink-0 text-[#4f5e74] text-[13px] w-[min-content]" data-node-id="3842:3392">
            Validated recovery exercise logs, infrastructure <br className="hidden lg:block" /> restoration metrics, and operational performance during <br className="hidden lg:block" /> backup routines.
          </p>
          <div className="flex gap-[8px] items-start relative shrink-0" data-node-id="3842:3393" data-name="badges">
            <div className="bg-[rgba(0,212,170,0.08)] flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="3842:3394" data-name="status-chip">
              <div className="relative shrink-0 size-[6px]" data-node-id="3842:3395" data-name="status-dot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStatusDot} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#00d4aa] text-[11px] uppercase whitespace-nowrap" data-node-id="3842:3396">
                Observed Recovery
              </p>
            </div>
            <div className="bg-[rgba(239,68,68,0.08)] flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="3842:3397" data-name="status-chip">
              <div className="relative shrink-0 size-[6px]" data-node-id="3842:3398" data-name="status-dot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStatusDot3} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#ef4444] text-[11px] uppercase whitespace-nowrap" data-node-id="3842:3399">
                Contractual
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f7fc] border border-[#e2e8f0] border-solid flex items-center justify-between p-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="3842:3400" data-name="BannerRow">
        <div className="[word-break:break-word] flex-[1_0_0] font-sans font-normal font-normal leading-[0] min-w-px relative text-[#4f5e74] text-[14px] whitespace-pre-wrap" data-node-id="3842:3401">
          <p className="leading-[normal] mb-0">{`*A continuity plan is not a tested recovery result. RTO/RPO render only from authoritative sources with exact scope and `}</p>
          <p className="leading-[normal]">conditions.</p>
        </div>
      </div>
      </div>
    </div>
  );
}
import React from 'react';
const imgDependenciesSection = "/images/zoikostream-service-reliability/dependencies-section-dependencies-section.png";
const imgCardImage = "/images/zoikostream-service-reliability/dependencies-section-card-image.png";
const imgCardImage1 = "/images/zoikostream-service-reliability/dependencies-section-card-image1.png";
const imgCardImage2 = "/images/zoikostream-service-reliability/dependencies-section-card-image2.png";
const imgCardImage3 = "/images/zoikostream-service-reliability/dependencies-section-card-image3.png";
const imgCardImage4 = "/images/zoikostream-service-reliability/dependencies-section-card-image4.png";
const imgBgBlob2 = "/images/zoikostream-service-reliability/controlled-access-section-bg-blob2.svg";
const imgBgBlob1 = "/images/zoikostream-service-reliability/controlled-access-section-bg-blob1.svg";
const imgShieldCheck = "/images/zoikostream-service-reliability/dependencies-section-shield-check.svg";
const imgExternalLink = "/images/zoikostream-service-reliability/dependencies-section-external-link.svg";

export default function DependenciesSection() {
  return (
    <div className="flex flex-col gap-[56px] items-center px-6 lg:px-[112px] py-12 lg:py-[100px] relative w-full overflow-hidden" data-node-id="3842:3439" data-name="Dependencies-Section">
      <img alt="" className="absolute inset-0 z-0 max-w-none object-cover pointer-events-none size-full" src="/images/zoikostream-data-protection/faq-bg.png" />
      <div className="absolute bottom-[18px] right-[-148px] size-[520px]" data-node-id="3842:3440" data-name="bg-blob-2">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>
      <div className="absolute left-[-140px] size-[420px] top-[-88px]" data-node-id="3842:3441" data-name="bg-blob-1">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="flex flex-col gap-[56px] items-start px-6 xl:px-0 w-full max-w-[1247px] relative z-10">
      <div className="[word-break:break-word] flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="3842:3442" data-name="SectionHeader">
        <p className="font-sans font-bold font-bold leading-[60.8px] relative shrink-0 text-[#0a0d13] text-[37.9px] tracking-[-0.38px] w-full" data-node-id="3842:3443">
          Dependencies and data durability boundaries
        </p>
        <p className="font-sans font-normal font-normal leading-[28.8px] relative shrink-0 text-[#4f5e74] text-[18px] w-full" data-node-id="3842:3444">
          Third-party, backup, retention, recovery, and availability are related but not interchangeable.
        </p>
      </div>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[repeat(2,fit-content(100%))] h-[598px] relative shrink-0 w-full" data-node-id="3842:3445" data-name="Concept-Grid">
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-1 flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-1 self-stretch shrink-0" data-node-id="3842:3446" data-name="Concept-Card-0">
          <div className="h-[160px] relative shrink-0 w-full" data-node-id="3842:3447" data-name="card-image">
            <img alt="" className="absolute inset-0 z-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage} />
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full" data-node-id="3842:3448" data-name="card-body">
            <p className="font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3449">
              Availability
            </p>
            <p className="font-sans font-normal font-normal leading-[22px] min-w-full relative shrink-0 text-[#4f5e74] text-[14px] w-[min-content]" data-node-id="3842:3450">
              Historical/assurance evidence via Service <br className="hidden lg:block" /> Reliability mappings.
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-2 flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-1 self-stretch shrink-0" data-node-id="3842:3451" data-name="Concept-Card-1">
          <div className="h-[160px] relative shrink-0 w-full" data-node-id="3842:3452" data-name="card-image">
            <img alt="" className="absolute inset-0 z-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage1} />
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full" data-node-id="3842:3453" data-name="card-body">
            <p className="font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3454">
              Durability
            </p>
            <p className="font-sans font-normal font-normal leading-[22px] min-w-full relative shrink-0 text-[#4f5e74] text-[14px] w-[min-content]" data-node-id="3842:3455">
              Only source-backed public assurance mapping <br className="hidden lg:block" /> hardware storage integrity standards.
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-3 flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-1 self-stretch shrink-0" data-node-id="3842:3456" data-name="Concept-Card-2">
          <div className="h-[160px] relative shrink-0 w-full" data-node-id="3842:3457" data-name="card-image">
            <img alt="" className="absolute inset-0 z-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage2} />
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full" data-node-id="3842:3458" data-name="card-body">
            <p className="font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3459">
              Backup
            </p>
            <p className="font-sans font-normal font-normal leading-[22px] min-w-full relative shrink-0 text-[#4f5e74] text-[14px] w-[min-content]" data-node-id="3842:3460">
              Only approved continuity/recovery relationship, <br className="hidden lg:block" /> validating geographic database replication.
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-1 flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-2 self-stretch shrink-0" data-node-id="3842:3461" data-name="Concept-Card-3">
          <div className="h-[160px] relative shrink-0 w-full" data-node-id="3842:3462" data-name="card-image">
            <img alt="" className="absolute inset-0 z-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage3} />
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full" data-node-id="3842:3463" data-name="card-body">
            <p className="font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3464">
              Retention
            </p>
            <p className="font-sans font-normal font-normal leading-[22px] min-w-full relative shrink-0 text-[#4f5e74] text-[14px] w-[min-content]" data-node-id="3842:3465">
              Not a reliability metric. Governed under Data <br className="hidden lg:block" /> Protection guidelines for lifespan rules.
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-2 flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-2 self-stretch shrink-0" data-node-id="3842:3466" data-name="Concept-Card-4">
          <div className="h-[160px] relative shrink-0 w-full" data-node-id="3842:3467" data-name="card-image">
            <img alt="" className="absolute inset-0 z-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage4} />
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full" data-node-id="3842:3468" data-name="card-body">
            <p className="font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3469">
              Restoration
            </p>
            <p className="font-sans font-normal font-normal leading-[22px] min-w-full relative shrink-0 text-[#4f5e74] text-[14px] w-[min-content]" data-node-id="3842:3470">
              Only approved recovery evidence. Resolves <br className="hidden lg:block" /> customer-level support and retrieval actions.
            </p>
          </div>
        </div>
        <div className="bg-[rgba(0,212,170,0.03)] border border-[#00d4aa] border-solid col-3 flex flex-col gap-[20px] items-center justify-center justify-self-stretch p-[24px] relative rounded-[16px] row-2 self-stretch shrink-0" data-node-id="3842:3471" data-name="Inventory-CTA-Card">
          <div className="relative shrink-0 size-[40px]" data-node-id="3842:3472" data-name="shield-check">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShieldCheck} />
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[8px] items-center leading-[normal] relative shrink-0 text-center w-full max-w-[317px]" data-node-id="3842:3474" data-name="Frame">
            <p className="font-sans font-bold font-bold relative shrink-0 text-[#0a0d13] text-[16px] whitespace-nowrap" data-node-id="3842:3475">
              Infrastructure Subprocessors
            </p>
            <p className="font-sans font-normal font-normal relative shrink-0 text-[#4f5e74] text-[13px] w-full max-w-[317px]" data-node-id="3842:3476">
              Our active list of audited cloud partners, carrier <br className="hidden lg:block" /> lines, and content networks.
            </p>
          </div>
          <div className="bg-[#0a0d13] flex gap-[8px] items-center px-[20px] py-[10px] relative rounded-[8px] shrink-0" data-node-id="3842:3477" data-name="CTA-Link">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap" data-node-id="3842:3478">
              Subprocessors inventory
            </p>
            <div className="relative shrink-0 size-[14px]" data-node-id="3842:3479" data-name="external-link">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExternalLink} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
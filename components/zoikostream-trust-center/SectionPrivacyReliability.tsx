import React from 'react';

const imgPrivacyCard = "/images/zoikostream-trust-center/privacy-reliability-privacy-card.png";
const imgReliabilityCard = "/images/zoikostream-trust-center/privacy-reliability-reliability-card.png";

export default function SectionPrivacyReliability() {
  return (
    <div className="border-b border-[#dde2ea] border-solid w-full px-6 lg:px-0 py-[48px] lg:py-[56px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
        <div className="bg-white border border-[#dde2ea] border-solid rounded-[18px] overflow-hidden flex flex-col items-start">
          <div className="w-full aspect-[472/265.5]">
            <img alt="Privacy, residency and subprocessors" className="w-full h-full object-cover" src={imgPrivacyCard} />
          </div>
          <div className="flex flex-col gap-[16px] items-start p-[26px] w-full">
            <p className="font-sora font-bold text-[#32353c] text-[18px] leading-[1.6] tracking-[-0.18px] m-0 w-full">
              Privacy, residency and subprocessors
            </p>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[1.6] m-0 w-full">
              <span className="hidden lg:inline">
                ZoikoStream approaches data minimization, access, retention<br />
                and customer controls with a governed subprocessor registry<br />
                and documented regional capabilities.
              </span>
              <span className="lg:hidden">
                ZoikoStream approaches data minimization, access, retention and customer controls with a governed subprocessor registry and documented regional capabilities.
              </span>
            </p>
            <div className="flex flex-wrap gap-x-[24px] gap-y-[8px] items-center w-full">
              <p className="font-inter font-semibold text-[#5b8def] text-[14.5px] m-0 whitespace-nowrap cursor-pointer">Review data practices →</p>
              <p className="font-inter font-semibold text-[#5b8def] text-[14.5px] m-0 whitespace-nowrap cursor-pointer">View subprocessors →</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#dde2ea] border-solid rounded-[18px] overflow-hidden flex flex-col items-start">
          <div className="w-full aspect-[472/265.5]">
            <img alt="Reliability and service health" className="w-full h-full object-cover" src={imgReliabilityCard} />
          </div>
          <div className="flex flex-col gap-[16px] items-start p-[26px] w-full">
            <p className="font-sora font-bold text-[#32353c] text-[18px] leading-[1.6] tracking-[-0.18px] m-0 w-full">
              Reliability and service health
            </p>
            <div className="bg-[#f7f9fb] rounded-[10px] px-[14px] py-[12px] flex gap-[10px] items-center w-full">
              <div className="bg-[#3fbf7f] rounded-full size-[9px] shrink-0" />
              <p className="font-inter font-normal text-[#32353c] text-[13.5px] m-0">Platform status: Operational · Updated 4 minutes ago</p>
            </div>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[1.6] m-0 w-full">
              <span className="hidden lg:inline">
                Resilience is treated as an operating discipline — redundancy,<br />
                observability, backup/recovery and incident response —<br />
                scoped to verified ZoikoStream services.
              </span>
              <span className="lg:hidden">
                Resilience is treated as an operating discipline — redundancy, observability, backup/recovery and incident response — scoped to verified ZoikoStream services.
              </span>
            </p>
            <p className="font-inter font-semibold text-[#5b8def] text-[14.5px] m-0 whitespace-nowrap cursor-pointer">Open System Status →</p>
          </div>
        </div>
      </div>
    </div>
  );
}

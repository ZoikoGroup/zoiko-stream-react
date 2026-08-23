import React from 'react';

const imgSectionOrganization = "/images/solutions-overview/organization-section-bg.png";
const imgCardImage = "/images/solutions-overview/organization-card-1.png";
const imgCardImage1 = "/images/solutions-overview/organization-card-2.png";
const imgCardImage2 = "/images/solutions-overview/organization-card-3.png";
const imgCardImage3 = "/images/solutions-overview/organization-card-4.png";
const imgCardImage4 = "/images/solutions-overview/organization-card-5.png";
const imgCardImage5 = "/images/solutions-overview/organization-card-6.png";

export default function SectionOrganization() {
  return (
    <div className="border-[#232b3a] border-b border-solid content-stretch flex flex-col gap-[56px] items-start px-[112px] py-[120px] relative w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgSectionOrganization} />
        <div className="absolute bg-[rgba(15,27,45,0.08)] inset-0" />
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-sans font-bold leading-[48px] relative shrink-0 text-[38px] text-white w-full m-0">
          Which context resembles yours?
        </h2>
        <p className="font-inter font-normal leading-[28px] not-italic relative shrink-0 text-[#aab3c4] text-[18px] w-full m-0">
          Operating context and requirements—not industry stereotypes or assumed scale.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] relative shrink-0 w-full z-10">
        <div className="bg-[#0a0d14] border border-[#232b3a] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full">
          <div className="aspect-[389/160] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage} />
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[12px] items-start p-[24px] relative w-full flex-1">
            <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white w-full m-0">{`Developers & product teams`}</h3>
            <p className="font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
              Integrate video via APIs. Complete control over player, interface, and logic.
            </p>
          </div>
        </div>
        <div className="bg-[#0a0d14] border border-[#232b3a] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full">
          <div className="aspect-[389/160] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage1} />
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[12px] items-start p-[24px] relative w-full flex-1">
            <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white w-full m-0">
              Enterprises
            </h3>
            <p className="font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
              Single sign-on, complete governance logging, and internal corporate secure routing.
            </p>
          </div>
        </div>
        <div className="bg-[#0a0d14] border border-[#232b3a] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full">
          <div className="aspect-[389/160] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage2} />
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[12px] items-start p-[24px] relative w-full flex-1">
            <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white w-full m-0">{`Media & communications`}</h3>
            <p className="font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
              High throughput distribution, multi-CDN delivery paths, and raw file preservation.
            </p>
          </div>
        </div>
        <div className="bg-[#0a0d14] border border-[#232b3a] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full">
          <div className="aspect-[389/160] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage3} />
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[12px] items-start p-[24px] relative w-full flex-1">
            <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white w-full m-0">
              Education
            </h3>
            <p className="font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
              Accessible delivery, continuous archiving, integrated learning tools, and secure spaces.
            </p>
          </div>
        </div>
        <div className="bg-[#0a0d14] border border-[#232b3a] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full">
          <div className="aspect-[389/160] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage4} />
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[12px] items-start p-[24px] relative w-full flex-1">
            <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white w-full m-0">{`Faith & community`}</h3>
            <p className="font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
              Easy-to-operate live broadcasts, automated archiving, and inclusive captioned streams.
            </p>
          </div>
        </div>
        <div className="bg-[#0a0d14] border border-[#232b3a] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full">
          <div className="aspect-[389/160] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage5} />
          </div>
          <div className="[word-break:break-word] flex flex-col gap-[12px] items-start p-[24px] relative w-full flex-1">
            <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[18px] text-white w-full m-0">{`Public & civic institutions`}</h3>
            <p className="font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#aab3c4] text-[14px] w-full m-0">
              Fully accessible, audited records, secure hosting, and citizen-first communications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

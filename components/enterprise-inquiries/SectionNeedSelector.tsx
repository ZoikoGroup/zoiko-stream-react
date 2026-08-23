import React from 'react';

const imgVideoPlatformApis = "/images/enterprise-inquiries/need-video-platform-apis.png";
const imgLiveStreamingScale = "/images/enterprise-inquiries/need-live-streaming-scale.png";
const imgSecureInternalVideo = "/images/enterprise-inquiries/need-secure-internal-video.png";
const imgMigrationModernization = "/images/enterprise-inquiries/need-migration-modernization.png";
const imgGlobalMultiRegion = "/images/enterprise-inquiries/need-global-multi-region.png";
const imgSecurityProcurement = "/images/enterprise-inquiries/need-security-procurement.png";
const imgEnterpriseSupport = "/images/enterprise-inquiries/need-enterprise-support.png";
const imgOneLiveEvent = "/images/enterprise-inquiries/need-one-live-event.png";

const NEEDS = [
  {
    image: imgVideoPlatformApis,
    alt: "Developer building with code, representing video platform and APIs.",
    title: "Video platform & APIs",
    description: "We are building video into a product, service or digital experience.",
    link: "Start this inquiry →",
  },
  {
    image: imgLiveStreamingScale,
    alt: "Live broadcast production, representing live streaming at scale.",
    title: "Live streaming at scale",
    description: "We need recurring or large-scale live streaming as part of an ongoing platform.",
    link: "Start this inquiry →",
  },
  {
    image: imgSecureInternalVideo,
    alt: "Security lock concept, representing secure internal video.",
    title: "Secure internal video",
    description: "We need governed video for employees, partners or controlled audiences.",
    link: "Start this inquiry →",
  },
  {
    image: imgMigrationModernization,
    alt: "Server infrastructure, representing migration and modernization.",
    title: "Migration & modernization",
    description: "We are moving from another provider or consolidating video infrastructure.",
    link: "Start this inquiry →",
  },
  {
    image: imgGlobalMultiRegion,
    alt: "World map and global network, representing multi-region rollout.",
    title: "Global or multi-region rollout",
    description: "We need to plan for international audiences, operations or organizational scale.",
    link: "Start this inquiry →",
  },
  {
    image: imgSecurityProcurement,
    alt: "Legal documents, representing security and procurement review.",
    title: "Security & procurement",
    description: "Our security, legal or procurement teams need to evaluate ZoikoStream.",
    link: "Visit Trust Center →",
  },
  {
    image: imgEnterpriseSupport,
    alt: "Team meeting, representing enterprise support and operating model.",
    title: "Enterprise support & operating model",
    description: "We need to understand implementation, success, support or operating responsibilities.",
    link: "Start this inquiry →",
  },
  {
    image: imgOneLiveEvent,
    alt: "Live event stage, representing a single live event.",
    title: "One live event",
    description: "We are planning a specific conference, launch, broadcast or event.",
    link: "Go to Live Events Inquiries →",
  },
];

export default function SectionNeedSelector() {
  return (
    <div className="bg-[#f7f9fb] w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
        <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Self-qualify
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[28px] lg:text-[30px] tracking-[-0.3px] m-0 leading-[1.2] mb-[16px]">
        What are you planning?
      </h2>
      <p className="font-inter font-normal text-[#6b7280] text-[15.5px] lg:text-[16px] leading-[1.6] m-0 mb-[40px] lg:mb-[56px] max-w-[720px]">
        Choose the option closest to your need — it pre-fills your inquiry type, but you can always change it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
        {NEEDS.map((need) => (
          <div
            key={need.title}
            className="bg-white border border-[#dde2ea] rounded-[14px] overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="w-full aspect-[277/207.75] bg-[#f1f4f8] overflow-hidden">
              <img alt={need.alt} className="w-full h-full object-cover" src={need.image} />
            </div>
            <div className="flex flex-col gap-[12px] p-[18px] flex-1">
              <h3 className="font-sora font-bold text-[#32353c] text-[15.5px] tracking-[-0.155px] leading-[1.3] m-0">
                {need.title}
              </h3>
              <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[1.5] m-0 flex-1">
                {need.description}
              </p>
              <span className="font-inter font-bold text-[#5b8def] text-[12.5px] mt-auto">
                {need.link}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

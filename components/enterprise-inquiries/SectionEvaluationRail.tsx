import React from 'react';

const imgDevelopers = "/images/enterprise-inquiries/evaluation-developers.png";
const imgTrustCenter = "/images/enterprise-inquiries/evaluation-trust-center.png";
const imgSystemStatus = "/images/enterprise-inquiries/evaluation-system-status.png";
const imgEnterpriseInquiry = "/images/enterprise-inquiries/evaluation-enterprise-inquiry.png";

const RAIL_ITEMS = [
  {
    image: imgDevelopers,
    alt: "Developer working with code, representing developer documentation.",
    title: "Developers",
    description: "APIs, SDKs, integration guides and platform documentation.",
    link: "Explore Developers →",
  },
  {
    image: imgTrustCenter,
    alt: "Security shield concept, representing the Trust Center.",
    title: "Trust Center",
    description: "Approved security, privacy, reliability and compliance information.",
    link: "Visit Trust Center →",
  },
  {
    image: imgSystemStatus,
    alt: "Analytics dashboard, representing system status monitoring.",
    title: "System Status",
    description: "Public service health and incident communications.",
    link: "View System Status →",
  },
  {
    image: imgEnterpriseInquiry,
    alt: "Business meeting, representing an enterprise discussion.",
    title: "Enterprise inquiry",
    description: "Architecture, migration, procurement or commercial questions that need a specialist.",
    link: "Discuss requirements →",
  },
];

export default function SectionEvaluationRail() {
  return (
    <div className="bg-[#f7f9fb] w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
        <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Technical & trust pathway
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[28px] lg:text-[30px] tracking-[-0.3px] m-0 leading-[1.2] mb-[40px] lg:mb-[56px] max-w-[672px]">
        Bring your technical and trust teams into the evaluation early.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
        {RAIL_ITEMS.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-[#dde2ea] rounded-[14px] overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="w-full aspect-[277/173.13] bg-[#f1f4f8] overflow-hidden">
              <img alt={item.alt} className="w-full h-full object-cover" src={item.image} />
            </div>
            <div className="flex flex-col gap-[12px] p-[20px] flex-1">
              <h3 className="font-sora font-bold text-[#32353c] text-[16.5px] tracking-[-0.165px] leading-[1.3] m-0">
                {item.title}
              </h3>
              <p className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[1.5] m-0 flex-1">
                {item.description}
              </p>
              <span className="font-inter font-bold text-[#5b8def] text-[13px] mt-auto">
                {item.link}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

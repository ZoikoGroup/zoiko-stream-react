import React from 'react';

const DOMAINS = [
  {
    image: "/images/zoikostream-trust-center/domain-security-compliance.png",
    title: "Security & Compliance",
    description: "Controls, assurance and verified framework/report records.",
    cta: "Explore security →",
  },
  {
    image: "/images/zoikostream-trust-center/domain-privacy-residency.png",
    title: "Privacy, Residency & Subprocessors",
    titleBreakAfter: "Privacy, Residency &",
    description: "Data handling, regional availability and provider transparency.",
    cta: "Review privacy & subprocessors →",
  },
  {
    image: "/images/zoikostream-trust-center/domain-reliability-resilience.png",
    title: "Reliability & Resilience",
    description: "Service continuity, resilience principles and status pathways.",
    cta: "Explore reliability →",
  },
  {
    image: "/images/zoikostream-trust-center/domain-vulnerability-disclosure.png",
    title: "Vulnerability Disclosure",
    description: "Authorized reporting channel and researcher guidance.",
    cta: "Report a vulnerability →",
  },
  {
    image: "/images/zoikostream-trust-center/domain-security-advisories.png",
    title: "Security Advisories",
    description: "Public security notices, affected scope and remediation guidance.",
    cta: "View advisories →",
  },
  {
    image: "/images/zoikostream-trust-center/domain-trust-evidence.png",
    title: "Trust Evidence",
    description: "Public and governed requestable evidence for due diligence.",
    cta: "Browse evidence →",
  },
];

export default function SectionTrustDomains() {
  return (
    <div className="border-b border-[#dde2ea] border-solid w-full px-6 lg:px-0 py-[48px] lg:py-[64px]">
      <div className="flex flex-col gap-[24px] items-start w-full">
        <div className="flex gap-[12px] items-center">
          <div className="bg-[#5b8def] rounded-full h-[6px] w-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase m-0 whitespace-nowrap">Explore trust topics</p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[24px] lg:text-[26px] leading-[1.6] tracking-[-0.26px] m-0 w-full">
          Six domains, one governed source each.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
          {DOMAINS.map((domain) => (
            <div key={domain.title} className="bg-white border border-[#dde2ea] border-solid rounded-[14px] overflow-hidden flex flex-col items-start">
              <div className="w-full aspect-[309/193]">
                <img alt={domain.title} className="w-full h-full object-cover" src={domain.image} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[20px] w-full">
                <p className="font-sora font-bold text-[#32353c] text-[16px] leading-[1.6] tracking-[-0.16px] m-0 w-full">
                  {domain.titleBreakAfter ? (
                    <>
                      <span className="hidden lg:inline">
                        {domain.titleBreakAfter}<br />
                        {domain.title.slice(domain.titleBreakAfter.length + 1)}
                      </span>
                      <span className="lg:hidden">{domain.title}</span>
                    </>
                  ) : (
                    domain.title
                  )}
                </p>
                <p className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[1.6] m-0 w-full">{domain.description}</p>
                <p className="font-inter font-bold text-[#5b8def] text-[13px] m-0 whitespace-nowrap cursor-pointer">{domain.cta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

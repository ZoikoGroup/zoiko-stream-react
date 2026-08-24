import React from 'react';

const imgSectionBg = "/images/public-civic-institutions/security-evidence-section-bg.png";

const TONE_CLASSES = {
  green: "bg-[rgba(16,185,129,0.08)] border-[rgba(16,185,129,0.2)] text-[#10b981]",
  amber: "bg-[rgba(245,158,11,0.08)] border-[rgba(245,158,11,0.2)] text-[#f59e0b]",
  red: "bg-[rgba(239,68,68,0.08)] border-[rgba(239,68,68,0.2)] text-[#ef4444]",
  gray: "bg-[rgba(170,179,196,0.08)] border-[rgba(170,179,196,0.2)] text-[#aab3c4]",
};

const EVIDENCE_CARDS = [
  { image: "/images/public-civic-institutions/security-evidence-card-security-iso.png", title: "Security & ISO", tag: "Current", tone: "green" as const, description: "SOC 2 Type II, ISO 27001", meta: "Owner: Sec Ops · Verified: 2026-03-01" },
  { image: "/images/public-civic-institutions/security-evidence-card-accessibility.png", title: "Accessibility (WCAG)", tag: "Current", tone: "green" as const, description: "WCAG 2.2 AA (Section 508 VPAT)", meta: "Owner: Accessibility Team · Verified: 2026-02-15" },
  { image: "/images/public-civic-institutions/security-evidence-card-continuity.png", title: "Continuity (SLA)", tag: "Review Due", tone: "amber" as const, description: "99.95% uptime guarantees", meta: "Owner: Network Ops · Verified: 2026-01-30" },
  { image: "/images/public-civic-institutions/security-evidence-card-privacy-audit.png", title: "Privacy Audit", tag: "Current", tone: "green" as const, description: "GDPR / CCPA / Geo-Restriction", meta: "Owner: Legal Council · Verified: 2026-03-10" },
  { image: "/images/public-civic-institutions/security-evidence-card-sovereignty.png", title: "Sovereignty / Registry", tag: "Current", tone: "green" as const, description: "State Records Preservation Acts", meta: "Owner: Records Clerk · Verified: 2026-02-28" },
  { image: "/images/public-civic-institutions/security-evidence-card-support-slas.png", title: "Support SLAs", tag: "Expired", tone: "red" as const, description: "24/7 dedicated civic incident response", meta: "Owner: Customer Support · Verified: 2025-12-31" },
  { image: "/images/public-civic-institutions/security-evidence-card-data-lifecycle.png", title: "Data Lifecycle", tag: "Not Verified", tone: "gray" as const, description: "Metadata schema standardisation", meta: "Owner: Platform Eng · Verified: N/A" },
  { image: "/images/public-civic-institutions/security-evidence-card-architecture.png", title: "Architecture", tag: "Current", tone: "green" as const, description: "OpenAPI and SDK availability logs", meta: "Owner: Developer Relations · Verified: 2026-03-12" },
];

export default function SectionSecurityEvidence() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[120px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.69)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[38px] leading-[1.6] tracking-[-0.38px] m-0 w-full">
            Inspect the evidence behind the operating model
          </h2>
          <p className="font-sans font-normal text-[#aab3c4] text-[18px] m-0 w-full">
            Any claims of security, continuity, or accessibility are backed by public audited reports. Complete transparency for public procurement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full">
          {EVIDENCE_CARDS.map((card) => (
            <div key={card.title} className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid rounded-[12px] overflow-hidden flex flex-col items-start">
              <div className="h-[130px] w-full">
                <img alt={card.title} className="w-full h-full object-cover" src={card.image} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[20px] w-full">
                <div className="flex items-center justify-between w-full gap-[8px]">
                  <p className="font-sans font-bold text-white text-[15px] m-0 flex-1 min-w-0 truncate">{card.title}</p>
                  <div className={`border border-solid rounded-[4px] px-[12px] py-[4px] shrink-0 ${TONE_CLASSES[card.tone]}`}>
                    <p className="font-sans font-bold text-[11px] uppercase m-0 whitespace-nowrap">{card.tag}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] items-start w-full">
                  <p className="font-inter font-normal text-[#aab3c4] text-[13px] m-0 w-full">{card.description}</p>
                  <p className="font-inter font-normal text-[#aab3c4] text-[11px] opacity-60 m-0 w-full">{card.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

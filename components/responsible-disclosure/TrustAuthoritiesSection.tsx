import React from 'react';
import Link from 'next/link';

const imgBg = "/images/responsible-disclosure/trust-authorities-section.png";

const authorities: { icon: string; title: string; body: string; href?: string }[] = [
  {
    icon: "/images/responsible-disclosure/shield-blue.svg",
    title: "Security Core",
    body: "Central policies, secure coding templates, and security reporting rules.",
  },
  {
    icon: "/images/responsible-disclosure/user-check-blue.svg",
    title: "Trust Center",
    body: "Sovereign whitelists, SOC 2 compliance documentation, and SAML controls.",
    href: "/zoikostream-trust-center",
  },
  {
    icon: "/images/responsible-disclosure/globe-blue.svg",
    title: "Advisories",
    body: "Verified disclosures, patch version indices, and researcher credits.",
    href: "/security-advisories",
  },
  {
    icon: "/images/responsible-disclosure/activity.svg",
    title: "System Status",
    body: "Real-time stream health parameters and historical performance metrics.",
    href: "/zoikostream-status",
  },
  {
    icon: "/images/responsible-disclosure/lock.svg",
    title: "Data Protection",
    body: "GDPR/CCPA compliance, sovereign encryption keys, and request pathways.",
    href: "/zoikostream-data-protection",
  },
  {
    icon: "/images/responsible-disclosure/check-circle-blue.svg",
    title: "Compliance Gate",
    body: "Ingest security standards and automated physical venue audits.",
    href: "/zoikostream-trust-center-compliance",
  },
  {
    icon: "/images/responsible-disclosure/mail-warning-blue.svg",
    title: "SLA Support",
    body: "Immediate operations chat and direct platform engineering routing.",
    href: "/support-help-center",
  },
  {
    icon: "/images/responsible-disclosure/cpu-blue.svg",
    title: "Dev Resources",
    body: "Secure SDK packages, developer guides, and API integration tools.",
    href: "/developer-documentation",
  },
];

export default function TrustAuthoritiesSection() {
  return (
    <div className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Trust-Authorities-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.32)] inset-0" />
      </div>
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#eef1f6] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Related Trust &amp; Security Authorities
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#aab3c4] text-[15px] sm:text-[17px] w-full">
            Explore our central security resources, platform compliance, and infrastructure indicators.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative shrink-0 w-full" data-name="Authority-Grid">
          {authorities.map((authority) => {
            const cardClass = "bg-[rgba(16,21,30,0.85)] border border-[#232b3a] border-solid flex flex-col gap-[16px] items-start p-[20px] relative rounded-[12px] shrink-0";
            const content = (
              <>
                <div className="bg-[rgba(76,134,255,0.1)] flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]">
                  <img alt="" className="block max-w-none size-[18px]" src={authority.icon} />
                </div>
                <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="[word-break:break-word] font-sans font-bold leading-[normal] text-[#eef1f6] text-[16px]">
                    {authority.title}
                  </p>
                  <p className="[word-break:break-word] font-sans font-normal leading-[20px] text-[#aab3c4] text-[13px] w-full">
                    {authority.body}
                  </p>
                </div>
              </>
            );

            return authority.href ? (
              <Link
                key={authority.title}
                href={authority.href}
                className={`${cardClass} transition-colors hover:border-[#4c86ff]`}
                data-name="Authority-Card"
              >
                {content}
              </Link>
            ) : (
              <div key={authority.title} className={cardClass} data-name="Authority-Card">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

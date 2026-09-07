import React from 'react';
import Link from 'next/link';

const imgBg = "/images/security-advisories/related-resources-bg.png";

const resources: {
  image: string;
  title: string;
  body: string;
  href?: string;
}[] = [
  {
    image: "/images/security-advisories/resource-trust-center.png",
    title: "Trust Center",
    body: "Our cross-domain trust and evidence hub. Download SOC 2 reports, audit documentation, and overall network configuration summaries.",
    href: "/zoikostream-trust-center",
  },
  {
    image: "/images/security-advisories/resource-security-practices.png",
    title: "Security Practices",
    body: "Detailed overview of our secure coding standards, continuous integration threat scans, and physical hosting parameter safeguards.",
  },
  {
    image: "/images/security-advisories/resource-support-portal.png",
    title: "Support Portal",
    body: "Submit high-priority diagnostic tickets, schedule code reviews with engineering leads, or request dedicated L1 support windows.",
    href: "/support-help-center",
  },
  {
    image: "/images/security-advisories/resource-data-protection.png",
    title: "Data Protection",
    body: "Our comprehensive data processing agreements, tenant isolation guidelines, data encryption lifecycles, and storage region rules.",
    href: "/zoikostream-data-protection",
  },
  {
    image: "/images/security-advisories/resource-service-reliability.png",
    title: "Service Reliability",
    body: "Real-time uptime status, multi-region CDN failover maps, disaster recovery playbooks, and active incident response protocols.",
    href: "/zoikostream-service-reliability",
  },
  {
    image: "/images/security-advisories/resource-subprocessors-registry.png",
    title: "Subprocessors Registry",
    body: "The verified directory of third-party infrastructure hosts, content delivery partners, and support tooling providers.",
  },
];

export default function RelatedResourcesSection() {
  return (
    <div className="bg-white border-t border-[#e2e8f0] border-solid flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Related-Resources-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-140px] top-[-88px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-146px] bottom-[-40px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Related Trust &amp; Security Resources
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#4f5e74] text-[15px] sm:text-[17px] w-full">
            Explore additional resources for security evidence, compliance frameworks, data protection, and support.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative shrink-0 w-full" data-name="Resource-Grid">
          {resources.map((resource) => {
            const cardClass = "bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] shrink-0";
            const content = (
              <>
                <img alt="" className="h-[145px] object-cover shrink-0 w-full" src={resource.image} />
                <div className="flex flex-col gap-[10px] items-start p-[20px] relative shrink-0 w-full">
                  <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[16px]">
                    {resource.title}
                  </p>
                  <p className="[word-break:break-word] font-sans font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13px] w-full">
                    {resource.body}
                  </p>
                </div>
              </>
            );

            return resource.href ? (
              <Link
                key={resource.title}
                href={resource.href}
                className={`${cardClass} transition-colors hover:border-[#00d4aa]`}
                data-name="Resource-Card"
              >
                {content}
              </Link>
            ) : (
              <div key={resource.title} className={cardClass} data-name="Resource-Card">
                {content}
              </div>
            );
          })}
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col gap-[20px] items-start justify-between lg:flex-row lg:gap-[32px] lg:items-center p-[20px] sm:p-[28px] relative rounded-[16px] shrink-0 w-full" data-name="Closing-CTA">
          <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0 relative">
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[17px]">
              Need custom security documentation or a dedicated security briefing?
            </p>
            <p className="[word-break:break-word] font-sans font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13.5px]">
              Our enterprise security engineers can join technical review calls to walk through custom threat modeling
              and compliance parameters.
            </p>
          </div>
          <Link href="/talk-to-an-expert" className="bg-gradient-to-b cursor-pointer flex from-[#00d4aa] items-center justify-center px-[26px] py-[14px] relative rounded-[10px] shrink-0 to-[#4c86ff] w-full sm:w-auto transition-opacity hover:opacity-90">
            <span className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[15px] whitespace-nowrap">
              Talk to Our Security Team
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';

const imgBg = "/images/security-advisories/service-health-bg.png";

const bridges = [
  {
    image: "/images/security-advisories/status-portal-graphic.png",
    title: "System Status Portal",
    body: "Monitors active platform latency, cloud streaming server loads, and edge network delivery performance. Visit here for live operational incidents or scheduled maintenance schedules.",
    points: [
      "Live operational uptime indicators",
      "Scheduled platform window notifications",
      "Real-time CDN load & edge latency metrics",
    ],
  },
  {
    image: "/images/security-advisories/security-advisories-graphic.png",
    title: "Security Advisories",
    body: "Details verified code vulnerabilities, software library updates, and coordinate disclosure records. Visit here to evaluate structural patch levels and configuration remediations.",
    points: [
      "Published and updated security patches",
      "Multi-regional storage compliance notices",
      "Approved workaround and mitigation documentation",
    ],
  },
];

export default function ServiceHealthSection() {
  return (
    <div className="bg-white border-b border-t border-[#e2e8f0] border-solid flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Service-Health-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-140px] top-[-88px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-146px] bottom-[-40px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />
      <div className="flex flex-col gap-[36px] sm:gap-[56px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Current Service Health and Operational Status
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#4f5e74] text-[15px] sm:text-[17px] w-full">
            Security advisories and operational incidents serve different purposes. For current service availability,
            real-time health, incident history, and maintenance updates, use System Status. A security advisory does
            not automatically mean a service outage, and an incident does not automatically mean a vulnerability.
          </p>
        </div>
        <div className="gap-10 grid grid-cols-1 lg:grid-cols-2 relative shrink-0 w-full" data-name="Bridge-Grid">
          {bridges.map((bridge) => (
            <div key={bridge.title} className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col gap-[20px] sm:gap-[24px] items-start p-[20px] sm:p-[32px] relative rounded-[16px] shrink-0" data-name="Bridge-Card">
              <img alt="" className="h-[200px] object-cover rounded-[8px] shrink-0 w-full" src={bridge.image} />
              <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[19px]">
                  {bridge.title}
                </p>
                <p className="[word-break:break-word] font-sans font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13.5px] w-full">
                  {bridge.body}
                </p>
                <div className="flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-full">
                  {bridge.points.map((point) => (
                    <p key={point} className="font-sans font-normal leading-[normal] relative shrink-0 text-[#4f5e74] text-[12px]">
                      ✓ {point}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/zoikostream-status" className="bg-gradient-to-b cursor-pointer flex from-[#00d4aa] items-center justify-center px-[26px] py-[14px] relative rounded-[10px] shrink-0 to-[#4c86ff] w-full sm:w-auto transition-opacity hover:opacity-90">
          <span className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[15px] whitespace-nowrap">
            View System Status
          </span>
        </Link>
      </div>
    </div>
  );
}

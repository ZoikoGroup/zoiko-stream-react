import React from 'react';

const imgBg = "/images/responsible-disclosure/testing-rules-section.png";

const methods = [
  { icon: "/images/responsible-disclosure/shield-dark.svg", tag: "ALLOWED", tagClass: "bg-[rgba(16,185,129,0.1)] text-[#10b981]", title: "Standard Testing", body: "Manual logic checks and standard HTTP tampering without heavy load." },
  { icon: "/images/responsible-disclosure/cpu-dark.svg", tag: "CONDITIONAL", tagClass: "bg-[rgba(245,158,11,0.1)] text-[#f59e0b]", title: "Automated Scanning", body: "Rate limits must not exceed 5 requests per second. Identify traffic." },
  { icon: "/images/responsible-disclosure/user-check-dark.svg", tag: "CONDITIONAL", tagClass: "bg-[rgba(245,158,11,0.1)] text-[#f59e0b]", title: "Auth Testing", body: "Only attempt authorization checks on accounts you explicitly own." },
  { icon: "/images/responsible-disclosure/code.svg", tag: "ALLOWED", tagClass: "bg-[rgba(16,185,129,0.1)] text-[#10b981]", title: "Injection Checks", body: "Standard benign validation probes. No active exploit payload execution." },
  { icon: "/images/responsible-disclosure/zap-off.svg", tag: "PROHIBITED", tagClass: "bg-[rgba(239,68,68,0.1)] text-[#ef4444]", title: "Load & DoS Testing", body: "Volumetric floods, heavy state checks, or service-degrading queries." },
  { icon: "/images/responsible-disclosure/users-red.svg", tag: "PROHIBITED", tagClass: "bg-[rgba(239,68,68,0.1)] text-[#ef4444]", title: "Social Engineering", body: "Phishing staff, support spoofing, or customer-targeted social vectors." },
  { icon: "/images/responsible-disclosure/home.svg", tag: "NOT ESTABLISHED", tagClass: "bg-[rgba(100,116,139,0.1)] text-[#64748b]", title: "Physical Security", body: "Office intrusion attempts, device theft, or local hardware tapping." },
  { icon: "/images/responsible-disclosure/database.svg", tag: "PROHIBITED", tagClass: "bg-[rgba(239,68,68,0.1)] text-[#ef4444]", title: "Data Exfiltration", body: "Downloading database blocks, copying large system stores, or exfiltration." },
];

export default function TestingMethodsSection() {
  return (
    <div className="bg-white border-b border-t border-[#e2e8f0] border-solid flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Testing-Methods-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-140px] top-[-88px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-146px] bottom-[-40px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Testing Methods and Permissions
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#4f5e74] text-[15px] sm:text-[17px] w-full">
            Testing-method permissions are separate from asset scope. An in-scope asset does not automatically
            authorize every technique.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative shrink-0 w-full" data-name="Method-Grid">
          {methods.map((method) => (
            <div key={method.title} className="bg-white border border-[#e2e8f0] border-solid flex flex-col gap-[12px] items-start p-[20px] relative rounded-[12px] shrink-0" data-name="Method-Card">
              <div className="flex gap-[8px] items-center justify-between relative shrink-0 w-full">
                <img alt="" className="block max-w-none shrink-0 size-[24px]" src={method.icon} />
                <span className={`${method.tagClass} font-mono font-bold leading-[normal] not-italic px-[8px] py-[2px] rounded-[4px] shrink-0 text-[10px] whitespace-nowrap`}>
                  {method.tag}
                </span>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] text-[#0a0d13] text-[16px]">
                {method.title}
              </p>
              <p className="[word-break:break-word] font-sans font-normal leading-[20px] text-[#4f5e74] text-[13px] w-full">
                {method.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

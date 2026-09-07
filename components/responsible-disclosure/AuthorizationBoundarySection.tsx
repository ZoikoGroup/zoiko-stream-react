import React from 'react';

const imgBg = "/images/responsible-disclosure/before-you-test-section.png";
const imgAlertCircle = "/images/responsible-disclosure/alert-circle.svg";

const rules = [
  {
    icon: "/images/responsible-disclosure/crosshair.svg",
    tag: "RULE 01",
    tagClass: "text-[#4f5e74]",
    title: "Scope Dependency",
    body: "Review current asset scope strictly before testing. Assets not explicitly listed are out of bounds.",
  },
  {
    icon: "/images/responsible-disclosure/settings-2.svg",
    tag: "RULE 02",
    tagClass: "text-[#4f5e74]",
    title: "Method Dependency",
    body: "Testing-method rules are separate from asset scope. Having scope does not approve dangerous exploits.",
  },
  {
    icon: "/images/responsible-disclosure/octagon.svg",
    tag: "CRITICAL",
    tagClass: "text-[#ef4444]",
    title: "Stop Conditions",
    body: "Halt active testing immediately if you impact live streaming infrastructure or discover customer data.",
  },
  {
    icon: "/images/responsible-disclosure/users-dark.svg",
    tag: "RULE 04",
    tagClass: "text-[#4f5e74]",
    title: "Customer Data",
    body: "Do not access, modify, download or retain customer personal data. Keep any verification footprint minimal.",
  },
  {
    icon: "/images/responsible-disclosure/key.svg",
    tag: "RULE 05",
    tagClass: "text-[#4f5e74]",
    title: "Secrets & Credentials",
    body: "Do not attempt to obtain plain-text passwords, system API keys, databases or private credentials.",
  },
  {
    icon: "/images/responsible-disclosure/globe-dark.svg",
    tag: "RULE 06",
    tagClass: "text-[#4f5e74]",
    title: "Third-Party Assets",
    body: "Integrated cloud services or external provider endpoints are out of bounds. Stay within ZoikoStream properties.",
  },
];

export default function AuthorizationBoundarySection() {
  return (
    <div className="bg-white border-b border-t border-[#e2e8f0] border-solid flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Authorization-Boundary-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-140px] top-[-88px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-146px] bottom-[-40px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />
      <div className="flex flex-col gap-[36px] sm:gap-[56px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Authorization Boundary and Stop Conditions
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#4f5e74] text-[15px] sm:text-[17px] w-full">
            Testing must follow the current approved policy and scope. Reporting an issue does not itself authorize
            the method used to discover it.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative shrink-0 w-full" data-name="Rule-Grid">
          {rules.map((rule) => (
            <div key={rule.title} className="bg-white border border-[#e2e8f0] border-solid flex flex-col gap-[16px] items-start p-[20px] sm:p-[24px] relative rounded-[16px] shrink-0" data-name="Rule-Card">
              <div className="flex items-center justify-between relative shrink-0 w-full">
                <img alt="" className="block max-w-none size-[24px]" src={rule.icon} />
                <span className={`${rule.tagClass} font-mono font-normal leading-[normal] not-italic text-[12px]`}>{rule.tag}</span>
              </div>
              <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="[word-break:break-word] font-sans font-bold leading-[normal] text-[#0a0d13] text-[16px]">
                  {rule.title}
                </p>
                <p className="[word-break:break-word] font-sans font-normal leading-[20px] text-[#4f5e74] text-[13px] w-full">
                  {rule.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#fef3c7] border border-[#f59e0b] border-solid flex gap-[16px] items-start sm:items-center p-[20px] sm:p-[24px] relative rounded-[12px] shrink-0 w-full" data-name="Warning-Banner">
          <img alt="" className="block max-w-none mt-[2px] sm:mt-0 shrink-0 size-[24px]" src={imgAlertCircle} />
          <p className="[word-break:break-word] flex-1 font-sans font-medium leading-[22px] min-w-0 text-[#b45309] text-[14px]">
            If asset/method is not clearly covered, do not assume permission. Use the report-only route without
            scanning.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const imgBg = "/images/security-advisories/field-guide-bg.png";

const fields = [
  {
    image: "/images/security-advisories/field-affected-scope.png",
    title: "Affected Scope",
    body: "Exact source-backed product, components, platforms, and architectures affected. Parameters not explicitly tested are designated as unknown.",
  },
  {
    image: "/images/security-advisories/field-fixed-version.png",
    title: "Fixed/Remediated Version",
    body: "Only explicit approved version identifiers that resolve the vulnerability are specified. Interim builds are omitted unless formally verified.",
  },
  {
    image: "/images/security-advisories/field-mitigation-vs-workaround.png",
    title: "Mitigation vs Workaround",
    body: "Mitigation formally reduces potential risk surface; workarounds may introduce temporary functional limitations. They are never treated as synonyms.",
  },
  {
    image: "/images/security-advisories/field-severity-rating.png",
    title: "Severity/Rating",
    body: "Derived strictly using industry-standard CVSS methodology when public classification is completed. Unrated vulnerabilities represent active analysis.",
  },
  {
    image: "/images/security-advisories/field-cve-identifiers.png",
    title: "CVE/Identifiers",
    body: "Optional external catalog metadata references. Absence of an assigned CVE identifier does not indicate minor severity or lower priority.",
  },
  {
    image: "/images/security-advisories/field-action-status.png",
    title: "Action Status",
    body: "Clear, actionable labels instructing administrators whether a manual patch, immediate configuration change, or purely optional audit is required.",
  },
];

export default function AdvisoryFieldsSection() {
  return (
    <div className="bg-white border-b border-t border-[#e2e8f0] border-solid flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Advisory-Fields-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-140px] top-[-88px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-146px] bottom-[-40px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />
      <div className="flex flex-col gap-[36px] sm:gap-[56px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Understanding Advisory Record Fields
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#4f5e74] text-[15px] sm:text-[17px] w-full">
            Each field in a security advisory carries specific meaning. Understanding affected scope, fixed versions,
            remediation types, severity, and identifiers helps you assess impact and take appropriate action.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative shrink-0 w-full" data-name="Field-Grid">
          {fields.map((field) => (
            <div key={field.title} className="bg-white border border-[#e2e8f0] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] shrink-0" data-name="Field-Card">
              <img alt="" className="h-[160px] object-cover shrink-0 w-full" src={field.image} />
              <div className="flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
                <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[17px]">
                  {field.title}
                </p>
                <p className="[word-break:break-word] font-sans font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13.5px] w-full">
                  {field.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

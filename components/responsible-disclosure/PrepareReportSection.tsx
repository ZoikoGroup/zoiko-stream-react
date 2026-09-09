import React from 'react';

const imgBg = "/images/responsible-disclosure/prepare-report-section.png";

const items = [
  {
    image: "/images/responsible-disclosure/report-affected-surface.png",
    number: "01",
    title: "Affected Surface",
    body: "Provide the exact URL, IP address, API endpoint, or mobile client version where the behavior occurs.",
  },
  {
    image: "/images/responsible-disclosure/report-impact-summary.png",
    number: "02",
    title: "Impact Summary",
    body: "Explain the realistic security implications. Describe what an attacker could achieve if they exploited the bug.",
  },
  {
    image: "/images/responsible-disclosure/report-reproduction-steps.png",
    number: "03",
    title: "Reproduction Steps",
    body: "Write clear, step-by-step instructions. Include exact HTTP request payloads, headers, and parameter parameters.",
  },
  {
    image: "/images/responsible-disclosure/report-evidence-poc.png",
    number: "04",
    title: "Evidence & PoC",
    body: "Attach plain-text scripts, screenshots, or screen recordings demonstrating successful reproduction.",
  },
  {
    image: "/images/responsible-disclosure/report-identifiers.png",
    number: "05",
    title: "Identifiers",
    body: "Specify IP addresses, account usernames, or custom tokens used during your testing so we can isolate your traffic.",
  },
  {
    image: "/images/responsible-disclosure/report-contact-method.png",
    number: "06",
    title: "Contact Method",
    body: "Include your PGP public key or preferred secure notification route if you require encrypted communications.",
  },
];

export default function PrepareReportSection() {
  return (
    <div className="bg-white border-b border-t border-[#e2e8f0] border-solid flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Prepare-Report-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-140px] top-[-88px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-146px] bottom-[-40px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />
      <div className="flex flex-col gap-[36px] sm:gap-[56px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Prepare a High-Quality Report
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#4f5e74] text-[15px] sm:text-[17px] w-full">
            A complete and well-structured report helps our security engineers triage and validate potential
            vulnerabilities faster.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative shrink-0 w-full" data-name="Report-Grid">
          {items.map((item) => (
            <div key={item.title} className="bg-white border border-[#e2e8f0] border-solid flex flex-col items-start overflow-hidden relative rounded-[16px] shrink-0" data-name="Report-Card">
              <img alt="" className="h-[160px] object-cover shrink-0 w-full" src={item.image} />
              <div className="flex flex-col gap-[12px] items-start p-[20px] sm:p-[24px] relative shrink-0 w-full">
                <div className="flex gap-[12px] items-center justify-between relative shrink-0 w-full">
                  <p className="[word-break:break-word] font-sans font-bold leading-[normal] min-w-0 text-[#0a0d13] text-[17px]">
                    {item.title}
                  </p>
                  <span className="font-mono font-bold leading-[normal] not-italic shrink-0 text-[#00d4aa] text-[12px]">
                    {item.number}
                  </span>
                </div>
                <p className="[word-break:break-word] font-sans font-normal leading-[20px] text-[#4f5e74] text-[13px] w-full">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

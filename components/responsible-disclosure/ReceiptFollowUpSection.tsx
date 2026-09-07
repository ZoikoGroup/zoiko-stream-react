import React from 'react';

const imgBg = "/images/responsible-disclosure/lifecycle-section.png";
const imgChevron = "/images/responsible-disclosure/chevron-right.svg";

const steps = [
  { number: "01", numberClass: "text-[#4f5e74]", title: "Received", caption: "Auto-Logged" },
  { number: "02", numberClass: "text-[#4c86ff]", title: "Under Review", caption: "SLA Triage" },
  { number: "03", numberClass: "text-[#f59e0b]", title: "Triaged", caption: "Assigned Dev" },
  { number: "04", numberClass: "text-[#4c86ff]", title: "In Progress", caption: "Active Fix" },
  { number: "05", numberClass: "text-[#00d4aa]", title: "Resolved", caption: "Revalidated" },
];

export default function ReceiptFollowUpSection() {
  return (
    <div className="bg-white border-b border-t border-[#e2e8f0] border-solid flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Receipt-FollowUp-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-140px] top-[-88px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-146px] bottom-[-40px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Receipt, State and Follow-Up
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#4f5e74] text-[15px] sm:text-[17px] w-full">
            Every valid report is assigned a unique tracking token and flows through our standardized review pipeline.
          </p>
        </div>

        <div className="bg-white border border-[#e2e8f0] border-solid flex flex-col items-stretch lg:flex-row lg:items-center p-[20px] sm:p-[24px] relative rounded-[12px] shrink-0 w-full" data-name="Pipeline">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0 py-[8px] lg:py-0 relative shrink-0">
                <div className="flex gap-[8px] items-center relative shrink-0">
                  <span className={`${step.numberClass} font-mono font-bold leading-[normal] not-italic text-[12px]`}>
                    {step.number}
                  </span>
                  <span className="font-sans font-bold leading-[normal] text-[#0a0d13] text-[15px]">{step.title}</span>
                </div>
                <span className="font-sans font-normal leading-[normal] text-[#4f5e74] text-[12px]">{step.caption}</span>
              </div>
              {index < steps.length - 1 ? (
                <img alt="" aria-hidden className="hidden lg:block max-w-none mx-[12px] shrink-0 size-[16px]" src={imgChevron} />
              ) : null}
            </React.Fragment>
          ))}
        </div>

        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 relative shrink-0 w-full" data-name="Detail-Grid">
          <div className="bg-white border border-[#e2e8f0] border-solid flex flex-col gap-[12px] items-start p-[20px] sm:p-[24px] relative rounded-[12px] shrink-0" data-name="Detail-Card">
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] text-[#0a0d13] text-[17px]">
              No SLA Guarantees
            </p>
            <p className="[word-break:break-word] font-sans font-normal leading-[22px] text-[#4f5e74] text-[13.5px] w-full">
              While we make every effort to acknowledge and validate reports promptly, this policy does not establish
              binding response times, resolution deadlines, or communication SLA agreements. Triage priority is
              assigned based on actual risk.
            </p>
          </div>
          <div className="bg-white border border-[#e2e8f0] border-solid flex flex-col gap-[12px] items-start p-[20px] sm:p-[24px] relative rounded-[12px] shrink-0" data-name="Detail-Card">
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] text-[#0a0d13] text-[17px]">
              Tracking Token
            </p>
            <p className="[word-break:break-word] font-sans font-normal leading-[22px] text-[#4f5e74] text-[13.5px] w-full">
              Upon successful ingestion, you will receive a unique cryptographic identifier (e.g. ZS-REP-XXXX). Use
              this reference token in all future correspondence with our security team to ensure rapid thread routing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

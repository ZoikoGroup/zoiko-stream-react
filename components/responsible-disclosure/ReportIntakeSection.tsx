import React from 'react';

const imgBg = "/images/responsible-disclosure/report-intake-section.png";

const fieldClass =
  "bg-[rgba(10,13,19,0.6)] border border-[#232b3a] border-solid font-mono leading-[22px] not-italic outline-none px-[16px] py-[12px] resize-none rounded-[8px] text-[#eef1f6] text-[13px] transition-colors w-full placeholder:text-[#707a8c] focus:border-[#00d4aa]";
const labelClass = "font-sans font-bold leading-[normal] text-[#eef1f6] text-[13px]";

export default function ReportIntakeSection() {
  return (
    <div className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative scroll-mt-[80px] w-full overflow-hidden" id="report-intake" data-name="Report-Intake-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.32)] inset-0" />
      </div>
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#eef1f6] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Protected Report Intake
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#aab3c4] text-[15px] sm:text-[17px] w-full">
            Reports submitted through this encrypted interface bypass public routing and land directly in our secure
            incident queue.
          </p>
        </div>

        <div className="bg-[rgba(16,21,30,0.85)] border border-[#232b3a] border-solid flex flex-col gap-[24px] items-start p-[20px] sm:p-[32px] relative rounded-[16px] shrink-0 w-full" data-name="Submission-Form">
          <div className="flex flex-wrap gap-[12px] items-center justify-between relative shrink-0 w-full">
            <p className="font-sans font-bold leading-[normal] text-[#eef1f6] text-[19px]">Secure Submission Form</p>
            <span className="bg-[rgba(0,212,170,0.1)] font-mono font-bold leading-[normal] not-italic px-[10px] py-[4px] rounded-[4px] text-[#00d4aa] text-[10px] tracking-[0.5px]">
              PGP ENCRYPTED
            </span>
          </div>
          <div className="bg-[#232b3a] h-px relative shrink-0 w-full" />

          <div className="gap-[20px] grid grid-cols-1 lg:grid-cols-2 relative shrink-0 w-full">
            <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <label className={labelClass} htmlFor="rd-category">Vulnerability Category</label>
              <input
                id="rd-category"
                type="text"
                className={fieldClass}
                placeholder="Select a classification (e.g. Remote Code Execution, SQL Injection, IDOR...)"
              />
            </div>
            <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <label className={labelClass} htmlFor="rd-asset">Target Scope Asset</label>
              <input
                id="rd-asset"
                type="text"
                className={fieldClass}
                placeholder="zoikostream.com, api.zoikostream.com, Mobile Clients..."
              />
            </div>
          </div>

          <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <label className={labelClass} htmlFor="rd-summary">Executive Summary</label>
            <input
              id="rd-summary"
              type="text"
              className={fieldClass}
              placeholder="A high-level sentence describing the vulnerability and potential business risk..."
            />
          </div>

          <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <label className={labelClass} htmlFor="rd-steps">Steps to Reproduce</label>
            <textarea
              id="rd-steps"
              rows={3}
              className={fieldClass}
              placeholder={"1. Navigate to endpoint\n2. Modify authorization header to...\n3. Observe unauthorized access to data"}
            />
          </div>

          <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <label className={labelClass} htmlFor="rd-poc">Proof of Concept / Technical Evidence</label>
            <textarea
              id="rd-poc"
              rows={2}
              className={fieldClass}
              placeholder="Paste curls, Python reproduction script, or output traces..."
            />
          </div>

          <div className="flex flex-col gap-[16px] items-start justify-between lg:flex-row lg:items-center relative shrink-0 w-full">
            <label className="cursor-pointer flex flex-1 gap-[12px] items-center min-w-0 relative">
              <input
                type="checkbox"
                className="accent-[#00d4aa] cursor-pointer shrink-0 size-[18px]"
              />
              <span className="[word-break:break-word] font-sans font-normal leading-[20px] text-[#aab3c4] text-[13px]">
                I have read and agree to the current approved Testing Rules.
              </span>
            </label>
            <button
              type="button"
              className="bg-gradient-to-b cursor-pointer flex from-[#00d4aa] items-center justify-center px-[26px] py-[14px] relative rounded-[10px] shrink-0 to-[#4c86ff] transition-opacity hover:opacity-90 w-full lg:w-auto"
            >
              <span className="font-sans font-bold leading-[normal] text-[#0a0d13] text-[15px] whitespace-nowrap">
                Submit Secure Report
              </span>
            </button>
          </div>
        </div>

        <div className="bg-[rgba(16,21,30,0.85)] border border-[#232b3a] border-solid flex items-center justify-center p-[20px] relative rounded-[12px] shrink-0 w-full">
          <p className="[word-break:break-word] font-sans font-normal leading-[20px] text-[#aab3c4] text-[12px] text-center">
            *Notice: Submissions pass through a secure isolated gateway. Automated filters sanitize code injection
            payloads to protect internal team databases.
          </p>
        </div>
      </div>
    </div>
  );
}

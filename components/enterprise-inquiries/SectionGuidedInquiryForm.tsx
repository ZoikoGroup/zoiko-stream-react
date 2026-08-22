import React from 'react';

export default function SectionGuidedInquiryForm() {
  return (
    <div className="bg-[#f7f9fb] w-full pt-[60px] lg:pt-[100px] pb-[60px] lg:pb-[100px] px-6 lg:px-[112px] flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-[760px] flex flex-col items-center text-center mb-[40px] lg:mb-[56px]">
        <div className="flex items-center gap-[8px] mb-[16px]">
          <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
            Guided inquiry
          </p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[28px] lg:text-[30px] tracking-[-0.3px] m-0 leading-[1.2] mb-[16px]">
          Tell us what you are planning.
        </h2>
        <p className="font-inter font-normal text-[#6b7280] text-[15px] lg:text-[16px] leading-[1.6] m-0">
          Roughly two minutes. No mandatory budget, phone or employee-count fields, and no attachments in this first step.
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-[720px] bg-white border border-[#dde2ea] rounded-[18px] p-[24px] lg:p-[40px] shadow-sm">
        {/* Form Header */}
        <div className="mb-[40px]">
          <p className="font-inter font-bold text-[#5b8def] text-[13px] tracking-[0.52px] m-0 mb-[8px]">
            Step 1 of 3
          </p>
          <h3 className="font-sora font-bold text-[#32353c] text-[24px] tracking-[-0.24px] m-0">
            Your requirement
          </h3>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-[32px]">
          {/* Field: What are you looking to discuss? */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-inter font-semibold text-[#32353c] text-[14px]">
              What are you looking to discuss? <span className="text-[#32353c]">*</span>
            </label>
            <div className="w-full h-[45px] border border-[#dde2ea] rounded-[8px] px-[16px] flex items-center justify-between cursor-pointer bg-white">
              <span className="font-inter font-normal text-[#32353c] text-[14.5px]">Video platform & APIs</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#9aa1ae" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Field: Which best describes your stage? (optional) */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-inter font-semibold text-[#32353c] text-[14px] flex items-center gap-[4px]">
              Which best describes your stage?
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px]">(optional)</span>
            </label>
            <div className="w-full h-[45px] border border-[#dde2ea] rounded-[8px] px-[16px] flex items-center justify-between cursor-pointer bg-white">
              <span className="font-inter font-normal text-[#32353c] text-[14.5px]">Exploring</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#9aa1ae" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Field: Tell us about the requirement */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-inter font-semibold text-[#32353c] text-[14px]">
              Tell us about the requirement. <span className="text-[#32353c]">*</span>
            </label>
            <div className="w-full h-[110px] border border-[#dde2ea] rounded-[8px] p-[14px] bg-white">
              <span className="font-inter font-normal text-[#757575] text-[14.5px]">
                Describe your high-level need. Please don&apos;t include confidential or sensitive data.
              </span>
            </div>
            <span className="font-inter font-normal text-[#9aa1ae] text-[12px] text-right">0 / 2,000</span>
          </div>

          <div className="flex flex-col gap-[20px]">
            <p className="font-inter font-normal text-[#9aa1ae] text-[12.5px] leading-[1.6] m-0">
              Do not include passwords, access tokens, payment information, regulated personal data, confidential architecture or security vulnerabilities.
            </p>

            <button className="w-full h-[52px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] rounded-[10px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity outline-none border-none">
              <span className="font-inter font-semibold text-[#1c2430] text-[15px]">
                Continue
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
